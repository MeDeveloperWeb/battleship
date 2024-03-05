export function isCoordinateValid(coordinate, boardSize) {
	return (
		Array.isArray(coordinate) &&
		coordinate.length === 2 &&
		// X coordinate is a number within bound
		typeof coordinate[0] === 'number' &&
		coordinate[0] >= 0 &&
		coordinate[0] < boardSize &&
		// Y coordinate is a number within bound
		typeof coordinate[1] === 'number' &&
		coordinate[1] >= 0 &&
		coordinate[1] < boardSize
	);
}

export function isDirectionValid(direction) {
	return ['left', 'right', 'up', 'down'].includes(direction);
}

export function getAdjacentCoordinates(coordinate, direction, count) {
	/* eslint-disable no-nested-ternary */
	const factor =
		direction === 'left'
			? [-1, 0]
			: direction === 'right'
				? [1, 0]
				: direction === 'up'
					? [0, 1]
					: [0, -1];
	/* eslint-disable no-nested-ternary */

	const coordinates = [coordinate];

	for (let i = 0; i <= count; ++i) {
		coordinates.push([
			coordinates[i][0] + factor[0],
			coordinates[i][1] + factor[1]
		]);
	}

	return coordinates;
}
