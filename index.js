const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;
let mainWindow;

app.on("ready", function () {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "Recources/Html/index.html"),
        protocol: "file:",
        slashes: true
    }));
    //dev tools
    mainWindow.webContents.openDevTools();

    // menu bar
    let menu = Menu.buildFromTemplate([
      {
        label: 'Menu',
        submenu: [
          {
            label: 'add player'
          },
          {
            label: 'delete player'
          },
          {type: 'separator'},
          {
            label: 'exit',
            click() {
              app.quit()
            }
          }
        ]
      }
    ])

    Menu.setApplicationMenu(menu);
});

app.on("window-all-closed", () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
