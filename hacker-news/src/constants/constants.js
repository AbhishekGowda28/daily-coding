const MAX_STORIES = 500;
let STORY_INCREMENT = 10;

if (window.innerHeight < 500) {
    STORY_INCREMENT = 5;
} else if (window.innerHeight > 950 && window.innerHeight < 1320) {
    STORY_INCREMENT = 15;
} else if (window.innerHeight > 1320 && window.innerHeight < 2000) {
    STORY_INCREMENT = 20;
} else if (window.innerHeight >= 2000) {
    STORY_INCREMENT = 30;
}

export { STORY_INCREMENT, MAX_STORIES };