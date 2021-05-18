var fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
var moves = ['up', 'left', 'right', 'left', 'left']

let position = [0,0]

function streetFighterSelection(fighters, position, moves){
    let characterTrace = []
    
    let [y, x] = position

    moves.forEach(move => {
        if (move === 'up') {
            if (y === 0) {
                characterTrace.push(fighters[y][x])
            } else {
                characterTrace.push(fighters[y - 1][x])
                y -= 1
            }
        } 
        
        if (move === 'down') {
            if (y === 0) {
                characterTrace.push(fighters[1][x])
                y = 1
            } else {
                characterTrace.push(fighters[y][x])
            }
        }

        if (move === 'right') {
            if (x === fighters[y].length-1) {
                characterTrace.push(fighters[y][0])
                x = 0
            } else {
                characterTrace.push(fighters[y][x+1])
                x += 1
            }
        }

        if (move === 'left') {
            if (x === 0) {
                characterTrace.push(fighters[y][fighters[y].length-1])
                x = fighters[y].length-1
            } else {
                characterTrace.push(fighters[y][x-1])
                x -= 1
            }
        }
    })

    return characterTrace;
}
console.log(streetFighterSelection(fighters, position, moves))