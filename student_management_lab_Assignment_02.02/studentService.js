app.service('StudentService', function () {
    var students = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" }
    ];

    this.getStudents = function () {
        return students;
    };

    this.addStudent = function (student) {
        students.push(student);
    };

    this.deleteStudent = function (id) {
        students = students.filter(s => s.id !== id);
    };
});
