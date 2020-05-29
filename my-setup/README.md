# VS Code setup


    "editor.minimap.enabled": false,
    "workbench.activityBar.visible": false,
    "workbench.statusBar.visible": false,
    "editor.lineHeight": 27,
    "editor.lineNumbers": "off",
    "extensions.ignoreRecommendations": false,
    "flow.useNPMPackagedFlow": true,
    "workbench.colorTheme": "Default Light+",
    "workbench.iconTheme": "vs-seti",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "window.zoomLevel": 1,
    "workbench.editorAssociations": [
        {
            "viewType": "default",
            "filenamePattern": "*.js"
        }
    ],
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    }


**Extensions**

[Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)


**Snipptes**

[Javascript]

    "log": {
        "prefix": "wcl",
        "body": "window.console.log({$1});",
        "description": "Window console log"
    },
    "log": {
        "prefix": "cl",
        "body": "console.log({$1});",
        "description": "Window console log"
    },
    "React State": {
        "prefix": "react-state",
        "description": "State",
        "body": "const [${1:stateName}, set${1:stateName}] = useState(${2:type});$3"
    }
