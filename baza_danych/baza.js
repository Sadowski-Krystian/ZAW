console.log('DBC');
const mysql = require('mysql')
let link = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Student123!',
    database: 'gGrades'
})

link.connect (function(err){
    if(!!err){
        console.log('Error');
    }else{
        console.log("connect");
    }
})

function get(){
    link.query('SELECT `id`, `name`, `desc` FROM documents', (err,rows,flds)=>{
        if(!!err){
            console.log('Some Error');
        }else{
            console.log(rows);
            //console.log('---------------');
            //console.log(flds);
        }
    })
}

function put(){
    let data = {id: 0, name: 'Jakiś Tytuł', desc: 'Trele Morele.net'}
    link.query('INSERT INTO documents SET ?', data, (err,res)=>{
        console.log(err);
        console.log(res);
    })
}
put()
get()
