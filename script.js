// Dados das notícias
const articles = [
    {
        id: 1,
        title: "Trilhas do Futuro: Nova Geração de Alunos Chegam ao Programa",
        description: "Os novos alunos do programa Trilhas do Futuro chegam com grande expectativa e entusiasmo.",
        category: "educacao",
        date: "10 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news1.jpg",
        fullContent: `
            <h2>Trilhas do Futuro: Nova Geração de Alunos Chegam ao Programa</h2>
            <span class="badge educacao">EDUCAÇÃO</span>
            <p><strong>Data:</strong> 10 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Com grande expectativa e entusiasmo, os novos alunos do prestigious programa Trilhas do Futuro chegam para transformar suas vidas através da educação de qualidade e mentoria exclusiva. Este é um marco importante na jornada de oportunidades que o programa proporciona.</p>
            
            <p>O programa Trilhas do Futuro é conhecido por sua excelência em educação e desenvolvimento pessoal. Os alunos selecionados passam por um rigoroso processo de seleção e agora estão prontos para começar sua jornada transformadora.</p>
            
            <p>Os estudantes terão acesso a infraestrutura moderna, professores qualificados e recursos educacionais de primeira qualidade. O programa combina teoria com prática, garantindo que cada aluno desenvolva competências técnicas e comportamentais essenciais para o mercado de trabalho.</p>
            
            <p>Durante os próximos meses, estes alunos participarão de aulas teóricas, palestras inspiradoras, mentorias individualizadas e projetos práticos que os prepararão para os desafios do mundo profissional moderno. Além disso, terão oportunidades de estágio em empresas líderes e networking com profissionais experientes.</p>
            
            <p>A chegada desses novos talentos reafirma o compromisso do Trilhas do Futuro em investir na educação de qualidade e na formação de líderes que contribuirão positivamente para a sociedade. Esperamos que essa turma seja transformadora e inspiradora!</p>
            
            <p>Parabéns a todos os novos alunos e boas-vindas ao Trilhas do Futuro! O futuro é seus! 🌟</p>
        `
    },
    {
        id: 2,
        title: "Proz Educação lança Prozsaport para incentivar desempenho acadêmico e premiar alunos dedicados",
        description: "Iniciativa inovadora visa aumentar o engajamento dos estudantes e oferecer benefícios reais para aqueles que se destacarem em suas atividades acadêmicas.",
        category: "educacao",
        date: "9 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news2.jpeg",
        fullContent: `
            <h2>Transformação Digital na Educação: O Futuro Chegou</h2>
            <span class="badge educacao">EDUCAÇÃO</span>
            <p><strong>Data:</strong> 9 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>A Proz Educação lança oficialmente a novos alunos o Prozsaport, uma iniciativa estratégica desenhada para elevar os índices de engajamento e a qualidade do aprendizado em seus cursos. O projeto funciona como um "passaporte de conquistas", onde o aluno é incentivado a manter a regularidade em suas atividades e obrigações pedagógicas do início ao fim do ciclo.</p>
            <p>Sucesso em Juiz de Fora! A unidade da Proz em Juiz de Fora (MG) foi uma das primeiras a testar o modelo do programa em fase piloto. Os resultados colhidos na região foram extremamente favoráveis, apresentando um aumento significativo na entrega de tarefas e na retenção de conteúdo pelos estudantes. Graças ao sucesso dessa experiência inicial, a instituição confirmou que o Prozsaport será expandido para as demais unidades em todo o país, padronizando esse sistema de incentivo em toda a rede.</p>
            <p>O programa vai além do suporte administrativo: ele atua como uma ferramenta de fidelização e motivação real. Ao longo do ciclo letivo, os estudantes que cumprem 100% das tarefas e mantêm uma participação ativa nas atividades propostas validam seu progresso no "passaporte".</p>
            <p>Como forma de premiar o mérito e o compromisso com os estudos, a Proz Educação concederá a isenção da última mensalidade do ciclo aos alunos que atingirem todas as metas de engajamento. Segundo a coordenação, o Prozsaport transforma a jornada educacional em uma experiência mais gratificante, convertendo a disciplina do aluno em benefício direto para o seu bolso.
</p>
            
            
        `
    },
    
    {
        id: 4,
        title: "Proz educação inaugura nova sede em  Juiz de fora com infraestrutura ampliada e localização estratégica",
        description: "A instituição migrou para um novo endereço em Juiz de fora, projetado para oferecer mais conforto, acessibilidade e tecnologia aos seus estudantes.",
        category: "geral",
        date: "7 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/novolocal.jpeg",
        fullContent: `
            <h2>Campus PROZHOJE Expande Infraestrutura com Novos Laboratórios</h2>
            <span class="badge geral">GERAL</span>
            <p><strong>Data:</strong> 7 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>A mudança faz parte do plano de expansão da marca, que busca oferecer um ambiente
de aprendizado que reflita as inovações do mercado de trabalho. A nova unidade conta
com salas de aula climatizadas, áreas de convivência ampliadas e, principalmente,
laboratórios de última geração que simulam com precisão o ambiente hospitalar e
empresarial.</p>
            
            <p>&quot;A nova sede não é apenas uma mudança de paredes, mas uma evolução do nosso
compromisso com Juiz de Fora. Triplicamos nossa capacidade de atendimento em
alguns setores e trouxemos equipamentos que são referência no ensino técnico
nacional&quot;, destaca a gestão da unidade.</p>
            
            <p>A escolha do novo local levou em conta a mobilidade dos alunos que vêm de diversos
bairros e até de cidades vizinhas. Próxima a importantes terminais de transporte e
centros comerciais, a nova Proz facilita a rotina de quem precisa conciliar os estudos
com o trabalho.</p>
        `
    },
    
];

