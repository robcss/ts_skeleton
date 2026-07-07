export type Heading = 'N' | 'E' | 'S' | 'W'
type Position = { x: number, y: number };

class Rover {

    public position: Position;
    public heading: string;
    constructor(position: Position, heading: Heading) {
        this.position = position;
        this.heading = heading;
    }

    turn(direction: 'L' | 'R'): void {

        if(direction === 'L'){
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
        } else {
            switch (this.heading) {
                case 'N':
                    this.heading = 'E'
                    break;
                case 'E':
                    this.heading = 'S'
                    break;
                case 'S':
                    this.heading = 'W'
                    break;
                case 'W':
                    this.heading = 'N'
                    break;
                default:
                    break;
            }
        }






    }
}

export default Rover;