// Write your solution here!
// Initialize the cats array with the given values.
const cats = ["Milo", "Otis", "Garfield"];

// Destructive Functions

// Appends a cat to the end of the cats array destructively.
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Prepends a cat to the beginning of the cats array destructively.
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Removes the last cat from the cats array destructively.
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Removes the first cat from the cats array destructively.
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-Destructive Functions

// Appends a cat to the end of the cats array non-destructively.
function appendCat(name) {
    return [...cats, name];
}

// Prepends a cat to the beginning of the cats array non-destructively.
function prependCat(name) {
    return [name, ...cats];
}

// Removes the last cat from the cats array non-destructively.
function removeLastCat() {
    return cats.slice(0, -1);
}

// Removes the first cat from the cats array non-destructively.
function removeFirstCat() {
    return cats.slice(1);
}

// Exporting functions for testing purposes.
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat,
};
