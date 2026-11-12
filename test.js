const test = require('node:test');
const assert = require("node:assert");
const add = require("./index");

test("add works", () => {
    assert.strictEqual(add(1, 2), 3);
});