//AGE ELIGIBILITY
//if else conditions
const prompt =require("prompt-sync")();

let num =Number(prompt("enter your number = "));
if (isNaN(num))           //isNaN is a built in function
                        // check if it is not a number
{
    console.log ("not a num");
}
else if (num<=0)
{
    console.log("error");
}
else if (num>=18)
{
    console.log("eligile");
}
else if (num<18)
{
    console.log("not eligible");
}
