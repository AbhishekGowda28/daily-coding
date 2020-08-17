// @ts-check

/**
 * @param {string} pwd
 */
function stongPwd(pwd) {
    let specialChar = false, lowerCase = false, upperCase = false, numberChar = false;
    const specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", "|", "\\", "'", "\"", ";", ":", "/", "?", ".", ",", "<", ">", " "];

    if (pwd.length < 8) {
        return false;
    }

    pwd.split("").forEach((password) => {
        if (specialCharacter.includes(password)) {
            specialChar = true;
        } if (password.codePointAt(0) >= 48 && password.codePointAt(0) <= 57) {
            numberChar = true;
        } if (password.codePointAt(0) >= 65 && password.codePointAt(0) <= 90) {
            upperCase = true;
        } if (password.charCodeAt(0) >= 97 && password.charCodeAt(0) <= 122) {
            lowerCase = true;
        }
    });

    return (specialChar && lowerCase && upperCase && numberChar);
}

module.exports = stongPwd;
