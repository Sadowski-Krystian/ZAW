module.exports = function(req , resp){
    resp.render('main', Meta)
}

Meta = {
    PageTitle: "Dokument Szablonowy",
    PageAuthor: "Krystian Sadowski",
    isNoun: true,
    Workers: ['Sadowski Krystian', 'Rogalski Radosław', 'Wojtek Huzar']

}