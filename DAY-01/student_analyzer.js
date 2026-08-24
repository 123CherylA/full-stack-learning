const students = [
    { name: "John", score: 75 },
    { name: "Sarah", score: 90 },
    { name: "David", score: 65 },
    { name: "Mary", score: 82 },
    { name: "James", score: 55 }
];

const displayStudents=students.forEach((student)=>{
    console.log(`Name: ${student.name}, Score: ${student.score}`);
});


const scores=students.map((student)=>{
          return student.score;
});
console.log(scores);
let totalScore=0;
 scores.forEach((score)=>{
    totalScore+=score;
 });
const averageScore=totalScore/scores.length;
console.log("Average Score:", averageScore);


const highestStudents=students.filter((student)=>{
    return student.score>=70;
});
console.log(highestStudents);

const firstHighScore=students.find((student)=>{
    return student.score>85;
});
console.log(firstHighScore);


const classifyScore=(score)=>{
    if(score>=80){
        return "Excellent";
    }else if(score>=70){
        return "Very Good";
    }else if(score>=60){
        return "Good";
    }else{
        return "Needs Improvement";
    }                   
};
console.log(classifyScore(78));



