// Number
var a = 10;

// String
var b = 'Im a string';


/*
Today
 - conditions
 - loops
    * for
    * while
*/

/*
Conditions

if something is True do this else do that.

e.g if "it's not raining" go out else stay at home.
using if - keyword similar to var.
*/

if (Condition) {
  // if true, do these things.
} else {
  // else do this.
}


// in javascript everything inside {} is a single block of code.
// What is True and what is False? True means correct. False means incorrect.


// e.g
if (condition)
{ // if-block

  // if condition is True, this is executed and else-block is skipped
  console.log('Yes');
}
else
{ // else-block

  // if condition is False, this is executed and if-block is skipped
  console.log('No');
}

// what is shown? Yes or No?
// goes here.

var a = 5; // Assignment operator

=  // Assignment, put right hand side value in left.


// boolean operators: they return true or false.
== // equals
!= // not equals
<  // less than
>  // greater than
<= // less than or equal
>= // greater than or equal.


// excercise
1 == 2 // False
100 == 100 //  true

1 != 2 // True
100 != 100 // False

1 < 2 // True
1 <= 2 // True

2 < 2 // False
2 <= 2 // True
;

if (10 < 20) {
  console.log('Lesser');
} else {
  console.log('greater');
}
// Lesser

// defining and initializing
var a, b;
a = 10, b = 20;

// 10 > 20: this is false
if (a > b)
{
 // if-block.
}
else
{ // else-block
  a = b;
}

// step 1: evaluate the condition? condition is false.
// step 2: if it's true execute if-block,
//         if it's false execute else-block.

/*
a = 20
b = 20
*/

{
  // a block of statement
}


var a = 10, b = 20;

if (a <= b) {
  a = a + b;
  b = b * a; // 20 * 30
} else {
  b = b - a;
}

/*
a = 30
b = 600
*/

// mathematical operators
+   // addition, e,g 10 + 20 is 30
-   // subtraction, e.g 10 - 20 is -10
*   // multiplication, e.g 10 * 20 is 200
/   // for division, e.g 10 / 20 is 0.5
%   // Modulo look for the remainder and not the quotient
    // e.g on dividing 6 by 3 what is the remainder? 0
    // on diving 7 by 3 what is the remainder? 1

var a = 6, b = 3;
 a + b // 9
 a - b // 3
 a * b // 18
 a / b // 2
 a % b // 0
 10 % 3 // 1
 11 % 20 // 11 / 20, quotient 0, remainder 11

 83 % 100 // 83
 83 % 83 // 0
 10 % 2 // 0, that means 10 is divisible by 2.
 11 % 2 // 1, that means 11 is not divisible by 2 as the remainder is not 0.

 15 % 5 // 0, that means 15 is divisible by 5.

// What did we learn today?
// We learnt about conditions (if - else)
// We learnt about boolen and mathematical operators.


// Assignment Problem: find if a number is even or odd.
var a = 101;

// when is a number even? When a number is divisible by 2.
// 10 is divisible by 2. 10 / 2 leads to 0 remainder.

// We need to check if the number mod 2 is 0.
if (a % 2 == 0) {
  console.log('Even');
} else {
  console.log('Odd');
}

// Step 1: evaluate the condition: 100 % 2 == 0
                                  //  0 == 0
                                  // True

                                  // 101 % 2 == 0
                                  // 1 == 0
                                  // False


if (condition1) {
  //
} else if (condition2) {

} else if (condition3) {

} else {
  //
}

var a = 10, b = 100, c = 30;

if (a > b)
{
  console.log('A is greater than b')
}
else if (a > c)
{
  console.log('A is greater than c')
}
else
{
  console.log('A is the smallest')
}

// output?
//

// No else.
var a = 10, b = 100, c = 30;
if (a > b)
{
  console.log('A is greater than b')
}
else if (a > c)
{
  console.log('A is greater than c')
}
