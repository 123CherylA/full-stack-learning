const studentForm = document.getElementById('studentForm');
const studentName = document.getElementById('studentName');
const score = document.getElementById('score');
const result = document.getElementById('result');
const container = document.getElementById('studentList');


// 1. Sample students
const initialstudents= [
    {
    name:"Abisade",
    score: 90,
    grade:"Excellent"
    },
    {
     name: "Daniel",
     score: 75,
     grade: "Very Good"}

]
// 2. Load students from Local Storage
let savedStudents = JSON.parse(localStorage.getItem("students")) || [];

if (!Array.isArray(savedStudents)) {
    savedStudents = initialstudents;
 localStorage.setItem(
        "students",
        JSON.stringify(savedStudents)
    );
}

// 3. Calculate a student's grade
function calculateGrade(score) {
    if (score >= 80) {
        return "Excellent";
    } else if (score >= 70) {
        return "Very Good";
    } else if (score >= 60) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}


// 4. CREATE: Add a student

function addStudent(name, score) {
    // Convert the score to a number
    score = Number(score);

    // Validate the student's name and score
    if (name.trim() === "") {
        result.textContent="Student name cannot be empty.";
        return;
    }

    if (!Number.isFinite(score) || score < 0 || score > 100) {
        result.textContent = "Score must be between 0 and 100.";
        return;
    }

    // Calculate the grade
//CRUD- CREARE, READ, UPDATE, DELETE
//Creating a student which involeves create, add and save

    const newStudent={
    name: name,
    score: score,
    grade: calculateGrade(score)

};
//add
savedStudents.push(newStudent);
//save
localStorage.setItem("students",JSON.stringify(savedStudents));
displayStudents();
result.textContent= "Student added successfully"
}



// 5. UPDATE: Edit an existing student
function updateStudent(index, newName, newScore){
 //validate index
    if (index<0 || index >= savedStudents.length){
        result.textContent="Student not found";
        return;
    }

    //Validate name by name.trim
    if(newName.trim() === ""){
        result.textContent= "Student name cannot be empty";
        return;
    }
    if (String(newScore).trim() === "") {
        result.textContent = "Please enter a score.";
        return;
    }

    newScore = Number(newScore);

        //validate the new score
    if (
        newScore === "" ||
        !Number.isFinite(newScore) ||
        newScore < 0 ||
        newScore > 100
    ) {
        result.textContent = "Score must be between 0 and 100.";
        return;
    }


    //update existing students info
    savedStudents[index].name=newName.trim()
    savedStudents[index].score=newScore;
    savedStudents[index].grade=calculateGrade(newScore);

    //save updated array
    localStorage.setItem("students",JSON.stringify(savedStudents));

    displayStudents()
        result.textContent = "Student updated successfully!";

        
}
// 6. DELETE: Remove a student
function deleteStudent(index) {
    // Step 1: Check that the student exists
    if (index < 0 || index >= savedStudents.length) {
        result.textContent = "Student not found.";
        return;
    }

    // Step 2: Ask for confirmation
    const confirmed = confirm(
        `Are you sure you want to delete ${savedStudents[index].name}?`
    );

    // Stop if the user cancels
    if (!confirmed) {
        return;
    }

    // Step 3: Remove the student from the array
    savedStudents.splice(index, 1);

    // Step 4: Save the updated array
    localStorage.setItem(
        "students",
        JSON.stringify(savedStudents)
    );

    // Step 5: Refresh the displayed cards
    displayStudents();

    // Step 6: Show a message
    result.textContent = "Student deleted successfully!";
}

//7. READ: Display students and their buttons
function displayStudents(){
    //clear exisiting cards
    container.innerHTML="";
    const students =JSON.parse(localStorage.getItem("students")) ||[];
  
    //create a card for each student
    students.forEach(function(student,index){
        const card= document.createElement("div");
        card.className= "p-4 border rounded-lg shadow-md mb-3";
         card.textContent = `Student Name: ${student.name} | Score: ${student.score} | Grade: ${student.grade}`;
         container.appendChild(card); //adds card to the page



  //create the edit button
  const editButton= document.createElement("button");
  editButton.textContent= "Edit"; 
  editButton.className=  "bg-blue-500 text-white px-4 py-2 rounded mt-2";

  editButton.addEventListener("click",function(){
    const newName= prompt("Enter the students's new name:", student.name);
    if (newName === null) {
                return;
            }

            const newScore = prompt(
                "Enter the student's new score:",
                String(student.score)
            );

            if (newScore === null) {
                return;
            }
            updateStudent(index, newName, newScore);
        });
        card.appendChild(editButton);

//delete button
  const deleteButton= document.createElement("button");
  deleteButton.textContent= "Delete"; 
  deleteButton.className=  "bg-red-500 text-white px-4 py-2 rounded mt-2";

  deleteButton.addEventListener("click",function(){
    deleteStudent(index);
  });
  card.appendChild(deleteButton);
  container.appendChild(card);
});
}

  // 6. Connect the form to CREATE
studentForm.addEventListener("submit", function(event) {
    event.preventDefault();

     console.log("Add Student button was clicked!");

    addStudent(studentName.value, score.value);

    if (result.textContent === "Student added successfully!") {
        studentForm.reset();
    }
});

// 7. Display saved records when the page loads
displayStudents();
