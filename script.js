let progress = 0; // Variável de progresso da história

// Função para começar a história
function startStory() {
    document.getElementById('introduction').classList.add('hidden');
    document.getElementById('chapter').classList.remove('hidden');
    document.getElementById('progress').classList.remove('hidden');
    showChapter(1);
    updateProgress("Você começou a sua jornada! Escolha com sabedoria.");
}

// Função para exibir o capítulo com base na escolha
function showChapter(chapter) {
    const chapterTitle = document.getElementById('chapter-title');
    const chapterText = document.getElementById('chapter-text');
    const choicesDiv = document.getElementById('choices');

    choicesDiv.innerHTML = ''; // Limpa escolhas anteriores

    if (chapter === 1) {
        chapterTitle.innerText = 'Capítulo 1: O Encontro';
        chapterText.innerText = 'Você encontrou um robô que pode falar. Ele te oferece duas opções:';
        choicesDiv.innerHTML = `
            <button onclick="choose(2)">Falar com o robô</button>
            <button onclick="choose(3)">Ignorar o robô</button>
        `;
    } else if (chapter === 2) {
        chapterTitle.innerText = 'Capítulo 2: A Conversa';
        chapterText.innerText = 'O robô compartilha informações fascinantes sobre IA. Você decide:';
        choicesDiv.innerHTML = `
            <button onclick="choose(4)">Perguntar sobre o futuro da IA</button>
            <button onclick="choose(5)">Despedir-se do robô</button>
        `;
    } else if (chapter === 3) {
        chapterTitle.innerText = 'Capítulo 3: A Solidão';
        chapterText.innerText = 'Você se afastou do robô e se sentiu sozinho. O que você fará agora?';
        choicesDiv.innerHTML = `
            <button onclick="choose(1)">Voltar e falar com o robô</button>
        `;
    } else if (chapter === 4) {
        chapterTitle.innerText = 'Capítulo 4: O Futuro';
        chapterText.innerText = 'O robô fala sobre um futuro onde humanos e IA coexistem pacificamente. Você sente esperança!';
        choicesDiv.innerHTML = `
            <button onclick="choose(1)">Recomeçar a Aventura</button>
        `;
    } else if (chapter === 5) {
        chapterTitle.innerText = 'Capítulo 5: Um Adeus';
        chapterText.innerText = 'Você se despediu do robô e seguiu seu caminho, refletindo sobre a conversa.';
        choicesDiv.innerHTML = `
            <button onclick="choose(1)">Recomeçar a Aventura</button>
        `;
    }
}

// Função para tratar a escolha e atualizar o progresso
function choose(chapter) {
    progress++; // Incrementa o progresso
    updateProgress(`Você fez uma escolha e avançou! Progresso: ${progress}/5`);
    showChapter(chapter);
}

// Função para atualizar o texto de progresso
function updateProgress(message) {
    document.getElementById('progress-text').innerText = message;
}
