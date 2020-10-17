const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	tabula=[];

  constructor (direct = true){
		this.direction=direct;
		for(let i=65; i<=90; i++){
		this.tabula[i]=[];
		for (let j=65; j<=90; j++){
			this.tabula[i][j]=0;
		}
		}

		let k=65;
		for(let i=65; i<=90;i++){
			for(let j=65; j<=90; j++){
				this.tabula[i][j]=k;
				k++;
				if (k==91) {k=65;}
			}
			k++;
		}

		}

  encrypt(str, key) {
    let arrMessage=[];
		arrMessage=str.toUpperCase().split('');
		key=key.toUpperCase();

		let arrTemp=[];
		
		let k=0;
		for (let i=0; i<arrMessage.length; i++){
			if (arrMessage[i].charCodeAt(0)>=65 && arrMessage[i].charCodeAt(0)<=90){
				arrTemp[i]=key[k];	
				k++;
			} else {
				arrTemp[i]=arrMessage[i];
				
			}
			
			if (k==key.length) {
				k=0;
				
			}
		}
	
		let encrMess=[];
		
		for (let i=0; i<arrTemp.length; i++){
			if (arrTemp[i].charCodeAt(0)>=65 && arrTemp[i].charCodeAt(0)<=90){
				encrMess[i]=String.fromCharCode(this.tabula[arrTemp[i].charCodeAt(0)][arrMessage[i].charCodeAt(0)]);
				
			} else {
				encrMess[i]=arrTemp[i];
			}
		}

		if (this.direction==true) {return encrMess.join('');}
		else {return encrMess.reverse().join('');}
   } 
    
  decrypt(str, key) {
  	let arrMessage=[];
 		arrMessage=str.toUpperCase().split('');
    	key=key.toUpperCase();

   		let arrTemp=[];
  		let k=0;
		for (let i=0; i<arrMessage.length; i++){
			if (arrMessage[i].charCodeAt(0)>=65 && arrMessage[i].charCodeAt(0)<=90){
				arrTemp[i]=key[k];	
				k++;
			} else {
				arrTemp[i]=arrMessage[i];
			
			}
		
			if (k==key.length) {
				k=0;
			
			}
		}

		let decMess=[];
			for (let i=0; i<arrTemp.length; i++){
			if (arrTemp[i].charCodeAt(0)>=65 && arrTemp[i].charCodeAt(0)<=90){
				decMess[i]=String.fromCharCode(this.tabula[arrTemp[i].charCodeAt(0)].indexOf(arrMessage[i].charCodeAt(0)));
		
			} else {
				decMess[i]=arrTemp[i];
			}
		}
		if (this.direction==true) {return decMess.join('');}
    	else {return decMess.reverse().join('');}
   
  }
}

module.exports = VigenereCipheringMachine;
