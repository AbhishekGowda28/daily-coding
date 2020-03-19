function areEquallyStrong(personOne, personTwo) {
    const personOneArmWeight = Number(personOne.left) + Number(personOne.right);
    const personTwoArmWeight = Number(personTwo.left) + Number(personTwo.right);

    return personOneArmWeight === personTwoArmWeight;
}

module.exports = { areEquallyStrong };
