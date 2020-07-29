function addBorder(picture) {
	const borderLength = picture.length > 0 ?
		picture[0].length + 2 : 2;
	const border = `*`.repeat(borderLength);
	const borderedPicture = [border];

	picture.forEach(str => {
		borderedPicture.push(`*${str}*`);
	});

	borderedPicture.push(border);

	return borderedPicture;
}

module.exports = {
	addBorder,
};
