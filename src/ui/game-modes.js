import { addPlayers } from '../game';
import GameBoard from '../game/gameBoard';
import Player from '../game/player';
import GetPlayer from './get-player';
import SetBoard from './set-board';

function pvp(mainCont) {
	mainCont.replaceChildren(...getPlayer());
}

function pvc() {
	console.log('pvc');
}

function getPlayer() {
	return GetPlayer((name) => {
		const player = new Player(name);
		addPlayers(player);
		const board = new GameBoard(8);
	});
}
export default { pvp, pvc };
