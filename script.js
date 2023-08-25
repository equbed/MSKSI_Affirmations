document.addEventListener("DOMContentLoaded", () => {
   const quotes = [
    "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
    "Success only comes to those who dare to attempt. - Mallika Tripathi",
    "Change your thoughts and you change your world. - Norman Vincent Peale",
    "Success is a journey not a destination. - Ben Sweetland",
    "It always seems impossible until it's done. - Nelson Mandela",
      "Goal setting is the secret to a compelling future. — Tony Robbins",
      "When we strive to become better than we are, everything around us becomes better too. — Paulo Coelho",
      "Setting goals is the first step in turning the invisible into the visible. — Tony Robbins",      
    // Add more quotes here
];
    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
});
