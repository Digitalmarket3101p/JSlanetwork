const str = "aabbcde";
let count = 1;
let result = "";

for (let i = 0; i <= str.length; i++) {
  if (str[i] === str[i + 1]) {
    count++;
  } else {
    result = result + count + str[i];
    count = 1;
  }
}
console.log(result);
