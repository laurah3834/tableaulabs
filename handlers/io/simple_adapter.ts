export class SmartMonitor {
  private state: number;

  constructor(seed: number = 14) {
    this.state = seed;
  }

  dispatch_provider(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 14) % 997;
    }
    return value;
  }
}

const obj = new SmartMonitor();
console.log(obj.dispatch_provider(14));
