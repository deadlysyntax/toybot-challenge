const assert   = require('chai').assert
const command  = require('../libs/command').command


describe('Commands', function() {

  describe('interpretCommand', function() {


    it('should convert an upercase string input into a command object', function() {
      assert.deepEqual(command.interpret('PLACE 0,0,W'), {command: 'place', meta: { x: 0, y: 0, d: 'w'}})
    })

    it('should convert a lowercase string input into a command object', function() {
      assert.deepEqual(command.interpret('place 0,0,w'), {command: 'place', meta: { x: 0, y: 0, d: 'w'}})
    })

    it('should create meta data for the place command', function() {
      assert.deepEqual(command.interpret('PLACE 0,0,W'), {command: 'place', meta: { x: 0, y: 0, d: 'w'}})
    })

    it('should handle extra spacing on strings', function() {
      assert.deepEqual(command.interpret(' PLACE 0,0,W '), {command: 'place', meta: { x: 0, y: 0, d: 'w'}})
    })

    it('should not create meta data for other commands', function() {
      assert.deepEqual(command.interpret('MOVE'), {command: 'move'})
    })

    it('should return true for a valid command', function(){
      assert.isTrue( command.valid({command: 'place', 'meta': {x: 2, y: 2, d: 'w'}}))
    })

    it('should return false for an invalid command', function(){
        assert.isFalse( command.valid({command: 'not a command'}))
    })

  })

})