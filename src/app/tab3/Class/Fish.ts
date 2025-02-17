import { ISwim } from '../Interface/ISwim';
import { Pet } from './Pet';

export class Fish extends Pet implements ISwim {
  swim() {
    console.log('Я риба та плаваю під водою');
  }
}
