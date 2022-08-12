// Higher Age


// You are given an array 
// A
//  containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 
// 18
 
// (
// 18
//  included
// )
// .

// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.


const highAge = (N, Array) => 
{
    let a = Array.filter(i => i>=18);
    return a;
};
 