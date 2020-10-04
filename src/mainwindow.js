const Options = require('./components/options/options');
const Display = require('./components/display/display');
const Footer = require('./components/footer/footer');
const Header = require('./components/header/header');
const Window = require('./components/window/window');
const StartMenu = require('./components/startmenu/startmenu')
const Dialogos = require('./components/dialogo/dialogo')

const GlobalMecanics = require('./components/globalMecanics/globalMecanics');

const component = require('./components/component');
const ipc = require('electron').ipcRenderer;

class MainWindow extends component {

    constructor() {
        super();
        this.header = new Header();
        this.options = new Options();
        this.window = new Window();
        this.display = new Display();
        this.startmenu = new StartMenu();
        this.dialogos = new Dialogos();
        this.footer = new Footer();
        this.htmlComponent = document.createElement('div');
    }

    build() {

        let duracao = Date.now();

        this.init();
        this.options.build();
        this.display.build();
        // this.startmenu.build();
        this.dialogos.build();
        this.footer.build();
        this.header.build();

        GlobalMecanics.sendPackage('package_2', 8000);
        document.getElementById('mainContainer').appendChild(this.htmlComponent);

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