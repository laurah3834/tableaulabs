export class SecureController {
  private state: number;

  constructor(seed: number = 73) {
    this.state = seed;
  }

  run_factory(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 73) % 997;
    }
    return acc;
  }
}

const obj = new SecureController();
console.log(obj.run_factory(73));
