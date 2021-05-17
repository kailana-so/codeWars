// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"




let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";


function meeting(s) {
        let formatted = []
        let toUpperCaseLastNameFirst = s.toUpperCase().split(';').map(name => name.split(':').reverse().join(', '))
        let sortedNames = toUpperCaseLastNameFirst.sort()
        sortedNames.forEach(name => formatted.push(`(${name})`))
        return formatted.join('')

}
console.log(meeting(s)) 









// changes above based on test results

// const s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";


// function meeting() {
//         let formattedStr = []
//         let upperCaseByLastName = s.toUpperCase().split(';').map(name => name.split(':').reverse().join(', '))
//         let sortedNames = upperCaseByLastName.sort()
//         sortedNames.forEach(name => formattedStr.push(`(${name})`))
//         return formattedStr.join('')

// }
// console.log(meeting(s)) 