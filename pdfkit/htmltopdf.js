var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('my.html', 'utf8');
var options = { format: 'A4' };

pdf.create(html, options).toFile('html-pdf.pdf', function(err, res) {
  if (err){
    console.log(err);
  } else{
    console.log(res); 
  }
  
});