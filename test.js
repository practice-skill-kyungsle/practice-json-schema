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
