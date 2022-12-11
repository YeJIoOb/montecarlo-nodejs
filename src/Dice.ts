
export class Dice {
  constructor(private chance: number) { }

  check(): boolean {
    if (Math.random() < this.chance) return true;
    return false;
  }
}

export class DiceBless {
  constructor(private chance: number) { }

  check(): number {
    if (this.chance === 1) return 1;
    if (Math.random() < this.chance) {
      const random2 = Math.random()
      if (random2 < 0.6) return 1;
      if (random2 < 0.85) return 2;
      return 3;
    }
    return 0;
  }
}
