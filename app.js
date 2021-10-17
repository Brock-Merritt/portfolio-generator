const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('protfolio complete!');
// });
inquirer
  .prompt([
    {
      type: '',
      name:'name',
      message:'what ur name eh'
    }
  ])
  .then(answers => console.log(answers));
