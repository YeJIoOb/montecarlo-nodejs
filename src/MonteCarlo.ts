import * as fs from 'fs';

export class MonteCarlo<T> {
  anyArg: any;
  constructor(public n: number, public predicat: () => T, anyArg?: any) {
    this.anyArg = anyArg;
  }

  values: number[] = [];

  getAvg() {
    let i = 0;
    let sum = 0;
    while (i++ < this.n) {
      const val = Number(this.predicat());
      this.values.push(val);
      sum += val;
    }

    fs.writeFileSync('values.json', JSON.stringify(this.values));
    return sum / this.n;
  }

  getSum() {
    let i = 0;
    let sum = 0;
    while (i++ < this.n) {
      const val = Number(this.predicat());
      this.values.push(val);
      sum += val;
    }

    fs.writeFileSync('values.json', JSON.stringify(this.values));
    return sum;
  }

  collects: { [modifyLvl: number]: number } = {};
  collectWeapons() {
    let i = 0;
    let sum = 0;
    while (i++ < this.n) {
      const vals = ((this.predicat() as any) as number[]);
      // this.values.push(val);
      // sum += val;
      const val = Math.max.apply(null, vals);
      this.collects[val] = this.collects[val] || 0;
      this.collects[val]++;
    }

    return Object.keys(this.collects).reduce((agg, curr) => {
      const chance = this.collects[curr] / this.n;
      agg[curr] = `${Math.round(chance * 1000000) / 10000}%`;
      return agg;
    }, {});
  }
}