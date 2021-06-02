// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
    return a.filter(numA => !b.includes(numA))
}

console.log(arrayDiff([],[1]))
console.log(arrayDiff([1,2],[1])) // [2]
console.log(arrayDiff([1,2,2,2,3],[2])) // [1,3]
console.log(arrayDiff([1,2,3],[1,2])) // [3]


// function arrayDiff(a, b) {
//     let filterArr = b.length === 1 ? a.filter(numA => numA != b) : a.filter(numA => !b.includes(numA))
//     return a == '' || b == '' ? a : filterArr
// }

// function arrayDiff(a, b) {

//     let filterArr = () => {
//         if (b.length === 1) {
//             return a.filter(numA => numA != b)
//         } else {
//             return a.filter(numA => !b.includes(numA))
//         }
//     }

//     return a == '' || b == '' ? a : filterArr(a,b)
// }