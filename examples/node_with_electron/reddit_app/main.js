const { app, BrowserWindow } = require("electron");

function createWindow() {
    const electronWindow = new BrowserWindow({ icon: "./resource/reddit.ico" });
    electronWindow.loadURL("https://reddit.com");
}

app.whenReady().
    then(createWindow).
    catch(e => {
        console.log("Error");
    });

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
