import { strict as assert } from "assert";
import { describe, it } from "node:test";
import Rover, { Heading } from "../src/rover";

describe('Turn right', () => {

    it('', () => {

        const directions: {start: Heading, end: Heading}[] = [{
            start: 'N',
            end: 'E'
        },
        {
            start: 'E',
            end: 'S'
        },
        {
            start: 'S',
            end: 'W'
        },
        {
            start: 'W',
            end: 'N'
        },
    ]

        for (const {start, end} of directions) {
            const rover = new Rover({ x: 0, y: 0 }, start)

            rover.turn('R')
    
            assert.equal(rover.heading, end)
        }

    })


})