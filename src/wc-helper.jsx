import React from 'react';
import ReactDOM from 'react-dom'


const styles = `div {
	float: left;
	display: block;
	border:1px solid #ccc;
	border-radius: 3px;
	width: 500px;
	text-align: center;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

function getCSS(url, mount) {
	return new Promise((res, rej) => {
		const link = document.createElement('link');
		link.onload = res;
		link.onerror = rej;
		link.href = `${url}/assets/App.css`;
		link.rel = 'stylesheet';
		mount.appendChild(link);
	});
}

export function helper(Component) {

	// create web component class

	return class WC extends HTMLElement {
		connectedCallback() {
			const mountPoint = document.createElement('div');
			let style = document.createElement('style');
			style.textContent = styles;

			const root = this.attachShadow({ mode: 'closed' });
			root.appendChild(style);
			root.appendChild(mountPoint);

			getCSS('http://localhost:3000', root).then(_ => {
				ReactDOM.render(<Component />, mountPoint);
			})
		}
	}
}

export function helper_two(Component) {

	// create web component class

	return class WC extends HTMLElement {
		connectedCallback() {
			const mountPoint = document.createElement('div');
			let style = document.createElement('style');
			style.textContent = styles;

			const root = this.attachShadow({ mode: 'closed' });
			root.appendChild(style);
			root.appendChild(mountPoint);

			ReactDOM.render(<Component />, mountPoint);
		}
	}
}

// create custom elementfor component and export

