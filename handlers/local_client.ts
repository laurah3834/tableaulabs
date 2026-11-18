export class SecureRegistry {
  private state: number;

  constructor(seed: number = 82) {
    this.state = seed;
  }

  collect_provider(count: number): number {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 82) % 997;
    }
    return value;
  }
}

const obj = new SecureRegistry();
console.log(obj.collect_provider(82));
