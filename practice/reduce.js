const { it } = require("node:test");

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
}, 0);
console.log(sum);

///
const users = [
  { firstName: "john", lastName: "Biden", age: 26 },
  { firstName: "jimmy", lastName: "cob", age: 75 },
  { firstName: "sam", lastName: "lewis", age: 50 },
  { firstName: "Ronald", lastName: "Mathew", age: 26 },
];

console.log(
  users.map((item) => {
    return item.firstName + " " + item.lastName;
  })
);

///

const age = users.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age]++;
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});
console.log(age);

//

const mark = users
  .filter((item) => item.age > 30)
  .map((item) => item.firstName);
console.log(mark);

function check(str) {
  return !str.split("").reduce((acc, cur) => {
    if (acc < 0) {
      return acc;
    }
    if (cur === "(") {
      return ++acc;
    }
    if (cur === ")") {
      return --acc;
    }
    return acc;
  }, 0);
}

console.log(check("(()))"));
