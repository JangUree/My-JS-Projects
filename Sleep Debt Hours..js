const getSleepHours = (day) => {
  if (day === 'sunday'){
    return 1;
  } else if (day === 'monday'){
    return 2;
  } else if (day === 'tuesday'){
    return 8;
  } else if (day === 'wednsday'){
    return 11;
  } else if (day === 'thursday'){
    return 1;
  } else if (day === 'friday'){
    return 8;
  } else if (day === 'saturday'){
    return 8;
  }
}; 

//Get Total sleep Hours
const getActualSleepHours = () => 
getSleepHours('sunday') + getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours ('wednsday') + getSleepHours('thursday') + getSleepHours ('friday') + getSleepHours ('saturday');
// get ideal sleep hours
const getIdealSleepHours =() => {
  const idealHours = 6;
  return idealHours * 7;
};
//Calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours ();
  const moreHours = actualSleepHours  -              idealSleepHours;
  const lessHours = idealSleepHours - actualSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log ('You Made it.');
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log ('You Got more sleep Than needed.\n You slept '+moreHours+' Hours more.');
  }
  else if(actualSleepHours < idealSleepHours) {
    console.log ('You should get some rest.You slept '+lessHours+' Hours less.');
  } else {
    console.log ('Error ! somthing went wrong');
  }
};

calculateSleepDebt();