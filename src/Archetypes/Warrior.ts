import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriorInstances = 0;
  public energyType: EnergyType;

  constructor(name:string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.incrementWarriorInstance();
  }

  private static incrementWarriorInstance() {
    Warrior._warriorInstances += 1;
  }

  public static createdArtchetypeInstances(): number {
    return Warrior._warriorInstances;
  }
}

export default Warrior;
