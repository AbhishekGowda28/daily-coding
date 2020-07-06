export default function getRandomColor(lightness) {
    lightness = 100 - lightness;
    return `hsl(240, 100%, ${lightness < 10 ? 25 : lightness}%)`;
}
