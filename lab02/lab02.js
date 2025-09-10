// Shaffaq Hai
// 101500534


//Exercise 1
function gretter(myArray){
    const greetText = "hello ";

    for ( let name of myArray ){
        console.log(greetText + name)
    }

}

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"])

// Exercise 2
function capitalize(str){

    let string = str.toLowerCase();
    let [...rest] = string;
    let newString = string[0].toUpperCase() + string.slice(1);
    return newString

}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Exercise 3

function capitalizedColours(myArray){
         const mapped = myArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
         console.log(mapped);

}

capitalizedColours(['red','green','blue']);

//Exercise 4

function filterLessThan20(myArray){
    const newArray = myArray.filter(num => num < 20);
    console.log(newArray);

}

filterLessThan20([1,60,34,30,20,5]);


//Exercise 5

function calculateSum(myArray){
    const initial = 0;
    const sum = myArray.reduce((accumulator, currentvalue) => accumulator + currentvalue , initial);
    return sum;
}
function calculateProduct(myArray){
    const product = myArray.reduce((accumulator, currentvalue) => accumulator * currentvalue );
    return product;
}

console.log(calculateSum([1,2,3,4]));
console.log(calculateProduct([1,2,3,4]));

//Exerice 6

class Car{
    constructor(model,year){
        this.model = model;
        this.year = year;
    }
    details(){
        return `Model: ${this.model} ${this.year}`
    }

}

class Sedan extends Car{
    constructor(model,year,balance){
        super(model,year);
        this.balance = balance;
    }
     info(){
        return `${this.model} has a balance of ${this.balance}`
     }

}

const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());
const sedan = new Sedan("Volvo SD",2018,30000);
console.log(sedan.info());

