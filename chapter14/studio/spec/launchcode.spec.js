// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("The launchcode object", function(){

  // Write your unit tests here!
  it('should have a property called organization', function (){
    expect(launchcode.organization).toEqual('nonprofit');
  });
  it('should have a property called edecutiveDirector', funtion(){
    expect(launchcode.executiveDirector).toEqual('Jeff');
  });
  it('should have a property called percentageCoolEmployee', function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });
  it('should have a property called programsOffered', function(){
    expect(launchcode.programsOffered[0]).toEqual('LC101');
    expect(launchcode.programsOffered[1]).toEqual('Launchcode Women+');
    expect(launchcode.programsOffered[2]).toEqual('CodeCamp');
    expect(launchcode.programsOffered.length).toEqual(3);
  });
});