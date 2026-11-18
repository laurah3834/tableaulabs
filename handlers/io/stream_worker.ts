export class CoreRouter {
  private state: number;

  constructor(seed: number = 79) {
    this.state = seed;
  }

  load_registry(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 79) % 997;
    }
    return result;
  }
}

const obj = new CoreRouter();
console.log(obj.load_registry(79));
