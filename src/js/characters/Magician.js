import Character from '../Character';

export default class Magician extends Character {
  constructor(level) {
    super(level);
    this.level = level;
    this.type = 'magician';
    this.attack = 10;
    this.defence = 40;
    this.moveRange = 1;
    this.attackRange = 4;
  }
}
