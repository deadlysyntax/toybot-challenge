// Interpret a string input through the console, return a command object
// which is used to issue the next command
module.exports.interpretCommand = (commandString) => {
    let commandPieces = commandString.trim().split(' ')
    // Initialize our returned object, all command objects require the 'command' property
    let commandObject = {
        command: commandPieces[0].trim().toLowerCase() // Clean up and normalize the command
    }
    // the PLACE command requires additional variables
    if( commandObject.command.toLowerCase() === 'place' && typeof commandPieces[1] !== 'undefined' ){
        var metaPieces = commandPieces[1].trim().toLowerCase().split(',')
        commandObject.meta = {
            x: parseInt(metaPieces[0]),
            y: parseInt(metaPieces[1]),
            d: metaPieces[2]
        }
    }
    return commandObject
}