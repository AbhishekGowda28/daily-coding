# Wiki

**Table Of Content**
- [VS Code setup](#VSCodeSetup)
    - [VS Code Settings](#Settings)
    - [VS Code Extensions](#Extensions)
    - [VS Code Snippet](#Snipptes)
- [Coding Conventions](#CodingConventions)
---
## VSCodeSetup

### Settings

```JSONC
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
```

### Extensions

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [deno](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)


### Snipptes

```JSON
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
```

## CodingConventions

- Use cameCase for variable names
 ```
    let isThisAGoodName = true;
 ```
- use nouns for place holders, like variables and properties
- use verbs for methods and functions
- Properties of the class should be descriptive w.r.t. the class Name
- Start class name with Capital Letter
- Name the file containing the class same name as the class
- method name should not have more than 3 arguments
- its always best to use a method without arguments
- method name inside the class should reflect the side effect or changes it does to the other properties
- method names should always start with lower case letters
- a constant should have all it's characters in upper case, _ used as the seperator
```
    const ARRAY_SIZE = 12;
```
- never export any thing unless it has to be reused
- Avoid static methods inside a class