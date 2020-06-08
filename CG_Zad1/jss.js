
  function myFunction() {

  var text = document.getElementById("text").value;
  var i;
  var n = document.getElementById("num").value;
  var rez ="";
  for (i = 0; i <=n; i++) {
  	if(i>=20)
  	{
      alert("Unesite broj manji od 20");

       return 0;

}
    rez += text + "<br>";

  }

  document.getElementById("rezultat").innerHTML = rez;
  
}

document.getElementById("demo").innerHTML = text;
function Brisi()
{
  var text = document.getElementById("text").value;
  var i;
  var n = document.getElementById("num").value;
  var rez ="";
  for (i = 0; i <=n; i++) {

    rez += text + "<br>";
  }

  document.getElementById("rezultat").innerHTML =" ";
  }