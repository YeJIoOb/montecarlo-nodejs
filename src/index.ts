import { SimulationMagmeld, SimulationNewBraclete, SimulationEliksir, ModifyIvent, ModifySWeapon, SimulationGigantskiyKamen, SimulationPlashClan, SimulationVenecGeroyaSumLuck, SimulationMaxJust, SimulationMaxJust2, SimulationNewKriHardin, SimulationBenir, SimulationNewKriAden, SimulationBolshoiKamen, SimulationKamenBroshi, SimulationVenecGeroyaTalik, SimulationPojasDrakonaTalik, SimulationRune, SimulationIgnis, SimulationArmorStone, SimulationTalik, SimulationTalikRad, SimulationTalikJust, SimulationCoinFlip, SimulationAdenTalik, SimulationPlash, SimulationUsilViaDum, SimulationPodveska3, SimulationAnakim } from './Simulation';
import { MonteCarlo } from './MonteCarlo';
import * as fs from 'fs';
import * as os from 'os';

// const magmeld = new MonteCarlo(2000000, () => {
//   const simulation = new SimulationMagmeld();
//   return simulation.run(24, 30);
// })
// console.log(magmeld.getAvg(), magmeld.values.length);


// const magmeld = new MonteCarlo(200000, () => {
//   const simulation = new SimulationIgnis();
//   return simulation.run(0, 6);
// })
// console.log(magmeld.getAvg(), magmeld.values.length);



const benir = new MonteCarlo(2000000, () => {
  const simulation = new SimulationBenir();
  return simulation.run(18, 24);
})
console.log(benir.getAvg(), benir.values.length);

// const braclete = new MonteCarlo(2000000, () => {
//   const simulation = new SimulationNewBraclete();
//   return simulation.run(9);
// })
// console.log(braclete.getAvg(), braclete.values.length);

// const kamen = new MonteCarlo(2000000, () => {
//   const simulation = new SimulationGigantskiyKamen();
//   return simulation.run(5);
// })
// console.log(kamen.getAvg(), kamen.values.length);

// const bolshKamen = new MonteCarlo(2000000, () => {
//   const simulation = new SimulationBolshoiKamen();
//   return simulation.run(5);
// })
// console.log(bolshKamen.getAvg(), bolshKamen.values.length);


// const pojasDrakona = new MonteCarlo(2000000, () => {
//   const simulation = new SimulationPojasDrakonaTalik();
//   return simulation.run(10);
// })
// console.log(pojasDrakona.getAvg(), pojasDrakona.values.length);

// const numSims = [8];

// const sims = numSims.map(
//   a => {
//     return new MonteCarlo(2000000, () => {
//       const simulation = new ModifyIvent();
//       return simulation.run(0, a);
//     }, a)
//   }
// );
// for (const sim of sims) {
//   console.log(sim.anyArg, sim.getAvg());
// }

// const benir = new MonteCarlo(10000, () => {
//   const simulation = new SimulationVenecGeroyaSumLuck();
//   return simulation.run(16000);
// })
// console.log(benir.getAvg(), benir.values.length);



// const sWeapon = new MonteCarlo(20000, () => {
//   const simulation = new ModifySWeapon();
//   return simulation.run();
// });

// const result = sWeapon.collectWeapons();
// console.log(Object.keys(result).map((key) => {
//   const chance = result[key];
//   return `Вероятность в итоге остаться с пушкой +${key} равна ${chance}`;
// }).join(os.EOL));


// const monteCarloTalik = new MonteCarlo(2000000, () => {
//   const simulation = new SimulationPlash();
//   return simulation.run();
// })





// const monteCarloFlipCoin = new MonteCarlo(2000000, () => {
//   const simulation = new SimulationCoinFlip();
//   return simulation.run();
// })

// console.log(monteCarloFlipCoin.getAvg(), monteCarloFlipCoin.values.length);


// var str = fs.readFileSync('values.json').toString();
// // console.log(JSON.parse(str).length);
// const data = JSON.parse(str);

// const arr = [0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.98, 0.99]

// let currElem = -1;

// data.sort((a,b) => a - b);

// for (const index in data) {
//   for(const elemIndex in arr) {
//     let elem = arr[elemIndex];
//     if (data.length / Number(index) <= 1/elem && currElem < Number(elemIndex)) {
//       console.log(elem, data[index]);
//       currElem = Number(elemIndex);
//       break;
//     }
//   }
// }
