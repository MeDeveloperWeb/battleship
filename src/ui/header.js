import htmlEl from './utils/render';

export default function Header() {
	return htmlEl({
		tag: 'header',
		children: [
			htmlEl({
				tag: 'span',
				classList: ['logo'],
				text: 'BattleShip'
			})
		]
	});
}
