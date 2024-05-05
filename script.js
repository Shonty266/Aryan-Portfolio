const express = require('express');
const path = require('path'); // Import the path module to work with file paths
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

  app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
  })

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,  'contact.html'))
  })

  app.get('/furniture-website', (req, res) => {
    res.sendFile(path.join(__dirname,  'furniture.html'))
  })

  app.get('/learning-app', (req, res) => {
    res.sendFile(path.join(__dirname,  'learningapp.html'))
  })

  app.get('/hotel-website', (req, res) => {
    res.sendFile(path.join(__dirname,  'hotel-website.html'))
  })


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
