const express = require('express');

const SERVER_PORT = process.env.port || 3000;

const app = express();


app.get("/hello", (req,res) => {

    res.setHeader("Content-Type","text/plain");
    res.send("Hello Express JS");
});


app.get("/user", (req,res)=>{
   
    const firstname = req.query.firstname ? req.query.firstname : "Pritesh";
    const lastname = req.query.lastname ? req.query.lastname  : "Patel"; 

    res.json({

        firstname,
        lastname,
    });
    
});

app.post("/user/:firstname/:lastname", (req,res)=>{
   
    console.log(req.params);
    const firstname = req.params.firstname; 
    const lastname = req.params.lastname;

    res.json({

        firstname,
        lastname,
    });
    
});
app.post("/user", (req,res)=>{
     res.setHeader("Content-Type","application/json");
   
    const array = [{"firstname":"Pritesh","lastname":"Patel"},
        {"firstname":"John","lastname":"Doe"},
        {"firstname":"John","lastname":"Rome"}];

    res.json({

        array
    });
    
});



app.listen(SERVER_PORT, () =>{

    console.log(`Server is running on http://localhost:${SERVER_PORT}`);

});