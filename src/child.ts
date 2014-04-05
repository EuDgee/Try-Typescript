

class Child extends Parent {
  extra: string;

  constructor(name: string, extra: string) {
    super(name);
    this.extra = extra;
  }

  getExtra() {
    return this.extra;
  }
}
