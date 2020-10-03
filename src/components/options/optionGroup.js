const component = require('../component');
const Option = require('./option');

module.exports = class OptionGroup extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this._options = [];
	}
	addOption(label, callBackFunction) {
		let newOption = new Option(label);
		newOption.onlick(callBackFunction);
		this.htmlComponent.appendChild(newOption.htmlComponent);
	}
};