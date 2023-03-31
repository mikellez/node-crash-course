const express = require('express');

//express app
const app = express();

//listen for request
app.listen('3002');

app.get('/', (req, res) => {

	res.send('<p>homepage</p>')

});