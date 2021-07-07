import React from 'react';
import ReactDOM from 'react-dom'

export function helper(Component) {

	// create web component class
	return class WC extends HTMLElement {
		connectedCallback() {
			const mountPoint = document.createElement('span');
			this.attachShadow({ mode: 'open' }).appendChild(mountPoint);


			ReactDOM.render(<Component />, mountPoint);
		}
	}
}

// create custom elementfor component and export

