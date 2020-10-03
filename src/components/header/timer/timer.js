const component = require('../../component');

module.exports = class Header extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.earthDiv = document.createElement('div');
		this.marsDiv = document.createElement('div');
		this.earthRotate = document.createElement('img');
		this.marsRotate = document.createElement('img');
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

		this.earthRotate.src = "../images/EarthRotate.gif"
		this.marsRotate.src = "../images/MarsRotate.gif"

		this.earthDiv.classList.add('row');
		this.marsDiv.classList.add('row')
		this.earthDiv.style.justifyContent = 'flex-end';
		this.marsDiv.style.justifyContent = 'flex-end';

		
		this.earthDiv.appendChild(this.earthClock)
		this.earthDiv.appendChild(this.earthRotate)

		this.marsDiv.appendChild(this.marsClock)
		this.marsDiv.appendChild(this.marsRotate)

		this.htmlComponent.appendChild(this.earthDiv)
		this.htmlComponent.appendChild(this.marsDiv)

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