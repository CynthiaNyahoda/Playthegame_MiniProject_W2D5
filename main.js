 function playTheGame() {
    const question = confirm("would you like to play the game?")
    if(!question) {
        alert("No problem, goodbye")
        return
    }
    const answer = prompt ("Enter a number")
    let numberOfTries = 0
    while (Number (answer)!= compareNumber){
        numberOfTries = numberOfTries + 1
        if (numberOfTries === 3) {
            alert("sorry, too many tries. The number was "+ computerNumber)
            return
        }
    }
    
    
    if(onlyNumbers(answer)) {
        alert("Sorry, not a number. Goodbye")
        return
    }


    if (betweenZeroAndTen(answer)) {
        alert("Sorry it's not a good number. Goodbye")
        return 
    }
    const computerNumber = randomNumber()

    while (canGameContinue()){
        compareNumbers(userNumber, computerNumber)
    }
    console.log("let the game begin")
    console.log("computerNumber:", computerNumber)
 }

function canGameContinue() {
    
}






 function onlyNumbers(str) {
    const regex = new RegExp (/^[0-9]*$/)
    return regex.test(str)
 }

 function betweenZeroAndTen(number) {
    return number >= 0 && number <= 10
 }

 function randomNumber() {
    return Math.floor(Math.random() * 11)
 }

 function compareNumbers(userNumber, computerNumber) {
    if (userNumber === computerNumber){
        alert ("WINNER")
        return
    }

    if (userNumber > computerNumber) {
        alert("Your number is bigger than the computer's, guess again")
    }
 }