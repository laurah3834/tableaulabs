export class DynamicContext {
  private state: number;

  constructor(seed: number = 87) {
    this.state = seed;
  }

  run_session(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 87) % 997;
    }
    return total;
  }
}

const obj = new DynamicContext();
console.log(obj.run_session(87));
