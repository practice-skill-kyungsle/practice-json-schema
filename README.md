## prac_JSON_Schema

JSON 스키마에 대해서 알아보는 시간을 가집니다.

### 사용법

```js
npm i
node test.js
```

### 코드

```js
const Ajv = require("ajv");
const ajv = new Ajv();

const json = '{ "foo": 1, "bar": "abc" }';
const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
};

const validate = ajv.compile(schema);
const valid = validate(JSON.parse(json));

if (!valid) console.log(validate.errors);
else console.log("success", json);
```

코드를 봐도 이해가 갈 만큼 간단한 예제입니다🧐

### 사용한 라이브러리

ajv라는 매-우 유명한 라이브러리를 사용했습니다.
https://ajv.js.org/guide/why-ajv.html

이 라이브러리를 사용하면, JSON data가 내가 원하는 형식에 맞는지 체크 가능합니다. 타입스크립트를 사용하면 보완 가능하다고는 생각합니다.

다만, 사용하지 못하는 환경이 있을 것이기 때문에 추천합니다.

### JSON Scheme 설정

tcp school이 많은 도움이 될 것입니다.
http://www.tcpschool.com/json/json_schema_schema

### 최근 공부중

- 24.06
  - common code라는 서브모듈을 만들어 추가해보았습니다.
  - commonJS 대신에 ES module을 사용합니다. 두 방법의 차이점은 이렇습니다.
    - 로딩 방식: CommonJS는 동기적, ESM은 비동기적 로딩을 지원합니다.
    - 문법: require()/module.exports (CommonJS) 대 import/export (ESM).
    - 사용 환경: CommonJS는 주로 Node.js에서, ESM은 Node.js와 브라우저에서 모두 사용됩니다.
    - 호환성: Node.js 최신 버전에서는 ESM과 CommonJS 모듈을 함께 사용할 수 있지만, 일부 제약이 있습니다.
