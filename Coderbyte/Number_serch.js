function numberserch(str) {
  let letter_no = 0;
  let no = 0;
  for (let i = 0; i < str.length; i++) {
    var char = str.charAt(i);
    // console.log(char);
    if (!isNaN(char) && char !== " ") {
      no += parseInt(char);
      //   console.log(no);
    }
    if (/[a-zA-Z]/.test(char)) {
      letter_no++;
    }
  }
  var avg = no / letter_no;
  return Math.round(avg);
}

console.log(numberserch("H3ello9-9"));
