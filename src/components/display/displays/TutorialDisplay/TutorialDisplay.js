const StandardDisplay = require('../../standardDisplay');


module.exports = class TutorialDisplay extends StandardDisplay {
    constructor() {
        super("TutorialDisplay");
        this.timer = -1;
        this.flow = [{
                time: 0,
                role: "response",
                text: "Hey! You are in NASA's Kennedy Space Center. You must be very excited about your first day here!"
            }, {
                time: 1,
                role: "response",
                text: "You gonna work in our mission control room at the Space Flight Operations Facility."
            }, {
                time: 2,
                role: "response",
                text: "Your main assignment is to maintain a effective telecom system to keep in touch with astronauts in Mars"
            }, {
                time: 3,
                role: "text",
                text: "You mean: talk to them by phone or something?"
            }, {
                time: 4,
                role: "response",
                text: "For now, phones are not a possibility. You will connect with them by our special communication system, Deep Space Network or DSN. "
            }, {
                time: 5,
                role: "response",
                text: "DSN is NASA’s international array of giant radio antennas that supports interplanetary spacecraft missions."
            },
            {
                time: 6,
                role: "response",
                text: "Introduzir o budget , a ideia de redes de comunicação e a comunicação com o astronauta "
            }, {
                time: 7,
                role: "text",
                text: "Wow! But I do have that it takes to communicate with them?"
            }, {
                time: 8,
                role: "response",
                text: "Trust me, you will receive very thing it needs in your NASA's Technical Manual."
            }, {
                time: 9,
                role: "text",
                text: "Thanks! I'll do my best!"
            }
        ];
        // // TALVEZ ISSO SEJA MELHOR EM OUTRO LUGAR
        this.interval = {};

        this.texts = document.createElement('div');
        this.texts.className = "texts";
    }



    createText(text, role, t) {
        var n = document.createElement("div");
        n.innerHTML = text;
        if (role == 'text')
            n.className = role + " " + "cbbl -right";
        else
            n.className = role + " " + "cbbl";

        n.style = `-webkit-animation-delay: ${t}s;animation-delay: 1s;`
        return n;

    }

    add(text, role) {
        var dialogos = document.getElementsByClassName("texts");
        var texts = dialogos[0];
        // console.log(this.texts);
        texts.appendChild(this.createText(text, role));

    }

    showTutorial() {
        this.timer++;
        console.log(this.timer);
        this.flow.forEach(
            (point) => {
                if (this.timer == point.time) {
                    this.add(point.text, point.role);
                }
                if (this.timer > this.flow[this.flow.length - 1].time + 1) {
                    clearInterval(this.interval);
                }
            }
        );
    }


    build() {

        console.log(this.texts);

        let divActors = document.createElement('div');
        divActors.className = "actors";

        let imgActor = document.createElement('img');
        imgActor.setAttribute("src", "../images/Consultor.gif");
        imgActor.className = "actor";
        divActors.appendChild(imgActor);

        let imgChar = document.createElement('img');
        imgChar.setAttribute("src", "../images/NASAemploye.gif");
        imgChar.className = "char";
        divActors.appendChild(imgChar);

        let divScreen = document.createElement('div');
        divScreen.className = "screen";
        console.log(this.texts);
        divScreen.appendChild(this.texts);
        divScreen.appendChild(divActors);

        let divPhone = document.createElement('div');
        divPhone.className = "phone";
        divPhone.appendChild(divScreen);

        let divTerminal = document.createElement('div');
        divTerminal.className = "terminal";
        divTerminal.appendChild(divPhone);

        this.htmlComponent.innerHTML = `<div class='terminal'> ${divTerminal.innerHTML} </div>`;

        window.addEventListener('showDisplay', (event) => {
            if (event.detail == "TutorialDisplay") {
                this.interval = setInterval(() => {
                    this.showTutorial();
                }, 1000);
            } else {
                // clearInterval(this.interval);
                var dialogos = document.getElementsByClassName("texts")[0];
                this.timer = 0;
                dialogos.innerHTML = "";
            }
        });
    }
};