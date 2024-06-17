const { app, BrowserWindow } = require("electron");
const path = require("path");

//create window

const createWindow = () => {
  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "prelod.js"),
      nodeIntegration: true,
      // contextIsolation: false,
    },
  });
  mainWindow.loadFile("public/index.html");
  // open dev tools
  // mainWindow.webContents.openDevTools()
};

app.whenReady().then(() => {
  createWindow();
});
// "start": "react-scripts start",