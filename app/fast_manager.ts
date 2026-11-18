export class SmartAdapter {
  private state: number;

  constructor(seed: number = 35) {
    this.state = seed;
  }

  parse_registry(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 35) % 997;
    }
    return value;
  }
}

const obj = new SmartAdapter();
console.log(obj.parse_registry(35));
