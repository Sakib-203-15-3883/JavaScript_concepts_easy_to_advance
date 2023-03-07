//The Assignment Operator (=) assigns a value to a variable.
let x = 10;
//The Addition Operator (+) adds numbers:
let x1 = 5;
let y1 = 2;
let z1 = x1 + y1;
//The Multiplication Operator (*) multiplies numbers
let x2 = 5;
let y2 = 2;
let z2 = x2 * y2;

//JavaScript Assignment Operators

//Operator	    Example	      Same As
 //   =	         x = y	      x = y
 //  +=	         x += y	      x = x+y
 //  -=	         x -= y	      x = x-y
 //  *=	         x *= y	      x = x * y
 //  /=	         x /= y	      x = x / y
 //  %=	         x %= y	      x = x % y
//   **=	     x **= y	  x = x ** y


//JavaScript Comparison Operators


//    Operator	                  Description
//       ==	                equal to
//       ===	            equal value and equal type
//        !=	            not equal
//       !==	            not equal value or not equal type
//        >	                greater than
//        <	                less than
//        >=	            greater than or equal to
//        <=	            less than or equal to
//         ?	            ternary operator

//JavaScript Logical Operators

//      Operator	   Description
//        &&	        logical and
//        ||	        logical or
//         !	        logical not


//JavaScript Type Operators

//    Operator	        Description
//     typeof	      Returns the type of a variable
//     instanceof	  Returns true if an object is an instance 

                          //of an object type


//JavaScript Bitwise Operators
//Bit operators work on 32 bits numbers.

//  Operator Description	Example	Same as	Result	Decimal
//     &	    AND	          5 & 1	0101 & 0001	0001	 1
//|	OR	5 | 1	0101 | 0001	0101	 5
//~	NOT	~ 5	 ~0101	1010	 10
//^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
//<<	left shift	5 << 1	0101 << 1	1010	 10
//>>	right shift	5 >> 1	0101 >> 1	0010	  2
//>>>	unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2

//Incrementing

let a = 5;
a++;
let b = a;
console. log(b);

//Decrementing

let a1 = 5;
a1--;
let b1 = a1;
console. log(b1);

//Exponentiation

let a2 = 5;
let b2 = a2 ** 2;
console. log(b2);

//Operator Precedence
//Operator precedence describes the order in which operations are performed in an arithmetic expression.

//When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

let x6 = 100 + 50 - 3;
console. log(x6);//147

let x7 = 100 / 50 * 3;
console. log(x7 );//6
