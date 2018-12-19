// Homework W02d01

// 1. Data types

// A light switch that can be either on or off:
// boolean
var on = true; // when switch is on
on = false; // when wswitch is off

// A user's email address.
// using String
let email = "amin@ph.io";

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// array
let spaceshipList = ["hull", "laser blasters", "tractor beam", "warp drive"];

// A list of student names from our class.
// array or object
let lisOfStudents = ["amin", "nick", "anna", "james"];

// A list of student names from our class, each with a location.
// array of objects 
const strudentsDetails = [
    {
        name: "amin",
        location: "Bouder"
    },
    {
        name: "jack",
        location: "Denver"

    }
]

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// object with array of object as its properties each containing name and location and
// array of a list of favorite tv shows

// array of objects which each one has key with values of array of favorite tv shows

const strudentsWithMoreDetails = [
    {
        name: "amin",
        location: "Bouder",
        favTvShow: ["mad men", "friends", "x-files"]
    },
    {
        name: "jack",
        location: "Denver",
        favTvShow: ["scobar", "breaking bad", "lsot"]
    }
]

// 2. Take it Easy
// 1. 
let rainbowColorArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let bcolor;
for(let i = 0; i < rainbowColorArray.length; i++) {
    if(rainbowColorArray[i] === "blue") {
        bcolor = rainbowColorArray[i];
    }
}
console.log(bcolor);

const info = {
    name: "amin",
    favFood: "pasta",
    hobby: "coding",
    livingTown: "Westmisnter",
    favDataType: "Object"
}
console.log(info.hobby);

// 3.Crazy Object!
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

  console.log(crazyObject.taco[1].salsa[5]);
  console.log(crazyObject.larry.quotes[0]);
  console.log(crazyObject.larry.characters[2].favourtieHobby);
  console.log(crazyObject.larry.nicknames[1]);
  console.log(crazyObject.larry.characters[1]);

  // 4. Object-ception
  const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

function findKey(obj){
    if(typeof(obj.limbo) === 'string' ) {
        obj.limbo = null;
        return obj.limbo;
    }
    
    let key;
    for(key in obj) {
        return findKey(obj[key]);
    }
}

console.log(findKey(inception));

// 5-7. Bond Films

const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

  // 5. 
let bondTitless = [];
for(let i = 0; i < bondFilms.length; i++) {
    bondTitless.push(bondFilms[i]["title"]);
}

console.log(bondTitless);

// 6. 
let oddBonds = [];
for(let i = 0; i < bondFilms.length; i++) {
    if(bondFilms[i]["year"] % 2 === 1) {
        oddBonds.push(bondFilms[i]);
    }
}
console.log(oddBonds);

// 7.
let cumulativeGross = 0;

for (let i = 0; i < bondFilms.length; i++) {
    let strGross = bondFilms[i]["gross"].replace(/[^\d]/g, '');
    let intGross = parseInt(strGross);
    cumulativeGross += intGross;   
}
console.log(cumulativeGross);






//////////////// Hungry For More?

function actorWithLeastFilm(bondFilms) {
    let arrayOfActor = createArrayOfActor(bondFilms);
    let objectOfActors = createObjectofActors(arrayOfActor);
    let objOfActor =  repeatOfMovies(objectOfActors, bondFilms);
    let minOfActor =  findMinActor(objOfActor);
    let actorWithMinMovie = findActorWithMinMovie(minOfActor, objOfActor);
    return findObjectOfActorWithMin(actorWithMinMovie, bondFilms);

}

function createArrayOfActor(arrayOfObjects) {
    let arrayOfActor = [];
    for (let i = 0; i < arrayOfObjects.length; i++) {
        arrayOfActor.push(arrayOfObjects[i]["actor"]);
    }
    return arrayOfActor;
}

function createObjectofActors(arrayOfActor) {
    let objOfActor = {};
    for(let i = 0; i < arrayOfActor.length; i++) {
        objOfActor[arrayOfActor[i]] = 0;
    }
    return objOfActor;
}

function repeatOfMovies(objActors, boundFilms) {
    let arrayOfNonRepeatedActor = Object.keys(objActors);
    let counter = 0;
    for (let i = 0; i < arrayOfNonRepeatedActor.length; i++) {
        for (let j = 0; j < bondFilms.length; j++) {
            if (boundFilms[j]["actor"] === arrayOfNonRepeatedActor[i]) {
                counter++;
            }
        }
        // add number of repeated actors as value for the actor(property)
        objActors[arrayOfNonRepeatedActor[i]] = counter;
        counter = 0;
    }
    return objActors;
}

function findMinActor(objActors) {
    let min = objActors[Object.keys(objActors)[0]];
   
    for(let key in objActors) {
        if(objActors[key] < min) {
            min = objActors[key];
        }
    }
    return min;
}

function findActorWithMinMovie(minOfActor, objActors) {
    //let actor ="";
    for(let key in objActors){
        if(objActors[key] === minOfActor) {
            return key;
        }
    }
}

function findObjectOfActorWithMin(actorWithMinMovie, bondFilms) {
    for(let i = 0; i < bondFilms.length; i++) {
        if(bondFilms[i]["actor"] === actorWithMinMovie) {
            return bondFilms[i];
        }
    }
}
console.log(actorWithLeastFilm(bondFilms));





