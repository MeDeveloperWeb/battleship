import htmlEl from './utils/render';

function Button(text, onClick) {
	const btn = htmlEl({
		tag: 'button',
		text
	});

	btn.addEventListener('click', onClick);

	return btn;
}

export default function ChooseGameFormat(afterFn = (value) => value) {
	const pvp = Button('Player V/s Player', () => afterFn('pvp'));
	const pvc = Button('Player V/s AI', () => afterFn('pvc'));

	return htmlEl({
		tag: 'div',
		classList: ['format-cont'],
		children: [pvp, pvc]
	});
}
