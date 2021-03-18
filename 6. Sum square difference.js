function sofsq(n){
	if(n == 1)
		return 1
	return n**2 + sofsq(n-1)
}

function sqofs(n){
	if(n == 1)
		return 1
	return n + sqofs(n-1)
}

x = 10;

console.log((sqofs(x) ** 2 - sofsq(x)))