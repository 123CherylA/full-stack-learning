const students = [
    {
        name: "John",
        score: 85,
        grade: "Excellent"
    },
    {
        name: "Mary",
        score: 45,
        grade: "Needs Improvement"
    },
    {
        name: "Alex",
        score: 60,
        grade: "Good"
    }
];

// Get students already saved in localStorage
const savedStudents = JSON.parse(localStorage.getItem("students")) || [];

// If there are no students saved yet, use the initial students
if (savedStudents.length === 0) {
    students.forEach(function(student) {
        savedStudents.push(student);
    });

    localStorage.setItem("students", JSON.stringify(savedStudents));
}

// Add a new student
const student={
    name: "John",
    score: 85,
    grade: "Excellent"
};
savedStudents.push(student);
// Save the updated list
localStorage.setItem("students", JSON.stringify(savedStudents));

console.log(savedStudents);
console.log(savedStudents[1].name);
console.log(savedStudents[2].score);
console.log(savedStudents[0].grade);

// Display students on the webpage
const container = document.getElementById("studentList");

savedStudents.forEach(function(student) {

    const card = document.createElement("div");

    card.textContent = `Student Name: ${student.name} | Score: ${student.score} | Grade: ${student.grade}`;

    card.className = "p-4 border rounded-lg shadow-md";

    container.appendChild(card);
});