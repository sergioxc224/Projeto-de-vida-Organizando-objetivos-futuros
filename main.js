// O array de datas dos seus objetivos, mantendo os mesmos prazos
const temposObjetivos = [
    new Date("2023-10-05T00:00:00"), // Cursos na Alura
    new Date("2023-12-05T00:00:00"), // Projetos em Javascript
    new Date("2023-12-30T00:00:00"), // Criar Portfolio
    new Date("2024-02-01T00:00:00")  // Atualizar Currículo
];

/**
 * Calcula o tempo restante até a data do objetivo.
 * @param {Date} dataObjetivo A data final do objetivo.
 * @returns {number[]} Array contendo [dias, horas, minutos, segundos].
 */
function calcularDiferencaTempo(dataObjetivo) {
    const tempoAtual = new Date();
    const diferencaEmMilisegundos = dataObjetivo - tempoAtual;

    if (diferencaEmMilisegundos < 0) {
        return [0, 0, 0, 0];
    }

    let segundos = Math.floor(diferencaEmMilisegundos / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    // Usa o operador módulo (%) para obter o resto da divisão (o que sobra)
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    // Retorna os valores
    return [dias, horas, minutos, segundos];
}

/**
 * Adiciona um zero à esquerda se o número for menor que 10.
 * @param {number} numero O valor de tempo (dias, horas, etc.).
 * @returns {string} O valor formatado.
 */
function formatarDigito(numero) {
    return numero < 10 ? "0" + numero : numero.toString();
}

/**
 * Atualiza os contadores na interface.
 */
function renderizarContadores() {
    for (let i = 0; i < temposObjetivos.length; i++) {
        const [dias, horas, minutos, segundos] = calcularDiferencaTempo(temposObjetivos[i]);
        
        // Atualiza os elementos HTML usando os IDs
        document.getElementById("dias" + i).textContent = formatarDigito(dias);
        document.getElementById("horas" + i).textContent = formatarDigito(horas);
        document.getElementById("min" + i).textContent = formatarDigito(minutos);
        document.getElementById("seg" + i).textContent = formatarDigito(segundos);
    }
}

/**
 * Inicia o cronômetro, atualizando a cada segundo.
 */
function iniciarCronometro() {
    renderizarContadores(); // Atualiza imediatamente ao carregar
    setInterval(renderizarContadores, 1000); // Atualiza a cada 1000ms (1 segundo)
}

// Inicia o processo
iniciarCronometro();
