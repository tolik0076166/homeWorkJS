function createSum() {
    let sum = 0; 
    
    return function(num) {
      sum += num;
      return sum;
    }
  }
  
  let sum = createSum();
  
  console.log(sum(3));   
  console.log(sum(5));   
  console.log(sum(20)); 