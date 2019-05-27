lmdl()
function change()
{
    var y=document.getElementById('state').value;
 console.log(y);
    if(y=="lb_to_kg")
    {
    var x=document.getElementById("in_lb").value;
    var num;
    num = x*0.4536;
    document.getElementById("demo1").innerHTML=num;
    }
    else if(y=="kg_to_lb")
    {
        var x=document.getElementById("in_lb").value;
        var num;
        num = x*2.2046;
        document.getElementById("demo1").innerHTML=num;
    }

}
function lmdl()
{
var x=new Date(document.lastModified);
document.getElementById("demo").innerHTML=x;
}
              
