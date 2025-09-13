const args = process.argv.slice(2);
const argument = Number(args[0]);

if (isNaN(argument)) {
	console.log("Missing number of occurrences");
} else {
	for (let i = 0; i < argument; i++) {
		console.log("C is fun");
	}
}
