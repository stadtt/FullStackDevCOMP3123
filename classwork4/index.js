const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;
// Create an instance of an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Urlencoded Middleware
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
// app.use(express.static('public'));
app.use('/static', express.static('public')); // http://localhost:3000/static

// app.get('/index.html', (req, res) => {
//     res.sendFile(`${__dirname}/public/index.html`);
// })

//http://localhost:3000/
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    //res.set('X-Powered-By', 'Node.js & Express');
    // res.set({
    //     'X-Powered-By': 'Node.js & Express',
    //     'Content-Type': 'text/plain'
    // });
    res.send('Hello World from Express!');
    // res.end()
})

//http://localhost:3000/about
app.get('/about', (req, res)  => {
    //res.type('html');
    res.contentType('text/html');
    res.status(200);
    res.send("<h1>About Page</h1>")
})

//http://localhost:3000/student
app.get("/student", (req, res) => {
    const stud = {
        method: "GET",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }
    // res.send(stud);
    res.json(stud);
})

//http://localhost:3000/student
app.post("/student", (req, res) => {
    const stud = {
        method: "POST",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }
    res.json(stud);
})

//http://localhost:3000/student
app.put("/student", (req, res) => {
    const stud = {
        method: "PUT",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }
    res.json(stud);
})

//http://localhost:3000/student
app.delete("/student", (req, res) => {
    const stud = {
        method: "DELETE",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }
    res.json(stud);
})

//Query Parameter
//http://localhost:3000/products?category=books&price=200&author=Pritesh
app.get('/products', (req, res) => {
    console.log(req.query);

    // const { category, price, author } = req.query;
    const category = req.query.category;
    const price = req.query.price;
    const author = req.query.author;

    res.json({
        category,
        price,
        author
    });
})

//Path or Route Parameter
// http://localhost:3000/products/books/200/Pritesh
app.post('/products/:category/:price/:author', (req, res) => {
    console.log(req.params);

    // const { category, price, author } = req.params;
    const category = req.params.category;
    const price = req.params.price;
    const author = req.params.author;

    res.json({
        category,
        price,
        author
    });
});

// Body Parameter
// http://localhost:3000/movie
// POST
// Raw
// JSON
//{
// "title": "Inception",
// "year": 2010,
// "rating": 8.8
//}


//Content-Type: application/json

app.post('/movie', (req, res) => {
    const movie = req.body; // Middleware required to parse JSON body
    const { title, year, rating } = req.body;
    console.log(movie);

    res.json(movie);
});


app.listen(SERVER_PORT, () => {
    //console.log("Server started successfully");
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
