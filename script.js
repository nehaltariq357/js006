// question # 01

function displayCurrentDateTime() {
    var currentDateTime = new Date().toLocaleString();
    alert(`Current Date & Time: ${currentDateTime}`);
  }
  

// question # 02

function greetUser(hello, hello) {
    alert(`Hello, ${hello} ${hello}!`);
  }
  

// question # 03

function numbers(num1, num2) {
    return num1 + num2;
  }
  


// question # 04

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
    }
    return result;
  }
  

// question # 05

function number(number) {
    return number * number;
  }
  

// question # 06

function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  

// question # 07

function displayCount(start, end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
  }
  

// question # 08

function hypotenuse(base, perpendicular) {
    function calculateSquare(x) {
      return x * x;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
  }
  

// question # 09

function calculate(width, height) {
    return width * height;
  }
  var area1 = calculate(5, 10);
  console.log(`Area: ${area1}`);
  var rectWidth = 7;
  var rectHeight = 8;
  var area2 = calculate(rectWidth, rectHeight);
  console.log(`Area: ${area2}`);
  

// question # 10

  var inputString = "madam";
  if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
  } else {
    console.log(`${inputString} is not a palindrome.`);
  }
  
  

// question # 11

  
  
 var input = 'the quick brown fox';
var capitalizedString = capitalizeWords(input);
  console.log(capitalizedString); 
  

// question # 12

var tinput = 'Web Development Tutorial';
var longestWord = findLongestWord(tinput);
  console.log(longestWord); // Output: 'Development'
  

// question # 13

  var inputString = 'JSResourceS.com';
  var letterToCount = 'o';
  var occurrenceCount = countOccurrences(inputString, letterToCount);
  console.log(`The letter "${letterToCount}" appears ${occurrenceCount} times in the string.`);

  

// question # 14
  
  var circleRadius = 5;
  calcCircumference(circleRadius);  
  calcArea(circleRadius); 
  


