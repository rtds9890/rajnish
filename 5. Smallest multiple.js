function check_multiple(num, n){
	if(n == 1)
		return 0;
	if(num % n == 0)
		return check_multiple(num, n-1)
}

n = 50;
for(a = n; a > 0; a += n){
	if(check_multiple(a, n) == 0){
		console.log(a)
		break;
	}
	// console.log("Trying Again With : " + a)
}