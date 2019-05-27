function change()
{
    var y=document.getElementById('state').value;
 console.log(y);
    if(y=="lb_to_kg")
    {
    var x=document.getElementById("in_lb").value;
    var num;
    num = x*0.4536;
    document.getElementById("demo1").innerHTML=num+" kilograms";
    }
    else if(y=="kg_to_lb")
    {
        var x=document.getElementById("in_lb").value;
        var num;
        num = x*2.2046;
        document.getElementById("demo1").innerHTML=num+" pounds";
    }

}
function calculate() {
    var values = document.getElementById("box1").value.split(/,/g);
    var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
    document.getElementById("max").innerHTML = values.max();
    document.getElementById("min").innerHTML = values.min();
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("avg").innerHTML = sum / values.length;
    document.getElementById("reverse").innerHTML = values.reverse().join(',');
  }
  
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
              
