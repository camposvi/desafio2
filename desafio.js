let sortedNumber, currentRound, x
let player = [7, 10, 15, 1, 30, 2, 8, 9, 13]
let numerosBingo = []
/*const bingo = embaralhar([1, 2, 3, 4, 5])
bingo = [3, 5, 1, 2, 4]
bingo = [4, 5, 2, 1, 3]

 const embaralhar = (arr = []) => {
    return arr;
} */

do {
    sortedNumber = Math.floor(Math.random() * 30) + 1
    if (numerosBingo.indexOf(sortedNumber) == -1) {
        numerosBingo.push(sortedNumber)
        console.log(sortedNumber)
    }
    if (player.includes(sortedNumber)) {
        console.log("O numero " + sortedNumber + " esta no bingo")
        x = player.indexOf(sortedNumber)
        player.splice(x, 1)
        console.log(player)
    }
} while (player.length)