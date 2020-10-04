const StandardDisplay = require('../../standardDisplay');

module.exports = class Communication extends StandardDisplay {

	constructor() {
		super('Communication')
		

		this.progress = 0;

		this.htmlComponent = document.createElement('fieldset');
		this.Container = document.createElement('div');

		this.htmlComponent.classList.add('package');
		this.htmlComponent.classList.add('h-100');

		this.title = document.createElement('legend');
		this.title.classList.add('packageTitle');
		this.title.textContent = 'Package Builder'

		this.htmlComponent.appendChild(this.title)

		this.htmlComponent.appendChild(this.Container);
	}
	build(){
		
	}

}