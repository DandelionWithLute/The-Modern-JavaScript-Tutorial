syntatic sugar: Improve Code Readability.
let billion = 1_000_000_000;

PRESS CONTROL Z TO GET TO THE LATEST OUTPUT
instead of ctrl + shift + U

octal 八进制的

toString(num)
这个 num 输入后可以进行转换的

ctrl+space = suggestions

//
// <b>Important</b>
//
1.You can't change string.
2.Better use str.at(-1) or str[str.length-1]
3.IndexOf("str",num) num represents where the search starts.

Widget 小装置
trailing (植物)蔓生的

let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

<!--

    process.stdout.write() = console.log with no new line

 -->

let i=0;i<arr.length;i++
let item of items
let key in arr

Arrays are Objects
https://www.w3schools.com/js/js_arrays.asp#:~:text=Arrays%20are%20Objects,returns%20%22object%22%20for%20arrays.

<!-- Author:
Let’s recall the rules:

Two objects are equal == only if they’re references to the same object.
If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
…With an exception of null and undefined that equal == each other and nothing else. -->

array compare to array with conversion ?
(conversion) [] will be primitive like "" :
(no conversion) == will be reference comparison and === will be reference comparason with no type conversion.

<b>Mdn web docs sort method</b>
It should return a number where:

A negative value indicates that a should come before b.
A positive value indicates that a should come after b.
Zero or NaN indicates that a and b are considered equal.
To memorize this, remember that (a, b) => a - b sorts numbers in ascending order.

If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.


 
// Important
// Important
// Important

Important:We can use structuredClone, Object.assign(targetObject,ObjectToSign)
and slice to copy now!

// Important
// Important
// Important

////////////////////////////////////////////
ReduceMethod:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
////////////////////////////////////////////
