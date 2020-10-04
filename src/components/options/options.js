const component = require('../component');
const Option = require('./option');
const OptionGroup = require('./optionGroup');

module.exports = class Options extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.mainMenuOptionGroup = new OptionGroup('mainMenuOptionGroup');
		this.toolsOptionGroup = new OptionGroup('toolsOptionGroup');
		this.manualOptionGroup = new OptionGroup('manualOptionGroup');
		this.packageOptionGroup = new OptionGroup('packageOptionGroup');
		this.optionsGroups = {};
	}

	addOptionGroup(optionGroup) {
		this.optionsGroups[optionGroup.optionGroupName] = optionGroup.htmlComponent;
		this.htmlComponent.appendChild(optionGroup.htmlComponent);
		optionGroup.build();
	}

	setCurrentOptionGroup(newOptionGroupName) {
		window.dispatchEvent(new CustomEvent('showOptionGroup', {
			detail: newOptionGroupName,
		}));
	}

	callOptionGroupFunction(name) {
		
		return () => {
			
			window.dispatchEvent(new CustomEvent('showOptionGroup', {
				detail: name,
			}));
		}
	}

	callMenuFunction(name) {

		return () => {
			window.dispatchEvent(new CustomEvent('showDisplay', {
				detail: name,
			}));
		}
	}

	packageOptionGroupOpt(){
		this.addOptionGroup(this.packageOptionGroup);
		this.optionsGroups['packageOptionGroup'] = this.packageOptionGroup;

		this.packageOptionGroup.addOption('<= cd ..', this.callOptionGroupFunction('mainMenuOptionGroup'));
		this.packageOptionGroup.addOption('./Package1.bag', this.callMenuFunction('PackageDisplay'))
		this.packageOptionGroup.addOption('./Package2.bag', this.callMenuFunction('PackageDisplay'))
		this.packageOptionGroup.addOption('./Package3.bag', this.callMenuFunction('PackageDisplay'))
	}

	mainMenuOptionGroupOpt(){
		this.addOptionGroup(this.mainMenuOptionGroup);
		this.optionsGroups['mainMenuOptionGroup'] = this.mainMenuOptionGroup;

		this.mainMenuOptionGroup.addOption('/Packages', this.callOptionGroupFunction('packageOptionGroup'))
		this.mainMenuOptionGroup.addOption('/Communication', this.callOptionGroupFunction('toolsOptionGroup'))
		this.mainMenuOptionGroup.addOption('/Manual', this.callOptionGroupFunction('manualOptionGroup'))
		this.mainMenuOptionGroup.addOption('/Tools', this.callOptionGroupFunction('toolsOptionGroup'))
		this.mainMenuOptionGroup.addOption('/Statistics')
		this.mainMenuOptionGroup.addOption('/Settings')
	}

	toolsOptionGroupOpt() {
		this.addOptionGroup(this.toolsOptionGroup);
		this.optionsGroups['tools'] = this.toolsOptionGroup.htmlComponent;

		this.toolsOptionGroup.addOption('<= cd ..', this.callOptionGroupFunction('mainMenuOptionGroup'));
		this.toolsOptionGroup.addOption('./DSN.exe', this.callMenuFunction('DSNdisplay'));
	}

	manualOptionGroupOpt() {
		this.addOptionGroup(this.manualOptionGroup);
		this.optionsGroups['tools'] = this.manualOptionGroup.htmlComponent;

		this.manualOptionGroup.addOption('<= cd ..', this.callOptionGroupFunction('mainMenuOptionGroup'));
	}

	build() {	
		
		this.mainMenuOptionGroupOpt()
		this.toolsOptionGroupOpt()
		this.packageOptionGroupOpt()
		this.manualOptionGroupOpt()
		
		this.setCurrentOptionGroup('mainMenuOptionGroup');

		document.getElementById('menus').appendChild(this.htmlComponent);

		window.addEventListener('changeCurrentOptionGroup', (evt) => {
			this.setCurrentOptionGroup(evt.detail);
		});
	}
};