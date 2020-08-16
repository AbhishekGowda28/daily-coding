function Funnel(pattern, num) {
    let _funnel = "\n";
    for (let _row = 0; _row < num; _row++) {
        _funnel += "\t";
        for (let _column = 0; _column < num; _column++) {
            if (_column < _row || _column >= num - _row) {
                _funnel += " ";
            } else {
                _funnel += pattern;
            }
        }
        _funnel += "\n";
    }

    return _funnel;
}

console.log(Funnel("=", 21));
module.exports = Funnel;
