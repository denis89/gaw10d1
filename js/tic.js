angular.module('ticApp').controller('TicController', TicController);

function TicController(){
  this.x = [];
  this.addd = add;
  this.adddd = addd;
  
  
  function add (){

     this.x.push('X');
    
  }  

  function addd (){

     this.x.push('X');
    
  } 
}

