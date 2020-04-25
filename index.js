const fs=require("fs");
const inquirer=require("inquirer")
inquirer
.prompt([
      {
            // ASK FOR PROJECT TITLE
            type: "input",
            message: "What is your project's title?",
            name: "title"
      },
      {
            // ASK FOR GITHUB USERNAME
            type: "input",
            message: "What is your github username?",
            name: "githubUserName"
      },
      {
            // ASK FOR REPO NAME
            type: "input",
            message: "What is the name of the github repo?",
            name: "githubRepo"
      },
      {
            // ASK FOR LICENSE TYPE
            type: "list",
            message: "License Type: ",
            name: "license",
            choices:["MIT","Apache","GNU","BSD"]
      }
]).then( answers =>{
      // PROCESS ANSWERS AFTER PROMPTS 
      const createdTitle = createTitle(answers.title);
      
})

// CONSTANT NAME TO REFER TO README FILE
const readMe= "readme.md";


// FUNCTION TO WRITE DATA DECLARED DATA TO FILE DECLARED FILENAME
function writeToFile(filename, data) {
      fs.writeFile(filename, data, (err) => {
            // IF ERROR IS THROWN
            if(err){
                  return console.log(err);
            }
            // CONSOLE LOG WRITTEN AFTER DONE
            console.log("file written");
      })
}

// * At least one badge
// * Project title
//    using # to declare the most important
const createTitle = title => { return `#${title}#`};
// * Description
// * Table of Contents
// using - or *
const createListItem = item => { return `-${item}`};
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
//   * User GitHub profile picture
//   * User GitHub email