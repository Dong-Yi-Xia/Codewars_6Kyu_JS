// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. Ignore capitalization 
// when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


let word = "aabbBced"

function duplicateEncode(word){
    let arr = word.toLowerCase().split("")
    let double = arr.filter((v,i,a) => {
      return a.indexOf(v) !== i
    })

    let newArr = arr.map(v => {
        return double.includes(v) ? ")" : "("
    })

   return newArr.join("")
}

console.log(duplicateEncode(word))




// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }