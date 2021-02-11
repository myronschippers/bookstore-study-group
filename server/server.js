const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./routes/book.router.js');

const app = express();
// Start listening for requests on a specific port
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REGISTER ROUTERS
app.use('/books', booksRouter);

// Serve back static files by default
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
