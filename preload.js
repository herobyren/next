const { contextBridge, ipcRenderer } = require('electron')
// 该脚本通过 versions 这一全局变量，将 Electron 的 process.versions 对象暴露给渲染器。
contextBridge.exposeInMainWorld('versions', {
    node: function () {
        return process.versions.node;
    },
    chrome: function () {
        return process.versions.chrome;
    },
    electron: function () {
        return process.versions.electron;
    },
    ping: function () {
        return ipcRenderer.invoke('ping');
    }
});