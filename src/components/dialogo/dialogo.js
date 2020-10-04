const component = require('../component');


module.exports = class Options extends component {
    constructor() {
        super();
    }



    createText(text, role) {
        var n = document.createElement("div");
        n.innerHTML = text;
        if (role == 'text')
            n.className = role + " " + "cbbl -right";
        else
            n.className = role + " " + "cbbl";

        n.style = "-webkit-animation-delay: 1s;animation-delay: 1s;"
        return n;

    }


    addResponse(text) {
        var dialogos = document.getElementsByClassName("texts");
        var texts = dialogos[0];

        texts.appendChild(createText(text, "response"));
        console.log(texts);

    }

    addText(text) {
        var texts = document.getElementsByClassName("texts")[0];
        texts.appendChild(createText(text, "text"));
        // console.log(texts);
    }


    build() {

        let divTexts = document.createElement('div');
        divTexts.className = "texts";

        let divActors = document.createElement('div');
        divActors.className = "actors";

        let imgActor = document.createElement('image');
        imgActor.setAttribute("src", "../images/Consultor.gif")
        imgActor.className = "actor";
        divActors.appendChild(imgActor);

        let imgChar = document.createElement('image');
        imgChar.setAttribute("src", "../images/NASAemploye.gif")
        imgChar.className = "char";
        divActors.appendChild(imgChar);

        let divScreen = document.createElement('div');
        divScreen.className = "screen";
        divScreen.appendChild(divTexts);
        divScreen.appendChild(divActors);

        let divPhone = document.createElement('div');
        divPhone.className = "phone";
        divPhone.appendChild(divScreen);

        let divTerminal = document.createElement('div');
        divTerminal.className = "terminal";
        divTerminal.appendChild(divPhone);

        let display = document.getElementById("display");
        display.appendChild(divTerminal);
    }
};