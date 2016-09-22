function reduce(reducer) {
	if(reducer && reducer.constructor != Function) {
		throw new Error('reducer must be a function');		
	}
	if(reducer.length != 2) {
		throw new Error('reducer must take 2 arguments');
	}
    if(this && this.constructor == Array) {
        if(this.length) {
            if(this.length>1 && this.length<3){
              return reducer(this[0], this[1]);
            } else if (this.length>3) {
              let result = reducer(this[0], this[1]);
              let ctr = 2;
              while(ctr < this.length){
                  result = reducer(result, this[ctr]);
                  ctr++;
              }
              return result;
            } else if(this.length == 1) {
                return this[0];
            }            
        } else {
          return null;
        }
    } else {
        throw new Error('reduce must be called on an array')
    }    
}

Array.prototype.reduce = reduce;
