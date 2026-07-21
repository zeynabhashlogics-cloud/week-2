const days=["mon","tues","wednes","thurs","fri"];
const day = days.map(function(x)
{
    return x + "day";
});
console.log("original array = "+ days);
console.log("new array = " +day);

const numbers=[2,5,7,8,9,1];
const num=numbers.map(function(y)
{
    return y+4;
}
);
console.log("original = "+numbers);
console.log("new = "+num);




