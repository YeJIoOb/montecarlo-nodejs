import { Dice, DiceBless } from './Dice';

export class SimulationRune {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.7),
    3: new Dice(0.7),
    4: new Dice(0.7),
    5: new Dice(0.7),
    6: new Dice(0.65),
    7: new Dice(0.4),
    8: new Dice(0.4),
    9: new Dice(0.4),
    10: new Dice(0.4),
    11: new Dice(0.4),
    12: new Dice(0.4),
    13: new Dice(0.4)
  };

  private spentRunes: number = 0;

  constructor() { }

  run() {
    let currentRuneLvl = 1;
    while (currentRuneLvl !== 12) {
      if (currentRuneLvl == 1) this.spentRunes++;
      this.spentRunes++;
      if (this.modify(currentRuneLvl))
        currentRuneLvl++
      else {
        this.spentRunes--;
        currentRuneLvl = 1;
      }
    }
    return this.spentRunes;
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationIgnis {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.5),
    2: new Dice(0.5),
    3: new Dice(0.4),
    4: new Dice(0.4),
    5: new Dice(0.3),
    6: new Dice(0.3),
    7: new Dice(0.2),
    8: new Dice(0.1),
    9: new Dice(0.03),
    10: new Dice(0.01)
  };

  private spentLacks: number = 0;

  constructor() { }

  run(startLvl: number, modifyLvl: number) {
    let currentIgnisLvl = startLvl;
    while (currentIgnisLvl !== modifyLvl) {
      this.spentLacks++;
      if (this.modify(currentIgnisLvl))
        currentIgnisLvl++
      else {
        currentIgnisLvl = 0;
      }
    }
    return this.spentLacks;
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}



export class SimulationBenir {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.5),
    3: new Dice(0.45),
    4: new Dice(0.4),
    5: new Dice(0.35),
    6: new Dice(0.5),
    7: new Dice(0.45),
    8: new Dice(0.40),
    9: new Dice(0.35),
    10: new Dice(0.30),
    11: new Dice(0.25),
    12: new Dice(0.50),
    13: new Dice(0.35),
    14: new Dice(0.30),
    15: new Dice(0.25),
    16: new Dice(0.20),
    17: new Dice(0.15),
    18: new Dice(0.5),
    19: new Dice(0.35),
    20: new Dice(0.30),
    21: new Dice(0.25),
    22: new Dice(0.20),
    23: new Dice(0.15),
    24: new Dice(0.50)
  };

  private spentOskolkov: number = 0;

  constructor() { }

  run(curLvl: number = 1, modifyLvl: number) {
    let currentModifyLvl = curLvl;
    while (currentModifyLvl !== modifyLvl) {
      if (this.modify(currentModifyLvl))
        currentModifyLvl++
      else {
        if (currentModifyLvl < 6)
          currentModifyLvl = 1;
        else if (currentModifyLvl < 12)
          currentModifyLvl = 6;
        else if (currentModifyLvl < 18)
          currentModifyLvl = 12;
        else if (currentModifyLvl < 24)
          currentModifyLvl = 18;
      }
    }
    return this.spentOskolkov;
  }

  modify(currentLevel: number): boolean {
    this.spentOskolkov++;
    return this.chances[currentLevel + 1].check();
  }
}



export class SimulationMagmeld {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.6),
    3: new Dice(0.55),
    4: new Dice(0.5),
    5: new Dice(0.4),
    6: new Dice(0.5),
    7: new Dice(0.45),
    8: new Dice(0.4),
    9: new Dice(0.35),
    10: new Dice(0.30),
    11: new Dice(0.50),
    12: new Dice(0.45),
    13: new Dice(0.40),
    14: new Dice(0.40),
    15: new Dice(0.35),
    16: new Dice(0.30),
    17: new Dice(0.25),
    18: new Dice(0.5),
    19: new Dice(0.35),
    20: new Dice(0.3),
    21: new Dice(0.25),
    22: new Dice(0.20),
    23: new Dice(0.15),
    24: new Dice(0.50),
    25: new Dice(0.35),
    26: new Dice(0.25),
    27: new Dice(0.20),
    28: new Dice(0.15),
    29: new Dice(0.10),
    30: new Dice(0.30)
  };

  private spentOskolkov: number = 0;

  constructor() { }

  run(curLvl: number = 1, modifyLvl: number) {
    let currentModifyLvl = curLvl;
    while (currentModifyLvl !== modifyLvl) {
      if (this.modify(currentModifyLvl))
        currentModifyLvl++
      else {
        if (currentModifyLvl < 6)
          currentModifyLvl = 1;
        else if (currentModifyLvl < 12)
          currentModifyLvl = 6;
        else if (currentModifyLvl < 18)
          currentModifyLvl = 12;
        else if (currentModifyLvl < 24)
          currentModifyLvl = 18;
        else if (currentModifyLvl < 30)
          currentModifyLvl = 24;
      }
    }
    return this.spentOskolkov;
  }

  modify(currentLevel: number): boolean {
    this.spentOskolkov++;
    return this.chances[currentLevel + 1].check();
  }
}

