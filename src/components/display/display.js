const component = require('../component');
const PacketDisplay = require('./displays/packetDisplay/packetDisplay');
const DSNDisplay = require('./displays/DSNdisplay/DSNdisplay');
const SystemDisplay = require('./displays/systemDisplay/systemDisplay');
const Communication = require('./displays/communication/communication')
const DSNManualDisplay = require('./displays/manual/DSN.js')
const MarsManualDisplay = require('./displays/manual/mars.js')
const SpacecraftManualDisplay = require('./displays/manual/spacecrafts.js')

module.exports = class Display extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.packetDisplay = new PacketDisplay();
		this.DSNDisplay = new DSNDisplay();
		this.SystemDisplay = new SystemDisplay();
		this.Communication = new Communication();
		this.DSNManualDisplay = new DSNManualDisplay();
		this.MarsManualDisplay = new MarsManualDisplay();
		this.SpacecraftManualDisplay = new SpacecraftManualDisplay();
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
		this.addDisplay(this.packetDisplay);
		this.addDisplay(this.DSNDisplay);
		this.addDisplay(this.SystemDisplay);
		this.addDisplay(this.DSNManualDisplay);
		this.addDisplay(this.MarsManualDisplay);
		this.addDisplay(this.SpacecraftManualDisplay);
		this.addDisplay(this.Communication);

        this.setCurrentDisplay('SystemDisplay')

        window.addEventListener('setCurrentDisplay', (evt) => {

            this.setCurrentDisplay(evt.detail)

        });
    }
}