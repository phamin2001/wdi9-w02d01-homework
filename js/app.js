// Homework W0201

// 1. Data types

// A light switch that can be either on or off:
// boolean
let key = true; // when switch is on
let key = false; // when wswitch is off

// A user's email address.
// using String
let email = "amin@ph.io";

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// array
let spaceshipList = [hull, "laser blasters", "tractor beam", "warp drive"];

// A list of student names from our class.
// array or object
let lisOfStudents = ["amin", "nick", "anna", "james"];

// A list of student names from our class, each with a location.
// object with array of objects as its properties
const strudentsDetails = {
    student: [{
        name: "amin",
        location: "Bouder"
    },
    {
        name: "jack",
        location: "Denver"

    }]
}

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// object with array of object as its properties each containing name and location and
// array of a list of favorite tv shows

const strudentsWithMoreDetails = {
    student: [{
        name: "amin",
        location: "Bouder",
        favTvShow: ["mad men", "friends", "x-files"]
    },
    {
        name: "jack",
        location: "Denver",
        favTvShow: ["scobar", "breaking bad", "lsot"];
    }]
}