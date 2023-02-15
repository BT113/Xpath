
document.getElementById("category").addEventListener("click", Mcategory)
document.getElementById("title").addEventListener("click", Mtitle)
document.getElementById("price").addEventListener("click", Mprice)
document.getElementById("year").addEventListener("click", Myear)
document.getElementById("company").addEventListener("click", Mcompany)
document.getElementById("title_shooter").addEventListener("click", Tshooter)
document.getElementById("year_aventure").addEventListener("click", Yaventure)
document.getElementById("price_rpg").addEventListener("click", Prpg)
document.getElementById("game_platform").addEventListener("click", Gplatform)
document.getElementById("games_activision").addEventListener("click", Gactivision)

function Mcategory() {
    show1(xhttp.responseXML);
}

function Mtitle() {
    show2(xhttp.responseXML)
}

function Mprice() {
    show3(xhttp.responseXML);
}

function Myear() {
    show4(xhttp.responseXML);
}

function Mcompany() {
    show5(xhttp.responseXML);
}

function Tshooter() {
    show6(xhttp.responseXML);
}

function Yaventure() {
    show7(xhttp.responseXML);
}

function Prpg() {
    show8(xhttp.responseXML);
}

function Gplatform() {
    show9(xhttp.responseXML);
}

function Gactivision() {
    show10(xhttp.responseXML);
}

var xhttp = new XMLHttpRequest();


xhttp.open("GET", "gamestore.xml", true);
xhttp.send();

function show1(xml) {
    var txt = "";
// not(.=preceding::*)
    path = "//category[not(.=preceding::*)] "
    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }
}


function show2(xml) {
    var txt = "";
    path = "/gamestore/game/title"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show3(xml) {
    var txt = "";
    path = "/gamestore/game/price"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show4(xml) {
    var txt = "";
    path = "/gamestore/game/year"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show5(xml) {
    var txt = "";
    path = "/gamestore/game/company"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show6(xml) {
    var txt = "";
    path = "/gamestore/game[@category='Shooter']/title"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show7(xml) {
    var txt = "";
    path = "/gamestore/game[@category='Platform']/year"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show8(xml) {
    var txt = "";
    path = "/gamestore/game[@category='RPG']/price"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show9(xml) {
    var txt = "";
    path = "//game[@category='Platform']/*"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}
function show10(xml) {
    var txt = "";
    path = "/gamestore/game[company='Activision']/title"

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        while (result) {
            txt += result.childNodes[0].nodeValue + "<br>";
            result = nodes.iterateNext();
        }

        document.getElementById("demo").innerHTML = txt;
    }

}