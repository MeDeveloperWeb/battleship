import GameBoard from '../../src/game/gameBoard';
import Player from '../../src/game/player';
import Ship from '../../src/game/ship';

describe('Player Initialization', () => {
	/* eslint-disable no-new */
	/** Allow the use of new for testing in this particular codeblock */
	describe('should through error if player name not given', () => {
		test('no name', () => {
			expect(() => {
				new Player();
			}).toThrow('Invalid Name!');
		});

		test('invalid name type', () => {
			expect(() => {
				new Player(2);
			}).toThrow('Invalid Name!');
		});
	});

	it('should initialize player if name is given in correct format', () => {
		const jumbo = new Player('Jumbo');

		expect(jumbo).toHaveProperty('name', 'Jumbo');
		expect(jumbo).toBeInstanceOf(Player);
	});
	/* eslint-enable no-new */
});

describe('Player can have access to opponent board', () => {
	const jumbo = new Player('Jumbo');
	const ship = new Ship(2);
	const board = new GameBoard(8);
	board.placeShip([0, 0], 'right', ship);

	it('should throw error on invalid game board', () => {
		expect(() => {
			jumbo.setOpponentBoard({ size: 8 });
		}).toThrow('Invalid game board!');
	});

	it('should set opponent board on correct argument.', () => {
		jumbo.setOpponentBoard(board);
		expect(jumbo.opponentBoard).toBe(board);
	});
});

describe('Player can attack on board', () => {
	const ship = new Ship(2);
	const board = new GameBoard(9);

	board.placeShip([0, 0], 'right', ship);

	it('should throw error if board not given', () => {
		expect(() => {
			const jumbo = new Player('Jumbo');
			jumbo.attack([[0, 0]]);
		}).toThrow('No opponent board given!');
	});

	it('should be able to attack ship if provided correct coordinate', () => {
		const jumbo = new Player('Jumbo');
		jumbo.setOpponentBoard(board);

		jumbo.attack([0, 0]);
		expect(ship.hits).toBe(1);

		jumbo.attack([1, 0]);
		expect(ship.hits).toBe(2);
	});
});
