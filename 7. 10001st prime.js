function cprime(x){
	for(i = 2; i <= x/2; i++)
	{
		if(x % i == 0) {
			return undefined;
		}
	}
	return x;
}

var primes = [], a = 2, n = 10001;

while(primes.length != n){
	if(cprime(a))
		primes.push(a)
	// console.log(a)
	a++;
}

console.log(primes[n-1])