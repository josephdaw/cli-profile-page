const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'bio',
        message: 'Write a short bio for yourself?',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'What is the URL for your LinkedIn profile?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is the URL for your GitHub profile?',
      },
  ])
  .then((data) => {
    const filename = `index.html`;

    fs.writeFile(filename, `<!doctype html>
    <html lang="en">
    
      <head>
        <!-- meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
        <!-- links to external styles -->
        <link rel="stylesheet" href="assets/css/style.css">
      
        <!-- page title -->
        <title>Profile | ${data.name}</title>
      </head>
    
      <body>
        <header>
          <h1>${data.name} from ${data.location}</h1>
        </header>
    
        <main>
            <h2>About</h2>
            <p>${data.bio}</p>
            <h2>Contact</h2>
            <p>${data.linkedin}</p>
            <p>${data.github}</p>
        </main>
        
        <!-- footer -->
        <footer>
          <nav>
            <a href="http://www.github.com/josephdaw" target="_blank">GitHub</a>
            <a href="http://www.josephdaw.com/blog" target="_blank">Blog</a>
            <a href="https://twitter.com/Joseph_Daw" target="_blank">Twitter</a>
            <a href="https://www.linkedin.com/in/joseph-daw" target="_blank">LinkedIn</a>
          </nav>
          <p>&copy; 2021 Joseph Daw</p>
        </footer>
        
      </body>
    
    </html>`, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });