const PDFDocument = require('pdfkit');
const fs = require('fs')
const doc = new PDFDocument({size: "B5"});

doc.pipe(fs.createWriteStream('my.pdf')); 
doc.font('Lato-Regular.ttf')
doc.image('unnamed.png', {fit: [100,100]})
doc.text("ZSE",75, 100 , {align: 'right'})
doc.text("Sadowski Krystian",doc.x, doc.y , {align: 'right'})

txt = ['Sadowski krystian', 'szkoła elektryk', 'monitor', 'komputer']

doc.list(txt, doc.x, 250)


doc.end();