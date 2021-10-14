const generateHtml = team =>{

    const generateManager = manager =>{
        return `
        <div class="m-4">
           <div class="card" style="width: 17rem;">
            <div class="card-body bg-primary">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class='fas fa-mug-hot'></i>${manager.getRole()}</h3>
            </div>
            <div class="container-fluid bg-light p-4">
                <ul class="list-group list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office: ${manager.getOffice()}</li>
                </ul>
            </div>
        </div>
    </div> `
    };
    const generateEngineer = engineer =>{
        return `
        <div class="col m-4">
        <div class="card" style="width: 17rem;">
            <div class="card-body bg-primary">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class='fas fa-glasses'></i>${engineer.getRole()}</h3>
            </div>
            <div class="container-fluid bg-light p-4">
                <ul class="list-group list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    </div>`
    };

    const generateIntern = intern =>{
        return `
        <div class="col m-4">
        <div class="card" style="width: 17rem;">
            <div class="card-body bg-primary">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class='fas fa-user-graduate'></i>${intern.getRole()}</h3>
            </div>
            <div class="container-fluid bg-light p-4">
                <ul class="list-group list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: <a href="https://www.google.com/search?q=${intern.getSchool()}" target="_blank">${intern.getSchool()}</a></li>
                </ul>
            </div>
        </div>
    </div>`;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole()=== 'Manager')
        .map(manager => generateManager(manager))
        
    );
    html.push(team
        .filter(employee => employee.getRole()=== 'Engineer')
        .map(engineer => generateEngineer(engineer))
        .join("")
        
    );
    html.push(team
        .filter(employee => employee.getRole()=== 'Intern')
        .map(intern => generateIntern(intern))
        .join("")
        
    );

    return html.join("");


}
module.exports = team =>{
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/ef612db32d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Generator</title>
    </head>
    <body>
        <!-- header -->
        <div class="title text-center m-0 p-4">
          <div class="container-fluid">
                <h1>My Team</h1>
                
            </div>
         </div>
         <!-- main section -->
         <main>
         <div class="container">
         <div class="row">
             <div class="card-employee col-12 d-flex justify-content-center">
             ${generateHtml(team)}
             </div>
         </div>
        </div>
    </main>
          
    </body>
    </html>`
};