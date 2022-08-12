// Min and Max

// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given 
// N
//  elements, find the minimum and maximum numbers among those elements.



function arrayMin(arr) {
    return arr.sort((a,b) => a-b)[0];
  
  }
  
  function arrayMax(arr) {
    return arr.sort((a,b)=> b-a)[0];
  
  }