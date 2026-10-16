const studentForm = document.getElementById('studentForm');
const studentName = document.getElementById('studentName');
const score = document.getElementById('score');
const result = document.getElementById('result');
const container = document.getElementById('studentList');

// Get students already saved in localStorage
const savedStudents = JSON.parse(localStorage.getItem("students")) || [];

// Display students already saved
  function displayStudents(student,index) {
    const card = document.createElement("div");
    card.className = "p-4 border rounded-lg shadow-md flex justify-between items-center";
    const studentInfo=document.createElement("span");
    studentInfo.textContent = `Student Name: ${student.name} | Score: ${student.score} | Grade: ${student.grade}`;
  

    //delete button
    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.className="bg-red-500 text-white px-3 py-2 rounded-lg";
    deleteButton.addEventListener("click",function(){
             savedStudents.splice(index,1);
             localStorage.setItem("students",JSON.stringify(savedStudents));
            card.remove();
    }); 
    
    const editButton=document.createElement("button");
    editButton.textContent="Edit"
    editButton.className="bg-blue-500 text-white px-3 py-2 rounded-lg ml-2";
    editButton.addEventListener("click",function(){
        const newName=prompt("Enter new Student Name:", student.name);
        const newScore=prompt("Enter new student score:", student.score);
         if (newName === null || newName.trim() === ""){
            alert("Student name can't be empty");
            return;
         }
         if( newScore <0 || newScore >100 || isNaN(newScore)){
            alert("Score must be betweeen 0 and 100");
            return;
         }
         let newGrade;
         if (newScore >= 80) {
            newGrade = "Excellent";
        } else if (newScore >= 70) {
            newGrade = "Very Good";
        } else if (newScore >= 60) {
            newGrade = "Good";
        } else {
            newGrade = "Needs Improvement";
        }
        student.name= newName.trim();
        student.score= Number(newScore);
        student.grade= newGrade;
        localStorage.setItem("students",JSON.stringify(savedStudents));
        studentInfo.textContent = `Student Name: ${student.name} | Score: ${student.score} | Grade: ${student.grade}`;

        
    });


    card.appendChild(studentInfo);
    card.appendChild(deleteButton);
    card.appendChild(editButton);
    container.appendChild(card);


};


savedStudents.forEach(function(student,index){
    displayStudents(student,index);
});
// Handle form submission
studentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = studentName.value;
    const scoreValue = Number(score.value);

    let grade;

    // Validate name
    if (name.trim() === "") {
        result.textContent = "Please enter a Student Name.";
        return;
    }

    // Validate score
    if (scoreValue < 0 || scoreValue > 100) {
        result.textContent = "Score must be between 0 and 100.";
        return;
    }

    // Calculate grade
    if (scoreValue >= 80) {
        grade = "Excellent";
    } else if (scoreValue >= 70) {
        grade = "Very Good";
    } else if (scoreValue >= 60) {
        grade = "Good";
    } else {
        grade = "Needs Improvement";
    }
//CRUD
//1)Create-creating a new studen
    // Create student object
    const student = {
        name: name,
        score: scoreValue,
        grade: grade
    };

    // Add student to the array
    savedStudents.push(student);

    // Save updated array to localStorage
    localStorage.setItem("students", JSON.stringify(savedStudents));

    // Show result
    result.textContent = `Student Name: ${name}
Score: ${scoreValue}
Grade: ${grade}`;

    // Create student card
    const card = document.createElement("div");

    card.textContent = `Student Name: ${name} | Score: ${scoreValue} | Grade: ${grade}`;

    card.className = "p-4 border rounded-lg shadow-md flex justify-between items-center";

    // Add card to webpage
    container.appendChild(card);

    // Clear form
    studentForm.reset();
});