import { strict as assert } from "assert";
import {describe, it} from "node:test";
import Rover from "../src/rover";

describe("initialise", () => {


    it(`Given a rover is initialised at position (1, 1) facing North
    When the rover receives the command "B"
    Then the rover should be at position (1, 0)`, () => {

        const rover = new Rover({x: 1, y: 1}, 'N')
        rover.move('B')
        assert.deepEqual(rover.position, {x: 1, y: 0})
    })


}
)