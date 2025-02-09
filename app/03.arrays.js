console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.

// var array = [1, 2, 3, 4];
// var lastElement = array[array.length-1];
// console.log(lastElement);
// console.log(array);
// let newLastElement = array.pop();
// console.log(newLastElement);
// console.log(array);

// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

// var array = [8, 9, 10];
// array.push(11);
// console.log(array);
// var newArray = array.concat([12, 13]);
// console.log(newArray);

// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.

// var array = [1, 2, 3, 4, 5, 6];
// array[3] = 10;
// console.log(array);
// var newArray = [...array.slice(0, 3), 12, ...array.slice(4)];
// console.log(newArray);

// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.

// let array = [1, 2, 3, 4, 5];
// array.forEach(function(el) {
//     console.log(el);
// });

// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.

// let array = [10, 70, 50, 60, 80];
// var result = array.filter(function(el){
//         return el > 50;
// });
// console.log(result);
// let sum = result.reduce(function(start, next){
//     return start + next;
// });
// console.log(sum);

// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.

// var array = ['a', 'b', 'c', 'd'];
// var string = array.join('*');
// console.log(string);

// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.

// var array = [35, 5, 2, 15, 32];
// array.sort(function(el1, el2){
//     return el1 - el2;
// });
// console.log(array);
// var array2 = array.reverse();
// console.log(array2);

// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.

// var array = [3, 0, -1, 12, -2, -4, 0, 7, 2];
// var newArray = array.filter(function(el){
//     return el < 0;
// });
// var newArray2 = array.filter(function(el){
//     return el === 0;
// });
// var newArray3 = array.filter(function(el){
//     return el > 0;
// });
// var newArrray4 = newArray.concat(newArray2, newArray3);
// console.log(newArrray4);

// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.

// var styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[styles.length-2] = "Classics";
// var firstElement = styles.shift();
// console.log(firstElement);
// styles.unshift("Rap", "Reggae");
// console.log(styles);

// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.

// var string = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";
// var sumK = string.split('k').length-1;
// console.log(sumK);
// var sumR = string.split('r').length-1;
// console.log(sumR);
// var sumT = string.split('t').length-1;
// console.log(sumT);

// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.

// var array = [17, 34, 85, 15];
// var index = Math.floor(Math.random()*array.length);
// console.log(array[index]);

// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.

// var array = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
//
// array.forEach((item) => {
//     console.log(item.join(' '));
// });


// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.

// var array = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
// var newArray = array.flat(1);
// console.log(newArray);

// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.

// var array = [1, 2, 3, 4, 5];
// var newArray = array.slice(1, 4);
// console.log(newArray);

// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and disply it in the console.

// var array = [1, 2, 3, 4, 5];
// var indexElem = array.indexOf(4);
// console.log(indexElem);
//
// var findIndexElem = array.findIndex(function(value) {
//     return value === 5;
// });
// console.log(findIndexElem);

// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.

// var array = [2, 2, 7, 0, 9, 8, 7];
// var newArray = [];
// array.forEach(function(item){
//     if(newArray.indexOf(item) < 0){
//         newArray.push(item);
//     }
// });
//
// console.log(newArray);

// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.

// var array = [2, 2, 7, 0, 9, 8, 7];;
// var fin = false;
// var result;
// for(let value of array){
//     if(array.indexOf(value) !== array.lastIndexOf(value)){
//         result = value;
//         array.forEach(function(element, index, arr) {
//             if (element === value) {
//                 arr[index] = '*';
//             }
//         });
//         break;
//     }
// }
// console.log(array);

// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.

console.log('Task 18');
var array = [10, 17, 34, 77, 35, 7];
var newArray = array.map(function(el) {
    return el.toString(2);
});
console.log(newArray);

var newArray2 = array.map(function(el) {
    return el.toString(8);
});
console.log(newArray2);

var newArray3 = array.map(function(el) {
    return el.toString(16);
});
console.log(newArray3);

// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.

console.log('Task 19');
var string = 'a big brown fox jumps over the lazy dog';
var arrayFromString = string.split(' ');
var newArrayFromString = arrayFromString.map(function(el) {
    return el.slice(0, 3);
});
console.log(newArrayFromString);

// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.

console.log('Task 20');
var array2 = [1, 'one', 89, 'two', 7];
var isString = array2.every(function(el) {
    return el.length;
});
console.log(isString);

// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.

console.log('Task 21');
var sortArr = [1, 5, 7, 9, 16, 24, 75, 100, 102, 105, 110];

function binarySearch(arr, value) {
    var midElemIndex = Math.floor(arr.length/2);
    var midElem  = arr[midElemIndex];

    if (midElem === value) {
        return midElemIndex;
    } else if (arr.length === 1) {
        return -1;
    } else if (midElem > value) {
        return binarySearch(arr.slice(0, midElemIndex), value);
    } else {
        var resultIndex = binarySearch(arr.slice(midElemIndex), value);
        return resultIndex === -1 ? -1 : resultIndex + midElemIndex;
    }
}

console.log( binarySearch(sortArr, 25));
console.log( binarySearch(sortArr, 100));
