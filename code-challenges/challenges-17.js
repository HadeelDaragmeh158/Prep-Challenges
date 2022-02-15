'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
// 
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//


// function recursion(num, val) {
//     let x = [], y = [];
//  let found;
//      x.push(num);
//     found =x.indexOf(-4);
//      if (num == x[0])
//          return x;
//          if (found !=-1 )
//          {return x.push(recursion(num + val, val));
//          console.log(x);}
//      else
//          {
//              return  x.push(recursion(num - val, val));
//              console.log(x);
//         }
//  }
const recursionPattern = (int1, int2) => {
    // write your code here.
    // let x = [], y ;
    // let found = x.find(element => element = -4);
    // x.push(int1);
    // y=int1-int2;
    // let i=(x.length)-1;
    // x.push(y);
    // i++;
    // while (x[0]!=x[i]) {
    //     if (found != -1)
    //   {x.push(int1 + int2);i++;}
    //    x.push(int1 - int2);i++;
       
    // }
    // return x;
}
// const recursionPattern = (int1, int2) => {
//     // write your code here.
//     let x = [], y = [];

//     let f=x.find(element => element = -4);

//     x.push(int1);
//     y = recursion(int1 - int2, int2,f,x);
//     return x;
// }
// function found(x)
// {
//     for (let i=0;i<x.length;i++)
//     {
//         if (x[i]==-4)
//         return i;

//     }
//     return  

// }

// function recursion(num, val,f,x) {


//       if (num == x[0]) { 
//           x.push(num); 
//           return x;
//        } 
//       if (f != -1) {
//           x.push(num);
//           return recursion(num + val, val);
//       }
//       else {
//           x.push(num);
//           return recursion(num - val, val);
//       }
//   }
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    // write your code here
    let position = str.indexOf("www.");
    let positionCom = str.indexOf(".com", position);
    let positionOrg = str.indexOf(".org", position);
    let positionNet = str.indexOf(".net", position);
    let substr;
    if (positionCom != -1)
        substr = str.substring(position, positionCom + 4);
    else if (positionOrg != -1)
        substr = str.substring(position, positionOrg + 4);

    else if (positionNet)
        substr = str.substring(position, positionNet + 4);
    return substr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    // write your code here
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };