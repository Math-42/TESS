const component = require('../../component');

module.exports = class Header extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.earthClock = document.createElement('div');
		this.marsClock = document.createElement('div');
		this.build();
	}
	changeTime() {
		let today = new Date();
		let h = today.getHours();
		let m = today.getMinutes();
		let s = today.getSeconds();
		m = (m < 10) ? 0 + m : m;
		s = (s < 10) ? 0 + s : s;
		this.marsClock.textContent = h + ":" + m + ":" + s;
		this.earthClock.textContent = h + ":" + m + ":" + s;
		this.startTime()
	}
	startTime() {
		setTimeout(()=>{window.dispatchEvent(new CustomEvent('setTime'))}, 500);
	}
	build() {
		this.htmlComponent.classList.add('glow');
		this.htmlComponent.appendChild(this.marsClock)
		this.htmlComponent.appendChild(this.earthClock)

		window.addEventListener('setTime', () => {
			this.changeTime();

		});
	}
}