function abc (num,pow){
	var power = (num**pow);
	var arr = power.toString().split('');
	var sum =0;
	for(i=0; i<arr.length; i++){
		var digit = parseInt(arr[i]);
		sum+=digit;
	}
	console.log(sum);
}
abc(2,20);