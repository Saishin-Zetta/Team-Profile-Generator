const { getRandomValues } = require("crypto")
const BlackCompanyEmployee = require(`./BlackCompanyEmployee`)

class BlackCompanyIntern extends BlackCompanyEmployee {
    constructor(name, email, id, school) {
      super(name, email, id)
      this.school = school
  
    }
    
    getschool(){
        return this.school
    }

    getRole(){
        return `Intern`
    }
}

module.exports = BlackCompanyIntern;