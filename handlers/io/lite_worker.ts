export class AsyncCache {
  private state: number;

  constructor(seed: number = 82) {
    this.state = seed;
  }

  fetch_builder(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 82) % 997;
    }
    return total;
  }
}

const obj = new AsyncCache();
console.log(obj.fetch_builder(82));
