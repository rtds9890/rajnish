a = 1; b = 1; sum = 0;
for(i = 1; i < 4000000; i++){
	if(b >= 4000000) break;
	(b % 2 == 0) ? sum += b : b;
	c = a + b;
	[a, b] = [b, c];
}
console.log(sum)