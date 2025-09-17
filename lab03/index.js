var http = require("http");
//TODO - Use Employee Module here
const employee = require("./Employee.js")


console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.end('<h1>Welcome to the Home Page!</h1>');

        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.end(JSON.stringify(employee));

        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            let empArray = employee.map(emp => emp.firstName +"  "+ emp.lastName).sort();
            
            res.end(JSON.stringify(empArray));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            const initial = 0;
            let empSum = employee.reduce((accumulator, currentEmployee) => accumulator  + currentEmployee.Salary, initial);
            let total_salary = {"total_salary" : empSum};

            console.log(total_salary);
            res.end(JSON.stringify(total_salary));

    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})