'use strict'
//start-work//
//На forEach://
//Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел//
// let arr = [1, 2, 3, 4, 5];
// let square = [];
// arr.forEach(function (num) {
//         const res = num * num;
//         square.push(res);
//     }
// )
// console.log(square);

//Дан массив с числами. Найдите сумму этих чисел.//
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
//
// arr.forEach(function (elem) {
//     sum += elem;
// });
// console.log(sum);
//--2-//
//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.//
// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * num);
// console.log(doubles)
// --3--//
//Дан массив с днями недели ['Понедельник', 'Вторник'...].
//Сделайте так, что он начинался с воскресенья и заканчивался понедельником.//
// let weeK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// weeK.reverse();
// console.log(weeK);
//--4--/ /
//C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"//

// let
// arr = [3, 2, 1]
// arr = arr.join("больше чем,")
// console.log(arr)

// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.//
// const arr="я учу js!";
// const delente=arr.split(" ")
// console.log(delente)

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.//
//     let str = '2025-12-31';
//      let str2 = str.split('-');
//     console.log(str2[2]+'.'+str2[1]+'.'+str2[0]);

//--5--//
    //Дан массив с числами. Оставьте в нем только отрицательные числа.
    // В отдельную переменную положите количество отрицательных чисел в этом массиве.//

// const numbers=[1,-2,-3,-4,4,5]
// let rer=numbers.filter((numbers) => numbers<0);
// console.log(rer)
// let rerS=numbers.filter((numbers) => numbers>0);
// console.log(rerS)

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.//

// const words=['must ','across','abylov','azizbek'];
// let FilterWords=words.filter((words)=> words.length>5)
// console.log(FilterWords)


///Бонусная задача://
//Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
//
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
//
// Для решения этой задачи вам понадобится метод у строк .toLowerCase(). Для преобразование символов входной строки в нижний регистр. Это гарантия того, что программа будет сравнивать именно сами символы, а не регистр или еще что-то.//
function palindrome(str) {
    str= str.toLowerCase().replace(/\s/g, "")
    return str=== str.split("").reverse().join("");
}
console.log(palindrome("Anna"))
console.log(palindrome("table"))
console.log(palindrome("Jonh"))
console.log(palindrome("Аргентина Манит Негра"))
console.log(palindrome('nan'))
console.log(palindrome('nana'))
