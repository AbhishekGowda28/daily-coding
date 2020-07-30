//@ts-check

/**
 * @param {string[]} domainList
 */
function domainType(domainList) {
    const labels = {
        dev: "developers",
        ninja: "ninjas",
        gov: "government",
        com: "commercial",
        net: "network",
        org: "orginazation"
    };
    const domainLabels = [];
    let error;
    error = false;

    /**
     * @param {string} domain
     */
    domainList.forEach((domain) => {
        const domainLevel = domain.split(".");
        const lable = domainLevel[domainLevel.length - 1];
        if (labels[lable] !== undefined) {
            if (domainLabels.includes(labels[lable]) === false) {
                domainLabels.push(labels[lable]);
            }
        } else {
            error = true;
        }
    });

    if (error === true) {
        return "Domain does not exist";
    }

    return domainLabels;
}

module.exports = { domainType };
