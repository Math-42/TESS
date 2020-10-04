const StandardDisplay = require('../../standardDisplay');
const fs = require('fs');

module.exports = class PackageDisplay extends StandardDisplay {
	constructor() {
		super('SystemDisplay');
	}
	build() {
		this.htmlComponent.innerHTML = `
			<img src="../images/nadir.png" class="flags w-100" draggable="false">  

			<br><br>
			<h2 class="glow">Our first sufficiently stable operating system</h2>
			<h2 class="glow">---- V 3.14.15 -----</h2>
			<h2 class="glow">release date: 10-4-20</h2>
			
			<h2 class="glow">Patch notes:</h2>
			<h2 class="glow">Now running in electron!</h2>
			<h2 class="glow">Loren ipsum!</h2>
			<h2 class="glow"><strike> Este texto é riscado </strike></h2>
		
		`
		this.htmlComponent.style.textAlign = 'center'
	}
}