let sentence = "The quick brown fox jumps over the lazy dog.";

// Q1 Write function that searches for a string inside the sentence above. 
//The function should return true if the string is found or false otherwise
function searchInSentence(searchTerm) {
    return sentence.includes(searchTerm);
}
console.log(searchInSentence("quick")); // Output: 4

// Q2 Write function that searches for a string inside the sentence above. 
// The function should return the index of the first occurrence of the string if the string is 
// found or -1 otherwise.

function searchInSentence(searchTerm) {
    return sentence.indexOf(searchTerm); 
}
console.log(searchInSentence("dog")); //Output: 40

// Q3 Write a function that takes a string and returns the first three characters of that string.

function firstThreeCharacters(myString) {
    return myString.substring(0, 3);
}
console.log(firstThreeCharacters(sentence)); //Output: The

// Q4 Write a function that takes a string and returns the last two characters of that string.

function lastTwoChars(myString) {
    return myString.substring(myString.length - 2);
}
console.log(lastTwoChars(sentence)); // Outputs "g."
console.log(lastTwoChars("Luke")); // Outputs "ke"

// Q5 Write a function that converts a string into an array of words where a word is any string 
// separated by a space.

function stringToArray(myString) {
return myString.split(" ");
}
console.log(stringToArray(sentence)); 
// Output:
// [
//     'The',   'quick',
//     'brown', 'fox',
//     'jumps', 'over',
//     'the',   'lazy',
//     'dog.'
//   ]

// Q6 Write a function that counts the number of times a string appears inside the sentence string above.

function howManyTImes(searchTerm){
    let count = 0; 
    let startIndex = 0;
    while (true) {
        let index = sentence.indexOf(searchTerm, startIndex); 
        if (index == -1) {
            break;
        }
        count++;
        startIndex = index +1 
    }
    return count;
}

console.log(howManyTImes("The")); // Output: 1
