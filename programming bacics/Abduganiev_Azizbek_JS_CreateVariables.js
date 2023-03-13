function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
    var numberOfPieces = 12;
    var numberOfPeople = 5
    var left = numberOfPieces % numberOfPeople;

    if (numberOfPieces % numberOfPeople == 0) {
        console.log("No leftovers for you")
    }

    if (numberOfPieces % numberOfPeople == 2) {
        console.log("You have some leftovers")
    }
    
    if (left == 3 && left == 5) {
        console.log("You have leftovers to share")
    }

    if (left > 5) {
        console.log("Hold another party!")
    }
}