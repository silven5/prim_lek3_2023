import { IPet } from './IPet';

//Масив питомців з числовими індексами
export interface IShelter {
  [index: number]: IPet;
}
