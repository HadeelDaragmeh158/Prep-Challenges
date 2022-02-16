'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1


const wordLength = (str) => {
    // write your code here
    let newArr = str.split(" ");
    let idx =Math.floor(newArr.length/2);
    return newArr[idx].length;
    
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false
function letArr(arr){
    let larr=[];
    for (let i=0;i<50;i++)
    larr[i]=0;
    return larr;
}
function cidx(char)
{
    return parseInt(char,36)-9;
}
function ff(s,larr){
    for (let i=0;i<s.length;i++){
        larr[cidx(s[i])]++;
    }
    return larr;
}
const wordLetters = (str1, str2) => {
    // write your code here
        let fr=letArr();
        let fr2=letArr();

        fr=ff(str1,fr);
        fr2=ff(str2,fr2);

        for (let i=0; i<50;i++)
        if (fr[i]!=fr2[i])
        return false ;
        return true;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
//  The function returns the index of the integer in the array
//  If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    for (let i=0;i<arr.length;i++)
    {
        if (int == arr[i])
        return i;
        else if(int >arr[i] )
        continue; 
        else if (int <arr[i])
        return i;
    }
}

// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };