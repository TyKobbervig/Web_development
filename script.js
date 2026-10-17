function getCookingTips() {
    return [
        "Spread the peanut butter first for easier assembly!",
        "Use fresh bread for the best sandwich texture.",
        "Keep ingredients organized before starting.",
        "Clean up as you go while cooking."
    ];
}

function chooseRandomTip(tips) {
    const index = Math.floor(Math.random() * tips.length);
    return tips[index];
}

function displayTip(message) {
    document.getElementById("message").textContent = message;
}

function handleButtonClick() {
    const tips = getCookingTips();
    const selectedTip = chooseRandomTip(tips);

    displayTip(selectedTip);
}

function setupEventListeners() {
    document
        .getElementById("recipeBtn")
        .addEventListener("click", handleButtonClick);
}

setupEventListeners();