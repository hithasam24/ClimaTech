const energySources = [
    { name: "Solar Energy", benefit: "Renewable and sustainable energy source" },
    { name: "Wind Energy", benefit: "Reduces electricity bills" },
    { name: "Hydro Energy", benefit: "Reduces reliance on fossil fuels" },
    { name: "Geothermal Energy", benefit: "Provides constant energy supply" },
];

let score = 0;
let timer;
let timeLeft = 30;
let selectedEnergy = null;
let remainingPairs;

function startGame() {
    score = 0;
    timeLeft = 30;
    selectedEnergy = null;
    remainingPairs = [...energySources]; // Create a copy of the energy sources for the game
    document.getElementById("score").textContent = `Score: ${score}`;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}`;
    document.getElementById("end-message").textContent = "";
    document.getElementById("instructions").textContent = "Select a renewable energy source and match it with its benefit!";
    
    renderEnergySources();
    renderBenefits();
    
    timer = setInterval(updateTimer, 1000);
}

function renderEnergySources() {
    const energySourceContainer = document.getElementById("energy-sources");
    energySourceContainer.innerHTML = "";
    remainingPairs.forEach(source => {
        const card = createCard(source.name, handleEnergySelection);
        energySourceContainer.appendChild(card);
    });
}

function renderBenefits() {
    const benefitsContainer = document.getElementById("benefits");
    benefitsContainer.innerHTML = "";
    const shuffledBenefits = shuffle([...remainingPairs.map(source => source.benefit)]);
    shuffledBenefits.forEach(benefit => {
        const card = createCard(benefit, handleBenefitSelection);
        benefitsContainer.appendChild(card);
    });
}

function createCard(text, onClick) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = text;
    card.onclick = () => onClick(card.textContent);
    return card;
}

function handleEnergySelection(energy) {
    selectedEnergy = energy;
    document.getElementById("instructions").textContent = `You selected ${energy}. Now, select the matching benefit!`;
}

function handleBenefitSelection(benefit) {
    if (!selectedEnergy) {
        alert("Please select an energy source first!");
        return;
    }
    
    const selectedPair = remainingPairs.find(source => source.name === selectedEnergy);
    if (selectedPair.benefit === benefit) {
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
        remainingPairs = remainingPairs.filter(source => source.name !== selectedEnergy);
        document.getElementById("instructions").textContent = `Correct! ${selectedEnergy} matched with its benefit.`;
    } else {
        document.getElementById("instructions").textContent = `Wrong match. Try again!`;
    }

    selectedEnergy = null;
    
    if (remainingPairs.length === 0) {
        endGame();
    } else {
        renderEnergySources();
        renderBenefits();
    }
}

function updateTimer() {
    timeLeft--;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
    }
}

function endGame() {
    document.getElementById("instructions").textContent = "";
    document.getElementById("end-message").textContent = `Time's up! Your final score is: ${score}`;
    document.getElementById("energy-sources").innerHTML = "";
    document.getElementById("benefits").innerHTML = "";
    clearInterval(timer);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.getElementById("start-btn").onclick = startGame;