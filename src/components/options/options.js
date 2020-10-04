const component = require('../component');
const Option = require('./option');
const OptionGroup = require('./optionGroup');

module.exports = class Options extends component {
	constructor() {
		super();
		this.optionsGroups = {};
	}
	setCurrentOptionGroup(newOptionGroupName) {
		document.getElementById('menus').innerHTML = '';
		document.getElementById('menus').appendChild(this.optionsGroups[newOptionGroupName])
	}
	callMenuFunction(name) {
		
		return () => {
			window.dispatchEvent(new CustomEvent('showDisplay', {
				detail: name,
			}));
		}
	}
	build() {
		let mainMenuOptionGroup = new OptionGroup();

		mainMenuOptionGroup.addOption('./Packages',this.callMenuFunction('PackageDisplay'))
		mainMenuOptionGroup.addOption('./Communication',this.callMenuFunction(''))
		mainMenuOptionGroup.addOption('./Manual')
		mainMenuOptionGroup.addOption('./Tools')
		mainMenuOptionGroup.addOption('./Statistics')
		mainMenuOptionGroup.addOption('./Settings')

		this.optionsGroups['MainMenu'] = mainMenuOptionGroup;

		document.getElementById('menus').appendChild(mainMenuOptionGroup.htmlComponent)

		window.addEventListener('changeCurrentOptionGroup', (evt) => {
			this.setCurrentOptionGroup(evt.detail);
		});
	}
};