const StandardDisplay = require('../../standardDisplay');
const Antenna = require('./antenna');

module.exports =  class Display extends StandardDisplay{
	constructor(){
		super('DSNdisplay');

        this.htmlComponent = document.createElement('fieldset');
        this.htmlComponent.classList.add('package');

        this.title = document.createElement('legend');
        this.title.classList.add('packageTitle');
        this.title.textContent = 'Deep Space Network'

        this.htmlComponent.appendChild(this.title)

        this.htmlContainer = document.createElement('div');
        this.htmlContainer.style.display = 'flex';

        this.htmlComponent.appendChild(this.htmlContainer);

        this.Antenna1 = new Antenna('Spain',3);
        this.Antenna2 = new Antenna('Spain',1);
        this.Antenna3 = new Antenna('USA',1);
        this.Antenna4 = new Antenna('Australia',1);
    }
	build(){
        this.htmlContainer.classList.add('row');
        this.htmlContainer.append(this.Antenna1.htmlComponent);
        this.htmlContainer.append(this.Antenna2.htmlComponent);
        this.htmlContainer.append(this.Antenna3.htmlComponent);
        this.htmlContainer.append(this.Antenna4.htmlComponent);
	}
}