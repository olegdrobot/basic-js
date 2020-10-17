const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

let str = [];
if (typeof members!='object' || members==null) {return false;}

    for (let i=0; i<members.length; i++){
        if (typeof members[i] =='string') {
           
            if (members[i][0]!=' ') {
                str.push(members[i][0].toUpperCase());    
            }
            else {
                k=0;
                while(members[i][k]==' '){
                    k++;
                }
                str.push(members[i][k].toUpperCase());  
            }
            
          
        }
        
      
    }
      
     if (str==0) {return false;}
     return str.sort().join('');
};