export class ModifySWeapon {
  private chances: { [modifyLevel: number]: DiceBless } = {
    1: new DiceBless(1),
    2: new DiceBless(1),
    3: new DiceBless(1),
    4: new DiceBless(1),
    5: new DiceBless(1),
    6: new DiceBless(1),
    7: new DiceBless(0.5),
    8: new DiceBless(0.25),
    9: new DiceBless(0.25),
    10: new DiceBless(0.25),
    11: new DiceBless(0.25),
    12: new DiceBless(0.25),
    13: new DiceBless(0.2),
    14: new DiceBless(0.2),
    15: new DiceBless(0.15),
    16: new DiceBless(0.10),
    17: new DiceBless(0.05),
    18: new DiceBless(0.05),
    19: new DiceBless(0.05),
    20: new DiceBless(0.05)
  };

  constructor() { }

  run() {
    let remainingWeapons = '6 '.repeat(100).split(' ').map(Number).filter(lvl => lvl > 0);
    backloop: while (true) {
      const removeWeapons: number[] = [];
      remainingWeapons.sort((a, b) => a - b);
      // if (remainingWeapons.every(remainingWeapon => remainingWeapon > 6)) {
      //   console.log(remainingWeapons);
      // }
      for (const remainingWeaponModifyLvlIndex in remainingWeapons) {
        if (remainingWeapons.length - removeWeapons.length === 1) break;
        const remainingWeaponModifyLvl = remainingWeapons[remainingWeaponModifyLvlIndex];
        const tempRemainingWeapons = [...remainingWeapons];
        removeWeapons.reverse().forEach((index) => {
          tempRemainingWeapons.splice(index, 1);
        });
        if (remainingWeaponModifyLvl > Math.min.apply(null, tempRemainingWeapons)) continue;
        if (remainingWeaponModifyLvl >= 16) continue;
        else {
          if (remainingWeapons.length - removeWeapons.length === 1) break backloop;
          const modifyValue = this.modify(remainingWeaponModifyLvl);
          if (modifyValue === 0) {
            removeWeapons.push(Number(remainingWeaponModifyLvlIndex))
          } else {
            remainingWeapons[remainingWeaponModifyLvlIndex] += modifyValue;
          }
        }
      }

      removeWeapons.reverse().forEach((index) => {
        remainingWeapons.splice(index, 1);
      });
      if (remainingWeapons.length <= 1) break;
      if (remainingWeapons.some(weapon => weapon >= 16)) break;
    }
    return remainingWeapons;
  }

  modify(currentLevel: number): number {
    return this.chances[currentLevel + 1].check();
  }

}


export class ModifyIvent {
  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(1),
    2: new Dice(1),
    3: new Dice(1),
    4: new Dice(0.7),
    5: new Dice(0.7),
    6: new Dice(0.7),
    7: new Dice(0.7),
    8: new Dice(0.7),
    9: new Dice(0.7),
    10: new Dice(0.7),
    11: new Dice(0.7),
    12: new Dice(0.7),
    13: new Dice(0.7),
    14: new Dice(0.7),
    15: new Dice(0.7),
    16: new Dice(0.35),
    17: new Dice(0.20),
    18: new Dice(0.15),
    19: new Dice(0.10),
    20: new Dice(0.07)
  };

  constructor() {
  }

  private spendMod = 1;

  run(startLvl: number, endLvl: number) {
    let currentModifyLevel = 0;
    while (currentModifyLevel < endLvl) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      } else {
        currentModifyLevel = startLvl;
      }
    }
    return this.spendMod;
  }

  modify(currentLevel: number): number {
    this.spendMod++;
    return this.chances[currentLevel + 1].check() ? 1 : 0;
  }

}

