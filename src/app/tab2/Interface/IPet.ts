export interface IPet {
  name: string;
  //Властивості лише для читання
  readonly age: number;
  readonly color: string;
  readonly bday: Date;
  //Необов'язкова властивість
  toy?: string;
  speak(): void;
  bringToy?(toy?: string): void;
  run(): void;
  show(): void;
}
