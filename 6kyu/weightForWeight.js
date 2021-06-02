// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

function orderWeight(strng) {

    let orderedStrng = {}
    strng === '' ? '' : strng.split(' ').sort().forEach(num => {
        // make keys
        let key = num.split('').reduce((acc, idx) => Number(acc)+ Number(idx))   

        orderedStrng[key] ? orderedStrng[key].push(num) : orderedStrng[key] = [num]
    })
    return Object.values(orderedStrng).toString().split(',').join(' ')
    
}
console.log(orderWeight("103 132 123 4444 4444 99 2000"))
console.log(orderWeight(""))
