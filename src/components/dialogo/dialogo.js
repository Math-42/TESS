const component = require('../component');


module.exports = class Options extends component {
    constructor() {
        super();
        this.timer = -1;
        this.flow = [{
                time: 0,
                role: "response",
                text: "Hey! You are in NASA's Kennedy Space Center. You must be very excited about your first day here!"
            }, {
                time: 2,
                role: "response",
                text: "You gonna work in our mission control room at the Space Flight Operations Facility."
            }, {
                time: 4,
                role: "response",
                text: "Your main assignment is to maintain a effective telecom system to keep in touch with astronauts in Mars"
            }, {
                time: 7,
                role: "text",
                text: "You mean: talk to them by phone or something?"
            }, {
                time: 11,
                role: "response",
                text: "For now, phones are not a possibility. You will connect with them by our special communication system, Deep Space Network or DSN. "
            }, {
                time: 14,
                role: "response",
                text: "DSN is NASA’s international array of giant radio antennas that supports interplanetary spacecraft missions."
            },
            {
                time: 16,
                role: "response",
                text: "Introduzir o budget , a ideia de redes de comunicação e a comunicação com o astronauta "
            }, {
                time: 18,
                role: "text",
                text: "Wow! But I do have that it takes to communicate with them?"
            }, {
                time: 20,
                role: "response",
                text: "Trust me, you will receive very thing it needs in your NASA's Technical Manual."
            }, {
                time: 22,
                role: "text",
                text: "Thanks! I'll do my best!"
            }
        ];
        //! TALVEZ ISSO SEJA MELHOR EM OUTRO LUGAR
        this.interval = setInterval(() => {
            this.showTutorial();
        }, 1000);
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

        texts.appendChild(this.createText(text, role));

    }
    addResponse(text, t = 1) {
        var dialogos = document.getElementsByClassName("texts");
        var texts = dialogos[0];

        texts.appendChild(this.createText(text, "response"));

    }

    addText(text) {
        var texts = document.getElementsByClassName("texts")[0];
        texts.appendChild(createText(text, "text"));
    }

    showTutorial() {
        this.timer++;
        // console.log(this.timer);
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

        let divTexts = document.createElement('div');
        divTexts.className = "texts";

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