console.log ("Hello main.js");
// lots of help from adam, alumni cohort 13


const reindeerNames = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"];


// how to add the color to the reindeer
let x = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon",                                                   "Amaranth"];
    let counter = 0
    
    while (counter < colors.length) {
        yield currentColor = colors[counter]
        counter += 1  // Increment the counter
    }
}

const colorFactory = x();    

// Invoke factory function to create reindeer object, use a generator function inside of it.
const makeReindeer = function (name) {
    return Object.create(null, {
        name: {
            enumerable: true,
            value: name,
        },
        color: {
            enumerable: true,
            value: colorFactory.next().value
        },
        
        
        
    })
}


// Put new reindeer object in coloredReindeer array
let coloredReindeer = [];

// Write a for loop that looks at each reindeer
reindeerNames.forEach(reindeer => {
    coloredReindeer.push(makeReindeer(reindeer));

});



console.log(coloredReindeer);






//1. Create a new object that represents a reindeer - the object will include the reindeer's name and its color. Use a generator function to attach each of the following colors, in order, to the reindeer. Use a factory function to generate the reindeer object.

// ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

// 2.  Place each object in an array named coloredReindeer.

// // Each object produced by the factory function
// [{ "name": "Dasher", "color": "Blue" }, etc...]


//3.  Iterate over the coloredReindeer array and insert a new <section> element in the colored-reindeer element that displays the reindeer name, with a font color corresponding to the color in the object.

// <!-- Example of what your HTML should look like -->
// <article id="colored-reindeer">
//     <section style="color: Blue">Dasher</section>
//     <section style="color: Red">Dancer</section>
//     etc...
// </article>