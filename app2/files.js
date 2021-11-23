const fs = require('fs')
const { create } = require('hbs')
let data = null
const fileName = 'dataset.json'
const codepage = 'utf-8'
try{
    fs.readFile(fileName, codepage, function(err, cont){
        if(err){
            console.log("błąd odczytu pliku");
        }else{
            try{
                data = JSON.parse(cont)
                console.log(data);
            }catch(err){
                console.log("Błąd struktury");
                console.log(err);
                console.log("koniec komunikatu");
            }
        }
    })
}catch(err){
    console.log("Błąd odczytu pliku");
    console.log(err);
    console.log("koniec komunikatu");
}
const newTextFile = "tekst.txt"
fs.writeFile(newTextFile, 'dane testowe', (err)=>{
    if(err){
        console.log("problem z zapisem");
    }else{
        console.log("zapisane");
    }
})

const txt = fs.readFileSync("odczyt.txt", codepage)
console.log("data: "+ txt);

