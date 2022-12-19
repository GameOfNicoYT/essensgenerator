let liste = ['Fritattensuppe', 'Palatschinken', 'Leberknödlsuppe', 'Nudelsuppe', 'Rahmsuppe', 'Spaghetti Carbonara', 'Nudelauflauf', 'Wrap', 'Schnitzel', 'Cordon Bleu', 'Spaghetti Bolognese', 'Grilen', 'Pizza', 'Lasange', 'Gulasch', 'Burger', 'Gebratene Kartoffeln mit Spinat und Spiegelei', 'Würstl', 'Backhendl', 'Grillhendl', 'Toast', 'Putengeschnetzeltz', 'Reisfleisch', 'Putenstreifensalat', 'Eiernudel', 'Rindschnitzl', 'Schweinsbraten', 'Leberkäse', 'Fisch', 'Faschierte Laibchen', 'Rindfleisch gekocht mit Apfelkren', 'Falsche Forelle', 'Germknödl', 'Reisauflauf', 'Kaiserschmarren', 'Scheiterhaufen', 'Mohnnudeln']
let vorspeisen = ['Kürbiscremesuppe', 'Fritattensuppe', 'Leberknödlsuppe', 'Nudelsuppe', 'Rahmsuppe']
let hauptspeisen = ['Spaghetti Carbonara', 'Nudelauflauf', 'Wrap', 'Schnitzel', 'Gordon Blou', 'Spaghetti Bolognese', 'Grillen', 'Pizza', 'Lasange', 'Gulasch', 'Burger', 'Gebratene Kartoffeln mit Spinat und Spiegelei', 'Würstl', 'Backhendl', 'Grillhendl', 'Toast', 'Putengeschnetzeltz', 'Reisfleisch', 'Putenstreifensalat', 'Eiernudel', 'Rindschnitzl', 'Schweinsbraten', 'Leberkäse', 'Fisch', 'Faschierte Laibchen', 'Rindfleisch gekocht mit Apfelkren', 'Falsche Forelle']
let nachspeisen = ['Germknödl', 'Reisauflauf', 'Kaiserschmarren', 'Scheiterhaufen', 'Mohnnudeln']
let restaurant = ['Sajado', 'Bohmann', 'Buschenschank', 'Heinz', 'Kellerschlössl', 'Goldino', 'McDonalds', 'Giovanni', 'Losteria']
let auswahl;
let storage;


