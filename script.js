document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Affirmations/1.gif",
        "Affirmations/2.gif",
        "Affirmations/3.gif",
        "Affirmations/4.gif",
        // Add more image URLs here
    ];

    const quoteElement = document.getElementById("quote");
    const quoteImage = document.getElementById("quote-image");
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteImage.src = quotes[randomIndex];
    });
});
