import { IShow } from '../Interface/IShow';

export class Show_alert implements IShow {
  show(type: string, name: string, color: string, age: number) {
    alert('Я ' + type + " на ім'я " + name);
    alert('Мій кольор  ' + color);
    alert('Мій вік ' + age + ' років');
  }
}
