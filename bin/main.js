const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            width: 1000,
            height: 841,
            minWidth: 1000,
            minHeight: 841,
        },
    });

    mainWindow.setMenu(null);

    mainWindow.loadURL("https://lalbi94.github.io/aharthern/");

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
