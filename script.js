document.getElementById('sortear').addEventListener('click', function() {
    const numeros = [];
    
    while (numeros.length < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
        }
    }

    numeros.sort((a, b) => a - b);
    document.getElementById('resultado').innerText = `Números sorteados: ${numeros.join(', ')}`;
});