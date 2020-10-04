const StandardDisplay = require('../../standardDisplay');

module.exports = class Display extends StandardDisplay {
    constructor() {
        super('Manual_Spacecraft');
    }
    build() {
        this.htmlComponent.innerHTML = `
			<fieldset class="package">
                <legend class="packageTitle">Lander</legend>
                
            </fieldset>

            <fieldset class="package">
                <legend class="packageTitle">Orbiters</legend>
                
            </fieldset>
        `
    }
}