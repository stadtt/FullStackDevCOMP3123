exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
};

exports.square = (x) => x * x;
exports.cube = (x) => x * x * x;
exports.name = "Maths Module";
exports.version = "1.0.0";
// module.exports = {
//     add, 
//     sub,
//     multiply,
//     divide,
//     square,
//     cube,
//     name: "Maths Module"
// };

// Alternative way using module.exports
// module.exports = {
//     add: (a, b) => a + b,
//     sub: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => {
//         if (b === 0) {
//             throw new Error("Division by zero is not allowed.");
//         }
//         return a / b;
//     },
//     square: (x) => x * x,
//     cube: (x) => x * x * x,
//     name: "Maths Module"
// };