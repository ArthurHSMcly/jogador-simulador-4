// Variáveis do jogo
let skill = 0;
let money = 0;
let skillPerClick = 0.1;
let skillPerSecond = 0;
let moneyMultiplier = 1;

// Elementos do DOM
const skillDisplay = document.getElementById("skill");
const moneyDisplay = document.getElementById("money");
const clickBtn = document.getElementById("click-btn");

// Atualiza os valores na tela
function updateDisplay() {
    skillDisplay.textContent = skill.toFixed(1);
    moneyDisplay.textContent = money.toFixed(2);
}

// Clique principal (treino)
clickBtn.addEventListener("click", function() {
    skill += skillPerClick;
    money += 0.1 * moneyMultiplier;
    updateDisplay();
});

// Sistema de melhorias
function buyUpgrade(upgradeId) {
    const upgrades = [
        { cost: 10, effect: () => { skillPerClick += 0.1; } },  // Bola Melhor
        { cost: 100, effect: () => { skillPerSecond += 1; } },  // Treinador
        { cost: 1000, effect: () => { moneyMultiplier *= 2; } } // Agente
    ];

    const upgrade = upgrades[upgradeId - 1];

    if (money >= upgrade.cost) {
        money -= upgrade.cost;
        upgrade.effect();
        updateDisplay();
        alert("Melhoria comprada!");
    } else {
        alert("Dinheiro insuficiente!");
    }
}

// Ganho passivo (treinador)
setInterval(function() {
    skill += skillPerSecond;
    money += skillPerSecond * 0.1 * moneyMultiplier;
    updateDisplay();
}, 1000); // Atualiza a cada segundo
