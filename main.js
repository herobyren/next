// 主程序 (main process)
// console.log('Hello from Electron 👋');

// app 这个模块控制着您应用程序的事件生命周期。
// BrowserWindow 这个模块创建和管理 app 的窗口。
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