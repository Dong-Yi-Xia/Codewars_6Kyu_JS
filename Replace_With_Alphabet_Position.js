// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");



const text = "The narwhal bacons at midnight."


function alphabetPosition(text) {
    text = text.toUpperCase()
    let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let abcMap = {}
    let count = 1
    for(let i = 0; i < alp.length; i++){
      abcMap[alp[i]] = count
      count++ 
    }
    
    let word = []
    for(let i = 0; i<text.length; i++){
      if(abcMap[text[i]] ){
          word.push( abcMap[text[i]] )
        }
    }
  
    
    return word.join(" ");
  }



// function alphabetPosition(text) {
//     return text
//       .toUpperCase()
//       .match(/[a-z]/gi)
//       .map( (c) => c.charCodeAt() - 64)
//       .join(' ');
//   }