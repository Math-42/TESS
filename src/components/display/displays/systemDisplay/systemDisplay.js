const StandardDisplay = require('../../standardDisplay');

module.exports = class PackageDisplay extends StandardDisplay {
	constructor() {
		super('SystemDisplay');
	}
	build() {
		this.htmlComponent.innerHTML = `
			<img src="../assets/images/nadir.png" class="flags w-100" draggable="false">  

			<br><br>
			<h2 class="glow">Our first sufficiently stable operating system</h2>
			<h2 class="glow">release date: 10-4-20</h2>
		
		`
		this.htmlComponent.style.textAlign = 'center'
	}
}