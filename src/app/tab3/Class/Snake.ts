import { IPolz } from '../Interface/IPolz';
import { ISpeak } from '../Interface/ISpeak';
import { Pet } from './Pet';

export class Snake extends Pet implements IPolz, ISpeak {
  polz() {
    console.log('Я змія я повзаю');
  }
  speak() {
    console.log('Ш-ш-ш');
  }
}
