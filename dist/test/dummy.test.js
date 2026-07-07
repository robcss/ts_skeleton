"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = require("assert");
const node_test_1 = require("node:test");
(0, node_test_1.describe)("dummy", () => {
    (0, node_test_1.it)("should pass", () => {
        assert_1.strict.equal(true, true);
    });
});
