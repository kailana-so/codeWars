// Digit Recovery
// Some letters in the input string are representing a written-out digit. Some of the letters may randomly shuffled. Your task is to recover them all.

// Note that:

// Only consecutive letters can be used. "OTNE" cannot be recovered to 1!
// Every letter has to start with an increasing index.. "ONENO" results to 11, because the E can be used two times. Endless loops are not possible!
// If there are letters in the string, which don't create a number you can ignore them.
// If no digits can be found, return "No digits found"
// Take care about the order! "ENOWT" will be recovered to 12 and not to 21.
// The input string consists only UpperCase letters
// e.g.
// recover("NEO") =>  "1"
// recover("ONETWO") => "12"
// recover("ONENO") => "11"
// recover("TWWTONE") => "21"
// recover("ZYX") => "No digits found"
// recover("NEOTWONEINEIGHTOWSVEEN") => "12219827"


// use a for loop to iterate the length of the input str
// use Object.keys to get an array of each key in the obj 'alph'
// split the str and the key so you have an array from each
// slice each array starting at the index (iteration from 0 to end of arr) and moving through the full length of the arr 
// at each iteration of the slice, sort both key and str arrays in a->b order allowing the sliced arrays to form matches. ie. ONE becomes ENO and NEO also become ENO
// on each instance of an array match push the value of the corresponding key to the tempKeyArr 
// finally grab the tempKeyArr and check if it's true - it will only be false if the array is empty ie. cannot be joined
// join each true array and return it

function recover(str){
    const alph = {"ZERO":0,"ONE":1,"TWO":2,"THREE":3,"FOUR":4,"FIVE":5,"SIX":6,"SEVEN":7,"EIGHT":8,"NINE":9};

    let tempKeyArr = []

    for(let i = 0; i < str.length; i++) {
        Object.keys(alph).forEach((key, value) => {

            if (str.slice(i, i + key.length).split('').sort().join('') === key.split('').sort().join('')) {
                tempKeyArr.push(value)
            }
        })
    }
    if (tempKeyArr.join('')) {
        return tempKeyArr.join('')
    } else {
        return "No digits found"
    }
}


console.log(recover("ONE"))
console.log(recover("TWO"))
console.log(recover("NEO")) // =>  "1"
console.log(recover("ONETWO")) // => "12"
console.log(recover("ONENO")) // => "11"
console.log(recover("TWWTONE")) // => "21"
console.log(recover("ZYX")) //  => "No digits found"
console.log(recover("NEOTWONEINEIGHTOWSVEEN")) //  => "12219827"