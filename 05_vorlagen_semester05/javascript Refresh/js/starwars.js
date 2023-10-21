const app = document.getElementById('app');
const buttons = document.getElementById('buttons');
const baseurl = "https://swapi.dev/api/";

// init buttons
function initButtons() {
    fetch(baseurl)
    .then(response => response.json())
    .then(data => {
        //add a button for each property
        for (const property in data) {
            const button = document.createElement('button');
            button.innerText = property;
            button.addEventListener("click", function () {
                //call function to get data
                app.innerHTML = "";
                getData(property);
            });
            button.classList.add("button", "is-primary");
            //append button to app
            buttons.appendChild(button);
            //add space
            buttons.appendChild(document.createTextNode(" "));
        }
    })
    .catch(error => console.log(error));
}


// Listener DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    //init buttons
    initButtons();
});

// get data
function getData(property){
    console.log(property);
    fetch(baseurl + property)
    .then(response => response.json())
    .then(data => {
        //create a list with the names
        const list = document.createElement('ul');
        //clear list
        for (const item of data.results) {
            const li = document.createElement('li');
            li.innerText = item.name;
            list.appendChild(li);
        }
        //append list to app
        app.appendChild(list);
    }
    )
    .catch(error => {
        console.log(error);

    })
}
