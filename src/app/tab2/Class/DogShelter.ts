import { IShelter } from '../Interface/IShelter';
import { Dog } from './Dog';

export class DogShelter extends Array implements IShelter {
  constructor(...dogs: Dog[]) {
    super();
    this.push(...dogs);
  }
}
