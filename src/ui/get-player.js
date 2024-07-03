import htmlEl from './utils/render';
import send from '../media/send.svg';

export default function GetPlayer(afterFn = () => {}, count = 0) {
	const heading = htmlEl({
		tag: 'h3',
		text: `Enter player${count ? ` ${count}` : ''}'s name`
	});

	const form = htmlEl({
		tag: 'form',
		children: [
			htmlEl({
				tag: 'div',
				classList: ['text-input'],
				children: [
					htmlEl({
						tag: 'label',
						props: {
							for: 'player'
						},
						text: 'Player Name'
					}),
					htmlEl({
						tag: 'input',
						props: {
							type: 'text',
							name: 'name',
							required: true
						},
						id: 'player'
					})
				]
			}),
			htmlEl({
				tag: 'input',
				props: {
					type: 'image',
					alt: 'submit',
					src: send
				}
			})
		]
	});

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = new FormData(form).get('name');
		afterFn(name);
	});

	return htmlEl({
		tag: 'div',
		classList: ['player-cont'],
		children: [heading, form]
	});
}
