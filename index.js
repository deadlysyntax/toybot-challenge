const inquirer     = require('inquirer')
const command      = require('./libs/command').command
const environment  = require('./libs/board') 



let init = async () => {
    let board         = environment.board
    try {
        let commandObject = await nextCommand(board)
        processCommand(commandObject, board)
    }
    catch(e){
        console.log(e)
    }
}




let nextCommand = async (board) => {
    let prompt = await inquirer.prompt([{ type: 'input', message: 'Using PLACE X,Y,(N,S,E,W) - specify where you\'d like to start:', name: 'placement'}])
    return command.interpret(prompt.placement)
}




// Make sure the user input is a valid command
let processCommand = (commandObject, board) => {
    if( ! command.valid(commandObject) ) {
        console.log('Invalid command, please try again.')
        nextCommand(board)
    }
    else {
        runCommand(commandObject, board)
    }
}



let runCommand = async (commandObject, board) => {
    // Calls the command method (based on input command from user)
    // which returns a response object with either and error or 
    // a new board object
    let newBoardState = command[commandObject.command](commandObject, board)
    console.log(newBoardState)
}



init()