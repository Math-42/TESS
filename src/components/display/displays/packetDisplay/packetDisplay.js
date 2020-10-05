const StandardDisplay = require('../../standardDisplay');
const Packet = require('./packet');
const GlobalMecanics = require('../../../globalMecanics/globalMecanics')
module.exports = class PacketDisplay extends StandardDisplay {
	constructor() {
		super('PacketDisplay');
		this.packets = {};
	}

	addPacket(packetName, notify) {
		let packetData = GlobalMecanics.getPacket(packetName);
		let newPacket = new Packet(packetData);
		this.packets[newPacket.title] = newPacket.htmlComponent;

		if (notify === false) return
		const myNotification = new Notification('ZenJogo', {
			body: 'New packet arrived!!' + newPacket.title
		})


	}

	build() {
		this.addPacket('packet_1', false);

		window.addEventListener('addNewPacket', (evt) => {
			this.addPacket(evt.detail);
		});

		window.addEventListener('openPacket', (evt) => {
			this.htmlComponent.innerHTML = '';
			window.dispatchEvent(new CustomEvent('showDisplay', {
				detail: 'PacketDisplay',
			}));
			this.htmlComponent.appendChild(this.packets[evt.detail]);
		});
	}
}