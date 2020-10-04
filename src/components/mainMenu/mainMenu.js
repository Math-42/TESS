const component = require('../component')

module.exports = class MainMenu extends component{
	constructor(){
		super();
		this.newGameOpt = document.createElement('button');
		this.continueGameOpt = document.createElement('button');
		this.exitOpt = document.createElement('button');
	}
	newGame(){
		document.getElementById("tutorial").style.display = 'block'
		document.getElementById("mainMenu").style.display = 'none'
	}
	continueGame(){
		document.getElementById("mainContainer").style.display = 'flex'
		document.getElementById("mainMenu").style.display = 'none'
	}
	build(){
		document.getElementById("tutorial").style.display = 'none'

		this.newGameOpt.textContent = './New_Game.exe'
		this.continueGameOpt.textContent = './Continue.exe'
		this.exitOpt.textContent = 'Exit()'

		this.newGameOpt.className = "glow option m-0"
		this.continueGameOpt.className = "glow option m-0"
		this.exitOpt.className = "glow option m-0"

		document.getElementById('mainMenuOptions').appendChild(this.newGameOpt)
		document.getElementById('mainMenuOptions').appendChild(this.continueGameOpt)
		document.getElementById('mainMenuOptions').appendChild(this.exitOpt)

		this.newGameOpt.onclick = ()=>{this.newGame()};
		this.continueGameOpt.onclick = ()=>{this.continueGame()};
		this.exitOpt.onclick = ()=>{};
	}
}