// Very simple function to generate the first n Fibonacci-numbers.

function myFibonacci(num) {
  
  var fibonacci = [0, 1]; // It is possible to generate all the Fibonacci-numbers starting with these 2.
  for (i=2; i<num; i++)
    {
      fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
    }
  return fibonacci;
}

myFibonacci(10); // Here we can invoke the function, passing as a parameter the number up to which we want to generate Fibonacci-numbers.
