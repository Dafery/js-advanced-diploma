import { charactersAI, charactersUser } from './const';
import GamePlay from './GamePlay';
import GameState from './GameState';
import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import Team from './Team';
import themes from './themes';
import cursors from './cursors';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.gameState = new GameState();
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);

    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));

    const teamUser = new Team(generateTeam(charactersUser, 1, 2));
    const teamAI = new Team(generateTeam(charactersAI, 1, 2));

    const calculatePosition = (cols, acc) => {
      const arr = [];
      const { boardSize } = this.gamePlay;
      for (let i = 0; i < boardSize; i++) {
        cols.forEach((col) => arr.push(col + boardSize * i));
      }

      const randomIdx = Math.floor(Math.random() * (arr.length - 1));
      const hasPosition = acc.some((character) => character.position === arr[randomIdx]);
      return hasPosition ? calculatePosition(cols, acc) : arr[randomIdx];
    };

    teamUser.members.forEach((character) => {
      const characters = this.gameState.getCharacters();
      const position = calculatePosition([0, 1], characters);
      this.gameState.addCharacter(new PositionedCharacter(character, position));
    });

    teamAI.members.forEach((character) => {
      const characters = this.gameState.getCharacters();
      const position = calculatePosition([6, 7], characters);
      this.gameState.addCharacter(new PositionedCharacter(character, position));
    });

    this.gamePlay.redrawPositions(this.gameState.getCharacters());
  }

  onCellClick(index) {
    // TODO: react to click
    this.gameState.getCharacters().forEach((el) => this.gamePlay.deselectCell(el.position));

    if (this.gameState.isUserCharacter(index)) {
      const character = this.gameState.getCharacterByPosition(index);
      this.gameState.setSelectedCharacter(character);
      this.gamePlay.selectCell(index);
      return;
    }

    GamePlay.showError('Выберите своего персонажа!');
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    const character = this.gameState.getCharacterByPosition(index);
    if (character) {
      const { level, attack, defence, health } = character.character;
      const message = `\u{1F396}${level} \u{2694}${attack} \u{1F6E1}${defence} \u{2764}${health}`;
      this.gamePlay.showCellTooltip(message, index);
    }

    if (!this.gamePlay.boardEl) {
      return;
    }

    if (this.gameState.isUserCharacter(index)) {
      this.gamePlay.setCursor(cursors.pointer);
    } else {
      this.gamePlay.setCursor(cursors.auto);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
