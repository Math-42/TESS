const StandardDisplay = require('../../standardDisplay');


module.exports = class TutorialDisplay extends StandardDisplay {
    constructor() {
        super("TutorialDisplay");
        this.timestep = 2200;
        this.timer = 0;
        this.flow = [{
            time: 0,
            role: "response",
            text: "Hey! You are in NASA's Kennedy Space Center. You must be very excited about your first day here!"
        }, {
            time: 2,
            role: "response",
            text: "You're gonna work on our Mission Control Room at the Space Flight Operations Facility."
        }, {
            time: 4,
            role: "response",
            text: "Your main assignment is to maintain a effective telecom system to keep in touch with astronauts in Mars"
        }, {
            time: 7,
            role: "text",
            text: "You mean, talk to them on phone?"
        }, {
            time: 8,
            role: "response",
            text: "Ha!, You wish! You'll connect with them using our special communication system"
        }, {
            time: 10,
            role: "response",
            text: "The Deep Space Network"
        }, {
            time: 12,
            role: "response",
            text: "The DSN is NASA’s international array of giant radio antennas that supports interplanetary spacecraft missions."
        }, {
            time: 15,
            role: "response",
            text: "You are going to have to design and operate the link that keeps people together over interplanetary distances"
        }, {
            time: 17,
            role: "response",
            text: "You'll face some challenges setting up a fast and reliable connection with them"
        }, {
            time: 19,
            role: "text",
            text: "Wow! But I do have that it takes to communicate with them?"
        }, {
            time: 20,
            role: "response",
            text: "Trust me, you can do this. If you don't know something you can always check our Technical Manual"
        }, {
            time: 23,
            role: "text",
            text: "OK! I'll do my best!"
        }];
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
        this.timer++;

    }


    build() {

        console.log(this.texts);

        let divActors = document.createElement('div');
        divActors.className = "actors";

        let imgActor = document.createElement('img');
        imgActor.setAttribute("src", "../images/NASAemploye.gif");
        imgActor.className = "actor";
        divActors.appendChild(imgActor);

        let imgChar = document.createElement('img');
        imgChar.setAttribute("src", "../images/Consultor.gif");
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
                console.log(this.timestep);
                this.showTutorial();
                console.log("dasda");
                this.interval = setInterval(() => {
                    this.showTutorial();
                }, this.timestep);
            } else {
                var dialogos = document.getElementsByClassName("texts")[0];
                this.timer = 0;
                dialogos.innerHTML = "";
            }
        });
    }
};