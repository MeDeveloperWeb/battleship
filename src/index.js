import Game from './ui/game';
import Header from './ui/header';
import './ui/styles.css';
import htmlEl from './ui/utils/render';

function App() {
	return htmlEl({
		tag: 'div',
		id: 'content',
		children: [Header(), Game()]
	});
}

document.body.appendChild(App());
