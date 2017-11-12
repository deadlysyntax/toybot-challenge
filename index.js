const inquirer    = require('inquirer')
const tools       = require('./libs/tools')

let init = async () => {
    
    console.log(await awaitNextCommand())
}


let awaitNextCommand = async () => {
    let prompt = await inquirer.prompt([{ type: 'input', message: 'Using PLACE X,Y,(N,S,E,W) - specify where you\'d like to start:', name: 'placement'}])
    return tools.interpretCommand(prompt.placement)
}



init()