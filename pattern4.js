for (let i=0;i<=8;i++)
{
    let r="";
    for (let j=0;j<=8;j++)
    {
        if( (i+j) %2 === 0)
        {
            r=r + " # ";
        }
        else
            r=r + " $ ";
    }
    console.log(r);
}