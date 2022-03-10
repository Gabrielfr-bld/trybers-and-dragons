import Race from './Race';

class Halfing extends Race {
  private _maxLifePoints: number;
  private static _halfingInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfing.incrementDwarfInstance();
  }

  private static incrementDwarfInstance() {
    this._halfingInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfing._halfingInstances;
  }
}

export default Halfing;