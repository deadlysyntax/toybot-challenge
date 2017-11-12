const inquirer     = require('inquirer')
const command      = require('./libs/command')
const environment  = require('./libs/board') 

let init = async () => {
    let board         = environment.board
    let commandObject = await nextCommand(board)
    console.log(commandObject)
   
}


let nextCommand = async () => {
    let prompt = await inquirer.prompt([{ type: 'input', message: 'Using PLACE X,Y,(N,S,E,W) - specify where you\'d like to start:', name: 'placement'}])
    return command.interpret(prompt.placement)
}



// Make sure the user input is a valid command
let processCommand = (commandObject, board) => {
    if( ! command.valid(commandObject) ) {
        console.log('Invalid command, please try again.')
        nextCommand(board)
    }
}



init()