const assert   = require('chai').assert
const board    = require('../libs/board').board
const command  = require('../libs/command').command



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



  describe('Validation checks', function() {

    it('should return true if a position is valid', function(){
        assert.isTrue( board.validPosition({x: 0, y: 0, d: 'w'}))
        assert.isTrue( board.validPosition({x: 3, y: 3, d: 'n'}))
        assert.isTrue( board.validPosition({x: 4, y: 4, d: 's'}))
    })


    it('should return false if a position is valid', function(){
        assert.isFalse( board.validPosition({x: -1, y: -1, d: 'w'}))
        assert.isFalse( board.validPosition({x: 5, y: 5, d: 'n'}))
        assert.isFalse( board.validPosition({x: 7, y: 7, d: 's'}))
    })


    it('should return true is the specified direction is valid', function(){
        assert.isTrue( board.validDirection({d: 'n'}))
        assert.isTrue( board.validDirection({d: 's'}))
        assert.isTrue( board.validDirection({d: 'e'}))
        assert.isTrue( board.validDirection({d: 'w'}))
    })

    it('should return false is the specified direction is invalid', function(){
        assert.isFalse( board.validDirection({d: 'q'}))
        assert.isFalse( board.validDirection({d: 'a'}))
        assert.isFalse( board.validDirection({d: 'v'}))
    })

  })



  describe('Movement', function(){
    
    
    
        it('should place robot at specified coordinate', function(){
            assert.deepEqual( command.place({command: 'place', meta: { x: 2, y: 4, d: 'w'} }, board), {
                 response: 'success',
                 board:    Object.assign({}, board, {
                     initialized: true,
                     currentPosition: {
                        x: 2,
                         y: 4,
                         d: 'w'
                     }
                 })
            })
        })



    })



})