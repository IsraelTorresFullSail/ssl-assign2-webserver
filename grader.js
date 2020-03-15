const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Grader {
    static outputGrade() {
        rl.question("Please enter the student name: ", (name) => {
            rl.question("Please enter assignment name: ", (assignment) => {
                rl.question("Please enter grade: ", (grade) => {
                    
                    if(+grade <= 100 && +grade >= 90) {
                        console.log("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: A\r\nGrade details:\r\nYou have met all the requirements for full grade\r\n");
                    } else if(+grade <= 89.99 && +grade >= 80) {
                        console.log("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: B\r\nGrade details:\r\nIt looks like you are missing some of the functionality\r\n");
                    } else if(+grade <= 79.99 && +grade >= 70) {
                        console.log("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: C\r\nGrade details:\r\nIt looks like you are missing most of the functionality\r\n");
                    } else if(+grade <= 69.99 && +grade >= 60) {
                        console.log("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: D\r\nGrade details:\r\nIt looks like you are missing most of the functionality\r\n");
                    } else if(+grade < 60) {
                        console.log("\r\n"+name+"@fullsail.edu\r\nHere is your grade for "+assignment+" assignment: F\r\nGrade details:\r\nIt looks like you are missing all of the functionality\r\n");
                    } else {
                        console.log("\r\nPlease enter a valid value of grade between 0-100\r\n");
                    }
                    rl.close()
                })
            })
        })
    }
}

const grader = Grader.outputGrade();
console.log(grader);