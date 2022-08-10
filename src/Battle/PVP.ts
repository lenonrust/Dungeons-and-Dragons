import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, private player2: Fighter) {
    super(player1);
  }

  fight(): number {
    for (let index = 0; index < 500; index += 1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);
      if (this.player.lifePoints === -1) return -1;
      if (this.player2.lifePoints === -1) return 1;
    }
    return 0;
  }
}