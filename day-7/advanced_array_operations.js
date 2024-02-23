const students = [
  {
    name: "Thomas John",
    score: 70,
    grade: "A",
    desc: "Excellent",
  },
  {
    name: "Winifred Sarah",
    score: 44,
    grade: "F",
    desc: "Fail",
  },
  {
    name: "Haliyu Sanni",
    score: 60,
    grade: "B",
    desc: "Very good",
  },
  {
    name: "Sandra Williams",
    score: 51,
    grade: "C",
    desc: "Average",
  },
  {
    name: "Jennifer Lopez",
    score: 47,
    grade: "D",
    desc: "Pass",
  },
  {
    name: "Tyla Mendi",
    score: 74,
    grade: "A",
    desc: "Excellent",
  },
];


const names = students.map((info) => {
  return info.name;
});
console.log(names);

// all in one array 
function info() {
  let empty = [];
  students.map((array) => {
    empty.push(array.grade, array.name);
  });
  console.log(empty);
}
info();

// individual array
const data = students.map((arr) => {
    let empty = [];
    empty.push(arr.name, arr.grade);
    console.log(empty);
})



console.log(students);

// using filter to find the score of students above (50)
const filterStudents = students.filter((arr) => {
  if (arr.score >= 50) {
    return true;
  } else {
    return false;
  }
});
console.log(filterStudents);

// === using reduce, calculate the average score of the filtered student; ===
// formula is to add the score of the filtered students.
// divide the total score by the number of filtered students
// let  = 50;

const averageScore = () => {
  const totalScore = filterStudents.reduce((prev, student) => {
    return prev + student.score;
  }, 0);
  console.log(totalScore);

  // to calculate the average score
  const average = totalScore / filterStudents.length;
  console.log(average);
};
averageScore();
