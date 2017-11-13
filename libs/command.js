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
    
    
    
    place: (commandObject, board) => {
        if( typeof commandObject.meta === 'undefined' )
            return { response: 'error', 'message': 'Please make sure you specify a position and direction', board: board }
        // Check position for validity
        if( ! board.validPosition(commandObject.meta) )
            return { response: 'error', 'message': `Invalid position - axis need to be 0-${board.size-1}, please try again`, board: board }
        // Check direction for validity
        if( ! board.validDirection(commandObject.meta) )
            return { response: 'error', 'message': 'Invalid direction, please try again with one of n,s,e,w', board: board }
        // Make the placement
        let newBoard = Object.assign({}, board, {
            initialized:     true,
            currentPosition: commandObject.meta
        })
        return { response: 'success', board: newBoard }
    },



    move: (commandObject, board) => {
        // Calculate what the new position would be
        let newPosition = board.position.move(board.currentPosition)
        // Check for validity
        if( ! board.validPosition(newPosition) )
            return { response: 'error', 'message': 'Invalid position, please try again', board: board }
        // Make the movement
        let newBoard = Object.assign({}, board, {
            currentPosition: newPosition 
        })
        return { response: 'success', board: newBoard }
    },




    left: (commandObject, board) => {
        let newPosition = board.position.turn(board.currentPosition, 'left')
        // Check validity
        if( ! board.validDirection(newPosition) )
            return { response: 'error', 'message': 'Invalid direction, please try again with one of n,s,e,w', board: board }
        // Make the movement
        let newBoard = Object.assign({}, board, {
            currentPosition: newPosition 
        })
        return { response: 'success', board: newBoard }
    },




    right: (commandObject, board) => {
        let newPosition = board.position.turn(board.currentPosition, 'right')
        // Check validity
        if( ! board.validDirection(newPosition) )
            return { response: 'error', 'message': 'Invalid direction, please try again with one of n,s,e,w', board: board }
        // Make the movement
        let newBoard = Object.assign({}, board, {
            currentPosition: newPosition 
        })
        return { response: 'success', board: newBoard }
    },




    report: () => {
        console.log('Current Position: ', board.currentPosition)
        return { response: 'success', board: board }
    }

}
