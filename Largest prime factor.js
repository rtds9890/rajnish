var factors = [], a = 13195;

function cprime(x){
	for(i = 2; i <= x; i++)
	{
		if(x % i == 0) {
			return undefined;
		}
	}
	return x;
}

for(i = 2; i <= a/8; i++){
	if(a % i == 0) {
		if(cprime(i)) 
			factors.push() 
	}
}
console.log(factors)