const express = require('express');
const path = require('path'); // Import the path module to work with file paths
const app = express();

// Set the directory where your static files (like index.html) are located
app.use(express.static(path.join(__dirname, 'public')));

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
  })

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
  })

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'))
  })

  app.get('/furniture-website', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'furniture.html'))
  })

  app.get('/learning-app', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'learningapp.html'))
  })

  app.get('/hotel-website', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'hotel-website.html'))
  })


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
