const fs = require('fs');

module.exports = class Package{
	constructor(packagePath){
		this.htmlComponent = document.createElement('fieldset');
		this.htmlComponent.classList.add('package');
		this.dataContainer = document.createElement('textarea');
		this.dataContainer.classList.add('package');
		this.dataContainer.classList.add('glow');
		this.data = JSON.parse(fs.readFileSync(packagePath));
		this.build();
	}
	build(){
		let legend = document.createElement('legend');
		legend.className = 'packageTitle'

		legend.textContent = this.data.title;
		this.dataContainer.value = JSON.stringify(this.data.package,undefined,4);
		this.dataContainer.disabled = true;

		this.htmlComponent.appendChild(legend);
		this.htmlComponent.appendChild(this.dataContainer);
	}
}