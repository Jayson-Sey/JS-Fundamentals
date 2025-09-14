const squareSize = process.argv.slice(2);

if (Number(squareSize)) {
	for (let i = 0; i < squareSize; i++){
		console.log('X'.repeat(squareSize));
	}
} else if (isNaN(squareSize)) {
	console.log("Missing size");
} else {
	console.log("Missing size");
}
