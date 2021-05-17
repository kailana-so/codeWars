// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// split the words into an array or word on the space
// check if the str conatins a number... using regex? probably easiest.
// use the number as a key and the word as a value
// if it doesnt just return staight out with an empty str
// then grab your new object and pull out the values, join them and return them

function order(words){
    const isInt = /\d/
    const orderedWords = {}

    words.split(' ').forEach(word => {
        if (isInt.test(word)) {
            word.split('').forEach(char => {
                if (char <= 9) {
                    orderedWords[char] = word
                } else {
                    return ""
                }
            })
        }
    })

    return Object.values(orderedWords).join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))
console.log(order(""))