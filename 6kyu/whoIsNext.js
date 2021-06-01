/// this is not my solution!

function whoIsNext(names, r){
    r = r - 1 // make r strat at the first position of 0

    let firstInLine = null
    
    while (r >= names.length) {
        firstInLine = r - names.length
        r = Math.floor(firstInLine/2)
    }
    console.log(names)
    return names[r]
  }


console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)) // "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 2)) // "leonard"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)) // "Penny"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)) // "Leonard"