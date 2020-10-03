const StandardDisplay = require('../../standardDisplay');

module.exports =  class PackageDisplay extends StandardDisplay{
	constructor(){
		super('PackageDisplay');
		this.build();
	}
	build(){
		this.htmlComponent.innerHTML = `
			<fieldset class="package">
							<legend class="packageTitle">Package 1</legend>
							<span class="glow">{ date: 03-07-20 00:00,</span><br>
							<span class="glow">&nbsp;&nbsp;local: "Valles Marineris",</span><br>
							<span class="glow">&nbsp;&nbsp;sensors:{</span><br>
							<span class="glow">&nbsp;&nbsp;&nbsp;&nbsp;temperature: 2,</span><br>
							<span class="glow">&nbsp;&nbsp;&nbsp;&nbsp;pressure: 3,</span><br>
							<span class="glow">&nbsp;&nbsp;&nbsp;&nbsp;blabla: 2,</span><br>
							<span class="glow">&nbsp;&nbsp;}</span><br>
							<span class="glow">&nbsp;&nbsp;comments:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"</span><br>
							<span class="glow">}</span>
						</fieldset>
						<fieldset class="package">
							<legend class="packageTitle">Pacote 2</legend>
							<span class="glow">Texto 1</span>
							<span class="glow">Texto 2</span>
							<span class="glow">00:00</span>
						</fieldset>
		`
	}
}