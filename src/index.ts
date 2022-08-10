import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Monster from './Monster';

const player1 = new Character('player1');
const player2 = new Character('player2');
const player3 = new Character('player3');

for (let index = 0; index < 3; index += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Monster();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };