// 主程序 (main process)
// console.log('Hello from Electron 👋');

// app 这个模块控制着您应用程序的事件生命周期。
// BrowserWindow 这个模块创建和管理 app 的窗口。
// 为了在编写 TypeScript 代码时进行更好的类型检查, 您可以选择从 electron/main 导入主进程模块。
const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

const createWindow = function () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // 为了将脚本附在渲染进程上, 在 BrowserWindow 构造器中使用 webPreferences.preload 传入脚本的路径。
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
}

// Electron 暴露了 app.whenReady() 方法，
// 作为其 ready 事件的专用监听器，这样可以避免直接监听 .on 事件带来的一些问题
app.whenReady().then(function () {
    createWindow();

    // 监听 app 模组的 activate 事件,
    // 如果没有任何打开(open) 的 BrowserWindow, 调用您已有的 createWindow() 方法新建一个。
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// 关闭所有窗口时退出应用 (Windows & Linux)
app.on('window-all-closed', function () {
    // 通过检查 Node.js 的 process.platform 变量, 您可以针对特定平台运行特定代码
    if (process.platform !== 'darwin') {
        app.quit();
    }
});