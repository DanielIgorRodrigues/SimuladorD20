function rollD20() {
    return Math.floor(Math.random() *20) + 1;
};

document.getElementById("botao-rolar").addEventListener("click", function() {
    const result = rollD20();
    document.getElementById("resultado").textContent = `Resultado: ${result}`;
});