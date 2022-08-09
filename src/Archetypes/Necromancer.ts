import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _counterClassInstances = 0;
  constructor(
    name: string,
  ) {
    super(name);
    Necromancer._counterClassInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._counterClassInstances;
  }
}
