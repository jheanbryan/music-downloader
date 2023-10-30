const {  app, BrowserWindow} = require('electron');
const { dirname } = require('path');
let mainWindow;

app.on('ready', function(){

    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
})