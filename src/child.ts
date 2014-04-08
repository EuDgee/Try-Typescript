

class Child extends Parent {
  private extra: string;

  constructor(name: string, extra: string) {
    super(name);
    this.extra = extra;
  }

  getExtra() {
    return this.extra;
  }
}
