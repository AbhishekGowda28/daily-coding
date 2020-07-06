export default function getRandomColor(lightness) {
    return `hsl(200, 100%, ${100 - lightness}%)`;
}
