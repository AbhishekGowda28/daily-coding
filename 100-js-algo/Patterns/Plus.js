function Plus(pattern, num) {
    let _plus = "\n";
    for (let _row = 0; _row < num; _row++) {
        _plus += "\t";
        for (let _column = 0; _column < num; _column++) {
            if (_column === Math.floor(num / 2) || _row === Math.floor(num / 2)) {
                _plus += pattern;
            } else {
                _plus += " ";
            }
        }
        _plus += "\n";
    }

    return _plus;
}

console.log(Plus("+", 10));

module.exports = Plus;
