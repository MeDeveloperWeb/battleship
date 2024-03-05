import Ship from './ship';
import {
	getAdjacentCoordinates,
	isCoordinateValid,
	isDirectionValid
} from './utils';

export default class GameBoard {
	#size;

	#board;

	#shipsOnBoard;

	constructor(boardSize) {
		if (typeof boardSize !== 'number' || boardSize < 8)
			throw Error('Invalid Size! Size must be >= 8');

		this.#size = boardSize;

		this.#board = Array.from(Array(boardSize), () =>
			Array.from(Array(boardSize), () => ({
				ship: null,
				hasBeenHit: false
			}))
		);
		// for better efficiency while trying to know if all ships have sunk
		this.#shipsOnBoard = [];
	}

	get size() {
		return this.#size;
	}

	get board() {
		return this.#board;
	}

	placeShip(coordinate, direction, ship) {
		if (!isCoordinateValid(coordinate, this.#size))
			throw Error('Invalid Coordinates!');

		if (!isDirectionValid(direction)) throw Error('Invalid direction!');

		if (!(ship instanceof Ship)) throw Error('Invalid Ship!');

		const coordinates = getAdjacentCoordinates(
			coordinate,
			direction,
			ship.length
		);

		coordinates.forEach(([x, y]) => {
			// If coordinate is out of bound throw error
			if (!isCoordinateValid([x, y], this.#size))
				throw Error(
					"Invalid Coordinates! Can't expand to the given length."
				);

			// If ship already present in coordinate
			if (this.#board[x][y].ship)
				throw Error('Ship already present in one of the coordinates!');
		});

		coordinates.forEach(([x, y]) => {
			this.#board[x][y] = { ship, hasBeenHit: false };
		});
		this.#shipsOnBoard.push(ship);

		return true;
	}

	receiveAttack(coordinate) {
		if (!isCoordinateValid(coordinate, this.#size))
			throw Error('Invalid Coordinate!');

		if (!this.#board[coordinate[0]][coordinate[1]].ship)
			return {
				hit: false
			};

		const { ship } = this.#board[coordinate[0]][coordinate[1]];
		ship.hit();

		return {
			hit: true,
			ship
		};
	}

	haveAllShipsSunk() {
		return this.#shipsOnBoard.every((ship) => ship.isSunk());
	}
}
