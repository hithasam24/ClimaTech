let publicSupport = 100;
let budget = 1000;
let energyMix = "Fossil Fuels";

document.getElementById("build-solar").addEventListener("click", function() {
    if (budget >= 300) {
        budget -= 300;
        publicSupport += 10;
        energyMix = "Solar Energy";
        updateGameInfo("Built a Solar Farm! Public support increased.");
    } else {
        updateGameInfo("Not enough budget to build a Solar Farm.");
    }
});

document.getElementById("build-wind").addEventListener("click", function() {
    if (budget >= 400) {
        budget -= 400;
        publicSupport += 15;
        energyMix = "Wind Energy";
        updateGameInfo("Built a Wind Turbine! Public support increased.");
    } else {
        updateGameInfo("Not enough budget to build a Wind Turbine.");
    }
});

document.getElementById("community-outreach").addEventListener("click", function() {
    if (budget >= 200) {
        budget -= 200;
        publicSupport += 5;
        updateGameInfo("Conducted Community Outreach! Public support increased.");
    } else {
        updateGameInfo("Not enough budget for Community Outreach.");
    }
});

document.getElementById("next-turn").addEventListener("click", function() {
    publicSupport -= 5; // Simulate public support decrease each turn
    updateGameInfo("End of turn. Public support decreased.");
});

function updateGameInfo(message) {
    document.getElementById("public-support").innerText = publicSupport;
    document.getElementById("budget").innerText = budget;
    document.getElementById("energy-mix").innerText = energyMix;
    document.getElementById("messages").innerText = message;

    // Check for game over conditions
    if (publicSupport <= 0) {
        alert("Game Over! Public support has fallen to zero.");
        resetGame();
    }
}

function resetGame() {
    publicSupport = 100;
    budget = 1000;
    energyMix = "Fossil Fuels";
    updateGameInfo("Game reset. Good luck!");
}
