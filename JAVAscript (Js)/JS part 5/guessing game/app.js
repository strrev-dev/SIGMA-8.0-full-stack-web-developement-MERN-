const max = prompt("Enter the max number of the guessing game");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt('Guess the number');

while (true) {
    if (guess == 'quit') {
        console.log('you quit the game.');
        break;
    } if (guess == random) {
        console.log(`You guess the number right! congrats!!. the number was ,${random}`);
        break;
    } else if (guess < random) {
        guess = prompt('Hint : Your number is smaller than the random number.please guess again');

    } else {
        guess = prompt('Hint : Your number is larger than the random number.please guess again');
    }
    


}
