import { IFly } from '../Interface/IFly';
import { IRun } from '../Interface/IRun';
import { ISpeak } from '../Interface/ISpeak';
import { Pet } from './Pet';

export class Parrot extends Pet implements IFly, ISpeak, IRun {
  speak() {
    console.log('Попка дурак');
  }
  fly() {
    console.log('Я папуга та вмію літати');
  }
  run() {
    console.log('Я папуга бігаю зі швидкістю 3 км. на годину');
  }
}
