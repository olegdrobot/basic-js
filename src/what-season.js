const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

     if (date == undefined){
    return ('Unable to determine the time of year!');
    }
    if((date.getTime()=='Invalid Date')){ throw new Error('THROWN')}
    else {
        switch (date.getMonth()){
            case 11:
            case 0: 
            case 1:
            //console.log('winter');
            return 'winter';
            break;

            case 2:
            case 3: 
            case 4:
            //console.log('spring');
            return 'spring';
            break;

            case 5:
            case 6: 
            case 7:
            //console.log('summer');
            return 'summer';
            break;

            case 8:
            case 9: 
            case 10:
            //console.log('autumn');
            return 'autumn';
            break;
        }
    }
};
