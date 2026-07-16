//largest of three numbers
const prompt =require("prompt-sync")();
let num1 =Number(prompt("enter your 1st number = ")); //input no1
let num2 =Number(prompt("enter your 2nd number = ")); //input no2
let num3 =Number(prompt("enter your 3rd number = ")); //input no3
//using if else conditions
if (isNaN(num1) || isNaN(num2) || isNaN(num3))
{
    console.log("Not a number");  // if none of them is a number
                                  // prints not a number
}
else if (num1 == num2 && num2 == num3)
{
    console.log("All three numbers are equal.");
}
else if (num1 == num2 && num1 > num3)
{
    console.log(num1 + " and " + num2 + " are the largest.");
}
else if (num1 == num3 && num1 > num2)
{
    console.log(num1 + " and " + num3 + " are the largest.");
}
else if (num2 == num3 && num2 > num1)
{
    console.log(num2 + " and " + num3 + " are the largest.");
}
else if (num1>num2 &&num1>num3)
{
    console.log(num1+" is largest");
}
else if (num2>num1 &&num2>num3)
{
    console.log(num2+" is largest");
}
else if (num3>num1 &&num3>num2)
{
    console.log(num3+" is largest");
}
