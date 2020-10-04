console.log('running....');

const electron = require('electron');
const app = require('electron').app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const ipc = electron.ipcMain;
const dialog = require('electron').dialog;

const devMode = true;
let mainWindow;

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);


//parametros inicias da janela principal
let mainWindowparams = {
	title: "Telecom Engineering Space Simulator",
	path: '../src/index.html',
	show: true,
	webPreferences: {
		nodeIntegration: true,
		webviewTag: true,
		devTools: devMode
	},
	openDevTools: devMode
};
/**
 * cria uma nova janela a partir dos parametros dados
 * @param {object} params objeto que descreve a nova janela
 */
function createWindow(params) {
	let window = new BrowserWindow(params);
	window.loadURL(url.format({
		pathname: path.join(__dirname, params.path),
		protocol: 'file',
		slashes: true,
	}));
	if (params.openDevTools) {
		window.openDevTools();
	}
	window.on('closed', () => {
		window = null;
	});
	window.removeMenu();
	window.title = "Telecom Engineering Space Simulator";
	return window;
}
//event listener que espera o app ser criado para criar as janelas
app.on('ready', () => {
	mainWindow = createWindow(mainWindowparams);
	//apenas mostrara a janela quando estiver pronta
});

//encerra o programa se todas as janelas forem fechadas
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

//caso a janela nao tenha sido criada força sua criação
app.on('activate', () => {
	if (mainWindow === null) {
		createWindow(mainWindow);
	}
});

//listerner que avisa que o load da janela principal terminou
ipc.on('mainLoadCompleto', () => {
	setTimeout(() => {
		mainWindow.title = 'Telecom Engineering Space Simulator'
		mainWindow.show();
	}, 250);
});

ipc.on('openDialog', (event, config) => {
	dialog.showMessageBox(mainWindow, config).then((response) => {
		event.sender.send('openDialogResponse', response);
	});
});