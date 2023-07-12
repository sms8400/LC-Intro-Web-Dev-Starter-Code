// 12.8.1. Select the Crew

// Code your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

let idNumbers = [291, 414, 503, 599, 796, 890];
let crewIds=[]

while (crewIds.length < 3) {
  let randomId =selectRandomEntry(idNumbers);
    if(!crewIds.includes(randomId)) {
    crewIds.push(randomId);
  }
}
 
// Code your buildCrewArray function here:
function buildCrewArray(candidates, selectedIds) {
  let selectedCrew=[];
  for(let i=0; i < candidates.length; i++) {
if(selectedIds.includes(candidates[i].astronautID)){
  selectedCrew.push(candidates[i]);
    }
  }
  return selectedCrew;
}




// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let crew= buildCrewArray(animals, crewIds);

console.log(crew);
// Code your template literal and console.log statements:

let statement=`${crew[0].name}, ${crew[1].name}, and ${crew[2]['name']} are going to space!\n`;
console.log(statement);



// 12.8.2. Orbit Calculations
// Copy/paste your selectRandomEntry function here:
function orbitCircumference(altitude) {
  const RADIOUS_OF_EARTH=6371;
  let orbitRadius = RADIOUS_OF_EARTH + altitude;
  return Math.round(2 * Math.PI * orbitRadius);
}

// Code your missionDuration function here:
function missionDuration(numOrbits, alt= 2000, speed=2800 ){
  let circumference = orbitCircumference(alt);
  let distance = numOrbits * circumference;
  let time= Math.round(100 * distance /speed)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
  return time;
}

// Code your oxygenExpended function here:
function oxygenExpanded(candidate, alt=2000, speed=28000){
  let duration= missionDuration(3, alt, speed);
  let oxygen= Math.round(1000) * candidate.o2Used(duration) /1000;
  return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygen} kg of oxygen.\n`;
}

let selectedCandidate=selectRandomEntry(crew);
console.log(oxygenExpanded(selectedCandidate));

selectedCandidate - selectRandomEntry(crew);
console.log(oxygenExpanded(selectedCandidate, 3000, 25000));

function selectedByOxygenUse(arr){
  let candidate= arr[0];
  for(let i=1; i < arr.length; i++) {
    if (arr[i].o2Used(1) < candidate.o2Used(1)) {
      candidate=arr[i];
    }
  }
  return candidate;
}

let selectedCandidateBonus= selectedByOxygenUse(crew);
console.log(oxygenExpanded(selectedCandidateBonus));

function crewMass(arr){
  let mass=0;
  for(let i= 0; i < arr.length; i++){
    mass += arr[i].mass;
  }
  return Math.round(mass*10)/10;
}
const ROCKET_MASS=7500;

function getTotalMass(arr){
  return crewMass(arr)+ROCKET_MASS;
}

function fuelRequired(arr){
  return getTotalMass(arr) * 9.5;
}

function safteySurplus(arr){
  let surplus = 100* arr.length;
  for (let i=0; i< arr.length; i++){
    if (arr[i].species === 'cat' || arr[i].species === 'dog'){
      surplus += 100;
    }
  }
  return surplus;
}
console.log(`The mission has a launch mass of ${getTotalMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.`);
