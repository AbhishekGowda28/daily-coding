const OS = require("os");
const Process = require("process");
console.log(OS.cpus());

console.log(Process);

const app = document.getElementById("app");

const OSDetailsTab = document.createElement("div");

const platform = OS.platform() === "win32" ? "Windows" : "Not Windows";

OSDetailsTab.innerHTML = `
    <table>
        <thead>
            <tr><td>Property</td><td>Value</td></tr>
        </thead>
        <tbody>
            <tr>
                <td>Number of Processors</td>
                <td>${OS.cpus().length}</td>
            </tr>
            <tr>
                <td>System Architecture</td>
                <td>${platform}</td>
            </tr>
            <tr>
                <td>RAM</td>
                <td>${(OS.totalmem() / (1024 * 1024 * 1024)).toFixed(0)} GB</td>
            </tr>
        </tbody>
    </table>
`;

app.appendChild(OSDetailsTab);