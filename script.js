document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Quote 1",
        "Quote 2",
        "Quote 3",
        "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. Nelson Mandela",
        "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
        “Change your thoughts, and you change your world.- Norman Vincent Peale",
        "Success is a journey not a destination. - Ben Sweetland",
        "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
        "It always seems impossible until it's done. - Nelson Mandela",
        “Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
        "Aim for the moon. If you miss, you may hit a star. - W. Clement Stone",
        "If you cannot do great things, do small things in a great way. - Napoleon Hill",
        “Success only comes to those who dare to attempt. - Mallika Tripathi",
        “I never dreamed about success. I worked for it. - Estée Lauder",
        "If opportunity doesn't knock, build a door. - Milton Berle"
    
        // Add more quotes here
    ];

    const quoteElement = document.getElementById("quote");
    const generateButton = document.getElementById("generate-btn");

    generateButton.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    });
});

   
