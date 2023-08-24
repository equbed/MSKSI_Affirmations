document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Quote 1",
        "Quote 2",
        "Quote 3",
        "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. Nelson Mandela"

        // Add more quotes here
    ];

    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
});

   