// Renderizar notícias na página
function renderNews(category = 'todos') {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';

    let filteredArticles = articles;
    if (category !== 'todos') {
        filteredArticles = articles.filter(article => article.category === category);
    }

    filteredArticles.forEach(article => {
        const newsCard = document.createElement('article');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="card-image"><img src="${article.image}" alt="${article.title}" class="card-img"></div>
            <div class="card-content">
                <span class="card-badge badge ${article.category}">${article.category.toUpperCase()}</span>
                <h3 class="card-title">${article.title}</h3>
                <p class="card-description">${article.description}</p>
                <div class="card-footer">
                    <span class="date">${article.date}</span>
                    <span class="author">${article.author}</span>
                </div>
            </div>
        `;
        newsCard.addEventListener('click', () => openArticle(article.id));
        newsGrid.appendChild(newsCard);
    });

    // Ativar botão de categoria
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Abrir artigo em modal
function openArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        const modal = document.getElementById('articleModal');
        const articleBody = document.getElementById('articleBody');
        articleBody.innerHTML = article.fullContent;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Fechar modal
function closeArticle() {
    const modal = document.getElementById('articleModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
window.addEventListener('click', (event) => {
    const modal = document.getElementById('articleModal');
    if (event.target == modal) {
        closeArticle();
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeArticle();
    }
});

// Newsletter
function subscribeNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;

    // Simular envio
    alert(`✨ Obrigado por se inscrever!\n\nVocê receberá as melhores notícias do PROZHOJE no endereço: ${email}\n\nFique atento!`);

    // Limpar formulário
    form.reset();
}

// Inicializar página
document.addEventListener('DOMContentLoaded', () => {
    renderNews('todos');
    
    // Filtrar notícias por categoria
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            renderNews(category);
        });
    });
    // Configura player do Proz Informa (YouTube via data-youtube)
    setupProzInformaVideo();
    // Configura player do YouTube
    setupYouTubeVideo();
});

// Converte URLs do YouTube em URLs de embed (aceita youtube.com/watch?v=, youtu.be/, e /embed/)
function toYouTubeEmbed(url) {
    if (!url) return null;
    try {
        const u = new URL(url);
        const host = u.hostname.replace('www.', '');
        if (host === 'youtu.be') {
            const id = u.pathname.slice(1);
            return 'https://www.youtube.com/embed/' + id;
        }
        if (host.endsWith('youtube.com')) {
            const v = u.searchParams.get('v');
            if (v) return 'https://www.youtube.com/embed/' + v;
            const parts = u.pathname.split('/');
            const embedIdx = parts.indexOf('embed');
            if (embedIdx !== -1 && parts[embedIdx+1]) return 'https://www.youtube.com/embed/' + parts[embedIdx+1];
        }
    } catch (e) {
        return null;
    }
    return null;
}

// Substitui o container por um iframe embed quando houver link
function setupProzInformaVideo() {
    const section = document.querySelector('.proz-informa');
    if (!section) return;
    const youtubeLink = (section.dataset.youtube || '').trim();
    const player = document.getElementById('prozInformaPlayer');
    if (!player) return;
    if (youtubeLink) {
        const embed = toYouTubeEmbed(youtubeLink);
        if (embed) {
            player.innerHTML = `<div class="video-responsive"><iframe width="100%" height="400" src="${embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
            return;
        }
    }
    player.innerHTML = '<p>Vídeo não configurado. Adicione o link do YouTube no atributo data-youtube da seção.</p>';
}

