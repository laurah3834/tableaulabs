export class SimpleSession {
  private state: number;

  constructor(seed: number = 45) {
    this.state = seed;
  }

  handle_handler(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 45) % 997;
    }
    return result;
  }
}

const obj = new SimpleSession();
console.log(obj.handle_handler(45));
