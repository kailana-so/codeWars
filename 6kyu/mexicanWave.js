// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// take a string and spit it into the words
// the index of the word will become the index of the capital letter in the word

// Take the word and count the letters
// for each letter push the word to a new arr
// for each word slice the word at the index in the new arr
// transform that letter to uppercase 
// join the front and back of the word and push to transformed arr
// return transformed arr



function wave(str){

    let words = []
    let mexicanWave = []

    str.split('').forEach(char => {
        words.push(str)
    });

    for (var i = 0 ; i < words.length ; i++){

        let slicedAtIndex = str
			.slice(0, i) + str
			.charAt(i)
			.toUpperCase() + str
			.slice(i+1)

        str[i] !== " " ? mexicanWave.push(slicedAtIndex) : null
    }  

    return mexicanWave
}
console.log(wave("two words"))
// ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


