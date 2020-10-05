const StandardDisplay = require('../../standardDisplay');

module.exports = class PacketDisplay extends StandardDisplay {
	constructor() {
		super('SystemDisplay');
	}
	build() {
		this.htmlComponent.innerHTML = `
			<img src="../assets/images/TESS.png" class="TESS" draggable="false">  

			<br><br>
			<h2 class="glow">Our first sufficiently stable operating system</h2>
			<h2 class="glow">release date: 10-4-20</h2>
			<h2 class="glow">---- V 0.0.1 ----</h2>
			<h2 class="glow">Designed by ./Nadir</h2>
		
		`
		this.htmlComponent.style.textAlign = 'center'
	}
}