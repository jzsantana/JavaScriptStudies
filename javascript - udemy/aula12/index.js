let varA = 'A';  //b
let varB = 'B';  //c
let varC = 'C';  //a

// const varD = varA

// varA = varB
// varB = varC
// varC = varD

// console.log(varA, varB, varC) // b, c, a

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC) // b, c, a
