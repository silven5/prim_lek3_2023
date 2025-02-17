import { Component } from '@angular/core';
import { ISeries } from './Interface/ISeries';
import { IPersonInfo } from './Interface/IPersonInfo';
import { Dog } from './Class/Dog';
import { DogShelter } from './Class/DogShelter';
import { Cat } from './Class/Cat';
import { Parrot } from './Class/Parrot';
import { Sparrow } from './Class/Sparrow';
import { Duck } from './Class/Duck';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  ras_type() {
    let parrot: Parrot = new Sparrow(); // Працює
    let sparrow: Sparrow = new Parrot(); // Працює
    let parrotTwo: Parrot = new Duck();
    //var duck1: Duck = new Parrot(); // Помилка

    let duck: Duck = new Duck();
    console.log(
      'Папуга говорить ' +
        parrot.sound +
        ' горобець говорить ' +
        sparrow.sound +
        ' друга попуга говорить ' +
        parrotTwo.sound
    );
    alert('A duck says ' + parrotTwo.sound);
    duck.swim();
    parrot.fly();
    sparrow.fly();
    parrotTwo.fly();
    duck.fly();
  }
  ras_function(a0: any, h: any, n: any) {
    console.log(
      'Арфіметична прогресія =' +
        arif(a0, h, n) +
        ' Геометрична прогресія = ' +
        geom(a0, h, n) +
        ' Add = ' +
        add(a0, h, n) +
        ' Dob = ' +
        min(a0, h, n)
    );
  }
  ras() {
    let dog = new Dog('Рада', 'Рижа', new Date(2019, 4, 12));
    dog.show();
    dog.run();
    dog.speak();
    dog.bringToy('Кістка');
    dog.guard();
    let cat = new Cat('Мурка', 'Рижа', new Date(2017, 2, 2));
    cat.show();
    cat.run();
    cat.speak();
    cat.bringMouse();
  }
  ras_array() {
    console.log('Hello');
    let taxa = new Dog('Рада', 'Рижа', new Date(2019, 4, 12));
    let mops = new Dog('Семік', 'Бежевий', new Date(2017, 5, 12));

    const shetler = new DogShelter(taxa, mops);
    shetler.forEach((dog) => {
      dog.show();
    });
  }
  ras_gibrid() {
    let tom = personBuilder();
    tom('Tom', 'Simpson');
    tom.password = 'qwerty';
    tom.authenticate();
  }
}

//Приклад2
//Інтерфейс для прогресії

//Арифметична прогресія
let arif: ISeries = (a0: number, h: number, n: number): number => {
  let ai = a0;
  for (let i = 0; i < n; i++) {
    ai = ai + h;
  }
  return ai;
};
//Геометрична прогресія
let geom: ISeries = (a0: number, h: number, n: number): number => {
  return a0 * Math.pow(h, n - 1);
};
// А це приклад зроьлений на лекції для того шоб показати що функція може робити будь що
// головне щоб мала вірну сигнатуру
let add: ISeries = (a0: number, h: number, n: number): number => {
  return Number(a0) + Number(h) + Number(n);
};
let min: ISeries = (a0: number, h: number, n: number): number => {
  return Number(a0) * Number(h) * Number(n);
};
//Гібридний інтерфейс
function personBuilder(): IPersonInfo {
  let person = <IPersonInfo>function (name: string, surname: string): void {
    person.fullName = name + ' ' + surname;
  };
  person.authenticate = function () {
    console.log(person.fullName + ' пароль ' + person.password);
  };
  return person;
}
