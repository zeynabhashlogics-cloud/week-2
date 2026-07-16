const prompt =require("prompt-sync")();
//check if even or odd
//using if else
const num =Number(prompt("enter your number = "));
if (isNaN(num))
{
    console.log("not a number");
}
else if (num%2==0)
{
    console.log("even");
}
else if (num%2!=0)
{
    console.log("odd");
}
