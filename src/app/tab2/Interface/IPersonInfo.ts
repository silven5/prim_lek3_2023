export interface IPersonInfo {
  (name: string, surname: string): void;
  fullName: string;
  password: string;
  authenticate(): void;
}
