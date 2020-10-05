const StandardDisplay = require('../../standardDisplay');
const Packet = require('../packetDisplay/packet');
const GlobalMecanics = require('../../../globalMecanics/globalMecanics');

module.exports = class Communication extends StandardDisplay {

	constructor() {
		super('Communication')

		this.packetContainer = document.createElement('div');
		this.progress = 0;

		this.htmlComponent = document.createElement('fieldset');
		this.Container = document.createElement('div');

		this.htmlComponent.classList.add('packet');
		this.htmlComponent.classList.add('h-100');

		this.title = document.createElement('legend');
		this.title.classList.add('packetTitle');
		this.title.textContent = 'Packet Builder'

		this.htmlComponent.appendChild(this.title)

		this.htmlComponent.appendChild(this.Container);

		this.Container.appendChild(this.packetContainer);

		this.answers1 = document.createElement('h2');
		this.answers2 = document.createElement('h2');
		this.answers3 = document.createElement('h2');
	}

	setAnswers(answer1, answer2, answer3) {

		this.answers1.textContent = answer1;
		this.answers2.textContent = answer2;
		this.answers3.textContent = answer3;

	}

	firstMissionMock() {
		this.setAnswers('Antennas configured', 'Antennas are ready to work, waiting for your return', "I have just configured the antenna and I'm waiting for your answer")
	}

	preparePacket(evt) {
		this.stageChangesContainer.classList.remove("invisible");
		let currentPacket = {
			title: "First_day_here",
			"packet": {

				message: evt.target.textContent
			}

		}
		this.packetContainer.innerHTML = '';
		currentPacket = new Packet(currentPacket);
		currentPacket.htmlComponent.style.height = '7.4em'
		currentPacket.dataContainer.style.minHeight = '4em'
		this.packetContainer.appendChild(currentPacket.htmlComponent)

	}

	loadProgress() {
        this.progress = 0;
		
        document.getElementById('sendpg').style.width = '0%';
        document.getElementById('SendProgressBar').style.display = 'flex';
        document.getElementById('SendProgressBar').classList.add("visible")
        document.getElementById('SendProgressBar').classList.remove("invisible")
        this.fill();
        
        this.progress = 0;
    }

    fill() {
        setTimeout(() => {

            if (this.progress <= 100) {
                this.progress++
                document.getElementById('sendpg').style.width = this.progress + '%';
                this.fill()

            }else{
                setTimeout(() =>{
                    document.getElementById('SendProgressBar').classList.add("invisible")
                    document.getElementById('sendpg').style.width = '0%';
					document.getElementById('SendProgressBar').stageChangesContainer.add("invisible")

					if(window.configAntenas === undefined || window.configAntenas === -1){
						GlobalMecanics.sendPacket('packet_2',2000)
					}else if(window.configAntenas === 0){
						GlobalMecanics.sendPacket('packet_3',2000)
					}else if(window.configAntenas === 1){
						GlobalMecanics.sendPacket('packet_4',2000)
					}

                },500)
                
            }

        }, 50);

    }

	build() {
		this.stageChangeBtn = document.createElement('button')
        this.stageChangeBtn.textContent = 'save changes'
        this.stageChangeBtn.className = 'btn-terminal mb-4 col-3'


		let question = document.createElement('span');
		question.textContent = 'Message'
		let answers = document.createElement('div');
		answers.appendChild(this.answers1);
		answers.appendChild(this.answers2);
		answers.appendChild(this.answers3);

		this.answers1.classList.add('packetBuildOption')
		this.answers2.classList.add('packetBuildOption')
		this.answers3.classList.add('packetBuildOption')

		answers.id = 'answer-box'

		this.Container.appendChild(question);
		this.Container.appendChild(answers);

		this.answers1.onclick = (evt) => {
			this.preparePacket(evt)
		};
		this.answers2.onclick = (evt) => {
			this.preparePacket(evt)
		};
		this.answers3.onclick = (evt) => {
			this.preparePacket(evt)
		};

		this.firstMissionMock();

		this.stageChangeBtn = document.createElement('button')
        this.stageChangeBtn.textContent = 'save changes'
        this.stageChangeBtn.className = 'btn-terminal mb-4 col-3'

        this.stageChangeBtn.onclick = () => {
            let answer;
            this.loadProgress();
        }

		this.stageChangesContainer = document.createElement('div');

        this.loadBarBackground = document.createElement('div')
        this.loadBarBackground.id = 'SendProgressBar'
        this.loadBarBackground.classList.add("invisible");
        this.loadBarBackground.className = 'progress mb-4 col-8 p-0 mt-3'
        this.loadBarBackground.innerHTML = '<div class="progress-bar" id="sendpg" role="SendProgressBar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>'

        this.stageChangesContainer.className = 'row stageChangesContainer mt-3 invisible'
        this.stageChangesContainer.id = 'antennaProgressContainer'

        this.stageChangesContainer.appendChild(this.stageChangeBtn);
        this.stageChangesContainer.appendChild(this.loadBarBackground);

		this.Container.appendChild(this.stageChangesContainer);
	}

}