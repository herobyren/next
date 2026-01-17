// 主程序 (main process)
// console.log('Hello from Electron 👋');

const { app, BrowserWindow } = require('electron');

const createWindow = function () {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile('index.html');
}

app.whenReady().then(function () {
    createWindow();
});