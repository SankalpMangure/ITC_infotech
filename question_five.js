let longest_palindrom = long_palindrom_find('cbbd');
function long_palindrom_find(s) {
    let r = s.split('').reverse().join('');
    let p, l, m = [0, 0];
    for (p = 0; p < s.length; p++) {
        for (l = s.length - p; l > m[1]; l--)
            if (r.indexOf(s.substr(p, l)) > -1) m = [p, l];
    }
    return s.substr(...m)
}

console.log(longest_palindrom)