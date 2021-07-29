const employee = require ('./Employee'); 
const inquirer = require('inquirer');


class Engineer {
    constructor(name, id, email, number, team){
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
            name: 'github',
            message: 'What is your Github username?',
        },
        {
            type: 'list',
            name: 'team',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more team members. ']
        },

      ])}
   
}