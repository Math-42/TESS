const component = require('../component');
const Option = require('./option');

module.exports = class OptionGroup extends component {
	constructor(name) {
		super();
		this.optionGroupName = name;
		this.htmlComponent = document.createElement('div');
	}

	addOption(label, callBackFunction) {
		let newOption = new Option(label);
		newOption.onlick(callBackFunction);
		this.htmlComponent.appendChild(newOption.htmlComponent);
	}

	build() {
		window.addEventListener('showOptionGroup', (evt) => {
			if (evt.detail === this.optionGroupName) {

				this.htmlComponent.style.display = 'block';

			} else {

				this.htmlComponent.style.display = 'none';
			}

		});
	}
};