// Substitui o container por um iframe embed para o vídeo do YouTube
function setupYouTubeVideo() {
    const section = document.querySelector('.canva-video');
    if (!section) return;
    const youtubeLink = (section.dataset.youtube || '').trim();
    const player = document.getElementById('youtubePlayer');
    if (!player) return;
    if (youtubeLink) {
        const embed = toYouTubeEmbed(youtubeLink);
        if (embed) {
            player.innerHTML = `<div class="video-responsive"><iframe width="100%" height="400" src="${embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
            return;
        }
    }
    player.innerHTML = '<p>Vídeo não configurado. Adicione o link do YouTube no atributo data-youtube da seção.</p>';
}

// Smooth scroll para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// === Acessibilidade: tema claro/escuro e zoom ===
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDark ? '1' : '0');
}

// zoomLevel controla porcentagem aplicada diretamente ao font-size
let zoomLevel = 100;
function applyZoom() {
    // aplica zoom por font-size (rem) e por zoom CSS para cobrir casos com px
    document.documentElement.style.fontSize = zoomLevel + '%';
    // `zoom` é não-padronizado mas amplamente suportado em navegadores Chromium/Edge/IE
    document.body.style.zoom = (zoomLevel / 100).toString();
    // Atualiza o rótulo que mostra a porcentagem atual
    updateZoomLabel();
}

function adjustZoom(amount) {
    zoomLevel = Math.min(Math.max(zoomLevel + amount, 50), 200);
    applyZoom();
    localStorage.setItem('zoomLevel', zoomLevel);
}

function resetZoom() {
    zoomLevel = 100;
    applyZoom();
    localStorage.setItem('zoomLevel', zoomLevel);
    updateZoomLabel();
}

function loadAccessibilityPreferences() {
    const darkStored = localStorage.getItem('darkTheme');
    if (darkStored === '1') document.body.classList.add('dark-theme');
    const zoomStored = parseInt(localStorage.getItem('zoomLevel'));
    if (!isNaN(zoomStored)) zoomLevel = zoomStored;
    applyZoom();
    updateZoomLabel();
}

// Atualiza o texto do botão `resetZoom` para exibir a porcentagem atual
function updateZoomLabel() {
    const rz = document.getElementById('resetZoom');
    if (rz) rz.textContent = zoomLevel + '%';
}

document.addEventListener('DOMContentLoaded', () => {
    // carregar preferências e ligar controles
    loadAccessibilityPreferences();
    const toggleBtn = document.getElementById('toggleTheme');
    if (toggleBtn) toggleBtn.addEventListener('click', toggleTheme);
    const zin = document.getElementById('zoomIn');
    if (zin) zin.addEventListener('click', () => adjustZoom(10));
    const zout = document.getElementById('zoomOut');
    if (zout) zout.addEventListener('click', () => adjustZoom(-10));
    const rz = document.getElementById('resetZoom');
    if (rz) rz.addEventListener('click', resetZoom);
});
