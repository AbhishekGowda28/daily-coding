function Funnel(pattern, num) {
    let _funnel = "\n\t";
    for (let _row = 0; _row < Math.ceil(num / 2); _row++) {
        for (let _column = 0; _column < num; _column++) {
            if (_column < _row || _column >= num - _row) {
                _funnel += " ";
            } else {
                _funnel += pattern;
            }
        }
        _funnel += "\n";
        _funnel += "\t";
    }

    return _funnel;
}

console.log(Funnel("*", 15));
module.exports = Funnel;
