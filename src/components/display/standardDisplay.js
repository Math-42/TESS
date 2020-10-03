const component = require('../component');

module.exports = class Display extends component {
	constructor(nome) {
		super();

		this.displayName = nome;
		this.htmlComponent = document.createElement('div');

		this.htmlComponent.addEventListener('showDisplay', (evt) => {

			if (evt.detail.name == this.displayName) {

				this.onLoad();
				this.menuComponent.style.display = 'block';

			} else {

				this.menuComponent.style.display = 'none';
			}

		});
	}
}