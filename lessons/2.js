/*
*/

RAM - does what? what is the purpose of RAM? How is it different
from ROM?
* Processing
* Storage is temporary
* Variables are stored in RAM.

RAM = 8GB
-> 8 * 1024 MB
-> 8 * 1024 * 1024 KB
-> 8 * 1024 * 1024 * 1024 Bytes
= 8,58,99,34,592 bytes

a variable takes up around 4 bytes

0000000 -> first byte's address
0000001 -> second byte's address
.
.
.
0000062 -> 63rd bytes
.
.
.
.
8,58,99,34,592 -> last bytes address



add value at adress 0000023 with value at address 000032

variables - named memory location

0000023 is variable a1
0000032 is variable b1

add value at `a1` with value at `b1`

// javascript
/*
*/

Rules for variable names
* No spaces,
e.g var hello world. // this is wrong
    var helloWorld // this is correct.

* It should not start with a number
e.g var 1stName. // this is wrong
    var name_1st. //this is correct.

* No special characters like $, ~, #, %, ^ & * ( ) - / \ =


// eexamples
var a, b, c;

// var a
// var b
// var c

// Task: calculate sum of a and b then store it in C

// this is in maths, where '=' means equality
1 = 1
y = mx + c

// in programming, '=' means Assignment - store something in a variable.
a = 10
b = 15
c = a + b
/*
a = 10
b = 15
c = 25
*/

// whenever we are doing 'left = right' Assignment
// we are putting the right value in left value

b = a
/*
a = 10
b = 10
c = 25
*/


c = a + b
/*
a = 10
b = 10
c = 20
*/

c = c + a * b
// c = 20 + 10 * 10
// c = 120
b = a
a = b
/*
a = 10
b = 10
c = 120
*/

// Datatypes
- Number
  e.g 10, 1, 23, 3.5, 12.34123412342134

  var a = 10;

- String
  // For understanding: this is a character -> 'a', "a", 'z', 'x', 'B', "C"
  this is a string ->
                    "A",
                    "ab",
                    "abcdef",
                    "abzcskdfjkasdjfkajdfkasdlkfjaskdfj",
                    "Hello world"

  // no difference between 'A' and "A". Both single and
  // double quotes are the same
  var a = 'I am going';
  var myCar = "It's a sports car with top speed of 160kmph by xyz manufacturer";
  a = 10;

  var b;
  // b -> undefined
  b = 'I am back!'
  b = 10

- Array
  // These are used to represent lists.
  // They are represented using [] brackets
  var list_of_colours, list_of_prime_numbers;

  list_of_colours = ['Red', 'Orange', "Blue", 'Green', 'Black']
  list_of_prime_numbers = [2, 3, 5, 7, 11, 13, 17, 19]

  // accessing is done using indexes
  // indexes starts from 0
  list_of_colours[2] // Blue
  list_of_colours[0] // Red

  list_of_prime_numbers[2] // 5
  list_of_prime_numbers[7] // 19

  // Size of array
  list_of_colours // 5
  list_of_prime_numbers // 8

- Object
  // represented using {} brackets
  var myCar = {
    'wheels': 4,
    'top_speed': 160,
    'manufacturer': 'xyz'
  }

  var yourCar = {
    'wheels': 4,
    'top_speed': 220,
    'manufacturer': 'abc'
  }

  // accessing properties using '.'
  yourCar.top_speed  // 220
  myCar.top_speed    // 160
  yourCar.manufacturer // abc
