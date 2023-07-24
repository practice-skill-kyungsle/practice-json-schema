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

...코드를 봐도 이해가 갈 만큼 간단한 예제입니다🧐

### 사용한 라이브러리

ajv라는 매-우 유명한 라이브러리를 사용했습니다.
https://ajv.js.org/guide/why-ajv.html

이 라이브러리를 사용하면, JSON data가 내가 원하는 형식에 맞는지 체크 가능합니다. 타입스크립트를 사용하면 보완 가능하다고는 생각합니다.

다만, 사용하지 못하는 환경이 있을 것이기 때문에 추천합니다.

### JSON Scheme 설정
tcp school이 많은 도움이 될 것입니다.
http://www.tcpschool.com/json/json_schema_schema
