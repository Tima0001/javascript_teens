"use strict";
// ============== занятие 1 ========
// МАССИВЫ

// const arr = [];
// console.log(arr);

// const students = ["Den", "Nick", "Dave", "Helen"];
// console.log(students); // ["Den", "Nick", "Dave", "Helen"]

// // Доступ к элементам
// console.log(students[0]); // Den
// console.log(students[1]); // Nick
// console.log(students[2]); // Dave
// console.log(students[3]); // Helen
// console.log(students[4]); // undefined

// Переопределение
// замена
// students[0] = "Roy";
// console.log(students[0]); // Roy
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen"]

// добавление
// students[4] = "Mary";
// console.log(students[4]); // Mary
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen", "Mary"]

// длина массива
// текущее количество элементов
// console.log(students.length); // 5

// // // добавить элемент/ы
// students.length = 10;
// console.log(students.length); // 10
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen", "Mary", empty]
// console.log(students[5]); // undefined
// console.log(students[6]); // undefined
// console.log(students[7]); // undefined

// // убрать элемент/ы
// students.length = 4;
// console.log(students.length);
// console.log(students); //  ["Roy", "Nick", "Dave", "Helen"]

// // итерация по массиву

// // перебор массива
// for (let i = 1; i < students.length; i += 2) {
//   console.log("students item: ", students[i]);
// }

// ЦИКЛ СО СЧЕТЧИКОМ, МОЖНО УКАЗАТЬ ШАГ, СКОЛЬКО СТУПЕНЕК ПЕРЕСТУПАЕМ
// for (С какого эл-та перебор; ДО какого эл-та (условие); с каким шагом (каждый 1й, 2й, 3й ...)) {

// }

// ЦИКЛ, перебирающий каждый элемент массива, наступает на каждую ступень с самого начала до самого конца
// for (ПРОСИТ ОБОЗВАТЬ ЭЛЕМЕНТ МАССИВ of УКАЖИ САМ МАССИВ) {

// }

// // заполнение данными
// for (let i = 0; i <= 6; i += 2) {
//   students.push(`The best student - ${i}`);
// }
// console.log("students list: ", students); //  students list: ["Roy", "Nick", "Dave", "Helen", "student-0", "student-1", "student-2"]
// console.log(students.length);

// // FOR...OF альтернатива циклу FOR, если не нужен счетчик
// // по массиву
// for (const student of students) {
//   console.log(student);
// }

// const house = ["flat-1", "flat-2", "flat-3", "flat-4", "flat-5"];
// for (const aFlat of house) {
//   console.log(aFlat);
// }

// const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
// for (const aDay of week) {
//   console.log(aDay);
// }

// // по строке
// const name = "Aleksandra is a teacher!";
// console.log(name);

// for (const character of name) {
//   console.log(character);
// }

// // BREAK & CONTINUE

// // найти совпадение или не совпадение и вывести сообщение об этом

// // example 1
// let studentName;
// console.log("имя студента", studentName);
// // studentName = prompt("Enter your name please");

// const studentsNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Helen",
//   "Mary",
//   "Sarah",
//   "Charly",
//   "Bob"
// ];
// console.log("список студентов", studentsNew);

// const studentsNotNew = [
//   "Roy",
//   "Nick",
//   "Dave",
//   "Dick",
//   "Mary",
//   "Olga",
//   "Charly",
//   "Bob"
// ];
// studentName = studentsNotNew[Math.floor(studentsNotNew.length * Math.random())];
// console.log(studentName);
// // console.log("имя студента", studentName);

// let message;

// for (const student of studentsNew) {
//   if (student === studentName) {
//     message = "A student with this name already is in the database";
//     break;
//   }
//   message = "Welcome in our database of unique names!";
// }
// console.log(`${studentName}, ${message}`);

// // example 2

let myCars = ["Land Rover", "WV", "Subaru"];
let myCar = myCars[Math.floor(myCars.length * Math.random())];

const worldCarsList = [
  "BMW",
  "Toyota",
  "Mersedes",
  "Porshe",
  "Audi",
  "Lexus",
  "Honda",
  "Mazda",
  "Land Rover",
  "Nissan",
  "Subaru"
];

let msg;

