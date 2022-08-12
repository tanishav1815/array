// Find the Product.
// Write a program that takes an array as input from the user and find out the product of the elements.

// Note: You have to complete Find_Prod. No need to take any input.

const Find_Prod = (array, N) => 
{
 
  let multiple=1;
  let len=array.length;
  for(let i=0; i<len; i++){
    multiple *= array[i];
  }
  return multiple;
  
  
};
 