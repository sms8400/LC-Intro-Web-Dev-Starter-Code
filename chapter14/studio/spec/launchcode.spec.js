// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("The launchcode object", function(){
  // Write your unit tests here!
  it('should have a property called organization', function (){
    expect(launchcode.organization).toEqual('nonprofit');
  });
  it('should have a property called edecutiveDirector', function (){
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

  describe('should have a method, launchOutput, which', function(){
    it('should return "Launch!" for numbers evenly divisiable by only 2', function(){
      expect(launchode.launchOutput(2)).toEqual('Launch!');
    });
    it('should return "Code!" for numbers evenly divisible by only 3', function(){
      expect(launch.launchOUtput(3)).toEqual('Code!');
    });
    it('should return "Rocks!" for numbers evenly divisible by only 5', function*(){
      expect(launchode.launchOUtput(5)).toEqual('Rocks!');
    });
    it('should return "LauncCode!" for numbers evenly divisible by only 5', function(){
      expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
    });
    it('should return "Code Rocks!" for numbers evenly divisible by both 3 and 5', function(){
      expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
    });
    it('should return "Launch Rocks!" for numbers evenly divisible by both 2 and 5', function(){
      expect(launchcode.launchOutput(10)).toEqual('Launch Rocks!');
    });
    it('should return "LaunchCode Rocks!" for numbers evenly divisible by 2, 3, and 5', function(){
      expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
    });
    it("should return 'Rutabagas! That doesn't work.' for numbers NOT evenly divisible by 2, 3, or 5", function(){
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });
  });
});