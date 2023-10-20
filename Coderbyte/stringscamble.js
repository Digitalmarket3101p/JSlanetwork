//input:"cdoer" str2:"coder"
//output:true

let str1 = "cdor";
const str2 = "code";

function scamble(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    console.log(char);

    let index = str1.indexOf(char);
    console.log(index);
    if (index === -1) {
      return false;
    }
    str1 = str1.substring(0, index) + str1.substring(index + 1);
  }
  return true;
}

console.log(scamble(str1, str2));
let x = "Tic";
x = x + "Tac";
x = x + x;
console.log(x);

function toCase(str) {
  let lower = str.toLowerCase();
  let upper = str.UpperCase();
  return lower + "-" + upper;
}

toCase("math");