function cookieRead() {
    let cookie = document.cookie.split(";")
    let cookieIDs = []
    for (x in cookie) {
        cookieIDs.push(cookie[x].replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").replace(" ", "").slice(58))
    }
    return cookieIDs
}

let tries = 0

function expireDate(x) {
    let today = new Date()
    let expire = new Date(today)
    expire.setDate(today.getDate() + 3)
    let timeExpire = expire.toLocaleString("en-US", { weekday: "short" }) + ", " + expire.toLocaleString("en-US", { day: "numeric" }) + " " + expire.toLocaleString("en-US", { month: "short" }) + " " + expire.getFullYear() + " " + expire.getHours() + ":" + expire.toLocaleString("en-US", { minute: "2-digit", }) + ":" + expire.toLocaleString("en-US", { second: "2-digit" }) //2019-12-9 10:30:15
    console.log(x + "" + " expires=" + timeExpire)
    document.cookie = today + "=" + x + "; expires= " + timeExpire
}

function chooseDish(type) {

    let savedCookies = cookieRead()
    let tries = 0
    storage = savedCookies;

    // document.cookie = (x , "expires=" + )

    if (type == "all") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 100;
        }
        console.log(storage)
        var max = liste.length;
        var x = Math.floor(Math.random() * max)
        while (storage.includes(x) || tries < 5) {
            var max = liste.length;
            var x = Math.floor(Math.random() * max)
            tries++
            if (tries > 5) {
                chooseDishNoCookie(type)
            }
        }
        document.getElementById("gericht").value = liste[x];
        window.localStorage.setItem(Date.now(), 100 + x)
        expireDate(x + 100)
        console.log(x)
        console.log(tries)
        tries = 0;
    }
    if (type == "pre") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 200;
        }
        console.log(storage)
        var max = vorspeisen.length;
        var x = Math.floor(Math.random() * max)
        while (storage.includes(x) || tries < 5) {
            var max = vorspeisen.length;
            var x = Math.floor(Math.random() * max)
            tries++
            if (tries > 5) {
                chooseDishNoCookie(type)
            }
        }
        document.getElementById("gericht").value = vorspeisen[x];
        window.localStorage.setItem(Date.now(), 200 + x)
        expireDate(x + 200)
        console.log(x)
        console.log(tries)
        tries = 0;

        if (type == "main") {
            for (i = 0; i < storage.length; i++) {
                storage[i] = storage[i] - 300;
            }
            console.log(storage)
            var max = hauptspeisen.length;
            var x = Math.floor(Math.random() * max)
            while (storage.includes(x) || tries < 5) {
                var max = hauptspeisen.length;
                var x = Math.floor(Math.random() * max)
                tries++
                if (tries > 5) {
                    chooseDishNoCookie(type)
                }
            }
            document.getElementById("gericht").value = hauptspeisen[x];
            window.localStorage.setItem(Date.now(), 300 + x)
            expireDate(x + 300)
            console.log(x)
            console.log(tries)
            tries = 0;
        }
        if (type == "after") {
            for (i = 0; i < storage.length; i++) {
                storage[i] = storage[i] - 400;
            }
            console.log(storage)
            var max = nachspeisen.length;
            var x = Math.floor(Math.random() * max)
            while (storage.includes(x) || tries < 5) {
                var ma
                x = nachspeisen.length;
                var x = Math.floor(Math.random() * max)
                tries++
                if (tries > 5) {
                    chooseDishNoCookie(type)
                }
            }
            document.getElementById("gericht").value = nachspeisen[x];
            window.localStorage.setItem(Date.now(), 400 + x)
            expireDate(x + 400)
            console.log(x)
            console.log(tries)
            tries = 0;
        }
        if (type == "res") {
            for (i = 0; i < storage.length; i++) {
                storage[i] = storage[i] - 500;
            }
            console.log(storage)
            var max = restaurant.length;
            var x = Math.floor(Math.random() * max)
            while (storage.includes(x) || tries < 5) {
                var max = restaurant.length;
                var x = Math.floor(Math.random() * max)
                tries++
                if (tries > 5) {
                    chooseDishNoCookie(type)
                }
            }
            document.getElementById("gericht").value = restaurant[x];
            window.localStorage.setItem(Date.now(), 500 + x)
            expireDate(x + 500)
            console.log(x)
            console.log(tries)
            tries = 0;
        }
    }
}

function chooseDishNoCookie(type) {

    let savedCookies = cookieRead()

    storage = savedCookies;

    // document.cookie = (x , "expires=" + )

    if (type == "all") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 100;
        }
        console.log(storage)
        var max = liste.length;
        var x = Math.floor(Math.random() * max)
        document.getElementById("gericht").value = liste[x];
        window.localStorage.setItem(Date.now(), 100 + x)
        expireDate(x + 100)
        console.log(x)
        console.log(tries)
        tries = 0;
    }
    if (type == "pre") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 200;
        }
        console.log(storage)
        var max = vorspeisen.length;
        var x = Math.floor(Math.random() * max)
        document.getElementById("gericht").value = vorspeisen[x];
        window.localStorage.setItem(Date.now(), 200 + x)
        expireDate(x + 200)
        console.log(x)
        console.log(tries)
        tries = 0;
    }
    if (type == "main") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 300;
        }
        console.log(storage)
        var max = hauptspeisen.length;
        var x = Math.floor(Math.random() * max)
        document.getElementById("gericht").value = hauptspeisen[x];
        window.localStorage.setItem(Date.now(), 300 + x)
        expireDate(x + 300)
        console.log(x)
        console.log(tries)
        tries = 0;
    }
    if (type == "after") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 400;
        }
        console.log(storage)
        var max = nachspeisen.length;
        var x = Math.floor(Math.random() * max)
        document.getElementById("gericht").value = nachspeisen[x];
        window.localStorage.setItem(Date.now(), 400 + x)
        expireDate(x + 400)
        console.log(x)
        console.log(tries)
        tries = 0;
    }
    if (type == "res") {
        for (i = 0; i < storage.length; i++) {
            storage[i] = storage[i] - 500;
        }
        console.log(storage)
        var max = restaurant.length;
        var x = Math.floor(Math.random() * max)
        document.getElementById("gericht").value = restaurant[x];
        window.localStorage.setItem(Date.now(), 500 + x)
        expireDate(x + 500)
        console.log(x)
        console.log(tries)
        tries = 0;
    }
}

function cookieClear() {
    window.localStorage.clear();
    window.open('/index.html', '_self')
    deleteAllCookies()
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}