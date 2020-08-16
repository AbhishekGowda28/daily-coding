function Cone(pattern, num) {
    let _funnel = "";
    for (let _row = 0; _row < Math.ceil(num / 2); _row++) {
        for (let _column = 0; _column < num; _column++) {
            // if (_column < _row || _column >= num - _row) {
            //     _funnel += pattern;
            // } else {
            //     _funnel += " ";
            // }
            _funnel += " ";
        }
        _funnel += "\n";
        _funnel += "\t";
    }

    return _funnel;
}

console.log(Cone("*", 5));

module.export = Cone;
