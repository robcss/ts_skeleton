"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const node_test_1 = require("node:test");
const rover_1 = __importDefault(require("../src/rover"));
(0, node_test_1.describe)("initialise", () => {
    (0, node_test_1.it)('', () => {
        const rover = new rover_1.default({ x: 2, y: 3 }, 'N');
        assert_1.strict.equal(rover.position.x, 2);
        assert_1.strict.equal(rover.position.y, 3);
        assert_1.strict.equal(rover.heading, 'N');
    });
});
