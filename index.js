// REQUIRED PACKAGES
const fs = require("fs");
const inquirer = require("inquirer")

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
      inquirer.prompt({
            type: "input",
            message: "What is your project's title?",
            name: "title"
      },{
            type: "input",
            message: "Briefly describe the project",
            name: "description"
      },{
            // ASK FOR LICENSE TYPE
            type: "list",
            message: "License Type: ",
            name: "license",
            choices: ["MIT", "Apache", "GNU", "BSD"]
      },{
            type: "input",
            message: "Briefly describe how to use the project",
            name: "projectUsage"
      },{
            // ASK FOR GITHUB USERNAME
            type: "input",
            message: "What is your github username?",
            name: "username"
      }     
      ).then( (answer) => {
            
      }
      )
}


// * Table of Contents
var tableLength=0;
// PROMPT TO GET TABLE OF CONTENTS LENGTH
const getTable = () => {
      inquirer.prompt({
            type: "number",
            message: "How many items long is the table of contents?",
            name: "contentLength"
      }     
      ).then( (answer) => {
            for(var i=0; i<answer.contentLength,i++;){
                  inquirer.prompt({
                        type: "input",
                        message: "Enter each content heading?",
                        name: "packageName"
                  }).then( (answer) => {
                        requiredPackages += answer.packageName;      
                  })      
            }
      }
      )
      
};

// * Installation
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
                        requiredPackages += answer.packageName;      
                  })      
            }
      }
      )
};


// * Contributing
const getContributors = () =>{
      // ASK USER IF TO ADD CONTRIBUTOR
      var addmore = inquirer.confirm("Would you like to add a contributor?");
      // WHILE TRUE ADD CONTRIBUTORS
      while (addmore===true) {
            inquirer.prompt({
                  // ASK FOR GITHUB CONTRIBUTOR USERNAME
                  type: "input",
                  message: "What is their github username?",
                  name: "username"
            }     
            ).then( (answer) => {
                  contributors+=answer.username;
                  addmore = inquirer.confirm("Would you like to add another contributor?");
            }
            )
            
      }
}





