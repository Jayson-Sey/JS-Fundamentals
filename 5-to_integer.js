const args = process.argv.slice(2);
const firstArg = args[0];

if (Number(firstArg)) {
	console.log(`My number: ${firstArg}`);
} else {
	console.log("Not a number");
}
