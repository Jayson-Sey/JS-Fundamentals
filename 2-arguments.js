const totalArgs = process.argv.length - 2;

if (totalArgs === 0) {
	console.log("No argument");
} else if (totalArgs === 1) {
	console.log("Argument found");
} else {
	console.log("Arguments found");
}
