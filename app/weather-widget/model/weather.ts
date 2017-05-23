/* This is weather object model - to simplify work with data and so on */


export class Weather {
    constructor(
        public temp: number,
        public summary: string,
        public wind: number,
        public humidity: number,
        public icon: string
    ) {

    }
}