// Input: "coderbyte"
// Output: etybredoc

const a = "coderbyte";
console.log(a.split("").reverse().join(""));

// Input: 4
// Output: 24

const num = 5;
let fac = 1;
for (let i = 1; i <= num; i++) {
  fac = fac * i;
}
console.log(fac);

function firstfac(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * firstfac(num - 1);
  }
}

console.log("new", firstfac(4));

// Input: "fun&!! time"
// Output: time

let sen = "fun&!! time";
sen = sen.replace(/[^a-zA-Z ]/gi, "");

let words = sen.split(" ");
console.log(words);
let long = words[0];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > long.length) {
    long = words[i];
  }
}
console.log(long);

//input:nil
//output:ojm

function LetterChanges(str) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";
  var answer = "";

  for (i = 0; i < str.length; i++) {
    if (alpha.indexOf(str[i]) !== -1) {
      answer += newAlpha.charAt(alpha.indexOf(str[i]));
    } else {
      answer += str[i];
    }
  }
  return answer;
}

// keep this function call here
console.log(LetterChanges("nil"));

//
const str = "nil";
const letters = [...str];
console.log(letters);
console.log(...str);

//run length

const str1 = "aabbcdf";
let count = 1;
let result = "";

for (let i = 0; i <= str1.length; i++) {
  if (str1[i] === str1[i + 1]) {
    count++;
  } else {
    result = result + count + str1[i];
    count = 1;
  }
}
console.log(result);

//string scramble

function string(str2, str3) {
  for (let i = 0; i < str3.length; i++) {
    let char = str3[i];
    console.log(char);
    let index = str2.indexOf(char);
    console.log("index", index);
    if (index === -1) {
      return false;
    }
    str2 = str2.substring(0, index) + str2.substring(index + 1);
    console.log("hi", str2);
  }
  return true;
}
console.log(string("cdore", "coder"));

const input = [12, 46, 32, 64];
// input.sort();
console.log("input", input);

const results = input.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;

    if (array.length % 2 === 0) {
      // if the array has an even number of elements
      if (index === array.length / 2 - 1) {
        accumulator.median += currentValue;
      } else if (index === array.length / 2) {
        accumulator.median += currentValue;
        accumulator.median /= 2;
      }
    } else {
      // if the array has an odd number of elements
      if (index === (array.length - 1) / 2) {
        accumulator.median = currentValue;
      }
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);
console.log("original", results);
////

const inputs = [3, 8, 10, 3, 2, 5, 7, 9, 3];
inputs.sort((a, b) => a - b);

const r = inputs.reduce(
  (acc, cur, index, array) => {
    //mean logic
    acc.mean = acc.mean + cur / array.length;
    //median logic
    if (array.length % 2 === 0) {
      //even
      if (index === array.length / 2 - 1) {
        acc.median = acc.median + cur;
      } else if (index === array.length / 2) {
        acc.median = acc.median + cur;
        acc.median = acc.median / 2;
      }
    } else {
      //odd
      if (index === (array.length - 1) / 2) {
        acc.median = cur;
      }
    }
    return acc;
  },
  { mean: 0, median: 0 }
);
console.log(r);

const input1 = "George Raymond Richard Martin";

console.log(
  input1
    .split(" ")
    .map((item) => item[0])
    .join("")
);

const input2 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const ages = input2.map((person) => person.age);
console.log(...ages);
console.log(Math.min(...ages));
console.log(Math.max(...ages));
console.log(Math.max(...ages) - Math.min(...ages));

/// new
const input4 = "Every developer likes to mix kubernetes and javascript";
const counts = (item) => {
  return item[0] + (item.length - 2) + item[item.length - 1];
};
console.log(
  input4.split(" ").map((item) => (item.length >= 4 ? counts(item) : item))
);

//new

const input5 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
console.log(input5.__proto__);
console.log(
  input5.flat().reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur] = acc[cur] + 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {})
);
