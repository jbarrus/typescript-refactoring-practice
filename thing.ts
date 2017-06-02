export default class Thing {
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
