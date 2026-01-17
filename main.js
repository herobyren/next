// 主程序 (main process)
// console.log('Hello from Electron 👋');

// app 这个模块控制着您应用程序的事件生命周期。
// BrowserWindow 这个模块创建和管理 app 的窗口。
// 为了在编写 TypeScript 代码时进行更好的类型检查, 您可以选择从 electron/main 导入主进程模块。
const { app, BrowserWindow } = require('electron/main');

const createWindow = function () {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile('index.html');
}

// Electron 暴露了 app.whenReady() 方法，
// 作为其 ready 事件的专用监听器，这样可以避免直接监听 .on 事件带来的一些问题
app.whenReady().then(function () {
    createWindow();
});