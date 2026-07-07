import { strict as assert } from "assert";
import {describe, it} from "node:test";
import Rover, { Heading, Position } from "../src/rover";

describe("initialise", () => {


    it(`Given a rover is initialised at position (1, 1) facing North
    When the rover receives the command "B"
    Then the rover should be at position (1, 0)`, () => {

        const data: {heading: Heading, position: Position}[] = [{
            heading: 'N',
            position: {x: 1, y: 0}
        },
        {
            heading: 'E',
            position: {x: 0, y: 1}
        },
        {
            heading: 'S',
            position: {x: 1, y: 2}
        },
        {
            heading: 'W',
            position: {x: 2, y: 1}
        },
    ]


    for (const {position, heading} of data) {
        const rover = new Rover({x: 1, y: 1}, heading)
        rover.move('B')
        assert.deepEqual(rover.position, position)
    }

    })


}
)