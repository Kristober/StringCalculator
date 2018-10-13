//string calculator

function add(numbers) {
	if(numbers.startsWith("//")) {
		var delimeter = numbers.substring(2, 3);
		//we replace all of the delimeteres with a ,
		//so "//;4,3;2" -> "//,4,3,2" for example
		numbers = numbers.replace(new RegExp(delimeter, 'g'), ",");
	}

	if(numbers == "") {
		return 0;
	}

	//array which we'll later store negative numbers in
	var negNum = [];

	if(numbers.includes(",") | numbers.includes("\n")) {
		var sum = 0;
		var numArr = numbers.split(/[,\n]/);

		for(var i = 0; i < numArr.length; i++) {
			if(numArr[i] < 0) {
				negNum.push(numArr[i]);
			}
			else if(numArr[i] < 1001){
				sum += parseInt(numArr[i]);
			}
		}

		numbers = sum;
	}
	//incase a single negative number is sent in
	else if(parseInt(numbers) < 0) {
		negNum.push(numbers[0]);
	}

	if(negNum == 0) {
		return parseInt(numbers);
	}
	else {
		throw "Negatives not allowed:" + negNum;
	}
	
}
module.exports = add;