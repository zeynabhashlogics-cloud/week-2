const prompt =require("prompt-sync")();
let num =Number(prompt("enter your number = "));
if (isNaN(num))
{
    console.log ("error");
}
else if (num>0)
{
    console.log("positive");
}
else if (num<0)
{
    console.log("negative");
}
else if (num==0)
{
    console.log("zero");
}