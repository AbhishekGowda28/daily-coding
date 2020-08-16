function Diamond(pattern, num) {
    let _diamond = "\n";
    for (let _row = 0; _row < num; _row++) {
        _diamond += "\t";
        for (let _column = 0; _column < num; _column++) {
            if (_column < _row || _column >= num - _row) {
                _diamond += " ";
            } else {
                _diamond += pattern;
            }
        }
        _diamond += "\n";
    }

    return _diamond;
}

console.log(Diamond("=", 21));
module.exports = Diamond;
