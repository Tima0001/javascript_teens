"use strict";
// // ============== 1 ===============================================
// // Создай массив fruits с элементами: яблоки, бананы, апельсины.
// // Выведи массив в консоль
// // Выведи в консоль элемент массива с индексом 1
// // Измени значение этого элемента на киви
// // Выведи массив в консоль и убедись, что элемент изменился
// // Добавь следущими после элемента "апельсины", такие элементы: "грушы", "виноград", "персики"
// // Выведи массив в консоль и убедись, что элементы добавлены

// const fruits = ["яблоки", "бананы", "апельсины"];
// console.log(fruits); // ["яблоки", "бананы", "апельсины"]

// console.log(fruits[1]); // бананы
// fruits[1] = "киви";
// console.log(fruits); // ["яблоки", "киви", "апельсины"]

// fruits[3] = "грушы";
// fruits[4] = "виноград";
// fruits[5] = "персики";
// console.log(fruits); // ["яблоки", "киви", "апельсины", "грушы", "виноград", "персики"]

// // ============== 2 ===============================================
// // Создай массив test1, который содержит результаты тестов студентов:
// // 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12
// // С помощью цикла со счетчиком for выведи в консоль только те значения,
// // которые могут быть зачтены, т.е. они должны быть больше 12, это значение
// // должно храниться в переменной score1
// const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// const score1 = 12;

// for (let i = 0; i < test1.length; i += 1) {
//   if (test1[i] < score1) {
//     continue;
//   }
//   console.log("test-1", test1[i]);
// }

// // ============== 3 ===============================================
// // Создай массив test2, который содержит результаты тестов студентов:
// // 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20
// // С помощью цикла со счетчиком for выведи в консоль только те значения,
// // которые могут быть зачтены, т.е. они должны быть больше 15, это значение
// // должно храниться в переменной score2
// const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// const score2 = 15;

// for (let i = 0; i < test2.length; i += 1) {
//   if (test2[i] < score2) {
//     continue;
//   }
//   console.log("test-2", test2[i]);
// }

// // ============== 4 ===============================================
// // Создай массив test3, который содержит результаты тестов студентов:
// // 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22
// // С помощью цикла со счетчиком for выведи в консоль только те значения,
// // которые могут быть зачтены, т.е. они должны быть больше 16, это значение
// // должно храниться в переменной score3
// const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
// const score3 = 16;

// for (let i = 0; i < test3.length; i += 1) {
//   if (test3[i] < score3) {
//     continue;
//   }
//   console.log("test-3", test3[i]);
// }

// // ============== 5 ===============================================
// // Создай многомерный массив tests, который содержит 3 вложенных массива,
// // с результатами трех тестов студентов:
// // первый: 4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12
// // второй: 17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20
// // третий: 20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22
// // Выведи в консоль все три вложенных массива с помощью цикла for

// const tests = [
//   [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12],
//   [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20],
//   [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22]
// ];

// for (let i = 0; i < tests.length; i += 1) {
//   console.log(tests[i]);
//   for (let j = 0; j < tests.length; j += 1) {
//     console.log(tests[i][j]);
//   }
// }

// let tests = [test1, test2, test3];

// for (let test of tests) {
//   console.log(test);
// }
// =====================================
// let fruits = ["яблоки", "бананы", "апельсины"];
// console.log(fruits);
// console.log(fruits[1]);
// fruits[1] = "Киви";
// console.log(fruits);
// fruits.push("груши", "виноград", "персики");
// console.log(fruits);
// =====================================
// const test1 = [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12];
// const score1 = 12;
// for (let i = 0; i < test1.length; i += 1) {
//   if (test1[i] < score1) {
//     continue;
//   }
//   console.log("Проходные баллы", test1[i]);
// }
// =====================================
// const test2 = [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20];
// const score2 = 15;
// for (let i = 0; i < test2.length; i += 1) {
//   if (test2[i] < score2) {
//     continue;
//   }
//   console.log("Проходные баллы", test2[i]);
// }
// =====================================
// const test3 = [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22];
// const score3 = 16;
// for (let i = 0; i < test3.length; i += 1) {
//   if (test3[i] < score3) {
//     continue;
//   }
//   console.log("Проходные баллы", test3[i]);
// }
// =====================================
// let tests = [
//   [4, 12, 6, 16, 13, 8, 13, 4, 15, 11, 14, 10, 15, 12],
//   [17, 13, 4, 15, 10, 12, 16, 21, 13, 8, 14, 18, 15, 20],
//   [20, 12, 16, 22, 13, 8, 13, 4, 15, 10, 14, 18, 15, 22]
// ];
// for (let i = 0; i < tests.length; i += 1) {
//   console.log(tests[i]);
//   for (let j = 0; j < tests.length; j += 1) {
//     console.log(tests[i][j]);
//   }
// }