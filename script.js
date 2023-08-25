document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Affirmations/1.gif",
        "Affirmations/2.gif",
        "Affirmations/3.gif",
        "Affirmations/4.gif",
        "Affirmations/5.gif",
        "Affirmations/6.gif",
        "Affirmations/7.gif",
        "Affirmations/8.gif",
        "Affirmations/9.gif",
        "Affirmations/10.gif",
        "Affirmations/11.gif",
        "Affirmations/12.gif",
        "Affirmations/13.gif",
        "Affirmations/14.gif",
        "Affirmations/15.gif",
        "Affirmations/16.gif",
        "Affirmations/17.gif",
        "Affirmations/18.gif",
        "Affirmations/19.gif",
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
