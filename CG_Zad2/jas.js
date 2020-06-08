function Faktorijel()
  {
  	var broj= document.getElementById("fac").value;
    var i;
   
 if (broj === 0 || broj === 1 || broj<0) {
    broj=1; 
 }
else 
{


 for (i = broj - 1; i >= 1; i--) {
    broj *= i;
   
 }
}


document.getElementById("Jovana").innerHTML=broj;
}
