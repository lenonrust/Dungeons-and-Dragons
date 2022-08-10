import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player:Fighter, private monsters: SimpleFighter[]) {
    super(player);
  }

  PVEFight(index: number):number {
    for (let index2 = 0; index2 < 500; index2 += 1) {
      this.player.attack(this.monsters[index]);
      this.monsters[index].attack(this.player);
      if (this.player.lifePoints === -1) return -1;
      if (this.monsters[index].lifePoints === -1) return 1;
    }
    return 0;
  }

  fight(): number {
    for (let index = this.monsters.length - 1; index > 0; index -= 1) {
      const PVEBattle = this.PVEFight(index);
      if (PVEBattle === -1) return -1;
    }
    return 1;
  }
}