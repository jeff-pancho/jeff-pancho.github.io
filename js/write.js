const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const feedback = document.getElementById("feedback");
const xhttp = new XMLHttpRequest();

const API_ENDPOINT = "https://jeff-pancho-isa.herokuapp.com/COMP4537/labs/5/api/createScore";
// const API_ENDPOINT = "http://localhost:5000/COMP4537/labs/5/api/createScore";

const submit = () => {
    const score = parseInt(scoreInput.value);
    if (isNaN(score)) { 
        feedback.innerHTML = "Score must be a number";
        return;
    }

    xhttp.open("POST", API_ENDPOINT);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(
        new URLSearchParams({
            name: nameInput.value,
            score: scoreInput.value,
        })
    );
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            feedback.innerHTML = JSON.parse(this.responseText).msg;
        }
    }
}