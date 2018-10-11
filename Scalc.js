//string calculator
function add(numbers) {
	if(numbers == "")
	return 0;

	if(numbers.includes(",")) {
		var numArr = numbers.split(",");
		return parseInt(numArr[0]) + parseInt(numArr[1]);
	}

	return parseInt(numbers);
}
module.exports = add;
