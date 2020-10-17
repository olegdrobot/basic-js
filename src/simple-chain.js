const CustomError = require("../extensions/custom-error");

const chainMaker = {
   chainArr: [],
  getLength() {
    
    return this.chainArr.length;
  },

  addLink(value) {
     this.chainArr.push("( "+value+" )");
    return this;
  },

  removeLink(position) {
    if (position<0 || position>this.chainArr.length-1) {
      this.chainArr=[];
      throw new Error ('Error');  
    }
    if (typeof position == 'number'){
      for (let j=0; j<position.length; j++){
        if (position[i] == ',' || position[i] == '.'){
          this.chainArr=[];
          throw new Error ('Error');  
        }
      }
    }

    this.chainArr.splice(position-1,1);
    return this;
  },

  reverseChain() {
   this.chainArr.reverse();

    return this;
  },

  finishChain() {
    let result=this.chainArr[0];

    for(let i=1; i<this.chainArr.length; i++ ){
      result+='~~'+this.chainArr[i];
    }

    this.chainArr=[];
    return result;
  }
};

module.exports = chainMaker;
