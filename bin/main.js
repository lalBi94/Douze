const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            width: 900,
            height: 670,
            minWidth: 900,
            minHeight: 670,
        },
    });

    mainWindow.setMenu(null);

    mainWindow.loadURL("https://lalbi94.github.io/Douze/");

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
