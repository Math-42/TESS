const StandardDisplay = require('../../standardDisplay');
const Package = require('./package');
const GlobalMecanics = require('../../../globalMecanics/globalMecanics')
module.exports = class PackageDisplay extends StandardDisplay {
	constructor() {
		super('PackageDisplay');
		this.packages = {};
	}

	addPackage(packageName, notify) {
		let packageData = GlobalMecanics.getPackage(packageName);
		let newPackage = new Package(packageData);
		this.packages[newPackage.title] = newPackage.htmlComponent;

		if (notify === false) return
		const myNotification = new Notification('ZenJogo', {
			body: 'New package arrived!!' + newPackage.title
		})


	}

	build() {
		this.addPackage('package_1', false);

		window.addEventListener('addNewPackage', (evt) => {
			this.addPackage(evt.detail);
		});

		window.addEventListener('openPackage', (evt) => {
			this.htmlComponent.innerHTML = '';
			window.dispatchEvent(new CustomEvent('showDisplay', {
				detail: 'PackageDisplay',
			}));
			this.htmlComponent.appendChild(this.packages[evt.detail]);
		});
	}
}