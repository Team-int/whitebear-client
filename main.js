const { app, BrowserWindow } = require('electron');
const path = require('path');
const updater = require('update-electron-app');
if (require('electron-squirrel-startup')) return app.quit();
function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 405,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow()
  if (process.platform == 'win32' || process.platform == 'darwin') {
    updater({
      notifyUser: false
    });
  }
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});
app.on('window-all-closed', () => {
  app.quit()
});