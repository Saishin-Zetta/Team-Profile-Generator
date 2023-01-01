const BlackCompanyEmployee = require(`./BlackCompanyEmployee`)

class BlackCompanyManager extends BlackCompanyEmployee {
    constructor (name, email, id, officeNum){
        super(name, email, id)
        this.officeNum = officeNum;
    }

    getOfficeNum(){
        return this.officeNum
    }

    getRole(){
        return `Manager`
    }
}
module.exports = BlackCompanyManager;