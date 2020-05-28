let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let runnersAge = 18;

if (runnersAge > 18 && earlyReg) {
 raceNumber += 1000;
}

if (runnersAge > 18 && earlyReg) {
  console.log (`Your  will be racing at 9:30 am.\n  your race number is ${raceNumber}`)
}
else if (runnersAge > 18 && !earlyReg) {
  console.log (`Late adultes will race at 11:00 am.\n your race number is ${raceNumber}.`)
 }

else if (runnersAge < 18) {
  console.log (`Youth registrants run at 12:30 pm. \n your race number is ${raceNumber}.`)
}

else  {
  console.log ('See the registration desk.')
}
