const cars = ["Saab", "Volvo", "BMW"];
//sort
console.log("sort", cars.sort());
//tostring
console.log("tostring", cars.toString());

const numbers1 = [45, 4, 9, 16, 25];
const result = numbers1.map((item) => item * 2).filter((items) => items > 20);
console.log(result);

let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];

//   output
//   {
//     '19': [ { name: 'Dwight', age: 19 } ],
//     '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
//     '55': [
//       { name: 'Oliver', age: 55 },
//       { name: 'Michael', age: 55 },
//       { name: 'Kevin', age: 55 }
//     ]
//   }

// const result1 = people.reduce((acc, cur) => {
//   if (!acc[cur.age]) {
//     acc[cur.age] = [];
//     acc[cur.age].push(cur);
//   } else {
//     acc[cur.age].push(cur);
//   }
//   return acc;
// }, {});

// console.log("result", result1);

const result1 = people.reduce((acc, cur) => {
  if (!acc[cur.age]) {
    acc[cur.age] = [];
    acc[cur.age].push(cur);
  } else {
    acc[cur.age].push(cur);
  }
  return acc;
}, {});
console.log(result1);

console.log("entery", cars.entries());
