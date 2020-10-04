module.exports = class Antenna {
	constructor(flagName, nmbrOfInputs) {

		this.htmlComponent = document.createElement('div');
		this.htmlComponent.classList.add('col-3');

		this.antenna = document.createElement('img');
		this.antenna.classList.add('antenna')
		this.antenna.draggable = false;

		this.flag = document.createElement('img');
		this.flag.src = "../assets/images/" + flagName + ".png";
		this.antenna.draggable = false;

		this.spacecrafContainer = document.createElement('div');
		this._active;

		this.nmbrOfInputs = nmbrOfInputs;

		this.spacecraftList = ["InSight Lander", "Maren", "Mars Odyssey", "Mars 2020", "MRO"]

		this.build();
		this.active = true;
	}
	set active(status) {
		if (status === true) {
			this.antenna.src = "../assets/images/Satellite.gif"
		} else {
			this.antenna.src = "../assets/images/Satellite.png"
		}
		this._active = this.active;
	}
	build() {
		this.htmlComponent.appendChild(this.antenna);
		this.htmlComponent.appendChild(this.flag)
		this.htmlComponent.appendChild(this.spacecrafContainer)

		for (let i = 0; i < this.nmbrOfInputs; i++) {
			let newInput = document.createElement('div');
			newInput.classList.add('row')

			let nextArrow;
			let backArrow;
			let option;

			nextArrow = document.createElement('button')
			nextArrow.classList = 'col-3 btn-ghost glow option'
			nextArrow.textContent = '>'

			backArrow = document.createElement('button')
			backArrow.classList = 'col-3 btn-ghost glow option'
			backArrow.textContent = '<'

			option = document.createElement('button')
			option.classList = 'col-6  btn-ghost glow option DSNoption'
			option.textContent = this.spacecraftList[i]

			nextArrow.onclick = () => {
				let i = this.spacecraftList.indexOf(option.textContent);
				i = Math.abs((i+1)%(this.spacecraftList.length))
				option.textContent = this.spacecraftList[i];
			}

			backArrow.onclick = () => {
				let i = this.spacecraftList.indexOf(option.textContent);
				i = ((i-1 == -1) ? this.spacecraftList.length-1 : i-1);
				option.textContent = this.spacecraftList[i];
			}

			newInput.appendChild(backArrow)
			newInput.appendChild(option)
			newInput.appendChild(nextArrow)

			this.spacecrafContainer.appendChild(newInput)
		}
	}
}