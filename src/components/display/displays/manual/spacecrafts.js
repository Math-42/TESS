const StandardDisplay = require('../../standardDisplay');

module.exports = class Display extends StandardDisplay {
    constructor() {
        super('Manual_Spacecraft');
    }
    build() {
        this.htmlComponent.innerHTML = `
			<fieldset class="package">
                <legend class="packageTitle">Lander</legend>
                    <div class= "section">
                        <h1>Perseverance</h1>
                        <span class="col glow" align='justify'>&nbsp;&nbsp;The Perseverance rover is part of the Mars 2020 Mission and is a key for the future of researches on Mars. It will help us to find out more about the possibility of living on Mars. The rover will collect rock and soil samples to help us seek signs of ancient life.</span>
                    </div>
                    <div class= "section">
                        <h1>InSight Lander</h1>
                        <span class="col glow" align='justify'>&nbsp;&nbsp;What do you think it means InSight? According to Cambridge Dictionary, InSight means a clear, deep, and sometimes sudden understanding of a complicated problem or situation. But, we are not talking about grammar. In NASA, InSight means Interior Exploration using Seismic Investigations, Geodesy and Heat Transport. I mean this rover intends to study Mars deeeeeeeep inside. InSight will try to find out how the rocky planets of the inner solar system were shaped.</span>
                    </div>
                    <div class= "section">
                        <h1>Mars Science Laboratory: Curiosity</h1>
                        <span class='col glow' align='justify'>&nbsp;&nbsp;I mean, Curiosity is the largest and most capable rover ever sent to Mars and it is a fighter on Mars. It has been there since 2012… Pretty long time for a rover. It was sent to find out if Mars has the right environmental conditions to support life. But, with life, I mean, microbes. It has already found chemical and mineral evidence of past life on Mars and it is still working on it.</span>
                    </div>
            </fieldset>

            <fieldset class="package">
                <legend class="packageTitle">Orbiters</legend>
                <div class= "section">
                    <h1>Mars Odyssey</h1>
                </div>
                <div class= "section">
                    <h1>Mars Reconnaissance Orbiter</h1>
                </div>
                <div class= "section">
                    <h1>MAVEN</h1>
                </div>
            </fieldset>
        `
    }
}