for (const car of worldCarsList) {
  if (car === myCar) {
    console.log(car);
    msg = "Оу, у меня была такая тачка!";
    break;
  }
  msg = "У меня не было еще такой машины! А жаль...";
}
console.log(`${myCar}, ${msg}`);

// директива continue

// example 1

// const nums = [1, 5, 13, 45, 467, 99, 3, 23];
// console.log(nums.length);
// console.log(nums[0]);

// const numMore = 34;

// for (let i = 0; i < nums.length; i += 1) {
//   if (nums[i] < numMore) {
//     continue;
//   }
//   console.log(`This number is more then ${numMore}: ${nums[i]}`);
// }

// example 2

// const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// const minLevel = 12;

// for (let i = 0; i < test1.length; i += 1) {
//   if (test1[i] < minLevel) {
//     continue;
//   }
//   console.log(`student: `, test1[i]);
// }

// МНОГОМЕРНЫЕ МАССИВЫ

// const house = [
//   [0.1, 0.2, 0.3], // [0]
//   [1.1, 1.2, 1.3], // [1]
//   [2.1, 2.2, 2.3] // [2]
// ];
// console.log(house);

// console.log(house[0][0]); // 1
// console.log(house[0][1]); // 2
// console.log(house[0][2]); // 3

// console.log(house[1][0]); // 11
// console.log(house[1][1]); // 22
// console.log(house[1][2]); // 33

// console.log(house[2][0]); // 111
// console.log(house[2][1]); // 222
// console.log(house[2][2]); // 333

// // вложенные циклы для перебора вложенных массивов
// let total = 0;

// for (let i = 0; i < house.length; i += 1) {
//   console.log("Вложенный массив ", house[i]);
//   for (let j = 0; j < house.length; j += 1) {
//     console.log("Элемент вложенного массива", house[i][j]);
//     // total += house[i][j];
//   }
// }
// // console.log(total);

// ============== занятие 2 ========

// // присвоение по значению (для примитивов)
// let a = 5;
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// a = 10;
// console.log(a); // 10
// console.log(b); // 5

// // присвоение по ссылке (для сложных типов)
// const units = ["alfa", "beta", "gamma"];
// const newUnits = units;

// console.log(units); // ["alfa", "beta", "gamma"]
// console.log(newUnits); // ["alfa", "beta", "gamma"]

// // МЕТОДЫ МАССИВОВ
// // Добавление элементов
// // .push() добавляет новый эл-т в конец массива
// units.push("delta");
// console.log(units); // ["alfa", "beta", "gamma", "delta"]
// console.log(newUnits); // ["alfa", "beta", "gamma", "delta"]
// // .unshift() добавляет новый эл-т в начало массива
// newUnits.unshift("epsilon");
// console.log(newUnits); // ["epsilon", "alfa", "beta", "gamma", "delta"]
// console.log(newUnits); // ["epsilon", "alfa", "beta", "gamma", "delta"]

// // Удаление элементов
// // .pop() удаляет последний эл-т из массива
// units.pop("");
// console.log(units); // ["epsilon", "alfa", "beta", "gamma"]
// console.log(newUnits); // ["epsilon", "alfa", "beta", "gamma"]
// // .shift() удаляет первый [0] эл-т из массива
// newUnits.shift([0]);
// console.log(newUnits); // ["alfa", "beta", "gamma"]
// console.log(newUnits); // ["alfa", "beta", "gamma"]

// // СОБРАТЬ ЭЛЕМЕНТЫ
// // .join() массив в строку
// console.log(units.join("")); // alfabetagamma
// console.log(units.join(", ")); // alfa, beta, gamma
// console.log(units.join("-")); // alfa-beta-gamma

// // РАЗБИТЬ ЭЛЕМЕНТЫ
// // .split() строку в массив
// const msg = "Welocome to my world!";
// console.log(msg.split(" ")); //  ["Welocome", "to", "my", "world!"]
// console.log(msg.split("")); //  ["W", "e", "l", "o", "c", "o", "m", "e", " ", "t", "o", " ", "m", "y", " ", "w", "o", "r", "l", "d", "!"]

// // НАЙТИ ЭЛЕМЕНТЫ
// // по индексу

