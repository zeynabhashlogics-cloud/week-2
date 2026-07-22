
const tasks =  // array containing objects as tasks
[
    //id
    //title
    //status
    //priority

    //task 1
    { id: 1,  
      title: "prepare the quiz", 
      status: "done", 
      priority: "high" 
    },
    //task2
    { id: 2, 
      title: "go to gym", 
      status: "remaining", 
      priority: "medium" 
    },
    // task 3
    { id: 3, 
      title: "cook dinner", 
      status: "done", 
      priority: "medium" 
    }
]; 
//find
console.log("FIND");
const t1=tasks.find(function(x)
{
return x.title==="cook dinner";
});
console.log(t1);


//filter
// find all matching values
function filtering(tasks)
{
    return tasks.filter(function(x)
    {
        return x.status === "done";
    });
}

const t2 = filtering(tasks);
console.log(t2);


//map
console.log("MAP");
const t3=tasks.map(function(y)
{
    return y.id +3 ;
});
console.log(t3);
//shift //remove
console.log("SHIFT");
tasks.shift();

console.log(tasks);
 
//unshift //add
console.log ("UNSHIFT");
tasks.unshift(
  {   id: 0, 
      title: "wash dishes", 
      status: "pending", 
      priority: "low" 
    }
);

console.log(tasks);
//push //add task at the end
function addlast(tasks)
{
console.log("PUSH");
tasks.push(
  {
      id: 5, 
      title: "wash clothes", 
      status: "pending", 
      priority: "medium" 
  }
);
}
addlast(tasks);
console.log(tasks);

//pop //removes the last task
function removelast(tasks)
{
console.log("POP");
tasks.pop( );
}
removelast(tasks);
console.log(tasks);

