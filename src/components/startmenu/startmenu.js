const component = require('../component');


module.exports = class StartMenu extends component {
    constructor() {
        super();
    }
    handleNewGame(event) {
        // go to tutorial 
        // console.log("Going to Tutorial");
    }
    handleContinue(event) {
        //! go ??? 

    }
    build() {
        let display = document.getElementById("display");

        let btnContinue = document.createElement("button");
        btnContinue.innerHTML = "CONTINUE";
        btnContinue.addEventListener('click', this.handleContinue);

        let btnNewGame = document.createElement("button");
        btnNewGame.innerHTML = "NEW GAME";
        btnNewGame.addEventListener('click', this.handleNewGame);

        let divBtns = document.createElement("div");
        divBtns.id = "start-menu"
        divBtns.className = "start-menu";

        divBtns.appendChild(btnNewGame);
        divBtns.appendChild(btnContinue);

        display.appendChild(divBtns);
    }
}