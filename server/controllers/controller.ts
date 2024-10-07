export const findMedian = (arr: number[]): number[] => {
  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
};

export const sieveOfEratosthenes = (n: number) => {
  let primes = Array<boolean>(n + 1).fill(true); // Assume all numbers in array are prime
  primes[0] = false; // Except for 0 and 1
  primes[1] = false; // Except for 0 and 1

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false; // Mark factors non-prime
      }
    }
  }

  return primes.reduce((acc: number[], isPrime, index) => {
    if (isPrime) acc.push(index);
    return acc;
  }, []);
};
