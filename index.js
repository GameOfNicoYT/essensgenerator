let liste = ['Fritatensuppe', 'Palatschinken', 'Leberknödlsuppe', 'Nudelsuppe', 'Rahmsuppe', 'Carbonara', 'Nudelauflauf', 'Wrap', 'Schnitzel', 'Gordon Bleu', 'Spaghetti', 'Grilen', 'Pizza', 'Lasange', 'Gulasch', 'Burger', 'Gebratene Kartoffeln mit Spinat und Spiegelei', 'Würstl', 'Backhendl', 'Grillhendl', 'Roast', 'Putengeschnetzeltz', 'Reisfleisch', 'Putenstreifensalat', 'Eiernudel', 'Rindschnitzl', 'Schweinsbraten', 'Leberkäse', 'Fisch', 'Faschierte Laibchen', 'Rindfleisch gekocht', 'Falsche Forelle', 'Germknödl', 'Reisauflauf', 'Kaiserschmarren', 'Scheiterhaufen', 'Mohnnudeln']
let vorspeisen = ['Fritatensuppe', 'Palatschinken', 'Leberknödlsuppe', 'Nudelsuppe', 'Rahmsuppe']
let hauptspeisen = ['Carbonara', 'Nudelauflauf', 'Wrap', 'Schnitzel', 'Gordon Blou', 'Spaghetti', 'Grillen', 'Pizza', 'Lasange', 'Gulasch', 'Burger', 'Gebratene Kartoffeln mit Spinat und Spiegelei', 'Würstl', 'Backhendl', 'Grillhendl', 'Toast', 'Putengeschnetzeltz', 'Reisfleisch', 'Putenstreifensalat', 'Eiernudel', 'Rindschnitzl', 'Schweinsbraten', 'Leberkäse', 'Fisch', 'Faschierte Laibchen', 'Rindfleisch gekocht', 'Falsche Forelle']
let nachspeisen = ['Germknödl', 'Reisauflauf', 'Kaiserschmarren', 'Scheiterhaufen', 'Mohnnudeln']
let restaurant = ['Sajado', 'Bohmann', 'Buschenschank', 'Heinz', 'Kellerschlössl', 'Goldino', 'McDonalds', 'Giovanni', 'Losteria']
let auswahl;


function alles() {
    var max = liste.length;
    var x = Math.round(Math.random() * (max - 1 - 0))
    document.getElementById("gericht").value = liste[x];

}

function pre() {
    var max = vorspeisen.length;
    var x = Math.round(Math.random() * (max - 1 - 0))
    document.getElementById("gericht").value = vorspeisen[x];
}

function mid() {
    var max = hauptspeisen.length;
    var x = Math.round(Math.random() * (max - 1 - 0))
    document.getElementById("gericht").value = hauptspeisen[x];
}

function after() {
    var max = nachspeisen.length;
    var x = Math.round(Math.random() * (max - 1 - 0))
    document.getElementById("gericht").value = nachspeisen[x];
}

function res() {
    var max = restaurant.length;
    var x = Math.round(Math.random() * (max - 1 - 0))
    document.getElementById("gericht").value = restaurant[x];
}

function personen() {
    window.open("./personen.html", '_self')
}