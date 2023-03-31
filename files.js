const fs = require('fs');

fs.readfile('./docs/blogs.txt', (err, data) => {
	if(err) {
		console.log(err);
	}
	console.log(data.tostring());
});

fs.writeFile('./docs/blogs.txt', 'hello, world', (err, data) => {
	if(err) {
		console.log(err);
	}
	console.log(data.tostring());
});