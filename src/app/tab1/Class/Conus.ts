import { Figure3D } from './Figure3D';

export class Conus extends Figure3D {
  constructor(
    override naz: string,
    override h: number,
    public parametr: number
  ) {
    super(naz, h, parametr);
  }

  S() {
    let l;
    l = Math.sqrt(this.parametr * this.parametr + this.h * this.h);
    this.pl = Math.PI * this.parametr * l;
  }
}
