// REQUIRED PACKAGES
const fs = require("fs");
const inquirer = require("inquirer");

// CONSTANT NAME TO REFER TO README FILE
const readMeFile = "readme.md";
var readMeString="";
// FUNCTION TO WRITE DATA DECLARED DATA TO FILE DECLARED FILENAME

function writeToFile(filename, data) {
      fs.writeFile(filename, data, (err) => {
            // IF ERROR IS THROWN
            if (err) {
                  return console.log(err);
            }
            // CONSOLE LOG WRITTEN AFTER DONE
            console.log("file written");
      })
}

// FUNCTIONS TO ADD README STYLE
const createTitle = title => { return `#${title}#` };
const createListItem = item => { return `-${item}` };

// * At least one badge


// * Project title
// PROMPT TO GET PROJECT TITLE
const getTitle = () => {
      inquirer
      .prompt([
            {
                  type: "input",
                  message: "What is your project's title?",
                  name: "title"
            },
            {
                  type: "input",
                  message: "Briefly describe the project",
                  name: "description"
            },
            {
                  // ASK FOR LICENSE TYPE
                  type: "list",
                  message: "License Type: ",
                  name: "license",
                  choices: ["MIT", "Apache", "GNU", "BSD"]
            },
            {
                  type: "input",
                  message: "Briefly describe how to use the project",
                  name: "projectUsage"
            },
            {
                  // ASK FOR GITHUB USERNAME
                  type: "input",
                  message: "What is your github username?",
                  name: "username"
            }
      ]).then( (answer) => {
            readMeString += createTitle(answer.title)+"\n";
            readMeString += answer.description+"\n";
            readMeString += answer.license+"\n";
            readMeString += answer.projectUsage+"\n";
            readMeString += answer.username+"\n";
            console.log(readMeString);
      }
      )
}



// * Table of Contents
let tableLength=0;
let contentString="";
// PROMPT TO GET TABLE OF CONTENTS LENGTH
const getTable = () => {
      inquirer
      .prompt({
            type: "number",
            message: "How many items long is the table of contents?",
            name: "contentLength"
      }     
      ).then( (answer) => {
            for(var i=0; i<answer.contentLength,i++;){
                  inquirer.prompt({
                        type: "input",
                        message: "Enter each content heading?",
                        name: "content"
                  }).then( (answer) => {
                        contentString += answer.content+"\n";      
                  })      
            }
      }
      )
      
};

// * Installation
let requiredPackages="";
const getInstall = () => {
      inquirer.prompt({
            type: "number",
            message: "How many packages need to be installed?",
            name: "packageNumber"
      }      
      ).then( (answer) => {
            for(var i=0; i<answer.packageNumber,i++;){
                  inquirer.prompt({
                        type: "input",
                        message: "Enter the name for each package?",
                        name: "packageName"
                  }).then( (answer) => {
                        requiredPackages += answer.packageName+"\n";      
                  })      
            }
      }
      )
};

let contributors="";
// * Contributing
const getContributors = () =>{
      inquirer
      .prompt({
            type: "number",
            message: "How many contributors need to be credited?",
            name: "contributorsAmount"
      }).then( (answer) => {
            console.log(answer.contributorsAmount);
            let contribs = parseInt(answer.contributorsAmount);
            for(let i=0; i<contribs,i++;) {
                  
            }
      }
      )
};

const stupidFunction = () => {
      inquirer.prompt({
            type: "input",
            message: "Enter the GitHub username for each contributor",
            name: "username"
      }).then( (answer) => {
            contributors += answer.username+"\n";      
      })
}

getContributors();

