module.exports = class Package {
	constructor(packageData) {
		this.htmlComponent = document.createElement('fieldset');
		this.htmlComponent.classList.add('package');
		this.dataContainer = document.createElement('textarea');
		this.dataContainer.classList.add('package');
		this.dataContainer.classList.add('glow');
		this.data = packageData;
		this.title = this.data.title;
		this.build();
	}
	build() {
		let legend = document.createElement('legend');
		legend.className = 'packageTitle'

		legend.textContent = this.data.title;
		this.dataContainer.value = JSON.stringify(this.data.package, undefined, 4);
		this.dataContainer.disabled = true;

		this.htmlComponent.appendChild(legend);
		this.htmlComponent.appendChild(this.dataContainer);
	}
}