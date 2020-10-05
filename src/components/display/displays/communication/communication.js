const StandardDisplay = require('../../standardDisplay');
const Package = require('../packageDisplay/package');

module.exports = class Communication extends StandardDisplay {

	constructor() {
		super('Communication')

		this.packageContainer = document.createElement('div');
		this.progress = 0;

		this.htmlComponent = document.createElement('fieldset');
		this.Container = document.createElement('div');

		this.htmlComponent.classList.add('package');
		this.htmlComponent.classList.add('h-100');

		this.title = document.createElement('legend');
		this.title.classList.add('packageTitle');
		this.title.textContent = 'Package Builder'

		this.htmlComponent.appendChild(this.title)

		this.htmlComponent.appendChild(this.Container);

		this.Container.appendChild(this.packageContainer);

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
		this.setAnswers('As antenas já estão prontas!', 'Falar a mesma coisa da primeira sendo mais pessoal', 'Not necessary')
	}

	preparePackage(evt) {

		let currentPackage = {
			title: "First_day_here",
			"package": {

				message: evt.target.textContent
			}

		}
		this.packageContainer.innerHTML = '';
		currentPackage = new Package(currentPackage);
		currentPackage.htmlComponent.style.height = '7.4em'
		currentPackage.dataContainer.style.minHeight = '4em'
		this.packageContainer.appendChild(currentPackage.htmlComponent)

	}

	build() {
		let question = document.createElement('span');
		question.textContent = 'Message'
		let answers = document.createElement('div');
		answers.appendChild(this.answers1);
		answers.appendChild(this.answers2);
		answers.appendChild(this.answers3);

		this.answers1.classList.add('packageBuildOption')
		this.answers2.classList.add('packageBuildOption')
		this.answers3.classList.add('packageBuildOption')

		answers.id = 'answer-box'

		this.Container.appendChild(question);
		this.Container.appendChild(answers);

		this.answers1.onclick = (evt) => {
			this.preparePackage(evt)
		};
		this.answers2.onclick = (evt) => {
			this.preparePackage(evt)
		};
		this.answers3.onclick = (evt) => {
			this.preparePackage(evt)
		};

		this.firstMissionMock();
	}

}