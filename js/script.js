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
              

  function getQuote() {
    var q1="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe";
    var q2="Java is to JavaScript what Car is to Carpet.";
    var q3="There are two ways to write error-free programs; only the third one works.";
    var quote = [q1,q2,q3];
    var num=Math.floor(Math.random()*3)
    displayQuote(quote[num]);
}
function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

function colorChange()
{
    document.getElementById("app").style.backgroundColor = "#F25959";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="Arial, Helvetica, sans-serif";

}

function colorChange1()
{
    document.getElementById("app").style.backgroundColor = "#578BF3";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="Verdana, Geneva, sans-serif";
   
}

function colorChange2()
{
    document.getElementById("app").style.backgroundColor = "#F4B35E";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="\"Times New Roman\", Times, serif";

}

function colorChange3()
{
    document.getElementById("app").style.backgroundColor = "#F680D2 ";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="Georgia, serif";
}
function capitilize()
{
    document.getElementById("textair").style.textTransform = "uppercase";

}
function clearit(){
    document.getElementById("textair").value = "";
};

function shuffel()
{
    var str = document.getElementById("textair").value;
   var array = str.split("\n");
   console.log(array);
   for (let i = array.length - 1; i > 0; i--)
    {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    document.getElementById("textair").value=array.join('\n');

}
console.log(array);

};
function reverse()
{
    var text = document.getElementById("textair").value;
    var result = text.split('\n').map(function(line) {
        return line.split(" ").reverse().join(" ");
    }).join('\n');
    document.getElementById("textair").value = result;
};
function sortInput(){
    var inputField = document.getElementById("textair");

    var lineArray = inputField.value.split('\n'); //create array of strings
    lineArray.sort(); //sort the array
    inputField.value = lineArray.join('\n'); //join it together in the output
}
function strip()
{
   var t=document.getElementById("textair").value;
   var array=t.split("\n");
   t=array.join("");
   t=t.trim();
   document.getElementById("textair").value=t;
   console.log(t);

}
function addNumbers()
{
    var t=document.getElementById("textair").value
    var count=0;
    var t=(count++)+t;
    document.getElementById("textair").value=t;
}
