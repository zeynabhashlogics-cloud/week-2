// vowel count
//loops
const prompt=require("prompt-sync")();
let sentence =prompt("enter a sentence = ");
let count =0;

console.log("vowels are = ");
for (let i=0;i<sentence.length;i++)
{
    let ch=sentence[i].toLowerCase(); //converts alphabets to lowercase
                                    //if there are any in upper case
    if (ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u")
    {
        count++;
        console.log(ch);
    }
}
console.log("vowel count is = " + count);

