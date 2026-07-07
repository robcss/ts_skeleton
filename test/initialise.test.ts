import { strict as assert } from "assert";
import {describe, it} from "node:test";
import Rover from "../src/rover";

describe("initialise", () => {


    it('When is initialized with position (2,3), rover position is (2,3)', () => {

        const rover = new Rover({x: 2, y: 3}, 'N');
        assert.equal(rover.position.x, 2);
        assert.equal(rover.position.y, 3);
    })

    it('When is initialized with heading N, rover position is N', () => {

        const rover = new Rover({x: 2, y: 3}, 'N');
        assert.equal(rover.heading, 'N');
    })

}
)