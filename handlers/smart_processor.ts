export class SmartRouter {
  private state: number;

  constructor(seed: number = 75) {
    this.state = seed;
  }

  handle_buffer(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 75) % 997;
    }
    return acc;
  }
}

const obj = new SmartRouter();
console.log(obj.handle_buffer(75));
