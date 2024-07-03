import { setGameFormat } from '../game';
import ChooseGameFormat from './choose-format';
import htmlEl from './utils/render';
import gameModes from './game-modes';

const mainCont = htmlEl({
	tag: 'div',
	classList: ['main-cont']
});

// function hideAll() {
// 	[...mainCont.children].forEach((el) => {
// 		if (!el.classList.contains('hide')) el.classList.add('hide');
// 		el.classList.remove('show');
// 	});
// }

// function show(el) {
// 	el.classList.remove('hide');
// 	el.classList.add('show');
// }

export default function Game() {
	const gameFormat = ChooseGameFormat((format) => {
		setGameFormat(format);
		gameModes[format](mainCont);
	});

	mainCont.replaceChildren(gameFormat);

	return mainCont;
}
