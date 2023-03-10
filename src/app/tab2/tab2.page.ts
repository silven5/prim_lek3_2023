import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ras_type() {
    let parrot: Parrot = new Sparrow(); // Працює
    let sparrow: Sparrow = new Parrot(); // Працює
    let parrotTwo: Parrot = new Duck();
    //var duck: Duck = new Parrot(); // Помилка
    let duck: Duck = new Duck();
    console.log("Папуга говорить " + parrot.sound
      + " горобець говорить " + sparrow.sound
      + " друга попуга говорить " + parrotTwo.sound);
    alert("A duck says " + parrotTwo.sound);
    duck.swim();
    parrot.fly();
    sparrow.fly();
    parrotTwo.fly();
    duck.fly();

  }
  ras_function(a0: any, h: any, n: any) {
    console.log("Арфіметична прогресія =" + arif(a0, h, n) + " Геометрична прогресія" + geom(a0, h, n) + " Add" + add(a0, h, n));
  }
  ras() {
    let dog = new Dog("Рада", "Рижа", new Date(2019, 4, 12));
    dog.show();
    dog.run();
    dog.speak();
    dog.bringToy("Кістка");
    dog.guard();
    let cat = new Cat("Мурка", "Рижа", new Date(2017, 2, 2));
    cat.show();
    cat.run();
    cat.speak();
    cat.bringMouse();
  }
  ras_array() {
    let taxa = new Dog("Рада", "Рижа", new Date(2019, 4, 12));
    let mops = new Dog("Семік", "Бежевий", new Date(2017, 5, 12));
    const shetler = new DogShelter(taxa, mops);
    shetler.forEach((dog) => { dog.show() });
  }
  ras_gibrid() {
    let tom = personBuilder();
    tom("Tom", "Simpson");
    tom.password = "qwerty";
    tom.authenticate();
  }
}

//Приклад1

//Горобець
class Sparrow {
  sound = "Чирик-чирик";
  fly() {
    alert("Go fly");
  }
}
//Папуга
class Parrot {
  sound = "Попка умниця";
  fly() {
    alert("Політ нормальний");
  }
}
//Утка
class Duck {
  sound = "Кря-кря";
  swim() {
    alert("Збираємось зануритися!");
  }
  fly() {
    alert("Качки також літають");
  }
}
//Приклад2
//Інтерфейс для прогресії
interface ISeries {
  (a0: number, h: number, n: number): number;
}
//Арифметична прогресія
let arif: ISeries = (a0: number, h: number, n: number): number => {
  let ai = a0;
  for (let i = 0; i < n; i++) {
    ai = ai + h;
  }
  return ai;
}
//Геометрична прогресія
let geom: ISeries = (a0: number, h: number, n: number): number => {
  return a0 * Math.pow(h, n - 1);
}
// А це приклад зроьлений на лекції для того шоб показати що функція може робити будь що
// головне щоб мала вірну сигнатуру
let add: ISeries = (a0: number, h: number, n: number): number => {
  return Number(a0) + Number(h) + Number(n);
}
//Приклад 3
interface IPet {
  name: string;
  //Властивості лише для читання
  readonly age: number;
  readonly color: string;
  readonly bday: Date;
  //Необов'язкова властивість
  toy?: string;
  speak(): void;
  bringToy?(toy?: string): void
  run(): void;
  show(): void;
};
class Dog implements IPet {
  name: string;
  //Властивості лише для читання
  readonly color: string;
  readonly bday: Date;
  toy?: string;
  constructor(name: string, color: string, bday: Date) { this.name = name; this.color = color; this.bday = bday; }
  speak() {
    console.log("Гав-гав");
  }
  run() {
    console.log("Бігу зі швидкістю 10 км/ч");
  }
  // геттер для розрахунку віку
  get age() {
    const diff = new Date(new Date().getTime() - this.bday.getTime());

    return diff.getFullYear() - new Date(0).getFullYear();
  }
  bringToy(toy: string) {
    console.log("Моя улюблена іграшка " + toy);
  }
  show() {
    console.log("Я собака на ім'я " + this.name);
    console.log("Мій кольор  " + this.color);
    console.log("Мій вік " + this.age + " років");
  }
  guard() {
    console.log("Вмію охраняти помешкання");
  }
}
class Cat implements IPet {
  name: string;
  //Властивості лише для читання
  readonly color: string;
  readonly bday: Date;
  constructor(name: string, color: string, bday: Date) { this.name = name; this.color = color; this.bday = bday; }
  speak() {
    console.log("Мяв-Мяв");
  }
  run() {
    console.log("Бігу  зі швидкістю 15 км/ч");
  }
  get age() {
    const diff = new Date(new Date().getTime() - this.bday.getTime());

    return diff.getFullYear() - new Date(0).getFullYear();
  }
  show() {
    console.log("Я кіт на ім'я " + this.name);
    console.log("Мій кольор  " + this.color);
    console.log("Мій вік " + this.age + " років");
  }
  bringMouse() {
    console.log("Вмію ловити мишей");
  }
}
//Приклад 4
//Масив питомців з числовими індексами
interface IShelter {
  [index: number]: IPet;
}
class DogShelter extends Array implements IShelter {
  constructor(...dogs: Dog[]) {
    super();
    this.push(...dogs);
  }
}
//Приклад5
interface IPersonInfo {
  (name: string, surname: string): void;
  fullName: string;
  password: string;
  authenticate(): void;
}
function personBuilder(): IPersonInfo {

  let person = <IPersonInfo>function (name: string, surname: string): void {
    person.fullName = name + " " + surname;
  };
  person.authenticate = function () {
    console.log(person.fullName + " пароль " + person.password);
  };
  return person;
}


