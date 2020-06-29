import http.server, os, json
BaseHandler = http.server.BaseHTTPRequestHandler

magacin=[]
class Handler(BaseHandler):
    def _set_headers(self, type):
        self.send_response(200)
        self.send_header('Content-type', type)
        self.end_headers()
    def do_GET(self):
        filename = self.path.split("/")[-1]
        if filename == "" : filename = "AleksaKomazec.html"
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
         putanja = self.path
         metod = self.command
         if putanja=='/magacin':
            duzina_sadrzaja = int(self.headers['Content-Length'])
            sadrzaj = self.rfile.read(duzina_sadrzaja).decode("utf-8")
            proizvod=json.loads(sadrzaj)
            magacin.append(proizvod)
            print(magacin)
            odgovor = {"metod":metod, "putanja":putanja , "sadrzaj": sadrzaj}
            self._set_headers("text/json")
            self.wfile.write(str.encode(json.dumps(odgovor)))
         if putanja =='/ucitaj_zadatke':
            sadrzaj = self.rfile.read(duzina_sadrzaja).decode("utf-8")
            print(magacin)
            odgovor = magacin
            self._set_headers("application/json")
            self.wfile.write(str.encode(json.dumps(odgovor)))
         if putanja == '/brisanje':
            duzina_sadrzaja = int(self.headers['Content-Length'])
            sadrzaj = self.rfile.read(duzina_sadrzaja).decode("utf-8")
            for i in range(len(magacin)): 
                if magacin[i] == sadrzaj:
                     del magacin[i]
                     break
            self._set_headers("text/json") 
            text = "Uspesno obrisano"
            self.wfile.write(str.encode(text)) 
try:
    httpd = http.server.HTTPServer(('',1111), Handler)
    print("Server startovan...port: 1111")
    httpd.serve_forever()
except:
    print("Server stopiran")
