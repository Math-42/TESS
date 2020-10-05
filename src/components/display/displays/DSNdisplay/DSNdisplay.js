const {
    desktopCapturer
} = require('electron');
const StandardDisplay = require('../../standardDisplay');
const Antenna = require('./antenna');
const {Correct, NotRedundant, Wrong} = require('./classes.js');

module.exports = class Display extends StandardDisplay {
    constructor() {
        super('DSNdisplay');
        this.progress = 0;

        this.htmlComponent = document.createElement('fieldset');
        this.htmlComponent.classList.add('packet');

        this.stageChangesContainer = document.createElement('div');

        this.title = document.createElement('legend');
        this.title.classList.add('packetTitle');
        this.title.textContent = 'Deep Space Network'

        this.htmlComponent.appendChild(this.title)
        this.htmlComponent.appendChild(this.stageChangesContainer)

        this.htmlContainer = document.createElement('div');
        this.htmlContainer.style.display = 'flex';

        this.htmlComponent.appendChild(this.htmlContainer);

        this.Antenna1 = new Antenna('Spain', 3,1);
        this.Antenna2 = new Antenna('Spain', 1,2);
        this.Antenna3 = new Antenna('USA', 1,3);
        this.Antenna4 = new Antenna('Australia', 1,4);
    }

    loadProgress() {
        this.progress = 0;
        document.getElementById('antpg').style.width = '0%';
        document.getElementById('progressBar').style.display = 'flex';
        document.getElementById('progressBar').classList.add("visible")
        document.getElementById('progressBar').classList.remove("invisible")
        document.getElementById('antennaProgressContainer').style.justifyContent = 'space-around';
        this.fill();
        
        this.progress = 0;
    }

    fill() {
        setTimeout(() => {

            if (this.progress <= 100) {
                this.progress++
                document.getElementById('antpg').style.width = this.progress + '%';
                this.fill()

            }else{
                setTimeout(() =>{
                    document.getElementById('progressBar').classList.add("invisible")
                    document.getElementById('antpg').style.width = '0%';
                },500)
                
            }

        }, 50);

    }

    checkAnswers(){
        let answersList =[document.getElementById('1_0').textContent, document.getElementById('1_1').textContent, document.getElementById('1_2').textContent];
        let allAnswersList = [document.getElementById('1_0').textContent, document.getElementById('1_1').textContent, document.getElementById('1_2').textContent, document.getElementById('2_0').textContent, document.getElementById('3_0').textContent, document.getElementById('4_0').textContent];



        if (answersList.includes("Maren") && answersList.includes("Mars 2020")){
            return new Wrong();
        } else if (answersList.includes("InSight Lander") && answersList.includes("Mars 2020")){
            return new Wrong();
        } else if (answersList.filter((v) => (v === "Mars 2020")).length == 2){
            return new NotRedundant();
        }
        else if (allAnswersList.filter((v) => (v === "Mars 2020")).length !== 2){
            return new NotRedundant();
        } else {
            return new Correct();
        }
    }

    build() {
        this.htmlContainer.classList.add('row');


        this.stageChangeBtn = document.createElement('button')
        this.stageChangeBtn.textContent = 'save changes'
        this.stageChangeBtn.className = 'btn-terminal mb-4 col-3'

        this.stageChangeBtn.onclick = () => {
            let answer;
            this.loadProgress();
            answer = this.checkAnswers();
        }

        this.loadBarBackground = document.createElement('div')
        this.loadBarBackground.id = 'progressBar'
        this.loadBarBackground.classList.add("invisible");
        this.loadBarBackground.className = 'progress mb-4 col-8 p-0'
        this.loadBarBackground.innerHTML = '<div class="progress-bar" id="antpg" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'

        this.stageChangesContainer.className = 'row stageChangesContainer'
        this.stageChangesContainer.id = 'antennaProgressContainer'

        this.stageChangesContainer.appendChild(this.stageChangeBtn);
        this.stageChangesContainer.appendChild(this.loadBarBackground);

        this.htmlContainer.appendChild(this.Antenna1.htmlComponent);
        this.htmlContainer.appendChild(this.Antenna2.htmlComponent);
        this.htmlContainer.appendChild(this.Antenna3.htmlComponent);
        this.htmlContainer.appendChild(this.Antenna4.htmlComponent);

        document.getElementById('progressBar').classList.add("invisible")

    }
}