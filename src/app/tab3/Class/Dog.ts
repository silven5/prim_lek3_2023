import { IRun } from '../Interface/IRun';
import { ISpeak } from '../Interface/ISpeak';
import { IToy } from '../Interface/IToy';
import { Pet } from './Pet';

export class Dog extends Pet implements IRun, IToy, ISpeak {
  speak() {
    console.log('Гав-гав');
  }
  run() {
    console.log('Я собака та Бігу зі швидкістю 10 км/ч');
  }
  bringToy(toy: string) {
    console.log('Моя улюблена іграшка ' + toy);
  }
  guard() {
    console.log('Вмію охраняти помешкання');
  }
}
