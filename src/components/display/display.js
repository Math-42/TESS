const component = require('../component');
const PackageDisplay = require('./displays/packageDisplay/packageDisplay');

module.exports = class Display extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.packageDisplay = new PackageDisplay();
		this.displayGroup = {};
	}
	addDisplay(display) {
		this.displayGroup[display.displayName] = display.htmlComponent;
		this.htmlComponent.appendChild(this.displayGroup[display.displayName]);
		display.build();
	}
	setCurrentDisplay(newDisplayName) {
		window.dispatchEvent(new CustomEvent('showDisplay', {
			detail: newDisplayName,
		}));
	}
	build() {
		document.getElementById('display').appendChild(this.htmlComponent);
		this.addDisplay(this.packageDisplay);

		window.addEventListener('setCurrentDisplay', (evt) => {

			this.setCurrentDisplay(evt.detail)

		});
	}
}