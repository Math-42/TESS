const Options = require('../options/options');
const Display = require('../display/display');
const fs = require('fs');
const component = require('../component');

module.exports = class Window extends component{

	constructor() {
		super();
		this.options = new Options();
		this.display = new Display();
		this.htmlComponent = document.createElement('div');
	}

	build() {

		this.options.build();
		this.display.build();

		document.getElementById('mainContainer').appendChild(this.htmlComponent);

	}
}