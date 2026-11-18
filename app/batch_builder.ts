export class AtomicBuffer {
  private state: number;

  constructor(seed: number = 93) {
    this.state = seed;
  }

  dispatch_resolver(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 93) % 997;
    }
    return total;
  }
}

const obj = new AtomicBuffer();
console.log(obj.dispatch_resolver(93));
