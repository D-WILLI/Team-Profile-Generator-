const inquirer = require('inquirer');
const htmlFile = require ('./createHTML')
const fs = require ('fs'); 

let employeeTeam =[]; 
let internTeam = []; 
let engineerTeam = []; 
let teamProfile = [employeeTeam, internTeam, engineerTeam]; 

function teamCreation (){
console.log ("Please take a moment to create your team!")
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is the team mangers name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the team managers id?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the team managers email address?',
  },
  {
      type: 'input',
      name: 'number',
      message: 'What is the team managers office number?',
  },
  {
    type: 'list',
    name: 'team',
    message: 'What type of team member would you like to add?',
    choices: ['Engineer', 'Intern', 'I dont want to add any more team members. ']
  },

 
])

.then(answers => {
  const employeeInput = answers;
  employeeTeam.push(answers);
  if (answers.team == 'Engineer'){
    console.log ('Please add new Engineer');
    newEngineer();
  } else if (answers.team == 'Intern'){
  // employeeTeam.push(answers); 
  newIntern();
  } else (console.log ('Creating Team Profile'));
  // employeeTeam.push(answers); 

  // console.log(employeeTeam); 
    TeamProfile(); 
 



}); 
}
teamCreation(); 


function newEngineer(){

  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Engineers name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Engineers id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Engineers email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their Github?',
    },
    {
      type: 'list',
      name: 'team',
      message: 'What type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'I dont want to add any more team members. '],
    

    },
    
  ])

  .then(answers => {
    const employeeInput = answers;
    engineerTeam.push(answers); 
    console.log ('Engineer added Successfully')
    if (answers.team == 'Engineer'){
      console.log ('Please add new Engineer');
      // engineerTeam.push(answers); 
      newEngineer();
    } else if (answers.team == 'Intern'){
    // engineerTeam.push(answers); 
      newIntern();
    } else (console.log ('Creating Team Profile'));
    // engineerTeam.push(answers); 
    // console.log(engineerTeam); 
    TeamProfile(); 



  
  }); 

}


function newIntern(){

  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the Interns name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the Interns id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the Interns email address?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?',
    },
    {
      type: 'list',
      name: 'team',
      message: 'What type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'I dont want to add any more team members. '],
    

    },
    
  ])

  .then(answers => {
    const employeeInput = answers;
    internTeam.push(answers);

  console.log ('Intern added Successfully')
    
    if (answers.team == 'Engineer'){
      console.log ('Please add new Engineer');
      newEngineer();
    } else if (answers.team == 'Intern'){
      internTeam.push(answers);
      newIntern();
    } else (
    console.log ('Creating Team Profile'))
    internTeam.push(answers);
    TeamProfile(); 
      
   


  })

}

function TeamProfile (){
  console.log(teamProfile)
}


module.exports =  teamCreation; 
module.exports = newIntern;
module.exports = newEngineer;
module.exports = employeeTeam; 
module.exports= internTeam; 
module.exports = engineerTeam; 
module.exports = TeamProfile; 

