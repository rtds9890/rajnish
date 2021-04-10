
var str = ["One","two","Three","Four","five"]
var sum =0;
function letter_count(str){
	for(i=0;i<str.length;i++){
		sum = sum+(str[i].length);
	}
	console.log(sum);
}
letter_count(str);