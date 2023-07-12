let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    astronautID: 1,
    move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    astronautID: 2,
    move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    astronautID: 3,
    move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    astronautID: 4,
    move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    astronautID: 5,
    move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

let id=1

// superChimpOne["astronautID"] = id++;

// salamander["astronautID"] = id++;

// superChimpTwo["astronautID"] = id++;

// superDog["astronautID"] = id++;

// superTardigrade["astronautID"] = id++;

// superChimpOne["move"] = Math.round(Math.random()*10);

// salamander["move"] = Math.round(Math.random()*10);

// superChimpTwo["move"] = Math.round(Math.random()*10);

// superDog["move"] = Math.round(Math.random()*10);

// superTardigrade["move"] = Math.round(Math.random()*10);

function relevantInformation(animal){
    let tempArr = [];
    for (let i = 0; i < animal.length; i++){
    tempArr.push(`${animal[i].name} is a ${animal[i].species}. They are ${animal[i].age} years old and ${animal[i].mass} kilograms. Their ID is ${animal[i].astronautID}.`);

    }
    return tempArr;
}


// function fitnessTest(candidates){
//  let results = [], numSteps, turns;
//  for (let i = 0; i < candidates.length; i++){
//      numSteps = 0;
//      turns = 0;
//      while(numSteps < 20){
//      numSteps += candidates[i].move();
//      turns++;
//      }
//      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
//  }
//  return results;
// }



function fitnessTest(array) {

  let results = [];

  for (item in array) {

    let steps = 0;

    let turn = 0;

    while (steps < 20) {

      steps += array[item].move();

      turn++;

    }

    let string = `${array[item].name} took ${turn} turns to take 20 steps.`

    results.push(string);

  }

  return results;

}

let resultsArray = fitnessTest(crew);

for (item in resultsArray) {

  console.log(resultsArray[item]);

}


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!