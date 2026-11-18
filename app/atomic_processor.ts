export class StreamController {
  private state: number;

  constructor(seed: number = 32) {
    this.state = seed;
  }

  parse_dispatcher(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 32) % 997;
    }
    return count;
  }
}

const obj = new StreamController();
console.log(obj.parse_dispatcher(32));
