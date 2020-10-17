const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let array = [];
    let flag=false;
    let k=0;
    
    for (let i=0; i<arr.length; i++){
       
       
       array.push(arr[i]);
      
        if (typeof arr[i] =='string') {
           
           if(arr[i]=='--double-next'){
             if (i!=arr.length-1){
               array.pop();
                array.push(arr[i+1]);
             } 
             else {
               array.pop();
             }
                

          
            }

           if(arr[i]=='--discard-prev'){
               if (flag==false && i!=0) {
                 array.pop(arr[i]);
                  array.pop(arr[i-1]);
                
               }
               else{
                 array.pop(arr[i]);
                 flag=false;  
               }
               
                
            }


            if(arr[i]=='--double-prev'){
              if (flag==false && i!=0) {
                array.pop(arr[i]);
                array.push((arr[i-1]));
               
              }
              else {
                array.pop(arr[i]);
                  flag=false;
                  
              }
              
            
            }

            if(arr[i]=='--discard-next'&& i!=arr.length-1){
               array.pop();
                i++;
                flag=true;
                k=2;

               


            }
            if (arr[i]=='--discard-next'&& i==arr.length-1){
              array.pop();
            }
            
        }
        if (k!=0){
          k--;
          if (k==0) {flag=false;}
        }
         
    }
    return array;
};
