
// Индивидуальное задание Вариант 10
// 1. Преобразование массива объектов. Создайте массив объектов и преобразуйте
function isPalindrome(str) {
    // Переводим строку в нижний регистр для нечувствительности к регистру.
    str = str.toLowerCase();
    
    // Запускаем цикл, который проверяет символы с начала и конца строки.
    for (let i = 0; i < str.length / 2; i++) {
        // Если символ с начала строки не равен соответствующему символу с конца, значит, это не палиндром.
        if (str[i] !== str[str.length - 1 - i]) {
            return false; // Завершаем выполнение функции и возвращаем false.
        }
    }
    return true; // Если все пары символов совпали, возвращаем true.
}

// Пример вызова функции
let input = "Level";
console.log("Палиндром:", isPalindrome(input));


// 2. Создание массива, содержащий все числа между двумя введенными пользователем значениями.
function findMax(a, b, c) {
    let max = a; // Начнем с того, что считаем `a` максимальным числом.

    if (b > max) {
        max = b; // Если `b` больше текущего значения `max`, то теперь `max` равно `b`.
    }

    if (c > max) {
        max = c; // Если `c` больше текущего значения `max`, то `max` становится равно `c`.
    }

    return max; // Возвращаем наибольшее значение.
}

// Пример вызова функции
let number1 = 15, number2 = 20, number3 = 10;
console.log("Наибольшее число:", findMax(number1, number2, number3));
// 3. Сумма всех элементов массива, которые делятся на 3.
function sumPrimes(n) {
    let sum = 0; // Переменная для накопления суммы простых чисел.

    for (let i = 2; i <= n; i++) {
        let isPrime = true; // Предполагаем, что число `i` — простое.

        for (let j = 2; j <= Math.sqrt(i); j++) {
            // Если `i` делится на `j` без остатка, то `i` — не простое число.
            if (i % j === 0) {
                isPrime = false; // Устанавливаем `isPrime` в `false`.
                break; // Прекращаем проверку делителей для `i`.
            }
        }

        // Если `isPrime` осталось `true`, значит, `i` — простое, добавляем его к сумме.
        if (isPrime) {
            sum += i;
        }
    }
    return sum; // Возвращаем сумму всех простых чисел до `n`.
}

// Пример вызова функции
let N = 10;
console.log("Сумма простых чисел до N:", sumPrimes(N));

