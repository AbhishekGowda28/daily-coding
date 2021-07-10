export default function getRandomColor(lightness) {
    try {
        if (typeof lightness === "string") {
            lightness = lightness.charCodeAt(0);
        }
        let hue = 200;
        while (lightness > 90) {
            hue += 15;
            lightness -= 30;
        }
        lightness = 100 - lightness;
        return `hsl(${hue}, 100%, ${lightness}%)`;
    } catch (error) {
        throw new Error("Invalid Input for lightness");
    }
}
