module.exports.command = {

    // Converts a command string into a command Object that our app can use to decided what to do
    // Which tidies things up input
    interpret: (commandString) => {
        let commandPieces = commandString.trim().split(' ')
        // Initialize our returned object, all commands require the command
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
    },

    // the commandObject.command contains a string name which needs to match
    // one of the functions in this library
    valid: (commandObject) => {
        return typeof this.command[commandObject.command] === 'function'
    },

    // These functions calculate the command input against the provided board
    // and return a response object containing an error or a new board object
    place: () => {
        return 'place'
    },
    move: () => {
        return 'move'
    },
    left: () => {
        return 'left'
    },
    right: () => {
        return 'right'
    },
    report: () => {
        return 'report'
    }

}
