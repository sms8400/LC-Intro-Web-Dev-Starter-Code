const test = require('../RPS.js');

describe("whoWon", function(){
    it("returns 'Player 1 & 2 ties!' if P1 = rock & P2 = rock", function(){
        let output = test.whoWon('rock','rock');
        expect(output).toEqual("Both Players Tied!");
     });
    it("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
       let output = test.whoWon('rock','paper');
       expect(output).toEqual("Player 2 wins!");
    });
    it("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
       let output = test.whoWon('paper','scissors');
       expect(output).toEqual("Player 2 wins!");
    });
    it("returns 'Player 2 wins!' if P1 = sissors & P2 = rock", function(){
        let output = test.whoWon('sissors','rock');
        expect(output).toEqual("Player 2 wins!");
     });
});
