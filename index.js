#!/usr/bin/env node

// xyOps Sample Event Plugin that does nothing
// Author: Joseph Huckaby (PixlCore), MIT License

const Tools = require('pixl-tools');

(async function() {
	// read in data from xyops
	const chunks = [];
	
	for await (const chunk of process.stdin) {
		chunks.push(chunk);
	}
	
	const data = JSON.parse( chunks.join('') );
	
	console.log( "Read JSON from STDIN:\n" + JSON.stringify(data, null, "\t") + "\n" );
	
	// call dependency to show that it was installed and works
	console.log( "Random ID from pixl-tools: " + Tools.generateUniqueBase64() );
	
	// send final completion message
	console.log( JSON.stringify({ xy:1, code: 0 }) );
})();
