const Options = require('./components/options/options');
const Display = require('./components/display/display');
const Footer = require('./components/footer/footer');
const Header = require('./components/header/header');
const Window = require('./components/window/window');


const GlobalMecanics = require('./components/globalMecanics/globalMecanics');
const MainMenu = require('./components/mainMenu/mainMenu');

const component = require('./components/component');
const ipc = require('electron').ipcRenderer;

class MainWindow extends component {

	constructor() {
		super();
		this.header = new Header();
		this.options = new Options();
		this.window = new Window();
		this.display = new Display();
		this.footer = new Footer();
		this.MainMenu = new MainMenu();
		this.htmlComponent = document.createElement('div');
	}

    build() {

		let duracao = Date.now();

		this.init();
		this.options.build();
		this.display.build();
		this.footer.build();
		this.header.build();
		this.MainMenu.build();
		
		document.getElementById('mainContainer').appendChild(this.htmlComponent);
		document.getElementById("mainContainer").style.display = 'none'

        setTimeout(() => {

            ipc.send('mainLoadCompleto', {
                show: true,
            });

        }, duracao);

    }
}

window.onload = () => {

    const App = new MainWindow();
    App.build();

};