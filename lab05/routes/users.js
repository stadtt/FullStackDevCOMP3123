
const fs = require('fs');
const express = require('express');
const routerUser = express.Router();

/*
- Return all details from user.json file to client as JSON format
*/


routerUser.get('/profile', (req,res) => {

  const filePath = path.join(__dirname, "..", "users.json"); // go up to root

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading users.json:", err);
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
  //res.json(users);


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
routerUser.post('/login', (req,res) => {
  res.send('This is login router');
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
routerUser.get('/logout', (req,res) => {
  res.send('This is logout router');
});

module.exports = routerUser;