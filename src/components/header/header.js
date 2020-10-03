const component = require('../component')
const Timer = require('./timer/timer')

module.exports =  class Header extends component{
	constructor(){
		super();
		this.timer = new Timer();
	}
	build(){
		let htmlComponent = document.createElement('span');
		htmlComponent.classList.add('glow');
		htmlComponent.textContent = "Jet_Propulsion_Laboratory";
		document.getElementById('headers').appendChild(htmlComponent);
		document.getElementById('headers').appendChild(this.timer.htmlComponent);
		this.timer.startTime();
	}
}