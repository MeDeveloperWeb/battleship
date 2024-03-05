import GameBoard from '../../src/game/gameBoard';
import Ship from '../../src/game/ship';

describe('GameBoard Initialization', () => {
	describe('should throw error on invalid argument (size)', () => {
		/* eslint-disable no-new */
		/** Allow the use of new for testing in this particular codeblock */
		test('no size', () => {
			expect(() => {
				new GameBoard();
			}).toThrow('Invalid Size! Size must be >= 8');
		});

		test('size < 8', () => {
			expect(() => {
				new GameBoard(4);
			}).toThrow('Invalid Size! Size must be >= 8');
		});
	});

	test('should initialize correctly on correct arguments', () => {
		expect(new GameBoard(8)).toHaveProperty('size', 8);
	});
	/* eslint-enable no-new */
});

describe('Place ships on GameBoard', () => {
	describe('should throw error on invalid arguments', () => {
		const board = new GameBoard(8);
		const ship = new Ship(5);

		test('negative coordinates', () => {
			expect(() => {
				board.placeShip([-3, -2], 'left', ship);
			}).toThrow('Invalid Coordinates!');

			expect(() => {
				board.placeShip([-3, 2], 'left', ship);
			}).toThrow('Invalid Coordinates!');

			expect(() => {
				board.placeShip([3, -2], 'left', ship);
			}).toThrow('Invalid Coordinates!');
		});

		test('out of bound coordinates', () => {
			expect(() => {
				board.placeShip([11, 10], 'left', ship);
			}).toThrow('Invalid Coordinates!');

			expect(() => {
				board.placeShip([3, 8], 'right', ship);
			}).toThrow('Invalid Coordinates!');

			expect(() => {
				board.placeShip([8, 2], 'left', ship);
			}).toThrow('Invalid Coordinates!');
		});

		test('invalid direction', () => {
			expect(() => {
				board.placeShip([5, 2], 'rig', ship);
			}).toThrow('Invalid direction!');
		});

		test('invalid ship', () => {
			expect(() => {
				board.placeShip([2, 2], 'right', { length: 4 });
			}).toThrow('Invalid Ship!');
		});

		test('correct initial coordinates but unable to span due to length', () => {
			expect(() => {
				board.placeShip([5, 2], 'right', ship);
			}).toThrow(
				"Invalid Coordinates! Can't expand to the given length."
			);
		});
	});

	it('should place ship if provided with correct arguments', () => {
		const board = new GameBoard(8);
		const ship = new Ship(5);

		expect(board.placeShip([0, 2], 'right', ship)).toBe(true);
		expect(board.board[0][2]).toHaveProperty('ship', ship);
		expect(board.board[5][2]).toHaveProperty('ship', ship);
	});

	it('should through error if overlapping ships', () => {
		const board = new GameBoard(8);
		const ship = new Ship(3);

		board.placeShip([0, 2], 'right', ship);

		expect(() => {
			board.placeShip([1, 2], 'up', ship);
		}).toThrow('Ship already present in one of the coordinates!');
	});
});

describe('GameBoard can receive attack', () => {
	const board = new GameBoard(8);
	const ship = new Ship(5);

	board.placeShip([1, 2], 'right', ship);

	it('should throw error on invalid coordinates', () => {
		expect(() => {
			board.receiveAttack([-1, 0]);
		}).toThrow('Invalid Coordinate!');

		expect(() => {
			board.receiveAttack([8, 0]);
		}).toThrow('Invalid Coordinate!');

		expect(() => {
			board.receiveAttack([7, 10]);
		}).toThrow('Invalid Coordinate!');
	});

	describe('handle missed attacks', () => {
		it('should return {hit: false}', () => {
			expect(board.receiveAttack([0, 1])).toHaveProperty('hit', false);
		});

		it('should record miss', () => {
			expect(board.board[0][1]).toHaveProperty('hasBeenHit', false);
		});
	});

	describe('handle correct hits', () => {
		it('should return {hit: true, ship(that has been hit)}', () => {
			// 1st hit
			const hit = board.receiveAttack([1, 2]);

			expect(hit).toHaveProperty('hit', true);
			expect(hit).toHaveProperty('ship');
			expect(hit.ship).toBeInstanceOf(Ship);
		});

		it('should know when ships are remaining on board', () => {
			// 2nd hit
			board.receiveAttack([2, 2]);
			expect(board.haveAllShipsSunk()).toBe(false);

			// 3rd hit
			board.receiveAttack([6, 2]);
			expect(board.haveAllShipsSunk()).toBe(false);

			// 4th hit
			board.receiveAttack([3, 2]);
			expect(board.haveAllShipsSunk()).toBe(false);

			// 5th hit
			board.receiveAttack([4, 2]);
			expect(board.haveAllShipsSunk()).toBe(true);

			const otherShip = new Ship(2);
			board.placeShip([0, 0], 'up', otherShip);

			expect(board.haveAllShipsSunk()).toBe(false);

			// 1st hit on otherShip
			board.receiveAttack([0, 0]);

			expect(board.haveAllShipsSunk()).toBe(false);
		});

		it('should know when all ships have been sunk', () => {
			// 2nd hit on otherShip
			board.receiveAttack([0, 1]);
			expect(board.haveAllShipsSunk()).toBe(true);
		});
	});
});
