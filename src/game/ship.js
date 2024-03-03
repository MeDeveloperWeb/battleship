export default function Ship(len, title = '') {
	if (typeof len !== 'number' || len <= 0) throw Error('Invalid Length!');

	if (typeof title !== 'string') throw Error('Invalid Name!');

	const length = len;

	const name = title || `Ship${length}${Math.floor(Math.random() * 1000)}`;

	let hits = 0;

	return {
		get length() {
			return length;
		},

		get name() {
			return name;
		},

		get hits() {
			return hits;
		},

		hit() {
			++hits;
		},

		isSunk() {
			return hits >= length;
		}
	};
}
