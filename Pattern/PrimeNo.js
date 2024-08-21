function isPrime(n) { 
  // Check if n=1 or n=0 
  if (n <= 1) 
      return false; 
  // Check if n=2 or n=3 
  if (n == 2 || n == 3) 
      return true; 
  // Check whether n is divisible by 2 or 3 
  if (n % 2 == 0 || n % 3 == 0) 
      return false; 
  // Check from 5 to square root of n 
  // Iterate i by (i+6) 
  for (var i = 5; i <= Math.sqrt(n); i = i + 6) 
      if (n % i == 0 || n % (i + 2) == 0) 
          return false; 
  return true; 
} 
// Get user input from a browser prompt
let userInput = prompt("Enter a number:");
let number = parseInt(userInput, 10); // Convert the input to an integer
// Check if the number is prime and display an appropriate message
isPrime(number) ? console.log(`${number} is a prime number.`) : console.log(`${number} is not a prime number.`);


// soLUTON 2 
function sieveOfEratosthenes(limit) {
  let primes = [];
  let sieve = Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false; // 0 and 1 are not prime numbers
  for (let i = 2; i <= Math.sqrt(limit); i++) {
      if (sieve[i]) {
          for (let j = i * i; j <= limit; j += i) {
              sieve[j] = false; // Marking multiples of i as non-prime
          }
      }
  }
  // Collecting all prime numbers
  for (let i = 2; i <= limit; i++) {
      if (sieve[i]) primes.push(i);
  }
  return primes;
}
console.log(sieveOfEratosthenes(20)); // Example usage

// sOLUTON 3

function findPrimesInRange(start, end) {
  function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) return false;
      }
      return true;
  }
  let primes = [];
  for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
          primes.push(i);
      }
  }
  return primes;
}
const start = 100;
const end = 200;
const primeNumbers = findPrimesInRange(start, end);
console.log(`${primeNumbers.join(', ')} are prime numbers`);


// SOLLUTON 4 

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function printPrimes(limit) {
  let primes = [];
  for (let i = 1; i <= limit; i++) {
      if (isPrime(i)) {
          primes.push(i);
      }
  }
  console.log(`Prime numbers from 1 to ${limit}: ${primes.join(', ')}`);
}
printPrimes(100); // Print prime numbers from 1 to 100