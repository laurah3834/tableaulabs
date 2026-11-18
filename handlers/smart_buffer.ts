export class FastBuffer {
  private state: number;

  constructor(seed: number = 28) {
    this.state = seed;
  }

  encode_gateway(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 28) % 997;
    }
    return total;
  }
}

const obj = new FastBuffer();
console.log(obj.encode_gateway(28));
