// Good vs Evil
// take each string
// split them
// reduce both arrays
// find which array is greater 
// Return "Battle Result: Good triumphs over Evil" if good wins, 
// "Battle Result: Evil eradicates all trace of Good" if evil wins, 
// or "Battle Result: No victor on this battle field" if it ends in a tie.
const good = '1 1 1 1 1 1'
const evil = '1 1 1 1 1 1 1'

function goodVsEvil(good, evil) {
    const goodValues = [1,2,3,3,4,10]
    const evilValues = [1,2,2,2,3,5,10]
    
    
    const goodTotal = good.split(' ').reduce((acc, warlord, idx) => 
      acc + (warlord * goodValues[idx]), 0)
    
    const evilTotal = evil.split(' ').reduce((acc, warlord, idx) => 
      acc + (warlord * evilValues[idx]), 0)
    
    // console.log(goodTotal)
    // console.log(evilTotal)
    
    if (goodTotal > evilTotal) {
      return 'Battle Result: Good triumphs over Evil'
    } else if (goodTotal < evilTotal) {
      return 'Battle Result: Evil eradicates all trace of Good'
    } else {
      return 'Battle Result: No victor on this battle field'
    }
}
  
console.log(goodVsEvil(good, evil))
