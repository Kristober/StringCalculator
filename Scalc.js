//string calculator

function add(numbers) {
	if(numbers == "") {
		return 0;
	}

	
	var negNum = [];

	if(numbers.includes(",") | numbers.includes("\n")) {
		var sum = 0;
		var numArr = numbers.split(/[,\n;]/);

		for(var i = 0; i < numArr.length; i++) {
			if(numArr[i] < 0) {
				negNum.push(numArr[i]);
			}
			else {
				sum += parseInt(numArr[i]);
			}
		}

		numbers = sum;
	}
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