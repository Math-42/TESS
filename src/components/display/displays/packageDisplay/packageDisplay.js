const StandardDisplay = require('../../standardDisplay');
const Package = require('./package');
const fs = require('fs');

module.exports =  class PackageDisplay extends StandardDisplay{
	constructor(){
		super('PackageDisplay');
		this.build();
	}
	addPackage(packagePath){
		let newPackage = new Package(packagePath);
		this.htmlComponent.appendChild(newPackage.htmlComponent);
	}
	build(){
		this.addPackage('./src/packages/mission1.json');

		window.addEventListener('addNewPackage', (evt) => {
			this.addPackage(evt.detail);
		});
	}
}