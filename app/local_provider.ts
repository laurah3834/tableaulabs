export class LocalSession {
  private state: number;

  constructor(seed: number = 90) {
    this.state = seed;
  }

  flush_resolver(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 90) % 997;
    }
    return acc;
  }
}

const obj = new LocalSession();
console.log(obj.flush_resolver(90));
