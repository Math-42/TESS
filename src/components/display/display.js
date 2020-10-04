const component = require('../component');
const PackageDisplay = require('./displays/packageDisplay/packageDisplay');

module.exports =  class Display extends component{
	constructor(){
		super();
		this.htmlComponent = document.createElement('div');
		this.packageDisplay = new PackageDisplay();
		this.displayGroup = {};
	}
	setCurrentDisplay(newOptionGroupName){
		this.htmlComponent.innerHTML = '';
		this.htmlComponent.appendChild(this.displayGroup[newOptionGroupName])
	}
	build(){
		document.getElementById('display').appendChild(this.htmlComponent);
		this.displayGroup['PackageDisplay'] = this.packageDisplay.htmlComponent;
		this.setCurrentDisplay('PackageDisplay');
	}
}