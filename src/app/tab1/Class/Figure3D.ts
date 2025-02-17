export abstract class Figure3D {
  naz: string = '';
  h: number = 1;
  pl: number = 0;
  parameter: number = 0;
  constructor(naz: string, h: number, par: number) {
    this.naz = naz;
    this.h = h;
    this.parameter = par;
  }
  show() {
    return (
      'Назва=' +
      this.naz +
      ' ' +
      ' Висота=' +
      this.h.toFixed(2) +
      ' Параметр=' +
      this.parameter.toFixed(2) +
      ' Площа=' +
      this.pl.toFixed(2)
    );
  }
  abstract S(): void;
}
