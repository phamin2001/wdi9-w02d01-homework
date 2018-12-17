// Homework W0201

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