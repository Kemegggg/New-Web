
function greet() { // Функция для вывода приветствия
    console.log("Привет, добро пожаловать!");
}
greet(); // Вызов функции

//----------------------------------------------

function calculateSum(a, b) { // Функция для вывода суммы двух чисел
    const sum = a + b;
    console.log("Сумма:", sum);
}
calculateSum(5, 10); // Вызов с аргументами 5 и 10

//---------------------------------------------

function multiply(x, y) { // Функция для умножения двух чисел
    return x * y;
}
const result = multiply(3, 4); // Сохраняем результат умножения
console.log("Результат умножения:", result);


//---------------------------------------------

function isAdult(age) { // Проверка, является ли возраст 18 или больше
    return age >= 18;
}
console.log(isAdult(20)); // true
console.log(isAdult(16)); // false

//---------------------------------------------

function printNumbers(n) { // Вывод чисел от 1 до n
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
printNumbers(5); // Вызов функции для вывода чисел от 1 до 5



// Индивидуальное задание Вариант 10
// Задание 1: Функция, возвращающая наибольшее из двух чисел
function MaxNum(a, b) {
    return a > b ? a : b;
}
console.log(MaxNum(45, 52)); // Пример 

// Задание 2: Функция, возвращающая строку в верхнем регистре
function Upper(str) {
    return str.toUpperCase();
}
console.log(Upper("popov aleksandr")); // Пример

// Задание 3: Функция, переворачивающая строку
function revers(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Popovvv")); // Пример 
