const fetchData = () => {
    fetch("https://script.google.com/macros/s/AKfycbwnTDdba6QxrNVwSOWKDGK3j_dxjPwv0bQu9mfpJYvpAP3GK-p635mAhoR289rgPIP3jQ/exec/")
        .then(response => response.json())
        .then(data => displayQuote(data))
}

const displayQuote = data => {
    const quoteElement = document.getElementById("quote");
    quoteElement.innerText = data.quote;
}

// display quote when refresh a page
fetchData();

// generate new when btn click
document.getElementById("btn-generate").addEventListener("click", fetchData);
