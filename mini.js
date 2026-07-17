const prompt =require("prompt-sync")();
//task manager
//id
//title
//status
//priority
let tasks=[ ];

//function 1
function addtask(tasks,id,title,stat,priority)
{ //reusable add function
    tasks.push(
        {
            id:id,
            title:title,
            status:stat,
            priority:priority
        }
    );
}
addtask(tasks,1,"dusting","pending","high");
addtask(tasks,2,"washing","incomplete","medium");
addtask(tasks,3,"cleaning","pending","low");
addtask(tasks,4,"cooking","compelete","medium");
console.log("/DISPLAYING ALL THE ADDED TASKS/");
console.log(tasks);

function tasklist2(tasks)
{
    console.log("/ INITIAL TASK LIST /");
}
tasklist2(tasks);
console.log(tasks);

//function 2
function updatetask(tasks,key, val, newkey, newval)
{
    for (let i = 0; i < tasks.length; i++)
    {
        if (tasks[i][key] === val)
        {
            tasks[i][newkey] = newval;
        }
    }
}
console.log("/UPDATING TASKS/");
updatetask(tasks,"id",3,"id",7);
console.log(tasks);

//function 3
function filtertasks(tasks, key, val)
{
    return tasks.filter(function(task)
    {
        return task[key] === val ;
    });
}
let f1 = filtertasks(tasks,"status","pending");
let f2 = filtertasks(tasks,"priority","medium");
let f3=filtertasks(tasks,"id",2);
console.log("/DISPLAYING ALL THE FILTERED TASKS/");
console.log(f1);
console.log(f2);
console.log(f3);


//function 4
function deletetask(tasks,key,val)
{
    for (let i=0;i<tasks.length;i++)
    {
        if (tasks[i][key]==val)
        {
        tasks.splice(i,1);
    i--;
        }
    }
}
console.log("/DELETING TASKS/");
deletetask(tasks,"status","pending");
console.log(tasks);

//function 5
function tasklist1(tasks)
{
console.log("/ ALL TASKS LEFT /");
}
tasklist1(tasks);
console.log(tasks);


