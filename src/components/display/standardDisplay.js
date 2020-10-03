const component = require('../component');

module.exports = class Display extends component {
	constructor(nome) {
		super();

		this.displayName = nome;
		this.htmlComponent = document.createElement('div');

		window.addEventListener('showDisplay', (evt) => {
			
			if (evt.detail === this.displayName) {

				this.htmlComponent.style.display = 'block';

			} else {

				this.htmlComponent.style.display = 'none';
			}

		});
	}
}