module.exports = class Packet {
	constructor(packetData) {
		this.htmlComponent = document.createElement('fieldset');
		this.htmlComponent.classList.add('packet');
		this.dataContainer = document.createElement('textarea');
		this.dataContainer.classList.add('packet');
		this.dataContainer.classList.add('glow');
		this.data = packetData;
		this.title = this.data.title;
		this.build();
	}
	build() {
		let legend = document.createElement('legend');
		legend.className = 'packetTitle'

		legend.textContent = this.data.title;
		this.dataContainer.value = JSON.stringify(this.data.packet, undefined, 4);
		this.dataContainer.disabled = true;

		this.htmlComponent.appendChild(legend);
		this.htmlComponent.appendChild(this.dataContainer);
	}
}