// My most efficient algorithm to find prime numbers <= a given number (num).

function findPrimes(num)
{
    var primes=[2, 3]; // Let's initialize the array with the first 2 primes.
        for (n=5; n<=num; n+=2) //Now we can start from 5 and check only odd numbers.
        { 
            i=1; // We start at prime[1] (which is 3), because all our n are odd.
            var checkPrime = true;
            while (primes[i]<=Math.sqrt(n)) // All divisors of n may be <= its sqrt(n).
                {
                    if (n % primes[i] === 0)
                        {
                        checkPrime = false;
                        break;
                        }
                   i++;
                }
            if(checkPrime) // Only if checkPrime is still "true" after having divided by all the primes <= sqrt(n), we can say that n is a prime. 
            {
                primes.push(n);
            }
        }   

        return primes;
}
findPrimes(100); // Here we can invoke the function, passing as a parameter the number up to which we want to find primes.
