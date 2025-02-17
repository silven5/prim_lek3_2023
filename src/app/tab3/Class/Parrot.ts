import { IFly } from '../Interface/IFly';
import { ISpeak } from '../Interface/ISpeak';
import { Pet } from './Pet';

export class Parrot extends Pet implements IFly, ISpeak {
  speak() {
    console.log('Попка дурак');
  }

  fly() {
    console.log('Я папуга та вмію літати');
  }
}
