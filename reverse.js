//loops //reverse of string
const prompt=require("prompt-sync")();
let str =prompt("enter a sentence = ");

function reverse(str) 
{
    let rev = ""; // empty new string
    for (let i = str.length - 1; i >= 0; i--) 
    {
        rev = rev + str[i];
    }
    return rev;
}

console.log("reverse = "+ reverse(str));