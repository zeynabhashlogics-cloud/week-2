// vowel count
//loops
const prompt=require("prompt-sync")();
let sentence =prompt("enter a sentence = ");
let count =0;
if (sentence  ==="")
{
    console.log("no input");
}
else if (Number(sentence))
{
    console.log("error");
}
else
{
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
}

