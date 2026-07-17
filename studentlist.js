// student marks list using arrays
const prompt = require("prompt-sync")();
console.log("   students marks list ");

let marks=[23,54,87,20,94,20,77]; //array for marks
console.log("marks = "+ marks); //displays marks of students in array

function addmarks(marks,value1) //adding elements function
{
    marks.push(value1);  // .push() allows to add new elements 
                           //at the end of array
}


function removemarks(marks, value) 
{
 for (let i = 0; i < marks.length; i++)
         {
    if (marks[i] === value) 
            {
            marks.splice(i, 1);
            i--; 
            }
    }
}


function avgmarks(marks)
{
let sum =0;
let average=0;
for (let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}
average=sum/marks.length ;
return average;
}


function highestmarks(marks)
{
let highest=marks[0];

for (let i=0;i<marks.length;i++)
{
    if (marks[i]>highest)
    {
        highest=marks[i];
    }
}
return highest;
}
let pass=marks.filter(function(x)
{
    return x>=40;
});
console.log("passed = "+pass);

let fail=marks.filter(function(y)
{
return y<40;
}
);
console.log("failed = "+fail);

removemarks(marks, 20);
console.log("removed marks = "+marks);

addmarks(marks,40);
console.log("added marks = "+marks);

console.log("highest = "+highestmarks(marks));
console.log("average marks = "+avgmarks(marks));

