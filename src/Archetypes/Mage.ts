import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mageInstances = 0;
  public energyType: EnergyType;

  constructor(name:string) {
    super(name);
    this.energyType = 'mana';
    Mage.incrementMageInstance();
  }

  private static incrementMageInstance() {
    Mage._mageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }
}

export default Mage;
