let water = 100;
let soil = 100;
let energy = 100;
let sustainability = 0;

function updateStats() {
    document.getElementById('water').innerText = water;
    document.getElementById('soil').innerText = soil;
    document.getElementById('energy').innerText = energy;
    document.getElementById('sustainability').innerText = sustainability;
}

function plantCrops() {
    if (water > 10 && soil > 10) {
        water -= 10;
        soil -= 10;
        sustainability += 5;
        setMessage("You planted crops sustainably!");
    } else {
        setMessage("Not enough water or soil health to plant crops.");
    }
    updateStats();
}

function installSolar() {
    if (energy > 20) {
        energy -= 20;
        sustainability += 15;
        setMessage("You installed solar panels, great for sustainability!");
    } else {
        setMessage("Not enough energy to install solar panels.");
    }
    updateStats();
}

function harvestRainwater() {
    water += 15;
    sustainability += 10;
    setMessage("You harvested rainwater, conserving resources!");
    updateStats();
}

function useFertilizer() {
    if (soil > 10) {
        soil -= 20;
        sustainability -= 5;
        setMessage("You used chemical fertilizer, not sustainable!");
    } else {
        setMessage("Not enough soil health to use fertilizer.");
    }
    updateStats();
}

function setMessage(msg) {
    document.getElementById('message').innerText = msg;
}

updateStats();