// pop is used to remove the last element

let tasks =[3,4,5,6,8];
tasks.pop();

//shift removes from beginning of array
//pop removes from end of array
//unshift adds to beginning of array
//push adds to end of array

tasks.shift();
tasks.unshift(7,5,6);
console.log(tasks);

//find() example 1
let animals=["cat","dog","cow","goat"];

   let ani= animals.find(function(x)
   {
    return x==="cow";
   });

console.log(ani);

//find() example 2
let words=["hello","bye","pencil","computer"];
let word =words.find(function(x)
{
    return x.length>5
});
console.log(word);

//find() example 3
let employees = [
    { name: "Ali", salary: 300 },
    { name: "Sara", salary: 600},
    { name: "Ahmed", salary: 450 }
];

let employee = employees.find(function(emp) 
{
    return emp.salary > 500;
});

console.log(employee);

// filter () example 1
let cities=["lahore","islamabad","karachi","faislabad","peshawar"];
let city = cities.filter(function(y)
{
    return y.length >6
});
console.log(city);

// filter() example 2
let numbers =[23,45,75,87,68,25,95,40,28];
let pass =numbers.filter(function(p)
{
    return p>40;
});
console.log("passed = "+ pass);

// map example 1
let nums =[2,4,6,8,9,3];
let newarr = nums.map(function(x)
{
    return x*3;
}
);
console.log("original array = "+nums);
console.log("new array = "+newarr);

