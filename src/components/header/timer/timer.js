const component = require('../../component');

module.exports = class Header extends component {
	constructor() {
		super();
		this.htmlComponent = document.createElement('div');
		this.earthDiv = document.createElement('div');
		this.marsDiv = document.createElement('div');
		this.earthRotate = document.createElement('img');
		this.earthRotate.classList.add('planeta');
		this.earthRotate.draggable = false;
		this.marsRotate = document.createElement('img');
		this.marsRotate.classList.add('planeta');
		this.marsRotate.draggable = false;
		this.earthClock = document.createElement('div');
		this.marsClock = document.createElement('div');
		this.startedAt;
		this.build();

		this.marsHour = {
			h:0,
			m:0,
			n:0
		}
	}
	changeEarthTime() {
		let horario = new Date();
		let h = horario.getHours();
		let m = horario.getMinutes();
		let s = horario.getSeconds();
		h = (parseInt(h) < 10) ? '0' + h : h;
		m = (parseInt(m) < 10) ? '0' + m : m;
		s = (parseInt(s) < 10) ? '0' + s : s;
		this.earthClock.textContent = h + ":" + m + ":" + s;
	}
	
	changeMarsTime() {
		let horario = new Date();

		if(this.marsClock.s < 60){
			this.marsClock.s ++;
		}else{
			this.marsClock.s = 0;
			this.marsClock.m ++;
		}

		if(this.marsClock.m >= 60){
			this.marsClock.m = 0;
			this.marsClock.h ++;
		}

		if(this.marsClock.h >= 24){
			this.marsClock.h = 0;
		}

		let h = (parseInt(this.marsClock.h) < 10) ? '0' + this.marsClock.h : this.marsClock.h;
		let m = (parseInt(this.marsClock.m) < 10) ? '0' + this.marsClock.m : this.marsClock.m;
		let s = (parseInt(this.marsClock.s) < 10) ? '0' + this.marsClock.s : this.marsClock.s;

		this.marsClock.textContent = h + ":" + m + ":" + s;

	}

	startTime() {
		let horario = new Date();

		this.marsClock.h = horario.getHours();
		this.marsClock.m = horario.getMinutes();
		this.marsClock.s = horario.getSeconds();

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

		this.earthRotate.src = "../assets/images/EarthRotate.gif"
		this.marsRotate.src = "../assets/images/MarsRotate.gif"

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

		this.htmlComponent.classList.add('col')

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
			}, 1027);
		});

	}
}