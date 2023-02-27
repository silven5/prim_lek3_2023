import { Triangle } from "./triangle";
export class Right_Triangle extends Triangle {
    b: number = 0;
    constructor(override a: number, h: number) {
        super(a, h);
        this.b = h;

    }
    get C(): number {
        return Math.sqrt(this.a * this.a + this.b * this.b)
    }
}