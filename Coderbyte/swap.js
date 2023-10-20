function swap(str) {
  str = str.replace(/([a-z]) | ([A-Z])/g, function (match, p1, p2) {
    if (p1) {
      return p1.toUpperCase();
    } else {
      return p2.toLowerCase();
    }
  });

  str = str.replace(/\d+[a-zA-Z]+\d+/g, function (match) {
    var first = match.match(/\d+/)[0];
    var second = match.match(/\d+$/)[0];
    var letter = match.match(/[a-zA-Z]+/)[0];
    return second + first + letter;
  });
  return str;
}

console.log(swap("Hello -5woRld"));

console.log([2, 3, 4, 5, 6].length);
