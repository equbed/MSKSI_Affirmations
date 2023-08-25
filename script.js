document.addEventListener("DOMContentLoaded", () => {
const quoteElement = document.getElementById("quote");
   const quotes = [    
      "Affirmations/1.gif",
      "Affirmations/2.gif",
      "Affirmations/3.gif",
      "Affirmations/4.gif",

     // Add more image URLs here

];
        quoteElement.innerHTML = `<img src="${imageUrl}" alt="Quote Image">`;
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
});
