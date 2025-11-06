//const submitContactBtn = document.getElementById('submitContactBtn');

function confirmContact(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameValue = nameInput ? nameInput.value : "";
    const emailValue = emailInput ? emailInput.value : "";
    const messageValue = messageInput ? messageInput.value : "";

    const confirmMessageDiv = document.getElementById('confirmMessage');
    let outputMessage = "";

    if (nameValue === "") {
        outputMessage = 'Please enter your name.';
    }
    else if (emailValue === "") {
        outputMessage = 'Please enter your email address.';
    }
    else if (messageValue === "") {
        outputMessage = 'Please enter a message.';
    }
    else {
        outputMessage = '<p>Thank you for contacting us! We will be in touch shortly.</p>';
    }

    if (outputMessage !== "") {
        confirmMessageDiv.innerHTML = outputMessage;
    }
}

//submitContactBtn.addEventListener('click', confirmContact);

function searchKeyword() {
    const searchinput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const keyword = searchInput.value ? searchInput.value.toLowerCase() : "";

    switch (keyword) {
        case "country":
        case "countries":
        case "beach":
        case "beaches":
        case "temple":
        case "temples":
            fetch('./travel_recommendation_api.json')
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                if (keyword === "country" || keyword === "countries") {
                    const countries = data.countries;
                    for (i = 0; i < countries.length && i < 2; i++) {
                        const country = countries[i];
                        const cities = country.cities;
                        const city = cities[0];
                        resultDiv.innerHTML += "<br>"
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<h2>${city.name}</h2>`;
                        resultDiv.innerHTML += `<p>${city.description}</p>`;
                    }
                } else if (keyword === "beach" || keyword === "beaches") {
                    const beaches = data.beaches;
                    for (i = 0; i < beaches.length && i < 2; i++) {
                        const beach = beaches[i];
                        resultDiv.innerHTML += "<br>"
                        resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                        resultDiv.innerHTML += `<p>${beach.description}</p>`;
                    }
                }
                else if (keyword === "temple" || keyword === "temples") {
                    const temples = data.temples;
                    for (i = 0; i < temples.length && i < 2; i++) {
                        const temple = temples[i];
                        resultDiv.innerHTML += "<br>"
                        resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="hjh">`;
                        resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                        resultDiv.innerHTML += `<p>${temple.description}</p>`;    
                    }
                }
                else {
                    resultDiv.innerHTML = 'There are no results matching the keyword.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = 'An error occurred while fetching data.';
            });
            break;

        default:
            resultDiv.innerHTML = 'There are no results matching the keyword.';
            break;
    }
}

function clearSearchResults() {
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');
    searchInput.value = '';
    resultDiv.innerHTML = '';
}

//searchBtn.addEventListener('click', searchKeyword);
document.addEventListener("DOMContentLoaded", function () {
        const submitContactBtn = document.getElementById('submitContactBtn');
        if (submitContactBtn) {
            submitContactBtn.addEventListener('click', confirmContact);
        }

        const searchBtn = document.getElementById("searchBtn");
        if (searchBtn) {
            searchBtn.addEventListener("click", searchKeyword);
        }

        const clearSearchBtn = document.getElementById('clearSearchBtn');
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener("click", clearSearchResults)
        }
    });
  