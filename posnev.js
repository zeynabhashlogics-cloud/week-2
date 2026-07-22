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
    let numb = Number(input);

    if (numb >0)
         {
        console.log("positive");
    }
    else if (numb ===0)
         {
        console.log("zero");
    }
    else
    {
        console.log("negative");
    }
}