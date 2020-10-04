const StandardDisplay = require('../../standardDisplay');

module.exports =  class Display extends StandardDisplay{
	constructor(){
		super('DSNdisplay');
		//this.build();
    }

    activatedSatellite(){
        this.activeSatellite = document.createElement('img')
        this.activeSatellite.draggable = false;
        this.activeSatellite.classList.add('col-3')
        this.activeSatellite.src = "../images/Satellite.gif"
        this.activeSatellite.classList.add("Satellite")
        document.getElementById('satelliteRow').appendChild(this.activeSatellite)
    }
    deactivatedSatellite(){
        this.deactiveSatellite = document.createElement('img')
        this.deactiveSatellite.draggable = false;
        this.deactiveSatellite.classList.add('col-3')
        this.deactiveSatellite.src = "../images/Satellite.png"
        this.deactiveSatellite.classList.add("Satellite")
        document.getElementById('satelliteRow').appendChild(this.deactiveSatellite)
    }
	build(){
		this.htmlComponent.innerHTML = `
			<fieldset class="package">
				<legend class="packageTitle">Deep Space Network</legend>
                <div class= "row" id = "satelliteRow">              
                    
                </div>
                <div class= "row">              
                    <img src="../images/Spain.png" class="flags col-3" draggable="false">            
                    <img src="../images/Spain.png" class="flags col-3" draggable="false">  
                    <img src="../images/USA.png" class="flags col-3" draggable="false">  
                    <img src="../images/Australia.png" class="flags col-3" draggable="false">  
                </div>
			</fieldset>
        `
        this.activatedSatellite();
        this.activatedSatellite();
        this.activatedSatellite();
        this.deactivatedSatellite();
	}
}