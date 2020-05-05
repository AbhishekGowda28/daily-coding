function applesInbox(numberOfBoxes) {
    // Yellow apples
    let oddCount = 0;
    // Red apples 
    let evenCount = 0;
    for (let counter = 0; counter <= numberOfBoxes; counter++) {
        if (counter % 2 === 0) {
            evenCount += (counter * counter);
        } else {
            oddCount += (counter * counter);
        }
    }
    const reminder = oddCount - evenCount;
    if (reminder > 0) {
        return `${reminder} Yellow apples`;
    } else if (reminder < 0) {
        return `${Math.abs(reminder)} Red apples`;
    } else {
        return "There are same number of Red and Yellow apples";
    }
}

module.exports = { applesInbox };
