sum = 0;

function cprime(x){
	for(i = 2; i <= x/2; i++)
	{
		if(x % i == 0) {
			return undefined;
		}
	}
	return x;
}
function prime_sum(n){
	if(n == 1){
		return;
	}
	if(cprime(n))
		sum += n
	prime_sum(n-1)
}

prime_sum(10)

console.log(sum)