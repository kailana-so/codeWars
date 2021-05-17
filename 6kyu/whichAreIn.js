// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

array1 = ["tarp", "mice", "bull"]
array2 = ["lively", "alive", "harp", "sharp", "armstrong"]


function inArray(array1, array2){
    // console.log(array1)

    tempSubArray = []
    array2.forEach(word => {
        array1.forEach(subWord => {
            if(word.includes(subWord) && !tempSubArray.includes(subWord)) {
                tempSubArray.push(subWord)
            }
        })
    })

    return tempSubArray.sort()
}
console.log(inArray(array1, array2))