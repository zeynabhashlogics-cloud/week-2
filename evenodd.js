const prompt = require("prompt-sync")();

const input = (prompt("enter = ")); //enter any input

if (input ==="")
{
    console.log("no input entered");
}
if (isNaN(input))
{
    console.log("not a number");
}
let num=Number(input);
if (num)
{
if (num %2 === 0)
{
    console.log("even");
}
else
    {
    console.log("odd");
}
}


