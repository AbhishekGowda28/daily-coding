const { app, BrowserWindow } = require("electron");

function createWindow() {
    const electronWindow = new BrowserWindow({
        width: 200,
        height: 150,
        webPreferences: {
            nodeIntegration: true
        }
    });
    electronWindow.loadFile("index.html");
}

app.whenReady().
    then(createWindow).
    catch(e => {
        console.log("Error");
    });

app.on("window-all-closed", () =>{
    if(process.platform !== "darwin"){
        app.quit();
    }
});

app.on("activate", () => {
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});