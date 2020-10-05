const packets = require('../../../assets/packets/packets.json');
module.exports = class GlobalMecanics {
	static sendPacket(packetName, timeInMs) {

		setTimeout(() => {
			window.dispatchEvent(new CustomEvent('addNewPacket', {
				detail: packetName,
			}));
		}, timeInMs);
	}

	static getPacket(packetName) {
		return packets[packetName]
	}
	
	static demoEnd(){

	}
}