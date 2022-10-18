let myMap;
console.log(myMap);

myMap = new Map();
console.log(myMap);

myMap.set("FirstName", "Ashok");
myMap.set("LastName", "McGeregor");
console.log(myMap);

myMap.set("FirstName", 123);
console.log(myMap);

myMap.set("FirstName", "Conor");
console.log(myMap);

console.log(myMap.has("Age"));
console.log(myMap.get("Age"));
console.log(myMap.get("LastName"));
myMap.delete("LastName");
console.log(myMap);
myMap.clear();
console.log(myMap);

myMap.set("Hero", "NTR RC");
myMap.set("Movie", "RRR");
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());
console.log(myMap);
console.log(myMap.size);

//set
let mySet = new Set();
console.log(mySet);

mySet.add("Ashok");
console.log(mySet);

mySet.add(124);
console.log(mySet);

mySet.add("Ashok");
console.log(mySet);

mySet.add(124);
console.log(mySet);

console.log(mySet.has(124));
console.log(mySet.values());
console.log(mySet.keys());
console.log(mySet.entries());
console.log(mySet.size);

let num = "8";
let li = num.padStart(8, "*");
console.log(li);

let num1 = "9";
let li2 = num.padEnd(8, "*");
console.log(li2);

let cc = "372969248131";
console.log(cc);
let last4 = cc.slice(-4);
console.log(last4);

let hell = last4.padStart(cc.length, "*");
console.log(hell);

let abc = "Hello ,Guru,Hello,Namasthe,King ,Hello";
console.log(abc.indexOf("Hello"));
console.log(abc.lastIndexOf("Hello"));
console.log(abc.startsWith("Hello"));
console.log(abc.endsWith("Hello"));

let as = "I am Conor ";
let dana = `${as}`;
console.log(dana);

let obj = {};
// console.log(obj);

obj.Name = "Conor";

obj.Age = "28";

obj["Ufc Champion"] = true;
// console.log(obj);

console.log(obj.Age);
console.log(obj.Name);
console.log(obj["Ufc Champion"]);

let obj2 = { nam: "Ashok Utala", age: 22 };
console;

let user = { person: "Ashok", age: 22 };
// console.log(user);

let admin = user;
// console.log(admin);

admin.Email = "test@gmail.com";
// console.log(admin);
// console.log(user);

user.phone = "912323332";
console.log(admin);

const abc = {};
console.log(abc);
abc.age = 66;
console.log(abc);
//We are updating something which in the property
//no the variable

let user = Object.create({ nam: "King" });
console.log(user);

let myMap = new Map();
myMap.set("age", 22);
myMap.set("phone", 11233);

// console.log(myMap);
let abc = Object.fromEntries(myMap);

console.log(Object.keys(abc));
console.log(Object.values(abc));

console.log(Object.entries(abc));

let obj = { user: "Conor", age: 33, weight: 60, height: 5.9 };
Object.seal(obj);
obj.age = 89;
console.log(obj);
console.log(delete obj);
Object.freeze(obj);
obj.age = 69;
console.log(obj);

let day = new Date().getDay();
console.log(day);

switch (day) {
  case 0:
    alert("Sunday");
    break;
  case 1:
    alert("Monday");
    break;
  case 2:
    alert("Tuesday");
    break;
  case 3:
    alert("Wednesday");
    break;
  case 4:
    alert("Thursday");
    break;
  case 5:
    alert("Friday");
    break;
  case 6:
    alert("Saturday");
    break;
}

let str = ["Apple", "Bananna", "Orange", "Grapes"];
let len = str.length;
for (let i = 0; i < len; i++) {
  alert(str[i]);
}

let obj = { age: 23, height: 6, weight: 60, "ufc win": 9 };
for (let x in obj) {
  alert(obj[x]);
}

let str = ["Apple", "Bananna", "Orange", "Grapes"];
for (let x in str) {
  alert(str[x]);
}

