const inquirer = require('inquirer');
const htmlFile = require ('./createHTML')



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
  if (answers.team == 'Engineer'){
    console.log ('Please add new Engineer');
    newEngineer();
  } else if (answers.team == 'Intern'){
    newIntern();
  } else (console.log ('Creating Team Profile'));

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
    console.log ('Engineer added Successfully')
    if (answers.team == 'Engineer'){
      console.log ('Please add new Engineer');
      newEngineer();
    } else if (answers.team == 'Intern'){
      newIntern();
    } else (console.log ('Creating Team Profile'));
  
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
    const internInput = htmlFile(answers);

    fs.writeFile('index.html', internInput, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!'))

    console.log ('Intern added Successfully')
    if (answers.team == 'Engineer'){
      console.log ('Please add new Engineer');
      newEngineer();
    } else if (answers.team == 'Intern'){
      newIntern();
    } else (
    console.log ('Creating Team Profile')

  
  );

  }); 

}


module.exports =  teamCreation; 
module.exports = newIntern;
module.exports = newEngineer;




