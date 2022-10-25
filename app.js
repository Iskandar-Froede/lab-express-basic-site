const express = require('express'); // to use the express
const app = express() // invoke the express

// make public directory available
app.use(express.static('public'));

// get is method from express and it refers homeroot
app.get('/home', (request, response) => {
  console.log('home')
  response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html')
});

app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html')
});

// app listens using port 3000
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});