export class SimulationNewKriAden {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.7),
    3: new Dice(0.6),
    4: new Dice(0.5),
    5: new Dice(0.4),
    6: new Dice(0.6),
    7: new Dice(0.55),
    8: new Dice(0.5),
    9: new Dice(0.45),
    10: new Dice(0.40),
    11: new Dice(0.5),
    12: new Dice(0.45),
    13: new Dice(0.40),
    14: new Dice(0.35),
    15: new Dice(0.30),
    16: new Dice(0.30),
    17: new Dice(0.25),
    18: new Dice(0.20),
    19: new Dice(0.15),
    20: new Dice(0.10)
  };

  private spentKri: number = 0;

  constructor() { }

  run(modifyLvl: number) {
    let currentModifyLvl = 16;
    while (currentModifyLvl !== modifyLvl) {
      if (this.modify(currentModifyLvl))
        currentModifyLvl++
      else {
        if (currentModifyLvl < 6)
          currentModifyLvl = 1;
        else if (currentModifyLvl < 11)
          currentModifyLvl = 6;
        else if (currentModifyLvl < 16)
          currentModifyLvl = 11;
        else if (currentModifyLvl < 20)
          currentModifyLvl = 16;
      }
    }
    return this.spentKri;
  }

  modify(currentLevel: number): boolean {
    this.spentKri++;
    return this.chances[currentLevel + 1].check();
  }
}


export class SimulationNewKriHardin {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.6),
    3: new Dice(0.55),
    4: new Dice(0.5),
    5: new Dice(0.45),
    6: new Dice(0.45),
    7: new Dice(0.4),
    8: new Dice(0.35),
    9: new Dice(0.3),
    10: new Dice(0.25),
    11: new Dice(0.35),
    12: new Dice(0.3),
    13: new Dice(0.25),
    14: new Dice(0.2),
    15: new Dice(0.15),
    16: new Dice(0.25),
    17: new Dice(0.20),
    18: new Dice(0.15),
    19: new Dice(0.10),
    20: new Dice(0.05)
  };

  private spentKri: number = 0;

  constructor() { }

  run(currentModifyLvl: number, modifyLvl: number) {
    while (currentModifyLvl !== modifyLvl) {
      if (this.modify(currentModifyLvl))
        currentModifyLvl++
      else {
        if (currentModifyLvl < 6)
          currentModifyLvl = 1;
        else if (currentModifyLvl < 11)
          currentModifyLvl = 6;
        else if (currentModifyLvl < 16)
          currentModifyLvl = 11;
        else if (currentModifyLvl < 20)
          currentModifyLvl = 16;
      }
    }
    return this.spentKri;
  }

  modify(currentLevel: number): boolean {
    this.spentKri++;
    return this.chances[currentLevel + 1].check();
  }
}


export class SimulationArmorStone {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(1),
    2: new Dice(1),
    3: new Dice(1),
    4: new Dice(0.7),
    5: new Dice(0.3),
    6: new Dice(0.25),
    7: new Dice(0.2),
    8: new Dice(0.15),
    9: new Dice(0.15),
    10: new Dice(0.125),
    11: new Dice(0.1),
    12: new Dice(0.1),
    13: new Dice(0.1),
    14: new Dice(0.1),
    15: new Dice(0.1),
    16: new Dice(0.1),
    17: new Dice(0.1),
    18: new Dice(0.1),
    19: new Dice(0.1),
    20: new Dice(0.1),
    21: new Dice(0.1),
    22: new Dice(0.1),
    23: new Dice(0.1),
    24: new Dice(0.1),
    25: new Dice(0.1)
  };

  public spentArmors: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (this.modify(currentModifyLevel)) {
      currentModifyLevel++;
    }
    const gotArmorStones = currentModifyLevel - 5 <= 0 ? 0 : currentModifyLevel - 5;
    return { spentArmors: this.spentArmors, gotArmorStones };
  }

  modify(currentLevel: number): boolean {
    this.spentArmors++;
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationTalik {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.7),
    3: new Dice(0.6),
    4: new Dice(0.5),
    5: new Dice(0.4),
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== 5) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        currentModifyLevel = 1;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationTalikRad {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.3),
    3: new Dice(0.25),
    4: new Dice(0.2),
    5: new Dice(0.1),
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== 5) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        currentModifyLevel = 1;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationPlash {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.7),
    2: new Dice(0.65),
    3: new Dice(0.58),
    4: new Dice(0.42),
    5: new Dice(0.32),
    6: new Dice(0.32),
    7: new Dice(0.48),
    8: new Dice(0.28),
    9: new Dice(0.28),
    10: new Dice(0.28),
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 10) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        if (currentModifyLevel > 0) {
          currentModifyLevel--;
        }
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationTalikJust {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.45),
    3: new Dice(0.35),
    4: new Dice(0.25),
    5: new Dice(0.20)
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== 5) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        currentModifyLevel = 1;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}