// // .indexOf() индекс элемента, если он есть в массиве, иначе -1
// console.log(units.indexOf("beta")); // 0
// console.log(units.indexOf("ddd")); // -1

// // по наличию

// // .includes() указывает наличие или отсутствие элемента в массиве
// console.log(msg.includes("to")); // true
// console.log(msg.includes("WORLD")); // false
// console.log(msg.includes("world")); // true
// console.log(msg.includes("!")); // true
// console.log(msg.includes("t")); // true

// // проверка множества условий
// const fruit = "apple";
// if (fruit === "apple" || fruit === "strawberry") {
//   console.log("it`s a red fruit");
// }

// const redFruits = ["apple", "strawberry", "cherry", "cranberry"];
// const fruit = prompt("Enter a fruit please");

// if (redFruits.includes(fruit)) {
//   console.log("it`s a red fruit");
// } else {
//   console.log("it`s not a red fruit");
// }

// // СКОПИРОВАТЬ МАССИВ
// .slice(a, b) копирует эл-ы от a до b, не включая b в новый массив
// const numList = [0, 1, 2, 3, 4, 5, 6, 7];
// console.log(numList.slice(0, 3)); // [0, 1, 2]
// console.log(numList.slice(1, 2)); // [1]
// console.log(numList.slice(1, 5)); // [1, 2, 3, 4]
// console.log(numList.slice(1)); // [1, 2, 3, 4, 5, 6, 7]
// console.log(numList.slice(3)); // [3, 4, 5, 6, 7]
// console.log(numList.slice()); // [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(numList.slice(-1)); // [7]
// console.log(numList.slice(-2)); // [6, 7]
// console.log(numList.slice(-3)); // [5, 6, 7]

// // ШВЕЙЦАРСКИЙ НОЖ
// // .splice() изменяет исходный массив

// // удаляет (нач.поз-я, кол-во эл-ов)
// console.log(numList); // [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(numList.splice(0, 2)); // [0, 1] удаленные элементы
// console.log(numList); // [2, 3, 4, 5, 6, 7] измененный массив

// // вставляет (нач.поз-я, 0, el1, el2, ...)
// console.log(numList.splice(0, 0, 1)); // []
// console.log(numList); // [1, 2, 3, 4, 5, 6, 7] еще раз измененный массив
// console.log(numList.splice(7, 0, 8, 9)); // []
// console.log(numList); // [1, 2, 3, 4, 5, 6, 7, 8, 9] и еще раз измененный массив
// console.log(numList.splice(3, 0, 9889)); // []
// console.log(numList); // [1, 2, 3, 9889, 4, 5, 6, 7, 8, 9] и еще разок измененный массив

// // заменяет
// console.log(numList.splice(3, 1, "Js")); // [9889]
// console.log(numList); // [1, 2, 3, "Js", 4, 5, 6, 7, 8, 9] снова измененный массив
// console.log(numList.splice(3, 3, "Js")); // ["Js", 4, 5]
// console.log(numList); // [1, 2, 3, "Js", 6, 7, 8, 9] и снова измененный массив

// // ОБЪЕДИНЕНИЕ МАССИВОВ
// // .concat()
// const arr1 = ["Hello"];
// const arr2 = ["World!"];
// const lang = arr1.concat(arr2);
// console.log(lang.join(", "));

// // FUNCTIONS

// // function expression (with variable)

// объявление функции
// //              (parametres)
const add = function(a, b, c) {
  return a + b + c;
};

// // вызов функции
// //            (arguments)
const result = add(1, 2, 3);
console.log(result); // 6

console.log(add(5, 10, 15)); // 30

// // ПОРЯДОК ВЫПОЛНЕНИЯ КОДА
// // объявление
const fn1 = function() {
  console.log("1я функция начала выполняться");
  // // вызов
  fn2();
  console.log("Продолжение выполнения 1й функции после выхода из 2й функции");
};
const fn2 = function() {
  console.log("Выполняется 2я функция");
};

// // вызов
console.log("Начато выполнение основного кода");
fn1();
console.log("Продолжение выполнения основного кода после выхода из 1й функции");

// // парметры по умолчанию

const count = function(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
};
count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(undefined, 5, 2); // countFrom = 0, countTo = 5, step = 2
count(); // countFrom = 0, countTo = 10, step = 1