let str = ["Apple", "Bananna", "Orange", "Grapes"];
for (let x of str) {
  alert(x);
}

//Arrays
let arr1 = ["Apple", "Bananna", "Orange", "Grapes", 23, [23, 45, 6, 6]];
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[arr1.length - 1]);
delete arr1[2];
console.log(arr1);
console.log(arr1[2]);
console.log(arr1[2]);

let a1 = ["Ashok", "priya", "Akhil", "Rohit"];
let a2 = [22, 23, 4, 7];
let a3 = a1.concat(a2, ["Hai", "Hello", "Guru", "Prema", "Kossame"]);
console.log(a1);
console.log(a2);
console.log(a3);

let a2 = ["Apple", "Bananna", "Orange", "Grapes"];
a2.every(function (currentValue, index, array) {
  console.log(currentValue);
  console.log(index);
  console.log(array);
  return currentValue;
});

let mySet = new Set();
mySet.add(22);
mySet.add(223);
mySet.add(2);
console.log(mySet);
let arr = Array.from(mySet);
console.log(arr);
let arr2 = Array.from("Hello Guru Prema kosame");
console.log(arr2);

if (Array.isArray(arr)) {
  arr.forEach(function (currentValue, index, array) {
    console.log("Before " + currentValue);
    currentValue = currentValue + index;
    console.log("After " + currentValue);
  });
}

console.log(arr.includes(22));
console.log(arr.indexOf(22));
console.log(arr.join("$"));
console.log(arr);

let arr1 = [1, 2, 3, 4, 5, 6];
arr1.push(7);
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift(10);
console.log(arr1);

let arr2 = arr1.slice(0, 3);
console.log(arr2);

let arr1 = [1, 2, 3, 4, 5, 6];
arr1.splice(2, 0, 9, 99, 999);
console.log(arr1);
arr1.splice(2, 3);
console.log(arr1);

let arr = [22, 45, 44, 34, 56, 33, 26];
let arr2 = arr.filter(function (currentValue, index, array) {
  return currentValue > 35;
});
console.log(arr2);

let arr3 = arr.find(function (currentValue, index, array) {
  return currentValue === 56;
});
console.log(arr3);

let arr = [22, 45, 44, 34, 56, 33, 26];
let abc = arr.reduceRight(function (accumulator, currentValue, index, array) {
  console.log("ac", accumulator);
  console.log("CV", currentValue);
  return accumulator + currentValue;
}, 0);

let arr = [22, 45, 44, 34, 56, 33, 26];

let arr1 = arr.sort(function (a, b) {
  return a - b;
});
console.log(arr1);

let arr2 = arr.sort(function (a, b) {
  return b - a;
});
console.log(arr2);

function callMe(number, num2) {
  console.log("Hello Baby " + number + " " + num2);
}

// callMe();
// callMe("King");

const baby = function () {
  console.log("Love you babe");
  return arguments[0] * arguments[0];
};
// baby();

// callMe();
// callMe("h1", "h8", 99);
console.log(baby(10, 20, 89, 99));

function greeting(message) {
  // let message = "KING";

  function sayHi() {
    console.log(message);
  }

  sayHi();
}

greeting("wwe");

function greeting() {
  let message = "Hi";

  function sayHi() {
    console.log(message);
  }

  return sayHi;
}
let hi = greeting();
console.log(hi()); // still can access the message variable

let arr = {
  age: 10,
  hei: 35,
  call: function () {
    console.log("I am function in Object");
  },
};

arr.call();

const abb = (function () {
  console.log("I am self function");
})();

//Promise

let prom = new Promise(function (resolve, reject) {
  resolve("Successfull");
  reject("Error Occurs");
});

prom.then((result) => {
  console.log(result);
});
prom.catch((error) => {
  console.log(error);
});
prom.finally(() => {
  console.log("I want to execute");
});

let error = Promise.reject(new Error("Error Occur"));
error.catch((error) => {
  console.log(error);
});
