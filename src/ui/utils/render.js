/**
 *
 * @param {*} param0
 * @returns {HTMLElement}
 */
export default function htmlEl({
	tag,
	text = '',
	classList = [],
	id = '',
	children = [],
	props = {}
}) {
	const el = document.createElement(tag);
	el.innerText = text;

	if (classList.length) el.classList.add(...classList);

	if (children.length) {
		children.forEach((child) => el.appendChild(child));
	}

	if (id) el.id = id;

	Object.entries(props).forEach(([key, value]) =>
		el.setAttribute(key, value)
	);

	return el;
}
