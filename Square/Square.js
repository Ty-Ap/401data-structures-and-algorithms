'use strict';


const squareChecker =(volume, side)=>{

    if(Math.pow(side, 3) === volume && volume >0){

    return true;

    } else {

    return false;

    };

};

module.exports = squareChecker;

