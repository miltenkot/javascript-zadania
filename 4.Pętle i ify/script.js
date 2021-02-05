// Zadanie 1
let num1 = 4;
let num2 = 5;

if(num1 > num2){
    console.log(num1);
} else {
    console.log(num2);
}

// Zadanie 2
let num1 = 40;
let num2 = 5;
let num3 = 10;

if(num1 > num2 && num1 > num3) {
    console.log(num1);
} else if(num2> num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}

// Zadanie 3
let str = 'Lubię JavaScript';

for (let i = 0; i < 10; i++) {
    console.log(i + ": " + str);
}

// Zadanie 4
let result = 0;

for (let i = 1; i<= 10; i++) {
    result += i;
}

console.log(result);

// Zadanie 5

var n = 5;

for (let i= 0; i<= n; i++) {
    if (i%2==0) {
        console.log(i + " - parzysta");
    } else {
        console.log(i + " - nieparzysta");
    }
}

// Zadanie 6

for(let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

// Zadanie 7

for(let i= 0; i<= 100; i++)
{
    if( i % 15 == 0) {
        console.log(" FizzBuzz ");
    } else if (i % 5 == 0) {
        console.log(" Buzz ");
    } else if( i % 3 == 0) {
        console.log(" Fizz ");
    } else {
        console.log(i + " ");
    }
}

// Zadanie 8

a)
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
      }

    console.log(row);
}

b)
var counter = 4;
for (var i = 0; i < 5; i++) {
    var row =''
    for (var j = 0; j < counter; j++) {
        row += ' '
      }
    for (var b = 0; b < i+1; b++) {
    row += '* '
  }

  console.log(row)
    counter--
  }

 c)
 var counter = 4;
for (var i = 0; i < 5; i++) {
    var row =''
    for (var j=0; j < counter; j++ ) {
        row += ' '
      }
    for (var b = 0; b < (i*2)+1; b++) {
    row += '*'
  }

  console.log(row)
    counter--
  }

  d)
  for(let x = 0; x < 5; x++) {
    var result = '';
    for(y = 0; y < x+1; y++) {
        result += '*';
      }

    for(z = 0; z <  5; z++) {
        if(x < z) {
          result += z
        }
    }

    console.log(result);
}

e)

var counter = 4;
for (var i = 0; i < 8; i++) {
    var row =''
    if(i < 5){
    for (var j=0; j < counter; j++ ) {
        row += ' '
      }

    for (var b = 0; b < i+1; b++) {
    row += '* '
  }
    } else {
      row += '    *'
    }

  console.log(row)
    counter--
  }
