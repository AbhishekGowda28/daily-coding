window.Seed = (function () {
    var projects = [{
            id: "project_1",
            title: "Local Weather",
            image: ".//images//weather.PNG",
            description: "Provides the weather details of the current location",
            link: "https://codepen.io/AbhishekGowda28/full/BYOXrr"
        },
        {
            id: "project_2",
            title: "Basic Calculator",
            image: ".//images//calculator.PNG",
            description: "A calculator that perfoms basic calculation",
            link: "https://codepen.io/AbhishekGowda28/full/rdpzWX"
        },
        {
            id: "project_3",
            title: "Pomodoro Clock",
            image: ".//images//pomodoro_clock.PNG",
            description: "A timer that follows Pomodoro Technique, useful for working and studying",
            link: "https://codepen.io/AbhishekGowda28/full/YLejjZ"
        }, {
            id: "project_4",
            title: "Simon Game",
            image: ".//images//Simon_game.PNG",
            description: "A Game user has to guess the previous color",
            link: "https://codepen.io/AbhishekGowda28/full/jxjqwg"
        }
    ];

    var resources = [{
        id: "resource_1",
        title: "w3schools",
        link: "w3schools.com/",
        description: "W3Schools is a website for learning web technologies."
    }, {
        id: "resource_2",
        title: "StackOverFlow",
        link: "stackoverflow.com/",
        description: "Largest, most trusted online community for developers to learn, share​ ​their programming ​knowledge, and build their careers.",
    }, {
        id: "resource_3",
        title: "MDN",
        link: "https://developer.mozilla.org/",
        description: "The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.",
    }, {
        id: "resource_4",
        title: "CSS-Tricks",
        link: "https://css-tricks.com/",
        description: "Tips, Tricks, and Techniques on using Cascading Style Sheets.",
    }];

    return {
        projects,
        resources
    };
}());