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
      }
      ).then( (answer) => {
      }
      )
};

// * Description
// PROMPT TO GET PROJECT DESCRIPTION
const getDescription = () => {
      inquirer.prompt({
            type: "input",
            message: "Briefly describe the project",
            name: "description"
      }      
      ).then( (answer) => {
      }
      )
};

// * Table of Contents
var tableLength=0;
// PROMPT TO GET TABLE OF CONTENTS LENGTH
const getLength = () => {
      inquirer.prompt({
            type: "number",
            message: "How many items long is the table of contents?",
            name: "contentLength"
      }     
      ).then( (answer) => {
            // SET TABLE OF CONTENT LENGTH  
            tableLength += parseInt(answer.contentLength);
      }
      )
      
};

// * Installation
const getInstall = () => {
      inquirer.prompt({
            type: "input",
            message: "What packages need to be installed?",
            name: "packages"
      }      
      ).then( (answer) => {
      }
      )
};

// * Usage
const getUsage = () => {
      inquirer.prompt({
            type: "input",
            message: "Briefly describe how to use the project",
            name: "projectUsage"
      }      
      ).then( (answer) => {
      }
      )
};

// * License
const getLicense = () => {
      inquirer.prompt({
            // ASK FOR LICENSE TYPE
            type: "list",
            message: "License Type: ",
            name: "license",
            choices: ["MIT", "Apache", "GNU", "BSD"]
      }     
      ).then( (answer) => {
      }
      )
};

// * Contributing
const getContributors = () =>{
      // ASK USER IF TO ADD CONTRIBUTOR
      var addmore = inquirer.confirm("Would you like to add a contributor?");
      // WHILE TRUE ADD CONTRIBUTORS
      while (addmore===true) {
            getContribName();
            // CONFIRM MORE CONTRIBUTORS
            addmore = inquirer.confirm("Would you like to add another contributor?");
      }
}
// GET THE NAME OF PROJECT CONTRIBUTOR
const getContribName = () => {
      inquirer.prompt({
            // ASK FOR GITHUB CONTRIBUTOR USERNAME
            type: "input",
            message: "What is their github username?",
            name: "username"
      }     
      ).then( (answer) => {
      }
      )
};

// * Tests

// * Questions

// * User GitHub profile picture

// * User GitHub email
const getUserName = () => {
      inquirer.prompt({
            // ASK FOR GITHUB USERNAME
            type: "input",
            message: "What is your github username?",
            name: "username"
      }     
      ).then( (answer) => {
      }
      )
};



