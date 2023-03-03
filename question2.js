const INPUT = 13;
let first = 0;
let last = 1;

function checkFibonacci(input) {
  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < input) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }
  
  if (fibonacci.includes(input)) {
    console.log(input + " pertence a sequência.");
  } else {
    console.log(input + " não pertence à sequência.");
  }
}

checkFibonacci(INPUT);