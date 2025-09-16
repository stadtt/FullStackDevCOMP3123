let studentsList = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 23 }
];

function getAllStudents() {
    return studentsList;
}

function getStudentById(id) {
    return studentsList.find(student => student.id === id);
}

function addStudent(student) {
    studentsList.push(student);
}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent
};