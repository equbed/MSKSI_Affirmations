document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Quote 1",
        "Quote 2",
        "Quote 3",
        "Change your thoughts and you change your world.- Norman Vincent Peale",
        // Add more quotes here
    ];
    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
});
