const prompt =require("prompt-sync")();
let grade =prompt("enter your marks = ");
//grade calculator
//using if else
    if (grade==="")
    {
        console.log("no input");
    }
    else
    {
        let n=Number(grade);

if (isNaN(n))
{
    console.log("numbers only");
}

else if (n > 100 || n < 0)
{
    console.log("error");
}
else if (n >= 90)
{
    console.log("A");
}
else if (n >= 80)
{
    console.log("B");
}
else if (n>= 70)
{
    console.log("C");
}
else if (n>= 60)
{
    console.log("D");
}
else if (n >= 50)
{
    console.log("E");
}
else
{
    console.log("F");
}
    }