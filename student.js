function register(x) {
  let classData = [];
  classData.push(x);
  classData.push({
    name: "Peter",
    performance: { Phy: 90, Chem: 96, Math: 70 },
  });
  classData.push({
    name: "Bolaji",
    performance: { Phy: 80, Chem: 98, Math: 80 },
  });
  classData.push({
    name: "Gbemibori",
    performance: { Phy: 90, Chem: 90, Math: 90 },
  });
  classData.push({
    name: "Sunday",
    performance: { Phy: 93, Chem: 92, Math: 85 },
  });

  let classScore = [];

  console.log(classData);
  classData.forEach((student) =>
    classScore.push(
      Object.values(student.performance).reduce((a, b) => {
        return a + b;
      })
    )
  );

  classData.forEach((el) => {
    el.total = Object.values(el.performance).reduce((a, b) => {
      return a + b;
    });
  });

  console.log(classData);

  const sortedData = (x) => {
    return (a, b) => {
      if (a[x] < b[x]) {
        return a[x];
      } else if (a[x] > b[x]) {
        return -1;
      } else {
        return 0;
      }
    };
  };

  if (classData.length <= 10) {
    console.log(`We have reached our limit`);
  }

  let bestStudent = classData.sort(sortedData("total"))[0].name;
}

register({ name: "Baba Voss", performance: { Phy: 88, Chem: 81, Math: 82 } });
// let phyScores = [];
// classData.forEach((stud) => {
//   phyScores.push(Object.values(stud.performance)[0]);
// });
// let phyTotal = phyScores.reduce((a, b) => {
//   return a + b;
// });

// class average
let classAverage = classScore.reduce((a, b) => a + b) / classScore.length;
console.log(`The class average score is ${classAverage}.`);
// Best student
console.log("");
let bestStudent = classData.sort(sortedData("total"));
console.log(classData.sort(sortedData("total"))[0].name);
// console.log("");
// let performingSubject = classData.sort(sortedData("performance"));
// console.log(performingSubject);
// console.log("");

// // highest subject
// let highSubject = classData.sort(sortedData("Chem")[0]);
// console.log(highSubject);
