const assert = require('chai').assert
const board  = require('../libs/board')



describe('Board', function() {

  describe('Initialization', function() {

    it('should start uninitialized', function(){
        assert.equal(board.initialized, false)
    })


    it('should have no position data set on initialization', function(){
        assert.deepEqual(board.currentPosition, {
            x: null,
            y: null,
            d: null
        })
    })

    it('should have a board size of 5', function(){
        assert.equal(board.size, 5)
    })

    

  })

})