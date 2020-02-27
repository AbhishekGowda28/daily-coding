function addBorder(picture) {
    const borderLength = picture.length > 0 ? picture[0].length + 2 : 2;
    const borderedPicture = [];
    const border = "*".repeat(borderLength);

    borderedPicture.push(border);

    picture.forEach(str => {
        borderedPicture.push(`*${str}*`);
    });

    borderedPicture.push(border);
    
    return borderedPicture;
}

addBorder(["abc", "def"]);
addBorder([]);
