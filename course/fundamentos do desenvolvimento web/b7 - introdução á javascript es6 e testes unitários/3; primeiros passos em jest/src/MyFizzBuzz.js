function myFizzBuzz(num) {
	let result = 0;

	if (typeof num != "number") return false;

	if (num % 3 === 0 && num % 5 === 0) {
		result = "fizzbuzz";
	} else if (num % 3 === 0) {
		result = "fizz";
	} else if (num % 5 === 0) {
		result = "buzz";
	} else {
		result = num;
	}

	return result;
}

module.exports = myFizzBuzz;
