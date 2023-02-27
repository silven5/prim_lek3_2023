import { Figure2D } from "./figure2D";
export class Paralelogram extends Figure2D {
    override h: number = 1;
    constructor(override a: number, h: number) {
        super();
        this.h = h;
    }
    override get S(): number {
        {
            return this.a * this.h;
        }
    }
}