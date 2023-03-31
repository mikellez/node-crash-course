const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	res.setHeader('Content-Type', 'text/plain');

	res.write('hello, ninjas');
	res.end();
});

server.listen(3002, 'localhost', ()=> {
	console.log('listening on port 3000')
})