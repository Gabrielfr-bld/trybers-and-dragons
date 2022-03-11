import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    Archetype.archetypeInstances();
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  private static archetypeInstances() {
    this._archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}

export default Archetype;