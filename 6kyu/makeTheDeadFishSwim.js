// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Return the output array, and ignore all non-op characters
function parse(data) {

    let value = 0
    let parsedData = []

    data.split('').forEach(char => {
        switch(char) {
            case 'i': value++
            break
            case 'd': value--
            break
            case 's': value = value * value
            break
            case 'o': parsedData.push(value)
        }
        
    })

    return parsedData
  
}
console.log(parse("iiisdooiiiioddddso"))
// [ 8, 64 ]