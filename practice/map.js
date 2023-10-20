const names = ["nil", "mkl", "ddss"];

console.log(names.map((item) => item[0].toUpperCase() + item.slice(1)));

//

const employees = [
  { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
  { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
  { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
  { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
//op:
// [
//     { name: 'Adam', netEarning: 4500 },
//     { name: 'Noah', netEarning: 7000 },
//     { name: 'Fabiano', netEarning: 1800 },
//     { name: 'Alireza', netEarning: 4600 }
//   ]

const objarr = (obj) => {
  newobj = {};
  newobj.name = obj.name;
  newobj.netearning = obj.salary + obj.bonus - obj.tax;
  return newobj;
};
console.log(employees.map(objarr));

const result = employees.map((item) => {
  let obj = {};
  obj.name = item.name;
  obj.netincome = item.salary + item.bonus - item.tax;
  return obj;
});
console.log(result);

///

const customers = [
  { givenName: "Johan", surname: "Doe" },
  { givenName: "Jane", surname: "Client" },
  { givenName: "Bobby", surname: "Person" },
];

//op: ["0 : Johan Doe", "1 : Jane Client", "2 : Bobby Person"]

const re = customers.map((item, index) => {
  return `${index} : ${item.givenName} ${item.surname}`;
});
console.log(re);
