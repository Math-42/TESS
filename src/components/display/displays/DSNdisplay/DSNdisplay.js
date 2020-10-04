const StandardDisplay = require('../../standardDisplay');

module.exports =  class Display extends StandardDisplay{
	constructor(){
		super('DSNdisplay');
		//this.build();
    }
    activatedSatellite(){
        this.activeSatellite = document.createElement('img')
        this.activeSatellite.src = "../images/Satellite.gif"
        this.activeSatellite.classList.add("satellite")
        document.getElementById('satelliteRow').appendChild(this.activeSatellite)
    }
    deactivatedSatellite(){
        this.deactiveSatellite = document.createElement('img')
        this.deactiveSatellite.src = "../images/Satellite.png"
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
                <div class= "row">              
                    <a href="#" class="previous">&#8249;</a>
                    <a href="#" class="next">&#8250;</a>
                </div>
			</fieldset>
        `
        this.activatedSatellite();
        this.activatedSatellite();
        this.activatedSatellite();
        this.deactivatedSatellite();
	}
}