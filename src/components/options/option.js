const component = require('../component');

module.exports =  class Option extends component{
	constructor(label){
		super();
		this.htmlComponent = document.createElement('button');
		this.htmlComponent.className = 'glow option row m-0';
		this.htmlComponent.textContent = label;
		this.build();
	}
	onlick(callBackFunction){
		this.htmlComponent.addEventListener('click',callBackFunction);
	}
};