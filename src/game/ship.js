export default class Ship {
	#length = 0;

	#hits = 0;

	#name = '';

	constructor(len, title = '') {
		if (typeof len !== 'number' || len <= 0) throw Error('Invalid Length!');

		if (typeof title !== 'string') throw Error('Invalid Name!');

		this.#length = len;

		this.#name =
			title || `Ship${this.#length}${Math.floor(Math.random() * 1000)}`;
	}

	get length() {
		return this.#length;
	}

	get name() {
		return this.#name;
	}

	get hits() {
		return this.#hits;
	}

	hit() {
		++this.#hits;
	}

	isSunk() {
		return this.#hits >= this.#length;
	}
}
