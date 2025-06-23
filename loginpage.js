const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// loginpage.js

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the login page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Login Page</title>
    </head>
    <body>
      <h2>Login</h2>
      <form method="POST" action="/login">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required /><br/><br/>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required /><br/><br/>
        <button type="submit">Login</button>
      </form>
    </body>
    </html>
  `);
});

// Handle login and redirect to home
app.post('/login', (req, res) => {
  // For now, skip authentication and redirect to home
  res.redirect('/home');
});

// Serve the empty home page
app.get('/home', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <h2>Welcome to the Home Page!</h2>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
//learn git brachinhgit 
