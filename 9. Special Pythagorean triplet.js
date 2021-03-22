function get_product(n){
	for(c = 3; c < n/2; c++){
		for(b = c-1; b > 1; b--){
			for(a = b-1; a > 0; a--){
				if((a**2 + b**2) === c**2){
					if(a+b+c === 1000){
						if(a<b<c){
							return a*b*c;
						}
					}
				}
			}
		}
	}
}

console.log(get_product(1000))