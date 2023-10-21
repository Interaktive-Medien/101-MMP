// hole alle Städte von der API
holeAlleStaedte();

// prüfe, ob bereits eine Stadt im Localstorage gefunden wurde
if (localStorage.getItem("stadt") !== null) {

    console.log("Stadt in Localstorage gefunden")

    var letzteStadt = localStorage.getItem("stadt");

} else {

    console.log("Noch keine Stadt im Localstorage")

    var letzteStadt = 'bern';
}

// hole die Temperatur der Stadt
holeTemperaturStadt(letzteStadt);



function wechsleStadt(stadt) {
    localStorage.setItem("stadt", stadt);
    holeTemperaturStadt(stadt);
    updateButtonStyles();  // Call updateButtonStyles whenever a city is selected
}

// hole alle Städte, an denen AareGuru misst
function holeAlleStaedte() {
    let url = 'https://aareguru.existenz.ch/v2018/cities';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                document.querySelector("#staedte").innerHTML +=
                    "<li class='button' onclick='wechsleStadt(" + '"' + data[index].city + '"' + ")'>" +
                    data[index].name + "</li>"
            }
            updateButtonStyles();  // Call updateButtonStyles after rendering all buttons
        })
        .catch(error => console.log(error))
}
// hole die Temperatur der gewünschten Stadt
function holeTemperaturStadt(stadt) {

    let url = 'https://aareguru.existenz.ch/v2018/today?city=' + stadt;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            document.querySelector('#temperatur').innerHTML = data.aare;
            document.querySelector('#text').innerHTML = data.text;
            document.querySelector('#aktuelleStadt').innerHTML = data.name;

        })

        .catch(error => console.log(error))

}

function updateButtonStyles() {
    var buttons = document.querySelectorAll("#staedte .button");
    var storedCity = localStorage.getItem("stadt");

    buttons.forEach(button => {
        var city = button.getAttribute('onclick').match(/wechsleStadt\("(.+?)"\)/)[1];
        if (city === storedCity) {
            button.classList.add("is-primary");
        } else {
            button.classList.remove("is-primary");
        }
    });
}