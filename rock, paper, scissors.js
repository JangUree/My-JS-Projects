const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
     return userInput;
  }  else {  
    console.log ('Error') 
         }
};
//Computer's choice
const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0 :
      return  'rock';
    case 1: 
      return  'paper';
    case 2 :
      return  'scissors';
  }
};
//winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie.';
  } 
   if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
   if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  }
   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  }
  }
};
const playGame = () => {
  const userChoice = getUserChoice ('rock'); 
  const computerChoice = getComputerChoice ();
  console.log ('your choice is: '+ userChoice +'');
  console.log ('computer choice is: '+computerChoice +'')
  console.log (determineWinner(userChoice, computerChoice));
};
playGame();
