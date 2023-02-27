import { Paralelogram } from "./paralelogram";
export class Square extends Paralelogram {

    constructor(a: number) {
        super(a, a);

    }
    get P(): number {
        return 4 * this.a;
    }
}