//string calculator
function add(numbers) {
	if(numbers == "")
	return 0;

	if(numbers.includes(",")) {
		var sum = 0;
		var numArr = numbers.split(",");
		for(var i = 0; i < numArr.length; i++) {
			sum += parseInt(numArr[i]);
		}
		return sum;
	}

	return parseInt(numbers);
}
module.exports = add;
