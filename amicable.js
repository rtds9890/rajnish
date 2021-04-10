// var arr = [];
function number (num) {
	for (i = 1; i <= 1000; i++){
		var d1 = 1;
		var s1 = 0;
		while(d1 < i){
			if(i % d1 == 0){
				s1 += d1;
				// console.log(s1);
				d1++;
			}
			else{
				d1++;
			}
		}
		for(j = i+1; j <= 1000; j++){
			var d2 = 1;
			var s2 = 0;
			while(d2 < j){
				if(j % d2==0){
					s2 += d2;
					// console.log(s2);
					d2++;
				}
				else{
					d2++;
				}		
			}
			if(s1 == j && s2 == i){
				console.log(`${i} ${j}`);
			}
		}
	}
	return 0;
}
number(1000)

