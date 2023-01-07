String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        //hash |= 0; //Convert to 32-bit integer
        hash &= 0x7FFFFFFF; //Convert to positive integer
    }
    return hash;
};

Math.seededRandom = function (max, min) {
    max = max || 1;
    min = min || 0;
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280.0;
    return Math.floor(min + rnd * (max - min));
};

function getName(seed) {
    var familyNames = new Array(
        'teal', 'blue', 'cyan', 'turquoise', 'Aqua', 'jade', 'Amethyst', 'Electric', 'Coral', 'Indigo',
        'Iris', 'Grape', 'Dark ', 'Royal', 'True', 'Sky', 'Cobalt', '', '', '',
        'Taupe', 'Bronze', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
    );
    var midNames = new Array(
        'Ferret', 'Lion', 'seal', 'dolph', 'trill', 'blu', 'bird', ''
    );
    var givenNames = new Array(
        'leaf', 'tree', 'paper', 'color', 'real', 'kai', 'birds', ''
    );
    Math.seed = seed.hashCode();
    var familyName = familyNames[Math.seededRandom(100, 0)];
    var midName = midNames[Math.seededRandom(8, 0)];
    var givenName = givenNames[Math.seededRandom(8, 0)];
    var fullName = familyName + midName + givenName;
    if (fullName && fullName.length < 2) fullName = 'quill';

    return fullName;
}

exports.getName = getName;