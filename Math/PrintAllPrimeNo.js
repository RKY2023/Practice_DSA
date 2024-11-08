function normalSieve(n) {
  // prime[i] is going to store true if i*2 + 1 is composite.
  let prime = new Array(n / 2).fill(false);

  // 2 is the only even prime so we can ignore that.
  // Loop starts from 3.
  console.log(prime)
  for (let i = 3; i * i < n; i += 2) {
      // If i is prime, mark all its multiples as composite
      if (!prime[Math.floor(i / 2)]) {
          for (let j = i * i; j < n; j += i * 2) {
              prime[Math.floor(j / 2)] = true;
          }
      }
  }
  
  // Printing other primes
  for (let i = 3; i < n; i += 2) {
    // console.log(i + " ");
      if (!prime[Math.floor(i / 2)]) {
          console.log(i + " ");
      }
  }
}

// Main code to test the function

let n = 100;
normalSieve(n);
