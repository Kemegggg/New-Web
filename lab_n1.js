//Определение времени суток: используем условные операторы if else для определения времени суток.
funcconst readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите час (0-23): ', (hour) => {
  hour = parseInt(hour);
  if (hour >= 6 && hour < 12) {
      console.log('Утро');
  } else if (hour >= 12 && hour < 18) {
      console.log('День');
  } else if (hour >= 18 && hour < 22) {
      console.log('Вечер');
  } else {
      console.log('Ночь');
  }
  readline.close();
});

//Определение дня недели Написать программу, которая запрашивает у пользователя номер дня недели (1-7) и выводит название дня с использованием оператора switch.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите номер дня недели (1-7): ', (day) => {
  switch (parseInt(day)) {
      case 1: console.log('Понедельник'); break;
      case 2: console.log('Вторник'); break;
      case 3: console.log('Среда'); break;
      case 4: console.log('Четверг'); break;
      case 5: console.log('Пятница'); break;
      case 6: console.log('Суббота'); break;
      case 7: console.log('Воскресенье'); break;
      default: console.log('Некорректный ввод');
  }
  readline.close();
});

//Сумма четных чисел от 1 до N Написать программу, которая вычисляет сумму всех четных чисел от 1 до N, где N — ввод пользователя. Для выхода из цикла при достижении первого числа больше N используется оператор break.
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



readline.question('Введите число N: ', (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
          sum += i;
      }
      if (i > n) {
          break;
      }
  }
  console.log(`Сумма четных чисел до ${n}: ${sum}`);
  readline.close();
});


//Поиск факториала числа с использованием do-while

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите число N: ', (n) => {
  let i = 1;
  while (i <= n) {
      if (i % 3 === 0) {
          i++;
          continue;
      }
      console.log(i);
      i++;
  }
  readline.close();
});


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


//Поиск факториала числа с использованием do-while
readline.question('Введите число для расчета факториала: ', (n) => {
  let factorial = 1;
  let i = 1;
  do {
      factorial *= i;
      i++;
  } while (i <= n);

  console.log(`Факториал числа ${n} равен ${factorial}`);
  readline.close();
});


// Индивидуальное задание Вариант 10
//1.Определение, является ли строка палиндромом

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите строку: ', (str) => {
  const reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) {
      console.log('Строка является палиндромом');
  } else {
      console.log('Строка не является палиндромом');
  }
  readline.close();
});


//2.Нахождение наибольшего из трех чисел

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите три числа через пробел: ', (input) => {
  const numbers = input.split(' ').map(Number);
  const maxNumber = Math.max(...numbers);
  console.log(`Наибольшее число: ${maxNumber}`);
  readline.close();
});


//3.Сумма простых чисел до N
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Введите число N: ', (n) => {
  n = parseInt(n);
  let sum = 0;

  function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }

  for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
          sum += i;
      }
  }
  console.log(`Сумма простых чисел до ${n}: ${sum}`);
  readline.close();
});