const fs=require("fs");

async function napraviSampleSadrzaj(){
    fs.promises.mkdir("data:/samples/", {recursive: true})
    .then(result=>{
        console.log("Napravljeni direktorijum",result);
    })
    .catch(err=>{
        console.log("Greska prilikom pravljenja diretorijuma",err);
    });

}
napraviSampleSadrzaj();