export class SimulationMaxJust {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.6),
    2: new Dice(0.5),
    3: new Dice(0.45),
    4: new Dice(0.40),
    5: new Dice(0.35)
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 5) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        currentModifyLevel = 0;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}


export class SimulationMaxJust2 {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.48),
    2: new Dice(0.35),
    3: new Dice(0.29),
    4: new Dice(0.25),
    5: new Dice(0.2)
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 5) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        currentModifyLevel = 0;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationBolshoiKamen {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.35),
    3: new Dice(0.25),
    4: new Dice(0.15),
    5: new Dice(0.1)
  };

  spent: number = 0;

  constructor() { }

  run(endLevel: number = 5) {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== endLevel) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        currentModifyLevel = 1;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}


export class SimulationGigantskiyKamen {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.3),
    3: new Dice(0.3),
    4: new Dice(0.2),
    5: new Dice(0.10)
  };

  spent: number = 0;

  constructor() { }

  run(endLevel: number = 5) {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== endLevel) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        currentModifyLevel = 1;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    this.spent++;
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationEliksir {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.05)
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 1) {
      if (this.modify(currentModifyLevel)) {
        this.spent += 10;
        currentModifyLevel = 1;
      }
      else {
        this.spent += 3;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationAdenTalik {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(1),
    2: new Dice(0.8),
    3: new Dice(0.7),
    4: new Dice(0.6),
    5: new Dice(0.4),
    6: new Dice(0.3),
    7: new Dice(0.24),
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 6) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        this.spent++;
        currentModifyLevel = 0;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationPojasDrakonaTalik {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.95),
    2: new Dice(0.9),
    3: new Dice(0.85),
    4: new Dice(0.55),
    5: new Dice(0.5),
    6: new Dice(0.4),
    7: new Dice(0.33),
    // 8: new Dice(0.3),
    8: new Dice(0.38),
    9: new Dice(0.25),
    10: new Dice(0.15),
  };

  spent: number = 0;

  constructor() { }

  run(needLvl: number = 10) {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== needLvl) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        this.spent++;
        currentModifyLevel = 0;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationVenecGeroyaTalik {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.6),
    2: new Dice(0.5),
    3: new Dice(0.4),
    4: new Dice(0.35),
    5: new Dice(0.3),
    6: new Dice(0.28),
    7: new Dice(0.26),
    8: new Dice(0.24),
    9: new Dice(0.22),
    10: new Dice(0.2),
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 5) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        this.spent++;
        currentModifyLevel = 0;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}


export class SimulationPlashClan {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.85),
    2: new Dice(0.8),
    3: new Dice(0.75),
    4: new Dice(0.6),
    5: new Dice(0.5),
    6: new Dice(0.4),
    7: new Dice(0.3),
    8: new Dice(0.2),
    9: new Dice(0.15),
    10: new Dice(0.07),
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 8) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        this.spent++;
        currentModifyLevel = 0;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationVenecGeroyaSumLuck {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.6),
    2: new Dice(0.5),
    3: new Dice(0.4),
    4: new Dice(0.35),
    5: new Dice(0.3),
    6: new Dice(0.28),
    7: new Dice(0.26),
    8: new Dice(0.24),
    9: new Dice(0.22),
    10: new Dice(0.2),
  };


  constructor() { }

  run(nCount: number = 16000) {
    let sum = 0;
    for (let i = 0; i < nCount; i++) {
      const val = this.runOnce();
      sum += val;
    }
    return sum;
  }

  runOnce() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 10 && this.modify(currentModifyLevel)) { currentModifyLevel++; }
    switch (currentModifyLevel) {
      case 5:
        return 1;
      case 6:
        return 3;
      case 7:
        return 5;
      case 8:
        return 7;
      case 9:
        return 10;
      default:
        return 0;
    }
  }

  modify(currentLevel: number): boolean {
    return this.chances[currentLevel + 1].check();
  }
}

export class SimulationAnakim {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.95),
    3: new Dice(0.95),
    4: new Dice(0.95),
    5: new Dice(0.95),
    6: new Dice(0.50),
    7: new Dice(0.50),
    8: new Dice(0.50),
    9: new Dice(0.30),
    10: new Dice(0.30),
  };

  spent: number = 1;

  constructor() { }

  run() {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== 7) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
    }
    return this.spent;
  }

  runUntil(level: number) {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== level) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    const sameLevelSpent = this.getSameLevel(currentLevel);
    this.spent += sameLevelSpent
    return this.chances[currentLevel + 1].check();
  }

  getSameLevel(level: number): number {
    if (level === 1) return 1;
    else {
      const simulation = new SimulationAnakim();
      return simulation.runUntil(level);
    }
  }
}

