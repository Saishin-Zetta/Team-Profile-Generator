const inquirer = require("inquirer")
const path = require(`path`)
const BlackCompanyEmployee = require(`./objects/BlackCompanyEmployee`)
const BlackCompanyManager = require(`./objects/BlackCompanyManager`)
const BlackCompanyEngineer = require(`./objects/BlackCompanyEngineer`)
const BlackCompanyIntern = require(`./objects/BlackCompanyIntern`)
const fs = require(`fs`)

// making a directory for writing files
const DIST_DIR = path.resolve(__dirname, 'html');
const distPath = path.join(DIST_DIR, 'interface.html');

const team = []
const idHolder = []


function menu(){
    function createManager() {
        inquirer
        .prompt([
        {
            type: 'input',
            message: 'name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'id?',
            name: 'id',
        },
        ])
        .then((info) => {
            const manager = new BlackCompanyManager(info.name, info.email, info.id)
            team.push(manager);
            idHolder.push(info.id);
            createTeam();
        })
    }

    function createTeam(){  
        inquirer
        .prompt([
            {
            type: 'list',
            message: 'What kind of team member would you like to add?',
            name: 'memberChoice',
            choices: [`engineer`,`intern`,`STOP ADDING MEMBERS`]
            },   
        ])
        .then((userChoise) => {
            switch(userChoise.memberChoice){
                case `Engineer`:
                    addEngineer();
                    break;
                case `Intern`:
                    addIntern();
                    break;
                default:
                    buildTeam()

            }
        }) 
    }

    function addEngineer(){
        inquirer
        .prompt([
            {
            type: `input`,
            name: `engineerName`,
            message: `What is your engineer's name?`
            
            },
            {
                type: `input`,
                name: `engineerId`,
                message: `What is your engineer's id?`
            },
            {
                type: `input`,
                name: `engineerEmail`,
                message: `What is your engineer's email?`
            },
            {
                type: `input`,
                name: `engineerGithub`,
                message: `What is your engineer's Github username?`
            }
        ])
        .then((info) => {
            const engineer = new BlackCompanyEngineer(
                info.engineerName,
                info.engineerId,
                answers.engineerEmail,
                info.engineergitHub
            );
            team.push(engineer);
            idHolder.push(answers.engineerId)
            createTeam();
        })
    }

    function addIntern(){
        inquirer
        .prompt([
            {
            type: `input`,
            name: `internName`,
            message: `What is the intern's name?`
            
            },
            {
                type: `input`,
                name: `internId`,
                message: `What is the intern's id?`
            },
            {
                type: `input`,
                name: `internEmail`,
                message: `What is the intern's email?`
            },
            {
                type: `input`,
                name: `internSchool`,
                message: `What is the intern's school?`
            }
        ])
        .then((info) => {
            const intern = new BlackCompanyIntern(
                info.internName,
                info.internId,
                answers.internEmail,
                info.internGitHub
            );
            team.push(intern);
            idHolder.push(answers.internId)
            createTeam();
        })
    }

    function buildTeam() {
        if(!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(teamMembers), `utf-8`);
    }

    createManager()
}

menu()
// fs.writeFile("README.md", readmeContent, (err) =>
//             err ? console.log(err): console.log("Successfully created your README.md file.")
