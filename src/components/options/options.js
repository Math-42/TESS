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
		this.packetOptionGroup = new OptionGroup('packetOptionGroup');
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
			window.dispatchEvent(new CustomEvent('showDisplay', {
				detail: 'SystemDisplay',
			}));
			window.dispatchEvent(new CustomEvent('showOptionGroup', {
				detail: name,
			}));
		}


	}

	openPacketFunction(name) {

		return () => {

			window.dispatchEvent(new CustomEvent('openPacket', {
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

	packetOptionGroupOpt() {
		this.addOptionGroup(this.packetOptionGroup);
		this.optionsGroups['packetOptionGroup'] = this.packetOptionGroup;

		this.packetOptionGroup.addOption('<= cd ..', this.callOptionGroupFunction('mainMenuOptionGroup'));
		this.packetOptionGroup.addOption('./Packet1.bag', this.openPacketFunction('packet_1'))

		window.addEventListener('addNewPacket', (evt) => {
			this.packetOptionGroup.addOption('./'+ evt.detail + '.bag', this.openPacketFunction(evt.detail))
		});
	}

	mainMenuOptionGroupOpt() {
		this.addOptionGroup(this.mainMenuOptionGroup);
		this.optionsGroups['mainMenuOptionGroup'] = this.mainMenuOptionGroup;

		this.mainMenuOptionGroup.addOption('/Readme.md', this.callMenuFunction('SystemDisplay'))

    
		this.mainMenuOptionGroup.addOption('/Packets', this.callOptionGroupFunction('packetOptionGroup'))
		this.mainMenuOptionGroup.addOption('/Communication', this.callMenuFunction('Communication'))
		this.mainMenuOptionGroup.addOption('/Manual', this.callOptionGroupFunction('manualOptionGroup'))
		this.mainMenuOptionGroup.addOption('/Tools', this.callOptionGroupFunction('toolsOptionGroup'))
		this.mainMenuOptionGroup.addOption('/Statistics')
		this.mainMenuOptionGroup.addOption('/Settings')
	}

	toolsOptionGroupOpt() {
		this.addOptionGroup(this.toolsOptionGroup);
		this.optionsGroups['tools'] = this.toolsOptionGroup.htmlComponent;

		this.toolsOptionGroup.addOption('<= cd ..', this.callOptionGroupFunction('mainMenuOptionGroup'));
		this.toolsOptionGroup.addOption('./DSN.sh', this.callMenuFunction('DSNdisplay'));
	}

	manualOptionGroupOpt() {
		this.addOptionGroup(this.manualOptionGroup);
		this.optionsGroups['tools'] = this.manualOptionGroup.htmlComponent;

		this.manualOptionGroup.addOption('<= cd ..', this.callOptionGroupFunction('mainMenuOptionGroup'));
		this.manualOptionGroup.addOption('./Packets.txt', this.callMenuFunction('DSNdisplay'));
		this.manualOptionGroup.addOption('./DSN.txt', this.callMenuFunction('Manual_DNS'));
		this.manualOptionGroup.addOption('./Mars.txt', this.callMenuFunction('Manual_Mars'));
		this.manualOptionGroup.addOption('./Spacecrafts.txt', this.callMenuFunction('Manual_Spacecraft'));
		this.manualOptionGroup.addOption('./WAP.txt', this.callMenuFunction('DSNdisplay'));
		this.manualOptionGroup.addOption('./Entanglement.txt', this.callMenuFunction('DSNdisplay'));
	}

	build() {

		this.mainMenuOptionGroupOpt()
		this.toolsOptionGroupOpt()
		this.packetOptionGroupOpt()
		this.manualOptionGroupOpt()

		this.setCurrentOptionGroup('mainMenuOptionGroup');

		document.getElementById('menus').appendChild(this.htmlComponent);

		window.addEventListener('changeCurrentOptionGroup', (evt) => {
			this.setCurrentOptionGroup(evt.detail);
		});
	}
};