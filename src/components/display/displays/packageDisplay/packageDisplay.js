const StandardDisplay = require('../../standardDisplay');
const Package = require('./package');
const fs = require('fs');

module.exports = class PackageDisplay extends StandardDisplay {
	constructor() {
		super('PackageDisplay');
		this.packages = {};
	}

	addPackage(packagePath) {
		const myNotification = new Notification('ZenJogo', {
			body: 'New package arrived!!'
		})

		let newPackage = new Package(packagePath);
		this.packages[newPackage.title] = newPackage.htmlComponent;
	}

	openPackage() {
		this.htmlComponent.innerHTML = '';
	}

	build() {
		this.addPackage('./src/packages/mission1.json');

		window.addEventListener('addNewPackage', (evt) => {
			this.addPackage(evt.detail);
		});

		window.addEventListener('openPackage', (evt) => {
			window.dispatchEvent(new CustomEvent('showDisplay', {
				detail: 'PackageDisplay',
			}));
			console.log(evt.detail,this.packages);
			this.htmlComponent.appendChild(this.packages[evt.detail]);
		});
	}
}