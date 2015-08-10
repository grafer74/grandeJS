// My most efficient algorithm to find twin primes <= a given number (num).

function findTwinPrimes(num) {
  
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

var twinPrimes = []; // Array to store the found twin primes.
for (j=0; j<primes.length - 1; j++)
{
if (primes[j+1] - primes[j] === 2) // A twin prime is a prime number that has a prime gap of two. 
{
twinPrimes.push([primes[j], primes[j+1]]);
}
}
        return twinPrimes;
    }

findTwinPrimes(20); // Here we can invoke the function, passing as a parameter the number up to which we want to find twin primes.
