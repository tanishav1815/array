// Birthday Game

// Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by 
// A
// [
// i
// ]
// . 

// She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month 
// M
//  and the sum of the integers on the squares is equal to his birthday 
// D
// . 

// You must determine how many ways she can divide the chocolate.

function Birthday_Game(arr,D ,M) {
 
    a=0;
    for (i=0;i<=arr.length-M;i++){
      sum=0;
      for (j=0;j<M;j++){
        sum=sum+arr[i+j];
      }
      if (sum===D){
        a++;
      }
    }
    return a;
 }
 