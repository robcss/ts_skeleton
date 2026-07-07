import { strict as assert } from "assert";
import {describe, it} from "node:test";
import Rover from "../src/rover";

describe("initialise", () => {


    it('', () => {

        const rover = new Rover({x: 2, y: 3}, 'N');
        assert.equal(rover.position.x, 2);
        assert.equal(rover.position.y, 3);
        assert.equal(rover.heading, 'N');
    })


}
)