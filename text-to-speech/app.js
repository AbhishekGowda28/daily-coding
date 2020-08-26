/**
 * 
 * @param {string} text 
 */
function textToSpeech(text) {
    const synthetic = window.speechSynthesis;
    const voices = loadVoices();
    readOutText(text, voices[0]);

    function loadVoices() {
        let voices = synthetic.getVoices();
        if (voices.length === 0) {
            synthetic.addEventListener("voiceschanged", () => {
                voices = synthetic.getVoices();
            });
        }
        return voices;
    }

    function readOutText(text, voice) {
        const utter = new window.SpeechSynthesisUtterance();
        utter.rate = 1;
        utter.pitch = 0.5;
        utter.text = text;
        utter.voice = voice;
        synthetic.speak(utter);
    }

}

function getTime() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
}

/**
 * 
 * @param {number} interval 
 */
function announceTime(interval) {
    setInterval(() => {
        const time = getTime();
        textToSpeech(time);
    }, interval);
}

const oneHour = 1000*60*60;

announceTime(oneHour);
