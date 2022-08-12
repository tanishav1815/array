// Find the Sum.
// Write a program which takes an array as input from the user and find out the sum of the array elements.

// Note: You have to complete Find_Sum. No need to take any input.

const Find_Sum = (array, N) => 
{
   let sum=0;
  let len=array.length;
  for(let i=0; i<len; i++){
    sum += array[i];
  }
  return sum;
};