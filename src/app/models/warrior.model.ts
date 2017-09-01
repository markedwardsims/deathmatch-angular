export class WarriorModel {
  public id: number;
  public name: string;
  public wins: number;
  public image: string;

  constructor(id: number, name: string, wins: number, image: string) {
    this.id = id;
    this.name = name;
    this.wins = wins;
    this.image = image;
  }
}
