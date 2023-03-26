import { charactersUser } from './const';

export default class GameState {
  constructor() {
    this.characters = [];
    this.move = true;
    this.selectedCharacter = null;
  }

  setSelectedCharacter(character) {
    this.selectedCharacter = character;
  }

  getSelectedCharacter() {
    return this.selectedCharacter;
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  getCharacters() {
    return this.characters;
  }

  getCharacterByPosition(position) {
    return this.characters.find((character) => character.position === position);
  }

  isUserCharacter(position) {
    const character = this.getCharacterByPosition(position);
    return character ? charactersUser.some((el) => character.character instanceof el) : false;
  }

  static from(object) {
    // TODO: create object
    return null;
  }
}
