// Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

// Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300

// answer :
var taka = 1000 ;
var orangesAndApplesPrice = 700 ;
var moneyLeft = taka - orangesAndApplesPrice ;
// console.log(moneyLeft) ;



// Task-2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

// answer 
var Mathematics = 75.25 ;
var Biology = 65 ;
var Chemistry = 80 ;
var Physics = 35.45 ;
var Bangla = 99.50 ;

var sum = Mathematics + Biology + Chemistry + Physics + Bangla ;
var average = (sum / 5).toFixed(2) ;
// console.log(average) ;


// Task-3
// You task is to divide the given number by 5 and show the remainder as the output.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Sample Input:
// 119

// Sample Output:
// 4

// answer 
var num1 = 119 ;
var num2 = 5 ;

var remainder = 119 % 5 ;
// console.log(remainder)



// Task-4
// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.

// answer 
var a = isNaN(‘11’) ;
console.log(a) ;
var b = isNaN(2-10) ;
// console.log(b) ;
// isNan checks if the thing given is a number or not . if its a number it returns false . else true .










