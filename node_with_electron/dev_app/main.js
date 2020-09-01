const { app, BrowserWindow } = require("electron");

function createWindow() {
    const electronWindow = new BrowserWindow();
    electronWindow.loadURL("https://dev.to")
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
