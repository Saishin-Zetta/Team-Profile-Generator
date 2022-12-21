const BlackCompanyEmployee = require(`./BlackCompanyEmployee`)

class BlackCompanyEngineer extends BlackCompanyEmployee {
    constructor(name, email, id, gitHub) {
      super(name, email, id)
      this.gitHub = gitHub
  
    }

    getGithub(){
        return this.gitHub
    }

    getRole(){
        return `Engineer`
    }
}

module.exports = BlackCompanyEngineer;