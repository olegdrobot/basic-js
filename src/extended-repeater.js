const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let strResult='';
		let tempStr=String(str);
		
		if (typeof options.addition!='undefined'){
			if (typeof options.additionRepeatTimes!='undefined'){
				for (let i=0; i<options.additionRepeatTimes; i++){
					tempStr+=String(options.addition);
					
					if (typeof options.additionSeparator!='undefined' && i<=options.additionRepeatTimes-2){
						tempStr+=options.additionSeparator;
					}
					if (typeof options.additionSeparator=='undefined' && i<=options.additionRepeatTimes-2){
						tempStr+='|';
					}
				}
			}
			else {
				tempStr+=String(options.addition);
			}
		}
		
		if (typeof options.repeatTimes!='undefined'){
			for (let i=0; i<options.repeatTimes; i++) {
				strResult+=tempStr;
				if (typeof options.separator!='undefined' && i<=options.repeatTimes-2){
					strResult+=options.separator;
				}
				if (typeof options.separator=='undefined' && i<=options.repeatTimes-2){
					strResult+='+';
				}
				
			}
		}
		
		if (strResult=='') {return tempStr;}
		else {return strResult;}
  
};
  