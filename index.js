const userName = prompt("Enter your Username:")
console.log("Welcome, "+userName+"!")
let range = [1,2]
let lvl = 1;
let point=0;
function rangeInc(arr){
    let x=Number(arr.slice(-1))+1
    arr.push(x)
}
function startGame(range){
    let userGuess = prompt("Enter a decimal number between "+range[0].toPrecision(2)+" and "+range[range.length-1].toPrecision(2))
    let comGuess = Math.random().toFixed(1) + range[0];
    if(userGuess==comGuess){
        lvl++
        point++
        console.log("You have "+ point +" points")
        console.log("Congratulations! You have advanced to level "+lvl)
        rangeInc(range);
        startGame(range);
    }
    else{
        console.log("Wrong Number, Try Again!")
        startGame(range)
    }
}
startGame(range)