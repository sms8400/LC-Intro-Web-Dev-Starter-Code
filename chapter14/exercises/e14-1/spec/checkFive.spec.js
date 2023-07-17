const test = require('../checkFive.js');

describe("checkFive", funciton(){
    it("Descriptive feeedback...", function(){
        let output= checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    it("returns 'num is less than 5' when num < 5.", function(){
      let output= checkFive(2);
      expect(output).toEqual(" is equal to 5.");
    });
    it("returns 'num is greater than 5' when num > 5.", function(){
      let output= checkFive(2);
      expect(output).toEqual(" is greater than 5.");
    });
};
