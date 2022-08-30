export class Skill {
  id?: number;
  nombreK: string;
  percentK: number;

  constructor(nombreK: string, percentK: number){
    this.nombreK = nombreK;
    this.percentK = percentK;
  }
}
