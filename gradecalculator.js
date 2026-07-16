const prompt =require("prompt-sync")();
let grade =Number(prompt("enter your marks = "));
//grade calculator
//using if else
if (isNaN(grade))
{
    console.log("numbers only");
}
else if (grade > 100 || grade < 0)
{
    console.log("error");
}
else if (grade >= 90)
{
    console.log("A");
}
else if (grade >= 80)
{
    console.log("B");
}
else if (grade >= 70)
{
    console.log("C");
}
else if (grade >= 60)
{
    console.log("D");
}
else if (grade >= 50)
{
    console.log("E");
}
else
{
    console.log("F");
}