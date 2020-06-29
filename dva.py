import http.server, os, json
BaseHandler = http.server.BaseHTTPRequestHandler

odgovor = [] 

class Handler(BaseHandler):
    def _set_headers(self, type):
        self.send_response(200)
        self.send_header('Content-type', type)
        self.end_headers()
    def do_GET(self):
        filename = self.path.split("/")[-1]
        if filename == "" : filename = "Projekat.html"
        if os.access(filename, os.R_OK) and not os.path.isdir(filename):
            ext = filename.split(".")[-1]                      
            mode = "r"
            if ext in ["html","htm"]: content_type = "text/html"
            elif ext in ["txt","js","py","php"]: content_type = "text/plain"
            elif ext in ["css"]: content_type = "text/css"
            elif ext in ["ico","jpg","jpeg","png","gif"]:
                content_type = "image/x-icon"
                mode = "rb"
            content = open(filename, mode).read()
            if mode == "r": content = str.encode(content)
            self._set_headers(content_type)
            self.wfile.write(content)
        else:
            odgovor = {"metod":"GET", "path": self.path, "sadrzaj": ""}
            self._set_headers("text/json")
            self.wfile.write(str.encode(str(odgovor)))
    def do_POST(self): 
        putanja = self.path # dobijamo koju je putanju poslao js
        metod = self.command # dobijamo koja je motoda koriscena
       
        if putanja == '/novi-zadatak':
            duzina_sadrzaja = int(self.headers['Content-Length']) # dobijamo duzinu sadrzaja
            sadrzaj = self.rfile.read(duzina_sadrzaja).decode("utf-8") # duzinu sadrzaja pretvaramo u podatke citljive coveku
            odgovor.append(sadrzaj) # ubacujemo podatke u listu odgovor
            self._set_headers("text/json") # server salje text ili json
            self.wfile.write(str.encode(json.dumps(odgovor))) # json.dumps(odgovor) pretvara listu odgovor u string i takavog ga salje korisniku u js
            print(odgovor)
        if putanja == '/button1':
            self._set_headers("text/json") 
            self.wfile.write(str.encode(json.dumps(odgovor))) 
            print(odgovor)
        if putanja == '/brisanje':
            duzina_sadrzaja = int(self.headers['Content-Length'])
            sadrzaj = self.rfile.read(duzina_sadrzaja).decode("utf-8")
            for i in range(len(odgovor)): 
                if odgovor[i] == sadrzaj:
                    del odgovor[i]
                    break
            self._set_headers("text/json") 
            text = "Uspesno obrisano"
            self.wfile.write(str.encode(text)) 
try:
    #pokretanje servera
    httpd = http.server.HTTPServer(('',8888), Handler)
    print("Server startovan...port: 8888")
    httpd.serve_forever()
except:
    print("Server stopiran")
