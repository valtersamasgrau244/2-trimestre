// Lista de mensagens motivacionais
const mensagensMotivacionais = [
    "Você é capaz de alcançar todos os seus sonhos!",
    "Acredite em você, o resto virá naturalmente.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Nunca desista, a vitória é reservada para aqueles que persistem.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz. – Steve Jobs"
];

// Função para gerar uma mensagem motivacional aleatória
document.getElementById('motivacao-button').addEventListener('click', function() {
    // Seleciona uma mensagem aleatória
    const mensagemAleatoria = mensagensMotivacionais[Math.floor(Math.random() * mensagensMotivacionais.length)];
    
    // Atualiza o conteúdo do parágrafo com a mensagem motivacional
    document.getElementById('motivacao-message').textContent = mensagemAleatoria;
});
