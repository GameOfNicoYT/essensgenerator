let liste = ['Fritatensuppe', 'Palatschinken', 'Leberknödlsuppe', 'Nudelsuppe', 'Rahmsuppe', 'Carbonara', 'Nudelauflauf', 'Wrap', 'Schnitzel', 'Gordon Bleu', 'Spaghetti', 'Grilen', 'Pizza', 'Lasange', 'Gulasch', 'Burger', 'Gebratene Kartoffeln mit Spinat und Spiegelei', 'Würstl', 'Backhendl', 'Grillhendl', 'Roast', 'Putengeschnetzeltz', 'Reisfleisch', 'Putenstreifensalat', 'Eiernudel', 'Rindschnitzl', 'Schweinsbraten', 'Leberkäse', 'Fisch', 'Faschierte Laibchen', 'Rindfleisch gekocht', 'Falsche Forelle', 'Germknödl', 'Reisauflauf', 'Kaiserschmarren', 'Scheiterhaufen', 'Mohnnudeln']
let vorspeisen = ['Fritatensuppe', 'Palatschinken', 'Leberknödlsuppe', 'Nudelsuppe', 'Rahmsuppe']
let hauptspeisen = ['Carbonara', 'Nudelauflauf', 'Wrap', 'Schnitzel', 'Gordon Blou', 'Spaghetti', 'Grillen', 'Pizza', 'Lasange', 'Gulasch', 'Burger', 'Gebratene Kartoffeln mit Spinat und Spiegelei', 'Würstl', 'Backhendl', 'Grillhendl', 'Toast', 'Putengeschnetzeltz', 'Reisfleisch', 'Putenstreifensalat', 'Eiernudel', 'Rindschnitzl', 'Schweinsbraten', 'Leberkäse', 'Fisch', 'Faschierte Laibchen', 'Rindfleisch gekocht', 'Falsche Forelle']
let nachspeisen = ['Germknödl', 'Reisauflauf', 'Kaiserschmarren', 'Scheiterhaufen', 'Mohnnudeln']
let restaurant = ['Sajado', 'Bohmann', 'Buschenschank', 'Heinz', 'Kellerschlössl', 'Goldino', 'McDonalds', 'Giovanni', 'Losteria']
let auswahl;
let storage;

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

function chooseDish(type) {

    storage = allStorage();

    if (type == "all") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 100;
        }
        console.log(storage)
        var max = liste.length;
        var x = Math.floor(Math.random() * max)
        while (storage.includes(x)) {
            var max = liste.length;
            var x = Math.floor(Math.random() * max)
        }
        document.getElementById("gericht").value = liste[x];
        window.localStorage.setItem(Date.now(), 100 + x)
    }
    if (type == "pre") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 200;
        }
        console.log(storage)
        var max = vorspeisen.length;
        var x = Math.floor(Math.random() * max)
        while (storage.includes(x)) {
            var max = vorspeisen.length;
            var x = Math.floor(Math.random() * max)
        }
        document.getElementById("gericht").value = liste[x];
        window.localStorage.setItem(Date.now(), 200 + x)
    }
    if (type == "main") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 300;
        }
        console.log(storage)
        var max = hauptspeisen.length;
        var x = Math.floor(Math.random() * max)
        while (storage.includes(x)) {
            var max = hauptspeisen.length;
            var x = Math.floor(Math.random() * max)
        }
        document.getElementById("gericht").value = hauptspeisen[x];
        window.localStorage.setItem(Date.now(), 300 + x)
    }
    if (type == "after") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 400;
        }
        console.log(storage)
        var max = nachspeisen.length;
        var x = Math.floor(Math.random() * max)
        while (storage.includes(x)) {
            var max = nachspeisen.length;
            var x = Math.floor(Math.random() * max)
        }
        document.getElementById("gericht").value = nachspeisen[x];
        window.localStorage.setItem(Date.now(), 400 + x)
    }
    if (type == "res") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 500;
        }
        console.log(storage)
        var max = restaurant.length;
        var x = Math.floor(Math.random() * max)
        while (storage.includes(x)) {
            var max = restaurant.length;
            var x = Math.floor(Math.random() * max)
        }
        document.getElementById("gericht").value = restaurant[x];
        window.localStorage.setItem(Date.now(), 500 + x)
    }
}

