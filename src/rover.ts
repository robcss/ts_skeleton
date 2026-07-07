// type Heading = 'N';s
type Position = { x: number, y: number };

class Rover {

    public position: Position;
    public heading: string;
    constructor(position: Position, heading: string) {
        this.position = {x: 2, y: 3};
        this.heading = 'N';
    }
}

export default Rover;