export type Heading = 'N' | 'E' | 'S' | 'W'
type Position = { x: number, y: number };

class Rover {

    public position: Position;
    public heading: string;
    constructor(position: Position, heading: Heading) {
        this.position = { x: 2, y: 3 };
        this.heading = heading;
    }

    move(command: string): void {

        switch (this.heading) {
            case 'N':
                this.heading = 'W'
                break;
            case 'E':
                this.heading = 'N'
                break;
            case 'S':
                this.heading = 'E'
                break;
            case 'W':
                this.heading = 'S'
                break;
            default:
                break;
        }
    }
}

export default Rover;