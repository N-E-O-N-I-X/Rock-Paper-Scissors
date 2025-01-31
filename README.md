# ROCK PAPER SCISSORS
## :fist: :hand: :v:
### *This game was created using educational content by [__SuperSimpleDev__](https://github.com/SuperSimpleDev)*

_______
## [![Website](https://github.com/N-E-O-N-I-X/Rock-Paper-Scissors/blob/main/images/page.jpg)](https://n-e-o-n-i-x.github.io/Rock-Paper-Scissors/) 

### About game
  ```
  This is the most common rock paper scissors game in its classic version, but you will be playing with a computer.
  ```
   The part of the code below makes your move and the computer's move random :see_no_evil:

  ```
  function pickComputerMove () {

  let computerMove = '';
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } 
  else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;

}
  ```
  
#### To start playing this masterpiece you can

+ Click on buttons 
  + :fist:
  + :hand:
  + :v:
+ Use your keyboard
  + Click `r` to choose :fist:
  + Click `p` to choose :hand:
  + Click `s` to choose :v:
+ Click on button `"Auto Play"`

## Enjoy your time :heart:
> You can also suppurt me by reward with your :star:
