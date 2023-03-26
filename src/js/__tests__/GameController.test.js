import Bowman from '../characters/Bowman';
import GameController from '../GameController';
import GamePlay from '../GamePlay';
import GameStateService from '../GameStateService';
import PositionedCharacter from '../PositionedCharacter';

const gamePlay = new GamePlay();
const gameStateServise = new GameStateService(localStorage);
const gameController = new GameController(gamePlay, gameStateServise);
gameController.gamePlay.showCellTooltip = jest.fn();

const bowman = new PositionedCharacter(new Bowman(1), 25);
gameController.gameState.addCharacter(bowman);

test('Проверка корректности вывода характеристик персонажа', () => {
  const character = gameController.gameState.getCharacterByPosition(25);
  const { level, attack, defence, health } = character.character;

  const message = `\u{1F396}${level} \u{2694}${attack} \u{1F6E1}${defence} \u{2764}${health}`;
  gameController.onCellEnter(25);

  expect(gameController.gamePlay.showCellTooltip).toHaveBeenCalledWith(message, 25);
});
