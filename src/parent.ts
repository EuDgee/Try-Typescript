

class Parent implements IName{
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
