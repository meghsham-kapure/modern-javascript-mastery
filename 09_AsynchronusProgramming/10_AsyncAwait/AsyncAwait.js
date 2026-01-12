async function doSomethingAsync()
{
    setTimeout(() =>
    {
        console.log("Completed");
    }, 3000)
}
 

await doSomethingAsync();
