const prompt = require("prompt-sync")();

const input = prompt("Enter age: ");

if (input === "") 
    {
    console.log("No input entered");
}
else if (isNaN(input)) 
    {
    console.log("Not a number");
}
else
     {
    let age = Number(input);

    if (age < 0)
         {
        console.log("cannot be negative.");
    }
    else if (age >= 18)
         {
        console.log("Eligible");
    }
    else
         {
        console.log("Not eligible");
    }
}