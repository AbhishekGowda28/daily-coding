// @ts-check

/**
 * @param {string} sentence
 */
function longestWord(sentence) {
    const words = sentence.split(/[\s-?,;.!]/gi);

    return words.reduce((longestWord, currentWord) => {
        return longestWord.length > currentWord.length ? longestWord : currentWord;
    }, "");
}

module.exports = { longestWord };
