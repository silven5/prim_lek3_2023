import { IPet } from '../Interface/IPet';

export class Dog implements IPet {
  name: string;
  //Властивості лише для читання
  readonly color: string;
  readonly bday: Date;
  toy?: string;
  constructor(name: string, color: string, bday: Date) {
    this.name = name;
    this.color = color;
    this.bday = bday;
  }
  speak() {
    console.log('Гав-гав');
  }
  run() {
    console.log(' Я собака та Бігу зі швидкістю 10 км/ч');
  }
  // геттер для розрахунку віку
  get age() {
    const diff = new Date(new Date().getTime() - this.bday.getTime());

    return diff.getFullYear() - new Date(0).getFullYear();
  }
  bringToy(toy: string) {
    console.log('Моя улюблена іграшка ' + toy);
  }
  show() {
    console.log("Я собака на ім'я " + this.name);
    console.log('Мій кольор  ' + this.color);
    console.log('Мій вік ' + this.age + ' років');
  }
  guard() {
    console.log('Вмію охраняти помешкання');
  }
}
