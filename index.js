const inquirer    = require('inquirer')
const command     = require('./libs/command').command
const board       = require('./libs/board') .board



const init = async () => {
    try {
        let commandObject = await nextCommand(board)
        processCommand(commandObject, board)
    }
    catch(e){
        console.log(e)
    }
}




const nextCommand = async (board) => {
    let prompt = await (() => {
        if( board.initialized === false )
            return inquirer.prompt([{ type: 'input', message: 'Using PLACE X,Y,(N,S,E,W) - specify where you\'d like to start:', name: 'move'}])
        else
            return inquirer.prompt([{ type: 'input', message: 'Specify next move - PLACE X,Y,D, MOVE, LEFT, RIGHT, REPORT', name: 'move'}])
    })()
    return command.interpret(prompt.move)
}




// Make sure the user input is a valid command
const processCommand = (commandObject, board) => {
    if( ! command.valid(commandObject) ) {
        console.log('Invalid command, please try again.')
        nextCommand(board)
    }
    else {
        runCommand(commandObject, board)
    }
}



const runCommand = async (commandObject, board) => {
    // Calls the command method (based on input command from user)
    // which returns a response object with either and error or 
    // a new board object
    let newBoardState = command[commandObject.command](commandObject, board)
    if( newBoardState.response === 'error' )
        console.log(newBoardState.message)
    // Move on to the next command
    let newCommandObject = await nextCommand(newBoardState.board)
    processCommand(newCommandObject, newBoardState.board)
}



init()