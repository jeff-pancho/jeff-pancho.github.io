const dataElement = document.getElementById("data");
const xhttp = new XMLHttpRequest();

const API_ENDPOINT = "https://jeff-pancho-isa.herokuapp.com/COMP4537/labs/5/api/scores";
// const API_ENDPOINT = "http://localhost:5000/COMP4537/labs/5/api/scores";

xhttp.open("GET", API_ENDPOINT);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
        displayData(JSON.parse(this.responseText).msg);
    }
}

const displayData = (data) => {
    if (typeof data === "string") {
        dataElement.innerHTML = data;
        return;
    }

    let body = "";
    for (let i = 0; i < data.length; i++) {
        const record = data[i];
        body += `${record.name}:${record.score}<br>`;
    }
    dataElement.innerHTML = body;
};