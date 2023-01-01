const generateGrunts = team => {

    const bigBoss = manager => {
        return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
        <p class="card-text">${manager.getId()}</p>
        <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>>
        <p class="card-text">${manager.getOfficeNum()}</p>
    </div>
    </div>`
    }

    const gearHead = engineer => {
        return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
        <p class="card-text">${engineer.getId()}</p>
        <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
        <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
        
    </div>
    </div>`
    }

    const lowlyGrunt = intern => {
        return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
        <p class="card-text">${intern.getId()}</p>
        <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
        <p class="card-text">${intern.getSchool()}</p>
        
    </div>
    </div>`
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => bigBoss(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => gearHead(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => lowlyGrunt(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-5 mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateGrunts(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};