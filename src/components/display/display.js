const component = require('../component');
const PackageDisplay = require('./displays/packageDisplay/packageDisplay');
const DSNDisplay = require('./displays/DSNdisplay/DSNdisplay');

module.exports = class Display extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.packageDisplay = new PackageDisplay();
		this.DSNDisplay = new DSNDisplay();
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
<<<<<<< HEAD
		this.setCurrentDisplay('PackageDisplay')
=======
		this.addDisplay(this.DSNDisplay);
>>>>>>> a975af204e87016ac8ce7873aaac7097307745c7

		window.addEventListener('setCurrentDisplay', (evt) => {

			this.setCurrentDisplay(evt.detail)

		});
	}
}