const displayContent=(content)=>{
    output.value+=content
showResult=()=>
{
           
     try{
        output.value=eval(output.value)
        }
     catch
        {
        output.value=""
        output.placeholder="Invalid Expressions"
        }
     finally
        {
         console.log("finally block,Task completed!");
    
        }
}
clearAll=()=>
     {
        output.value=""
        output.placeholder="0"
     }
remove=()=>
    {
        output.value=output.value.slice(0,-1)
    }     
}