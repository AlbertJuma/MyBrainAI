// === Rotating Quotes ===
const quotes = [
  "“The best way to predict the future is to invent it.” – Alan Kay",
  "“Success is not in what you have, but who you are.” – Bo Bennett",
  "“AI is not the future — it's the present. The future is how we guide it.”",
  "“In a world of automation, creativity becomes your superpower.”",
  "“Don’t wait for opportunity. Create it with code.”"
];

let currentQuote = 0;
const quoteBox = document.getElementById("quote");

function updateQuote() {
  quoteBox.textContent = quotes[currentQuote];
  currentQuote = (currentQuote + 1) % quotes.length;
}

// Start rotating every 6 seconds
setInterval(updateQuote, 6000);
updateQuote(); // Show first quote immediately

// === AI Button Handler ===
const aiButton = document.getElementById("ai-button");

if (aiButton) {
  aiButton.addEventListener("click", () => {
    alert("🚀 Coming soon: AI features will go here!");
  });
}

