const StandardDisplay = require('../../standardDisplay');

module.exports = class Display extends StandardDisplay {
    constructor() {
        super('Manual_DNS');
    }
    build() {
        this.htmlComponent.innerHTML = `
			<fieldset class="package">
                <legend class="packageTitle">How it works?</legend>
                <div class="row">
                    <span class="col glow" align='justify'>&nbsp;&nbsp;The Deep Space Network (DSN) consists of three equidistant facilities that give you the ability to communicate with the space and with radio signals. The DSN has the power to make interplanetary communications for NASA and non-NASA missions. <br>
                    &nbsp;&nbsp;This three facilities work in a way to find our powerful spacecraft in the deep universe, but how does it is possible to communicate with the space? The strategic placement of these sites permits constant communication with spacecraft as our planet rotates. I mean, before even a spacecraft sinks below the horizon at one DSN site, another site can pick up the signal and carry on communicating.</span>
                    
                    <img src="../assets/images/Satellite.gif" class="col DSNmanual"></img>
                </div>
                </div>
                    <span class="col glow" align='justify'> <br>
                    &nbsp;&nbsp;It has the ability to command, track spacecraft, telemetry data, perform science experiments with radio signals and be used as an advanced instrument for scientific research, including radio astronomy and radar mapping of passing asteroids. <br>
                    &nbsp;&nbsp;Well, a lot of information, huh ? But don’t worry, you will get everything with time, now you just need to click on /Tools and ./DSN.sh to connect ourselves with the spacecraft. But remember the 7.18 GHz e 7.48 GHz frequency are destructives, you can not use them in the same antenna.</span><br>
                </div>
            </fieldset>
            <fieldset class="package">
            <legend class="packageTitle">Where is it?</legend>	
                <div class="row">
                    <img src="../assets/images/Spain.png" class="col antenna"></img>
                    <img src="../assets/images/USA.png" class="col antenna"></img>
                    <img src="../assets/images/Australia.png" class="col antenna"></img>
                </div>
                <span class="glow">&nbsp;&nbsp;We operate DSN on NASA's Jet Propulsion Laboratory (JPL). Our antennas are equipped with at least 4 huge antennas in Goldstone (California), Madrid (Spain) and Canberra (Australia).</span>
            </fieldset>
        `
    }
}