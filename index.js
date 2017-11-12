const inquirer    = require('inquirer')


let init = async () => {
    let prompt = await inquirer.prompt([{ type: 'input', message: 'Using PLACE X,Y,(N,S,E,W) - specify where you\'d like to start:', name: 'placement'}])
    console.log(prompt)
}
init()