export class SharedFactory {
  private state: number;

  constructor(seed: number = 70) {
    this.state = seed;
  }

  collect_manager(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 70) % 997;
    }
    return total;
  }
}

const obj = new SharedFactory();
console.log(obj.collect_manager(70));
