const csv = require('node-csv')
const fs = require('fs')
const cp = csv.createParser('\t', '"', '\\')
cp.parse("1,10,'Abc', 'DEF'", (err, data)=>{
    console.log(data);
    saveCsv("SCP.csv", data)
})
function saveCsv(newTextFile, dane){
    fs.writeFile(newTextFile, dane, (err)=>{
        if(err){
            console.log("problem z zapisem");
        }else{
            console.log("zapisane");
        }
    })
}