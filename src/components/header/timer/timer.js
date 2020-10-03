const component = require('../../component');

module.exports = class Header extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.earthClock = document.createElement('div');
		this.marsClock = document.createElement('div');
		this.startedAt;
		this.build();
	}
	changeEarthTime() {
		let horario = new Date();
		let h = horario.getHours();
		let m = horario.getMinutes();
		let s = horario.getSeconds();
		h = (parseInt(m) < 10) ? '0' + h : h;
		m = (parseInt(m) < 10) ? '0' + m : m;
		s = (parseInt(s) < 10) ? '0' + s : s;
		this.earthClock.textContent = h + ":" + m + ":" + s;
	}
	changeMarsTime() {
		let horario = new Date();
		let h = horario.getHours();
		let m = horario.getMinutes();
		let s = horario.getSeconds();
		h = (parseInt(m) < 10) ? '0' + h : h;
		m = (parseInt(m) < 10) ? '0' + m : m;
		s = (parseInt(s) < 10) ? '0' + s : s;
		this.marsClock.textContent = h + ":" + m + ":" + s;

	}
	startTime() {
		setTimeout(() => {
			window.dispatchEvent(new CustomEvent('setEarthTime'))
		}, 1);
		setTimeout(() => {
			window.dispatchEvent(new CustomEvent('setMarsTime'))
		}, 1);
	}
	build() {
		this.startedAt = new Date();
		this.htmlComponent.classList.add('glow');
		this.htmlComponent.appendChild(this.marsClock)
		this.htmlComponent.appendChild(this.earthClock)

		window.addEventListener('setEarthTime', () => {
			this.changeEarthTime();
			setTimeout(() => {
				window.dispatchEvent(new CustomEvent('setEarthTime'))
			}, 500);
		});

		window.addEventListener('setMarsTime', () => {
			this.changeMarsTime();
			setTimeout(() => {
				window.dispatchEvent(new CustomEvent('setMarsTime'))
			}, 1433);
		});

	}
}