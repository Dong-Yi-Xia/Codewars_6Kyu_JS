// You are given an array(list) strarr of strings and an integer k. Your task is to return the 
// first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".


const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"]
const k = 2

function longestConsec(strarr, k) {
  
    let size = strarr.length
    if (size===0 || k > size || k<=0) return ""
  
    let word = ""
    for (let i = 0; i < strarr.length; i++){
        let s = strarr.slice(i, i+k)
        if(s.length !== k) break
        let currentWord = s.join("")
        if(currentWord.length > word.length){
            word = currentWord
        }
    }
    return word
}

console.log(longestConsec(strarr,k))




// function longestConsec(strarr, k) {
//     let longest = "";
//     for(let i=0;k>0 && i<=strarr.length-k;i++){
//       let tempArray = strarr.slice(i,i+k);
//       let tempStr = tempArray.join("");
//       if(tempStr.length > longest.length){
//         longest = tempStr;
//       }
//     }
//     return longest;
// }