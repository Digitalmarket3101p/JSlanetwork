function array(str) {
  let max = Math.max(...str);
  console.log(max);
  let index = str.indexOf(max);
  console.log(index);
  str.splice(index, 1);
  console.log(str);

  let sum = str.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
  function checksum(str, target) {
    if (target === 0) {
      return true;
    }
    if (str.length === 0) {
      return false;
    }
    let current = str[0];
    let remain = str.slice(1);
    return checksum(remain, target) || checksum(remain, target - current);
  }
  return checksum(str, max - sum) ? "fasle" : "trues";
}

let str = [4, 6, 23, 10, 1, 3];
console.log(array(str));

function firstWord(s) {
  let firstBlank = s.indexOf(" ");
  console.log("hii", firstBlank);
  return s.substr(0, firstBlank);
}

console.log(firstWord("see and stop"));

//method 2

function arrayaddition(arr) {
  var targets = arr
    .sort(function (a, b) {
      return a - b;
    })
    .pop();
  return iscontains(arr, targets);

  function iscontains(arr, targets) {
    if (arr.length === 0) {
      return targets === 0;
    }
    var head = arr[0];
    var tails = arr.slice(1);
    console.log("hello", tails);
    return iscontains(tails, targets - head) || iscontains(tails, targets);
  }
}
console.log(arrayaddition([4, 6, 23, 10, 1, 2]));

console.log(Math.round(17.49));

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

function add(s) {
  let summand1 = parseInt(s, 10);
  console.log("hj", summand1);
  let indexPlus = s.indexOf("+");
  console.log(indexPlus);
  let sAfterPlus = s.substr(indexPlus + 1);
  let summand2 = parseInt(sAfterPlus, 10);
  return summand1 + summand2;
}
console.log(add("500+5"));

var createCounter = function (n) {
  return () => n++;
};
const re = createCounter(10);
console.log(re);

////

function expect(val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      else return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      else return true;
    },
  };
}

console.log(expect(5).toBe(5));

/////

var map = function (arr, fn) {
  return arr.reduce((acc, cur, index) => {
    acc[index] = fn(cur);
    return acc;
  }, []);
};
fn = function plus(n) {
  return n + 1;
};
console.log(map([1, 2, 3], fn));

///
var join = function (arr1, arr2) {
  let obj = {};
  [...arr1, ...arr2].forEach((ele) => {
    console.log("hii",ele);
    let key = ele.id;
    obj[key] = { ...obj[key], ...ele };
  });
  return Object.values(obj);
};

console.log(
  join(
    [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ],
    [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ]
  )
);

///

const values = [1, 2, 3, 4, null, 5, 6, undefined];
console.log(values.filter(Boolean).length);




////

class Calculator {
  
  /** 
   * @param {number} value
   */
  constructor(value) {
   this.result = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
this.result += value;
return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
this.result -= value;
return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
this.result *= value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {

this.result /= value;
return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
this.result **= value;
return this;
  }
    
  /** 
   * @return {number}
   */
  getResult() {
      return this.result;
   
  }
}
console.log(["Calculator", "add", "subtract", "getResult"],[2,5,5]);