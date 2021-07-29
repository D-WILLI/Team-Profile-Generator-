const inquirer = require('./index');

function createManager (answers){
  return
  `
  // THIS IS THE MANAGERS INFORMATION  
<div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">
      name 
      <hr>
      position 
    </h5>
    <p class="card-text">
     <ul>
        <li> Id: </li>
        <li> Email: </li>
        <li> Office Number: </li>
      </ul>
    </p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
`
}

function createHTML(answers) {
return 
    
`<!DOCTYPE html>    
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="  ">
  <title> Employees </title>
</head>
<body>

THIS IS WHERE WE WILL POPULATE TEAM INFORMATION 


</body>
</html>`;
   
}
createHTML()
createManager()
  
  
  module.exports = createManager; 
  module.exports = createHTML; 
  
  
  
  