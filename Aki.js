window.onload = function () {
	var dugme_ubaci_u_magacin=document.getElementById("submit");
    dugme_ubaci_u_magacin.addEventListener("click",ubaci_u_magacin);   
}

function AjaxZahtev(options, callback) {
    var req = new XMLHttpRequest();
    req.open(options.metod, options.putanja, true);
    req.addEventListener("load", function() {
        if (req.status < 400) {
            console.log(req);
            callback(req.responseText);
        }
        else {
            callback(new Error("Request failed: " + req.statusText));
        }
    });
    req.addEventListener("error", function() {
        callback(new Error("Network error"));
    });     
    req.send(options.zadatak || null);
}





function ubaci_u_magacin() {
    var up = document.querySelector('#up').value;
    var uk = document.querySelector('#uk').value;
    var uc = document.querySelector('#uc').value;

    if($("#up").val() == "" || $("#uk").val() == "" || $("#uc").val() == ""){
        alert("Popunite sva polja !");
        return false;
    }
    var options = {};
    options.metod = "post";
    options.putanja = "/magacin";
    var slanje = { 
        'up': up,
        'uk': uk,
        'uc': uc
    };
    options.zadatak = JSON.stringify(slanje); 
    AjaxZahtev(options, odgovorServera); 
    var up = document.querySelector("#up").value = '';
    var uk = document.querySelector("#uk").value = '';
    var uc = document.querySelector("#uc").value = '';
    alert('Ubaceno u magacin');
    }

 
 function ubaci_u_div(){
    var options={};
    options.metod="post"
    options.putanja="/ucitaj_zadatke";
    var slanje={
        'up':'',
        'uk':'',
        'uc':''
    };
    options.zadatak=JSON.stringify(slanje);
    AjaxZahtev(options,odgovorServera);
}

function odgovorServera(odgovor) {
    
    odgovor = JSON.parse(odgovor);
    
    console.log(odgovor);
    var proizvod = JSON.parse(odgovor.sadrzaj);
    console.log(proizvod.up);
    
    var html = "<i class='fa fa-trash' onclick='brisiZadatak(this)'> Proizvod: " + proizvod.up + " Kolicina: "+ proizvod.uk + " Mera:"+ proizvod.uc + "<br></i>";
    
    console.log(html);

    $("#zadatak_prikazi").append(html);
    
    }

function brisiZadatak(sta){
    sta.style.display="none";
    sta.nextElementSibling.style.display="none";
    up = sta.nextElementSibling.innerHTML;
    var options = {};
    options.metod = "post";
    options.putanja = "brisanje";
    var brisi={
        "up" : unesi_proizvod
    };
    options.up = JSON.stringify(brisi);
    AjaxZahtev(options,brisanje);
}

function brisanje(odgovor){
    alert(odgovor);
}

