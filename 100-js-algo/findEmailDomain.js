// @ts-check
/**
 * @param {string} emailId
 */
function findEmailDomain(emailId) {
    const speratorIndex = emailId.lastIndexOf("@");
    if (speratorIndex === -1) {
        return "";
    }

    return emailId.slice(speratorIndex);
}

module.exports = { findEmailDomain };
