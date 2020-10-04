const StandardDisplay = require('../standardDisplay');

module.exports =  class Display extends StandardDisplay{
	constructor(){
		super();
		this.build();
    }
    activatedSatellite(){
        this.activeSatellite = document.createElement('img')
        this.activeSatellite.src = "../images/satellite.gif"
        this.activeSatellite.classList.add("satellite")
        document.getElementById('satelliteRow').appendChild(this.activeSatellite)
    }
    deactivatedSatellite(){
        this.deactiveSatellite = document.createElement('img')
        this.deactiveSatellite.src = "../images/satellite.png"
        this.deactiveSatellite.classList.add("satellite")
        document.getElementById('satelliteRow').appendChild(this.deactiveSatellite)
    }
	build(){
		this.htmlComponent.innerHTML = `
			<fieldset class="package">
				<legend class="packageTitle">Deep Space Network</legend>
                <div class= "row" id = "satelliteRow">              
                    
                </div>
                <div class= "row">              
                    <img src="../images/Spain.png" class="flags">            
                    <img src="../images/Spain.png" class="flags">  
                    <img src="../images/USA.png" class="flags">  
                    <img src="../images/Australia.png" class="flags">  
                </div>
			</fieldset>
        `
        this.activatedSatellite();
        this.activatedSatellite();
        this.activatedSatellite();
        this.deactivatedSatellite();
	}
}