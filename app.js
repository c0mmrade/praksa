window.onload = function () {
  var dugmeDodajZadatak = document.querySelector("#button");
  dugmeDodajZadatak.addEventListener("click", dodajZadatak);

  var dugmeUcitajZadatke = document.querySelector("#button1");
  dugmeUcitajZadatke.addEventListener("click", ucitajZadatke);
}

function AjaxZahtev(options, callback) {
  var req = new XMLHttpRequest();
  req.open(options.metod, options.putanja, true);
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(req.responseText);
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.addEventListener("error", function () {
    callback(new Error("Network error"));
  });
  req.send(options.zadatak || null);
}

function dodajZadatak() {
  /*
		prikupljamo podatke koje je korisnik uneo
	*/
  var text = document.querySelector("#text").value;
  var text1 = document.querySelector("#text1").value;
  var text2 = document.querySelector("#text2").value;
  var text3 = document.querySelector("#text3").value;

  var options = {};
  options.metod = "post";
  options.putanja = "novi-zadatak";
  var slanje = {
    text: text,
    text1: text1,
    text2: text2,
    text3: text3,
  };
  options.zadatak = JSON.stringify(slanje);
  AjaxZahtev(options, odgovorServera);

  var text = (document.querySelector("#text").value = "");
  var text1 = (document.querySelector("#text1").value = "");
  var text2 = (document.querySelector("#text2").value = "");
  var text3 = (document.querySelector("#text3").value = "");
}

function ucitajZadatke() {
  var options = {};
  options.metod = "post";

  options.putanja = "button1";

  var slanje = {
    text: "",
    text1: "",
    text2: "",
    text3: "",
  };
  options.text = JSON.stringify(slanje);
  AjaxZahtev(options, odgovorServera);
}

function odgovorServera(odgovor) {
  odgovor = JSON.parse(odgovor);
  //console.log(odgovor);
  zadaci = [];
  for (var i = 0; i < odgovor.length; i++) {
    zadaci.push(JSON.parse(odgovor[i]));
  }

  var prikazi = document.querySelector("#zadatak-prikazi");
  prikazi.innerHTML = "";

  for (var i = 0; i < zadaci.length; i++) {
    console.log(zadaci[i])
      prikazi.innerHTML +=
        "<p><span class='dugme-code' onclick='brisiZadatak(this)'>&#128465;</span><span>" + " Naziv proizvoda: " +zadaci[i].text + " Serijski broj: "+ zadaci[i].text1 + " Kategorija:"+zadaci[i].text2 +  "</span></p>";
    
  }
}

function brisiZadatak(sta) {
  sta.style.display = "none";

  sta.nextElementSibling.style.display = "none";

  zadatak = sta.nextElementSibling.innerHTML;
  var options = {};
  options.metod = "post";
  options.putanja = "brisanje";

  var brisi = {
    text: text,
    text1: text1,
    text2: text2,
    text3: text3,
  };
  options.zadatak = JSON.stringify(brisi);
  AjaxZahtev(options, brisanje);
}

function brisanje(odgovor) {
  alert(odgovor);
}
