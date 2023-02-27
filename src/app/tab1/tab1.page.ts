import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //поліморфний контейнер
  figure: Figure3D[] = [];
  //максимальне значення
  max: number = 0;
  constructor() { }
  //Генерація випадкових цілих чисел від 1 до макс+1
  //вхід - макс
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
  }
  //функція проведення розрахунків
  //вхід - кількість елементів у поліморфному контейнері
  ras(nn: any) {
    //створюємо масив фігур
    this.figure = new Array();
    //отримуємо введене значення 
    try {
      let n = parseInt(nn);
      if (isNaN(n)) {
        throw new Error('Parameter is not a number!');
      }
      if (n < 0) { throw new Error('Parameter n<0!'); }
      //у циклі
      for (let i = 0; i < n; i++) {
        //додаємо у контейнер Конус
        this.figure.push(new Conus("Конус", this.getRandomInt(10), this.getRandomInt(20)));
        //додажмо до контейнеру піраміду
        this.figure.push(new Piramid("Піраміда", this.getRandomInt(10), this.getRandomInt(25)));

      }
      this.max = 0;
      //шукаємо фігуру з максимальною площею
      this.figure.forEach((element) => {
        element.S();
        if (this.max < element.pl) this.max = element.pl;
        console.log(element.show())
      });
      console.log(this.max);


    }
    catch (e) {
      console.log(e);
    }

  }
  //функція для покраски максимального елементу у зелений
  //вхід 
  //el - поточний елемент
  //max - максимальне значення
  getColor(el: number, max: number) {

    return (Math.abs(el - max) < 0.01) ? "green" : "";
  }
}
export abstract class Figure3D {
  naz: string = "";
  h: number = 1;
  pl: number = 0;
  parameter: number = 0;
  constructor() { }
  show() {
    return "Назва=" + this.naz + " " + " Висота=" + this.h.toFixed(2) + " Площа=" + this.pl.toFixed(2);
  }
  abstract S(): void;
}
export class Conus extends Figure3D {

  constructor(override naz: string, override h: number, public parametr: number) {
    super();
  }

  S() {
    let l;
    l = Math.sqrt(this.parametr * this.parametr + this.h * this.h);
    this.pl = Math.PI * this.parametr * l;

  }

}
export class Piramid extends Figure3D {

  constructor(override naz: string, override h: number, public parametr: number) {
    super();
  }

  S() {
    let s4, s0;
    s4 = 0.5 * this.parametr * this.h;
    s0 = this.parametr * this.parametr;
    this.pl = 4 * s4 + s0;

  }

}
