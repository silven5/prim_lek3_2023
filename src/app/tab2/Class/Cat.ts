import { IPet } from '../Interface/IPet';

export class Cat implements IPet {
  name: string;
  //Властивості лише для читання
  readonly color: string;
  readonly bday: Date;
  constructor(name: string, color: string, bday: Date) {
    this.name = name;
    this.color = color;
    this.bday = bday;
  }
  speak() {
    console.log('Мяв-Мяв');
  }
  run() {
    console.log('Бігу  зі швидкістю 15 км/ч');
  }
  get age() {
    const diff = new Date(new Date().getTime() - this.bday.getTime());

    return diff.getFullYear() - new Date(0).getFullYear();
  }
  show() {
    console.log("Я кіт на ім'я " + this.name);
    console.log('Мій кольор  ' + this.color);
    console.log('Мій вік ' + this.age + ' років');
  }
  bringMouse() {
    console.log('Вмію ловити мишей');
  }
}
