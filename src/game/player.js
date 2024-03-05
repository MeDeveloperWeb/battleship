import GameBoard from './gameBoard';

export default class Player {
	#name;

	#opponentBoard;

	constructor(name) {
		if (!name || typeof name !== 'string') throw Error('Invalid Name!');

		this.#name = name;
	}

	get name() {
		return this.#name;
	}

	setOpponentBoard(board) {
		if (!(board instanceof GameBoard)) throw Error('Invalid game board!');

		this.#opponentBoard = board;
	}

	get opponentBoard() {
		return this.#opponentBoard;
	}

	attack(coordinate) {
		if (!this.#opponentBoard) throw Error('No opponent board given!');

		this.#opponentBoard.receiveAttack(coordinate);
	}
}
