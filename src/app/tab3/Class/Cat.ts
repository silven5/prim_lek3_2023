import { IRun } from '../Interface/IRun';
import { ISpeak } from '../Interface/ISpeak';
import { Pet } from './Pet';

export class Cat extends Pet implements IRun, ISpeak {
  speak() {
    console.log('Мяв-Мяв');
  }
  run() {
    console.log('Я кішка та бігу  зі швидкістю 15 км/ч');
  }

  bringMouse() {
    console.log('Вмію ловити мишей');
  }
}
