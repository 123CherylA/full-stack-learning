let name="Abisade";
let age=20;
let university="Covenant University";
let course="Computer Engineering";
let CGPA=4.94;
let isTrue=true;
let skills=["HTML","CSS","JavaScript","ReactJS","NodeJS"];
let student={
    name:"Abisade",
    course:"Computer Engineering",
    cgpa:4.94,
}


console.log(isTrue);
console.log(skills);
console.log(student);
console.log(name);
console.log(age);
console.log(university);
console.log(course);
console.log(CGPA);

const score1 = 75;
const score2 = 82;
const score3 = 68;

const averageScore = (score1 + score2 + score3) / 3;
console.log("Average Score:", averageScore);

const totalScore = score1 + score2 + score3;
console.log("Total Score:", totalScore);

if (averageScore >= 70) {
    console.log("Congratulations! You passed the exam.");
} else {
    console.log("Sorry, you failed the exam.");
}


console.log(score1%2)

const score = 78;
if(score>=80){
    console.log("Excellent");
} else if(score>=70){
    console.log("Very Good");
} else if(score>=60){
    console.log("Good");
}else{
    console.log("Needs Improvement");
}

let skills = ["HTML", "CSS", "JavaScript", "Python", "React"];
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

function calculateTotal(a,b,c){
    return a+b+c;
}
console.log(calculateTotal(10,20,30));

function calculateAverage(a,b,c){
    return (a+b+c)/3;
}
console.log(calculateAverage(10,20,30));

const calculateTotal=(a,b,c)=>{
    return a+b+c;
};
console.log(calculateTotal(10,20,30));

let scores=[75, 82, 68];
scores.forEach((score)=>{
    console.log(score);
});


let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
skills.forEach((skill)=>{
    console.log(skill);

});

let  scores = [10, 20, 30, 40, 50];
const doubled=scores.map((score)=>{
    return score+10;
});
console.log(doubled);


let scores = [45, 72, 88, 55, 91, 63, 78];
const filteredScores=scores.filter((score)=>{
    return score>=70;

});
console.log(filteredScores);

let scores = [45, 72, 88, 55, 91, 63, 78];
const firstHighScore=scores.find((score)=>{
    return score>80;

});
console.log(firstHighScore);