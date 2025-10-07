
const fs = require('fs');
const express = require('express');
const routerUser = express.Router();
const path = require("path");
routerUser.use(express.json());


/*
- Return all details from user.json file to client as JSON format
*/

routerUser.get('/profile', (req,res) => {

  const filePath = path.join(__dirname, "..", "user.json"); // go up to root

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading user.json:", err);
      return res.status(500).send("Server Error");
    }

    try {
      const users = JSON.parse(data); // parse JSON string
      res.json(users);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).send("Server Error");
    }
  });
});


/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 

    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
routerUser.post('/login', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;


  const filePath = path.join(__dirname, "..", "user.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Server Error");
    }

    const users = JSON.parse(data); // parse JSON string

    // Find a user with both username and password matching
    const userValid = users.username === username;
    const passValid = users.password === password;

    if (userValid && passValid) {
      res.json({
        status: true,
        message: "User is valid",
      });
    } else if (!userValid) {
      res.status(401).json({
        status: false,
        message: "User Name is invalid"
      });
    } else {
      res.json({
        status: false,
        message: "Password is invalid"
      });
    }
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout', (req,res) => {
  const username = req.query.username ? req.query.username : "Unknown"
   res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;