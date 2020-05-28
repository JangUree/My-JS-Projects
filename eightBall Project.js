let userName = 'warm tree';
userName ? 
  console.log (`Hello, ${userName}!`) :
  console.log ('Hello!');

let userQuestion ='can I do it';
console.log ('I\'m '+ userName +' and I\'m asking '+ userQuestion +'?');

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber ) {
  case 0 : eaightBall = ('It is certain');
    break;
  case 1 : eaightBall = ('It is decidedly so');
    break;
  case 2 : eaightBall = ('Reply hazy try again');
    break;
  case 3 : eaightBall = ('Cannot predict now');
    break;
  case 4 : eaightBall = ('Do not count on it');
   break;
  case 5 : eaightBall = ('My sources say no');
    break;
  case 6 : eaightBall =console.log ('Outlook not so good');
    break;
  case 7 : console.log ('Signs point to yes');
    break;
  default : 
    eaightBall = ('sorry ! I don\'t have an answer.')
}
  console.log (eightBall);

  
