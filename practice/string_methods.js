// String length

const { name } = require("pug");

const a = "hello world";
console.log("length", a.length);

// String slice()
console.log("slice", a.slice(2, 7));
// String substring()
// The difference is that start and end values less than 0 are treated as 0 in substring().
console.log("substring", a.substring(0, 7));

// String substr()
console.log("substr", a.substr());

// String replace()
console.log("replace", a.replace("hello", "nil"));

// String replaceAll()
console.log("replaceall", a.replaceAll("hello world", "nil"));

// String toUpperCase()
console.log("touppercase", a.toUpperCase());

// String toLowerCase()
console.log("tolowercase", a.toLowerCase());

// String concat()
console.log("concat", a.concat("nil"));

// String trim()
const b = "        hello world";

console.log("trim", b.trim());

// String trimStart()
// String trimEnd()
// String padStart()
let text = "5";
text = text.padStart(4, "0");
console.log("padstart", text);
// String padEnd()
//convert number to string
const c = "4";
console.log("number", c.toString());
// String charAt()
console.log("charat", a.charAt(3));

// String charCodeAt()
console.log("charat", a.charCodeAt(0));

// String split()
console.log("split", a.split(" "));

// String indexOf()
console.log("indexof", a.indexOf("o"));
// String lastIndexOf()
console.log("lastindexof", a.lastIndexOf("o"));

// String search()
console.log("search", a.search(/hello/));
// String match()
console.log("match", a.match("llo"));
// String matchAll()
let tex = "I love cats. Cats are very easy to love. Cats are very popular.";

console.log("matchall", tex.matchAll("Cats"));

// String includes()
console.log("include", a.includes("hello"));
// String startsWith()
// String endsWith()

const result2 = {
  name: "nil",
  age: 15,
};
console.log(result2["age"]);
console.log(result2["name"]);
