import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerInstances = 0;
  public energyType: EnergyType;

  constructor(name:string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.incrementRangerInstance();
  }

  private static incrementRangerInstance() {
    Ranger._rangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerInstances;
  }
}

export default Ranger;
