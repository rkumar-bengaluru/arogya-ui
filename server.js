const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { use } = require('react');
const router = express.Router();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const secretKey = 'your-secret-key'; // Replace with a strong secret
const apiUrlEndpoint = "http://98.84.97.216:8080/api"

const users = [
  { username: 'testuser', password: bcrypt.hashSync('password', 8) },
];

async function getData(url, token) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `${token}`, // Add authorization header
        },
      });
  
      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! status: ${response.status} - ${JSON.stringify(errorData)}`);
      }
  
      const data = await response.json(); // Parse JSON response
  
      return data; // Return the parsed data
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error for the caller to handle
    }
  }
  
  // Example usage:
  const apiUrl = 'your_api_endpoint'; // Replace with your API endpoint
  const authToken = 'your_jwt_token'; // Replace with your JWT token
  
  
  
  //Example using async await in an async function.
  async function doTheGet(){
      try{
          const result = await getData(apiUrl, authToken);
          console.log("Async await result:", result);
      } catch (error){
          console.error("Async await error:", error);
      }
  }

async function postData(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), // Convert data to JSON string
      });
  
      if (!response.ok) {
        // Handle non-2xx HTTP responses
        const errorData = await response.json(); // attempt to get JSON error details
        throw new Error(`HTTP error! status: ${response.status} - ${JSON.stringify(errorData)}`);
      }
  
      const responseData = await response.json(); // Parse JSON response
  
      return responseData; // Return the parsed response data
    } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw the error for the caller to handle
    }
  }

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(express.json()); // Middleware to parse JSON in the request body

  server.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is healthy' });
  });

  server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    const postDataToSend = {
        "email": username,
        "password": password,
    };
    console.log(username, password)
    postData(apiUrlEndpoint + "/login", postDataToSend)
    .then((responseData) => {
        console.log('Response:', responseData);
        res.cookie('token', responseData.token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        res.json({ message: 'Login successful' });
    })
    .catch((error) => {
        // Handle errors
        console.error('An error occurred:', error);
        return res.status(401).json({ message: 'Invalid credentials' });
    });
  });

  server.post('/api/logout', (req, res) => {
    const authToken = req.cookies.token;
    if (!authToken) return res.sendStatus(204); // No content
    console.log("logout called...")
    // postData(apiUrlEndpoint + "/logout", postDataToSend)
    // .then((responseData) => {
    //     console.log('Response:', responseData);
    //     res.json({ message: 'Logout successful' });
    // })
    // .catch((error) => {
    //     // Handle errors
    //     console.error('An error occurred:', error);
    //     return res.status(401).json({ message: 'Internal Server Error' });
    // });
    res.setHeader('Clear-Site-Data', '"cookies"');
    return res.json({ message: 'Logout Successful' });
  });

  server.get('/api/home', (req, res) => {
    const authToken = req.cookies.token;
    if (!authToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    getData(apiUrlEndpoint + "/patient/KA-244803029", authToken)
    .then((responseData) => {
      console.log('Data:', responseData);
      res.json(responseData);
    })
    .catch((error) => {
      // Handle errors
      console.error('An error occurred:', error);
      return res.status(401).json({ message: 'Invalid token' });
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});