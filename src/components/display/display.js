const component = require('../component');
const PackageDisplay = require('./displays/packageDisplay/packageDisplay');
const DSNDisplay = require('./displays/DSNdisplay/DSNdisplay');
const SystemDisplay = require('./displays/systemDisplay/systemDisplay');

const TutorialDisplay = require('./displays/TutorialDisplay/TutorialDisplay');
const DSNManualDisplay = require('./displays/manual/DSN.js')
const MarsManualDisplay = require('./displays/manual/mars.js')

module.exports = class Display extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.packageDisplay = new PackageDisplay();
		this.DSNDisplay = new DSNDisplay();
		this.SystemDisplay = new SystemDisplay();
    this.TutorialDisplay = new TutorialDisplay();
		this.DSNManualDisplay = new DSNManualDisplay();
		this.MarsManualDisplay = new MarsManualDisplay();
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
		this.addDisplay(this.packageDisplay);
		this.addDisplay(this.DSNDisplay);
		this.addDisplay(this.SystemDisplay);
		this.addDisplay(this.DSNManualDisplay);
		this.addDisplay(this.MarsManualDisplay);
    	this.addDisplay(this.TutorialDisplay);

		this.setCurrentDisplay('SystemDisplay')

        this.setCurrentDisplay('SystemDisplay')

        window.addEventListener('setCurrentDisplay', (evt) => {

            this.setCurrentDisplay(evt.detail)

        });
    }
}