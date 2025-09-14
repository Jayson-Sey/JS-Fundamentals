function factorial(n) {
	const num = Number(n);

	if (isNaN(num)) {
		return 1;
	}

	if (num <= 1) {
		return 1;
	}

	return num * factorial(num - 1);
}

const input = process.argv[2];

const result = factorial(input);
console.log(result);
