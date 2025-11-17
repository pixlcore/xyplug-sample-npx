#!/usr/bin/env node

// xyOps Sample Event Plugin that does nothing
// Author: Joseph Huckaby (PixlCore), MIT License

(async function() {
	// read in data from xyops
	const chunks = [];
	
	for await (const chunk of process.stdin) {
		chunks.push(chunk);
	}
	
	const data = JSON.parse( chunks.join('') );
	
	console.log( "Read JSON from STDIN:\n" + JSON.stringify(data, null, "\t") + "\n" );
	
	// send final completion message
	console.log( JSON.stringify({ xy:1, code: 0 }) );
})();
