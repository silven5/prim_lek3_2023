import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }
  ras_interface() {
    let show = new Show_console();
    let dog = new Dog("Собака", "Рада", "Рижа", new Date(2019, 4, 12), show);

    dog.run();
    dog.speak();
    dog.bringToy("Кістка");
    dog.guard();
    let cat = new Cat("Кішка", "Мурка", "Рижа", new Date(2017, 2, 2), show);

    cat.run();
    cat.speak();
    cat.bringMouse();
    let parrot = new Parrot("Папуга", "Попка", "Зелений", new Date(1996, 2, 2), show);

    parrot.fly();
    parrot.speak();
    let fish = new Fish("Рибка", "Дорі", "Золота", new Date(2020, 2, 2), show);

    fish.swim();
  }
}
//Приклад 
interface IPet {
  name: string;
  //Властивості лише для читання
  readonly age: number;
  readonly color: string;
  readonly bday: Date;
};
interface IRun {
  run(): void;
}
interface IToy {
  bringToy(toy: string): void
}
interface ISpeak {
  speak(): void;
}
interface ISwim {
  swim(): void;
}
interface IFly {
  fly(): void;
}
abstract class Pet implements IPet {
  type: string;
  name: string;
  //Властивості лише для читання
  readonly color: string;
  readonly bday: Date;
  constructor(type: string, name: string, color: string, bday: Date, obj: IShow) {
    this.type = type;
    this.name = name;
    this.color = color;
    this.bday = bday;
    obj.show(this.type, this.name, this.color, this.age);
  }
  // геттер для розрахунку віку
  get age() {
    const diff = new Date(new Date().getTime() - this.bday.getTime());

    return diff.getFullYear() - new Date(0).getFullYear();
  }

}
interface IShow {
  show(type: string, name: string, color: string, age: number): void;
}
class Show_console implements IShow {
  show(type: string, name: string, color: string, age: number) {
    console.log("Я " + type + " на ім'я " + name);
    console.log("Мій кольор  " + color);
    console.log("Мій вік " + age + " років");
  }
}
class Dog extends Pet implements IRun, IToy, ISpeak {


  speak() {
    console.log("Гав-гав");
  }
  run() {
    console.log("Бігу зі швидкістю 10 км/ч");
  }
  bringToy(toy: string) {
    console.log("Моя улюблена іграшка " + toy);
  }
  guard() {
    console.log("Вмію охраняти помешкання");
  }
}
class Cat extends Pet implements IRun, ISpeak {


  speak() {
    console.log("Мяв-Мяв");
  }
  run() {
    console.log("Бігу  зі швидкістю 15 км/ч");
  }

  bringMouse() {
    console.log("Вмію ловити мишей");
  }
}
class Parrot extends Pet implements IFly, ISpeak {

  speak() {
    console.log("Попка дурак");
  }


  fly() {
    console.log("Я вмію літати");
  }
}
class Fish extends Pet implements ISwim {


  swim() {
    console.log("Я плаваю під водою");
  }
}
