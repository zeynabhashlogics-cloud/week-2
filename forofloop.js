let colors=['red','orange','blue','white','black'];

for (c of colors)
{
    console.log(c);
}

for (col of colors)
{
    if (col==='white')
        break;
    else 
        console.log(col);
}