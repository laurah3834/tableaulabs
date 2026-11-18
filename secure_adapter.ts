export class FastHandler {
  private state: number;

  constructor(seed: number = 79) {
    this.state = seed;
  }

  collect_engine(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 79) % 997;
    }
    return acc;
  }
}

const obj = new FastHandler();
console.log(obj.collect_engine(79));
