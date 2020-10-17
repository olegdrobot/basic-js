const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
   let turns;
  let seconds;
  let ret='';

  turns= Math.pow(2,disksNumber) - 1;
  seconds=Math.floor(turns*3600/turnsSpeed);
  ret= '{ "turns":'+ turns+','+' "seconds":'+seconds+'}';
 
  return JSON.parse(ret);
};
