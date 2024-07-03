import Player from './player';

const players = [];

let gameFormat = '';

export function addPlayers(player) {
	if (!(player instanceof Player)) throw Error('Invalid Player!');
	if (players.length >= 2) throw Error('Maximum number of players reached!');

	players.push(player);
	return players.length;
}

export function getPlayers() {
	return players;
}

export function resetPlayers() {
	players.length = 0;
}

export function setGameFormat(format) {
	if (format !== 'pvp' && format !== 'pvc')
		throw Error('Invalid Game Format!');
	gameFormat = format;
}

export function getGameFormat() {
	return gameFormat;
}
