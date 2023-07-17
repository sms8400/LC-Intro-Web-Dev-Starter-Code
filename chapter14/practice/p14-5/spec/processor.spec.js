const processor = require('../processor.js');

describe("transmission processor", function() {

   // it("takes a string returns an object", function(){
   //    let result = processor("9701::<489584872710>");
   //    expect(typeof result).toEqual("object");
   // });
   it("returns -1 if '::' not found", function(){
      let result = processor("9701<489584872710>");
      expect(result).toEqual(-1);
   });
   // it("returns id in object", function() {
   //   let result = processor("9701::<489584872710>");
   //   expect(result.id).not.toEqual(undefined);
   // });
   // it("converts id to a number", function() {
   // let result = processor("9701::<489584872710>");
   // expect(result.id).toEqual(9701);
   // });
   // it("returns rawData in object", function() {
   // let result = processor("9701::<487297403495720912>");
   // expect(result.rawData).not.toEqual(undefined);
   // });
   // it("returns -1 for rawData if missing < at position 0", function() {
   // let result = processor("9701::487297403495720912>");
   // expect(result.rawData).toEqual(-1);
   // });  
});