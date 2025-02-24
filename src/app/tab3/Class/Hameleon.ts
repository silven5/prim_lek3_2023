import { IMask } from '../Interface/IMask';
import { IRun } from '../Interface/IRun';
import { Pet } from './Pet';

export class Hameleon extends Pet implements IRun, IMask {
  run() {
    console.log('Я хамелеон та бігу  зі швидкістю 15 км/ч');
  }
  mask() {
    console.log('Я маскуюсь');
  }
}
