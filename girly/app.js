window.onload = function () {
	var dugmeSnimiBlog = document.querySelector('#snimi-blog');
	dugmeSnimiBlog.addEventListener('click', posaljiPodatke);

	viewBlogs();
}

function AjaxZahtev(options, callback) {
    var req = new XMLHttpRequest();
    req.open(options.metod, options.putanja, true);
    req.addEventListener("load", function() {
        if (req.status < 400) {
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

function posaljiPodatke() {
	var naslov = document.querySelector('#naslov').value;
	var tekst = document.querySelector('#tekst').value;
	var autor = document.querySelector('#autor').value;

	var options = {};
    options.metod = "post";
    options.putanja = "dodaj-blog";
    var blog = {
        "naslov": naslov,
        "tekst": tekst,
        "autor": autor
    };
    options.zadatak = JSON.stringify(blog);
    AjaxZahtev(options, uspesnoDodatBlog);
}

function uspesnoDodatBlog(odgovor) {
	document.querySelector('#naslov').value = '';
	document.querySelector('#tekst').value = '';
	document.querySelector('#autor').value = '';
	alert('Uspesno dodat blog.');
}

function viewBlogs() {
	var options = {};
    options.metod = "post";
    options.putanja = "view-blogs";
    var blog = {
        'view': true
    };
    options.zadatak = JSON.stringify(blog);
    AjaxZahtev(options, prikaz);
}

function prikaz(blogs) {
	var blogs = JSON.parse(blogs);

	var html = '<div class="row single-blog"><div class="col-xl-12 col-lg-12 single-blog__text" style="text-align: justify;text-justify: inter-word;">';
	for(var i = 0; i < blogs.length; i++) {
		html += '<h2>' + blogs[i].naslov + '</h2>';
		html += '<p>' + blogs[i].tekst + '</p>';
		html += '<p>' + blogs[i].autor + '</p><hr>';
	}
	html += '</div></div>';

	document.querySelector('#prikaz-bloga').innerHTML = html;
}