export class SimulationNewBraclete {

  private chances: { [modifyLevel: number]: Dice } = {
    7: new Dice(0.25),
    8: new Dice(0.25),
    9: new Dice(0.25),
    10: new Dice(0.25),
  };

  spent: number = 1;

  constructor() { }

  run(endLevel = 10) {
    let currentModifyLevel = 6;
    while (currentModifyLevel !== endLevel) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
    }
    return this.spent;
  }

  runUntil(level: number) {
    let currentModifyLevel = 6;
    while (currentModifyLevel !== level) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    const sameLevelSpent = this.getSameLevel(currentLevel);
    return this.chances[currentLevel + 1].check();
  }

  getSameLevel(level: number): number {
    if (level === 6) {
      this.spent += 1;
      return 6;
    }
    else {
      const simulation = new SimulationNewBraclete();
      this.spent += simulation.runUntil(level);
      return;
    }
  }
}

export class SimulationKamenBroshi {

  private chances: { [modifyLevel: number]: Dice } = {
    2: new Dice(0.65),
    3: new Dice(0.40),
    4: new Dice(0.20),
    5: new Dice(0.10)
  };

  spent: number = 1;

  constructor() { }

  run() {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== 5) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
    }
    return this.spent;
  }

  runUntil(level: number) {
    let currentModifyLevel = 1;
    while (currentModifyLevel !== level) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    const sameLevelSpent = this.getSameLevel(currentLevel);
    this.spent += sameLevelSpent
    return this.chances[currentLevel + 1].check();
  }

  getSameLevel(level: number): number {
    if (level === 1) return 1;
    else {
      const simulation = new SimulationKamenBroshi();
      return simulation.runUntil(level);
    }
  }
}

export class SimulationPodveska3 {

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(0.9),
    2: new Dice(0.5),
    3: new Dice(0.3),
    4: new Dice(0.12),
    5: new Dice(0.05)
    // 1: new Dice(1),
    // 2: new Dice(0.8),
    // 3: new Dice(0.7),
    // 4: new Dice(0.6),
    // 5: new Dice(0.3)
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentModifyLevel = 0;
    while (currentModifyLevel !== 3) {
      if (this.modify(currentModifyLevel)) {
        currentModifyLevel++;
      }
      else {
        // if(currentModifyLevel < 4)
        currentModifyLevel = 0;
      }
    }
    return this.spent;
  }

  modify(currentLevel: number): boolean {
    // if (currentLevel < 4)
    this.spent++;
    // else
    // this.spent += 20;
    return this.chances[currentLevel + 1].check();
  }
}


export class SimulationCoinFlip {

  private chance = new Dice(0.6);

  spent: number = 0;

  constructor() { }

  run() {
    return this.chance.check() ? 3 : 1;
  }
}


export class SimulationUsilViaDum {

  doomPrice = 1800000;
  eabPrice = 290000;
  collectUsil = 0;
  lostAdena = 0;

  private chances: { [modifyLevel: number]: Dice } = {
    1: new Dice(1),
    2: new Dice(1),
    3: new Dice(1),
    4: new Dice(1),
    5: new Dice(0.66),
    6: new Dice(0.33),
    7: new Dice(0.25),
    8: new Dice(0.166),
    9: new Dice(0.15),
    10: new Dice(0.15),
    11: new Dice(0.1),
    12: new Dice(0.1),
    13: new Dice(0.1),
    14: new Dice(0.1),
    15: new Dice(0.1),
    16: new Dice(0.1),
    17: new Dice(0.1),
    18: new Dice(0.1),
    19: new Dice(0.1),
    20: new Dice(0.1)
  };

  spent: number = 0;

  constructor() { }

  run() {
    let currentEnchantLevel = 0;
    while (this.collectUsil < 100) {
      if (this.modify(currentEnchantLevel)) {
        currentEnchantLevel++;
      } else {
        this.lostAdena += this.doomPrice;
        if (currentEnchantLevel >= 6) {
          this.collectUsil += currentEnchantLevel - 4;
        }
        currentEnchantLevel = 0;
      }
    }
    return this.lostAdena / this.collectUsil;
  }

  modify(currentLevel: number): boolean {
    this.lostAdena += this.eabPrice;
    return this.chances[currentLevel + 1].check();
  }
}
