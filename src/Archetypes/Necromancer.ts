import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancerInstances = 0;
  public energyType: EnergyType;

  constructor(name:string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.incrementNecromancerInstance();
  }

  private static incrementNecromancerInstance() {
    Necromancer._necromancerInstances += 1;
  }

  public static createdArtchetypeInstances(): number {
    return Necromancer._necromancerInstances;
  }
}

export default Necromancer;
