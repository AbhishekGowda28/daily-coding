export default function getRandomColor(lightness) {
    let hue = 200;
    while (lightness > 90) {
        hue += 15;
        lightness -= 30;
    }
    lightness = 100 - lightness;
    return `hsl(${hue}, 100%, ${lightness}%)`;
}
