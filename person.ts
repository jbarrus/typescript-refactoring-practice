export default class Person {
  public name: string;
  public birthDate: Date;

  getName(): string {
    return name;
  }

  setName(name: string) {
    this.name = name;
  }

  getBirthDate(): Date {
    return this.birthDate;
  }

  setBirthDate(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
