const StandardDisplay = require('../../standardDisplay');

module.exports =  class Display extends StandardDisplay{
	constructor(){
		super('DSNdisplay');
		//this.build();
    }
    createButton(){
        let spacecraftList = ["InSight Lander", "Maren", "Mars Odyssey", "Mars 2020", "Mars Reconnaissance Orbiter"]

        this.nextArrow = document.createElement('button')
        this.nextArrow.classList = 'col btn btn-default btn-ghost glow option'
        this.nextArrow.textContent = '>'

        this.backArrow = document.createElement('button')
        this.backArrow.classList = 'col btn btn-default btn-ghost glow option'
        this.backArrow.textContent = '<'

        this.option = document.createElement('button')
        this.option.classList = 'col btn btn-default btn-ghost glow option DSNoption'
        this.option.textContent = spacecraftList[0]

        document.getElementById('DSNrow').appendChild(this.backArrow)
        document.getElementById('DSNrow').appendChild(this.option)
        document.getElementById('DSNrow').appendChild(this.nextArrow)
        
    }
    activatedSatellite(){
        this.activeSatellite = document.createElement('img')
        this.activeSatellite.draggable = false;
        this.activeSatellite.classList.add('col-3')
        this.activeSatellite.src = "../assets/images/Satellite.gif"
        this.activeSatellite.classList.add("Satellite")
        document.getElementById('satelliteRow').appendChild(this.activeSatellite)
    }
    deactivatedSatellite(){
        this.deactiveSatellite = document.createElement('img')
        this.deactiveSatellite.draggable = false;
        this.deactiveSatellite.classList.add('col-3')
        this.deactiveSatellite.src = "../assets/images/Satellite.png"
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
                    <img src="../assets/images/Spain.png" class="flags col-3" draggable="false">            
                    <img src="../assets/images/Spain.png" class="flags col-3" draggable="false">  
                    <img src="../assets/images/USA.png" class="flags col-3" draggable="false">  
                    <img src="../assets/images/Australia.png" class="flags col-3" draggable="false">  
                </div>
                <div class= "row" id="DSNrow">              
                    
                </div>
                <div class= "row" id="DSNrow"> 
                    
                </div>
                <div class= "row" id="DSNrow">
                    
                </div>
			</fieldset>
        `
        this.activatedSatellite();
        this.activatedSatellite();
        this.activatedSatellite();
        this.deactivatedSatellite();

        this.createButton();
        this.createButton();
        this.createButton();
        this.createButton();
	}
}