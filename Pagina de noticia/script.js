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
        title: "Transformação Digital na Educação: O Futuro Chegou",
        description: "Saiba como as ferramentas digitais estão revolucionando a forma de aprender e ensinar.",
        category: "educacao",
        date: "9 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news1.jpg",
        fullContent: `
            <h2>Transformação Digital na Educação: O Futuro Chegou</h2>
            <span class="badge educacao">EDUCAÇÃO</span>
            <p><strong>Data:</strong> 9 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>A transformação digital está presente em todos os aspectos de nossas vidas, e a educação não é exceção. Instituições de ensino ao redor do mundo estão adotando tecnologias inovadoras para criar experiências de aprendizado mais engajantes, inclusivas e eficazes.</p>
            
            <p>As plataformas de educação online, salas de aula virtuais, inteligência artificial e gamificação estão mudando a dinâmica educacional. Alunos podem aprender no seu próprio ritmo, acessar conteúdo de qualidade de professores renomados e receber feedback personalizado em tempo real.</p>
            
            <p>A tecnologia está democratizando o acesso à educação, permitindo que estudantes em regiões remotas tenham acesso às mesmas oportunidades de aprendizado que aqueles em grandes centros urbanos. Além disso, ferramentas colaborativas estão promovendo trabalho em equipe e desenvolvimento de habilidades de comunicação.</p>
            
            <p>Educadores também se beneficiam dessa transformação. Com dados analíticos avançados, professores podem identificar dificuldades específicas de cada aluno e adaptar suas estratégias de ensino para maximizar o aprendizado.</p>
            
            <p>O desafio agora não é mais ter acesso à tecnologia, mas sim usá-la de forma responsável e humanizada, mantendo o aspecto social e emocional do aprendizado. O futuro da educação é tecnológico, mas permanece profundamente humano.</p>
        `
    },
    {
        id: 3,
        title: "Inovação em Educação Digital: Ferramentas que Mudam a Sala de Aula",
        description: "Conheça as últimas tendências em tecnologia educacional que estão revolucionando o ensino.",
        category: "tecnologia",
        date: "8 de Fevereiro, 2026",
        author: "Carlos Santos",
        image: "imagens/news2.jpg",
        fullContent: `
            <h2>Inovação em Educação Digital: Ferramentas que Mudam a Sala de Aula</h2>
            <span class="badge tecnologia">TECNOLOGIA</span>
            <p><strong>Data:</strong> 8 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> Carlos Santos</p>
            
            <p>A educação digital está transformando radicalmente a forma como aprendemos e ensinamos. Novas plataformas e ferramentas estão tornando as aulas mais interativas, personalizadas e acessíveis para todos os alunos.</p>
            
            <p>Plataformas como Google Classroom, Microsoft Teams e Zoom se tornaram essenciais nas salas de aula modernas. Professores estão utilizando inteligência artificial, realidade aumentada e recursos gamificados para criar experiências de aprendizado mais engajantes.</p>
            
            <p>As ferramentas de colaboração permitem que alunos trabalhem juntos em projetos, mesmo estando em diferentes locais. Sistemas de analítica educacional fornecem dados em tempo real sobre o progresso dos alunos, permitindo intervenções rápidas quando necessário.</p>
            
            <p>Editores de vídeo, plataformas de código e simuladores virtuais abrem possibilidades infinitas para aprendizado prático. Os alunos podem agora experimentar conceitos científicos complexos em ambientes virtuais seguros e controlados.</p>
            
            <p>Instituições que investem em tecnologia educacional estão propiciando um ambiente de aprendizado mais atrativo, eficiente e preparado para os desafios do futuro. A educação de qualidade agora se caracteriza pela integração inteligente de tecnologia com pedagogia eficaz.</p>
        `
    },
    {
        id: 4,
        title: "Campus PROZHOJE Expande Infraestrutura com Novos Laboratórios",
        description: "Novas instalações modernas foram inauguradas para potencializar o aprendizado prático.",
        category: "geral",
        date: "7 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news3.jpg",
        fullContent: `
            <h2>Campus PROZHOJE Expande Infraestrutura com Novos Laboratórios</h2>
            <span class="badge geral">GERAL</span>
            <p><strong>Data:</strong> 7 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>O Campus PROZHOJE anuncia oficialmente a expansão de sua infraestrutura com a inauguração de novos laboratórios de última geração, reafirmando seu compromisso com a excelência educacional.</p>
            
            <p>As novas instalações incluem laboratórios estado-da-arte em diversas áreas: Laboratório de Informática com computadores de última geração, Laboratório de Eletrônica com equipamentos profissionais, Laboratório de Física com simuladores virtuais avançados, e Laboratório de Química com todas as medidas de segurança necessárias.</p>
            
            <p>Cada espaço foi projetado considerando as melhores práticas educacionais e está equipado com tecnologia de ponta que permite aos alunos realizarem experimentos práticos complexos e desafiadores.</p>
            
            <p>O investimento em infraestrutura reflete a visão da instituição de oferecer aos alunos experiências que complementam o aprendizado teórico com prática real, preparando-os adequadamente para os desafios do mercado de trabalho profissional.</p>
            
            <p>Com esses novos laboratórios, esperamos elevar ainda mais a qualidade do ensino, proporcionar oportunidades de pesquisa inovadora e formar profissionais altamente qualificados e preparados para liderança.</p>
        `
    },
    {
        id: 5,
        title: "Mentores Renomados se Unem ao Programa de Desenvolvimento Profissional",
        description: "Especialistas da indústria compartilham conhecimentos com a próxima geração de profissionais.",
        category: "tecnologia",
        date: "6 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news2.svg",
        fullContent: `
            <h2>Mentores Renomados se Unem ao Programa de Desenvolvimento Profissional</h2>
            <span class="badge tecnologia">TECNOLOGIA</span>
            <p><strong>Data:</strong> 6 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Um grupo de mentores renomados de diversas áreas da tecnologia e inovação se une ao nosso programa de desenvolvimento profissional, trazendo experiência e conhecimento prático inestimáveis para a próxima geração de profissionais.</p>
            
            <p>Entre os mentores estão especialistas em inteligência artificial, desenvolvimento de software, cibersegurança, análise de dados, e gestão de tecnologia. Cada um traz décadas de experiência em suas respectivas áreas e uma paixão genuína por compartilhar conhecimento.</p>
            
            <p>Os alunos terão acesso a mentorias individualizadas, sessões em grupo de discussão técnica, e oportunidades de participar de projetos reais liderados por esses profissionais experientes. Essa conexão direta com líderes da indústria acelera o aprendizado e oferece insights que não podem ser encontrados em livros.</p>
            
            <p>A mentoria é uma enorme oportunidade para os alunos aprenderem diretamente com quem está na prática, vivenciando os desafios reais do mercado profissional moderno, e construindo redes de contatos que serão valiosas ao longo de suas carreiras.</p>
            
            <p>Esperamos que essas parcerias resultem em um enriquecimento significativo da experiência educacional e na formação de profissionais ainda mais preparados para enfrentar os desafios tecnológicos do futuro.</p>
        `
    },
    {
        id: 6,
        title: "Inteligência Artificial Revoluciona Análise de Dados no Mercado",
        description: "IA e Big Data estão transformando a forma como empresas tomam decisões estratégicas.",
        category: "geral",
        date: "5 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news3.svg",
        fullContent: `
            <h2>Inteligência Artificial Revoluciona Análise de Dados no Mercado</h2>
            <span class="badge geral">GERAL</span>
            <p><strong>Data:</strong> 5 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Algoritmos de inteligência artificial estão revolucionando a forma como organizações analisam dados e tomam decisões estratégicas. Companies globais estão investindo bilhões em IA para ganhar vantagem competitiva em seus mercados.</p>
            
            <p>A análise preditiva permite que empresas antecipem tendências do mercado, comportamentos de consumidores e riscos potenciais. Machine Learning models aprendem com dados históricos para fazer previsões cada vez mais precisas.</p>
            
            <p>A automação inteligente está otimizando processos em todas as indústrias, desde manufatura até serviços financeiros, reduzindo custos e melhorando a qualidade. Chatbots alimentados por IA estão melhorando o atendimento ao cliente enquanto liberam profissionais para tarefas de maior valor agregado.</p>
            
            <p>No setor educacional, a IA está personalizando a experiência de aprendizado dos alunos, identificando em tempo real quais conceitos precisam de reforço e sugerindo recursos de aprendizado adequados.</p>
            
            <p>O futuro de negócios e educação dependerá crítico da capacidade de entender, implementar e inovar com IA. Organizações que não adotarem essas tecnologias correm o risco de ficar para trás em um mercado cada vez mais impulsionado por dados.</p>
        `
    },
    {
        id: 7,
        title: "Subsídios Educacionais Expandem Acesso ao Ensino Superior",
        description: "Governo anuncia novos programas de bolsas para alunos de baixa renda.",
        category: "educacao",
        date: "4 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news1.jpg",
        fullContent: `
            <h2>Subsídios Educacionais Expandem Acesso ao Ensino Superior</h2>
            <span class="badge educacao">EDUCAÇÃO</span>
            <p><strong>Data:</strong> 4 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>O governo anunciou a expansão de programas de subsídios educacionais, buscando democratizar o acesso ao ensino superior para estudantes de baixa renda.</p>
            
            <p>As novas bolsas de estudo cobrem até 100% das mensalidades em instituições de ensino parceiras, incluindo cursos presenciais e a distância em diversas áreas profissionais.</p>
            
            <p>Critérios de elegibilidade foram revistos para beneficiar um número maior de candidatos, considerando não apenas renda familiar, mas também mérito acadêmico e potencial profissional.</p>
            
            <p>Especialistas apontam que essa iniciativa can significantly impact social mobility nos próximos anos, preparando profissionais qualificados para o mercado de trabalho.</p>
            
            <p>Inscrições estarão abertas a partir de março de 2026, com processo simplificado e suporte adicional durante o período de candidatura.</p>
        `
    },
    {
        id: 8,
        title: "Métodos Inovadores de Aprendizagem Prática Transformam Salas de Aula",
        description: "Projetos hands-on e gamificação conquistam alunos e professores.",
        category: "educacao",
        date: "3 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news1.jpg",
        fullContent: `
            <h2>Métodos Inovadores de Aprendizagem Prática Transformam Salas de Aula</h2>
            <span class="badge educacao">EDUCAÇÃO</span>
            <p><strong>Data:</strong> 3 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Escolas ao redor do mundo estão adotando metodologias hand-on que colocam os alunos no centro do processo de aprendizagem, com resultados extraordinários.</p>
            
            <p>Projetos STEM (Ciência, Tecnologia, Engenharia e Matemática) estão desenvolvendo não apenas conhecimento técnico, mas também habilidades de resolução de problemas, criatividade e trabalho em equipe.</p>
            
            <p>Gamificação em sala de aula transforma a aprendizagem em uma experiência motivadora. Pontos, badges e rankboards engajam alunos que frequentemente se sentiam desconectados com métodos tradicionales.</p>
            
            <p>Aprendizagem baseada em projetos permite que alunos trabalhem em problemas reais, desenvolvendo soluções inovadoras enquanto aplicam conceitos acadêmicos de forma significativa.</p>
            
            <p>Pesquisas indicam que esses métodos aumentam o engajamento em 85% e melhoram significativamente a retenção de conteúdo e habilidades transferíveis.</p>
        `
    },
    {
        id: 9,
        title: "Realidade Aumentada Revoluciona Pesquisa e Desenvolvimento",
        description: "Tecnologia AR abre novas possibilidades para inovação empresarial.",
        category: "tecnologia",
        date: "2 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news2.svg",
        fullContent: `
            <h2>Realidade Aumentada Revoluciona Pesquisa e Desenvolvimento</h2>
            <span class="badge tecnologia">TECNOLOGIA</span>
            <p><strong>Data:</strong> 2 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Empresas de tecnologia estão revolucionando pesquisa e desenvolvimento utilizando realidade aumentada para visualizar, testar e iterar protótipos em ambientes virtuais antes da produção física.</p>
            
            <p>A AR permite que equipes de design colaborem em tempo real em projetos 3D complexos, independentemente de sua localização geográfica. Engenheiros podem simular como produtos funcionarão em cenários reais.</p>
            
            <p>Indústrias como automóvel, aeroespacial e medicina estão implementando AR para treinamento de técnicos, com simulações imersivas que melhoram significativamente a curva de aprendizado.</p>
            
            <p>A tecnologia de AR também está revolucionando o varejo, permitindo que clientes visualizem produtos em seus próprios espaços antes de comprar, reduzindo devoluções e aumentando satisfação.</p>
            
            <p>Investimentos em AR devem crescer 150% nos próximos dois anos, com aplicações expandindo além de gaming para setores críticos como medicina, arquitetura e manufatura.</p>
        `
    },
    {
        id: 10,
        title: "Cibersegurança se Torna Prioridade Crítica em 2026",
        description: "Empresas aumentam investimentos em proteção contra ataques cibernéticos.",
        category: "tecnologia",
        date: "1 de Fevereiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news2.svg",
        fullContent: `
            <h2>Cibersegurança se Torna Prioridade Crítica em 2026</h2>
            <span class="badge tecnologia">TECNOLOGIA</span>
            <p><strong>Data:</strong> 1 de Fevereiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Com o aumento exponencial de ataques cibernéticos, empresas globais estão elevando significativamente seus investimentos em cibersegurança como prioridade estratégica fundamental.</p>
            
            <p>Ransomware, phishing e ataques de zero-day continuam evoluindo, exigindo que organizações implementem defesas multicamadas. Educação contínua de funcionários é agora considerada essencial.</p>
            
            <p>Profissionais de cibersegurança estão em alta demanda, com salários crescendo 25% ano a ano. Especializações em cloud security, segurança de IoT e análise de ameaças são particularmente valorizadas.</p>
            
            <p>A implementação de zero trust security model está se tornando padrão. Este modelo assume que nenhum usuário ou dispositivo deve ser considerado confiável automaticamente.</p>
            
            <p>Compliance com regulações como GDPR e LGPD continua tendo impacto significativo nas estratégias de cibersegurança corporativa em todo o mundo.</p>
        `
    },
    {
        id: 11,
        title: "Programas de Responsabilidade Social Corporativa Ganham Força",
        description: "Empresas investem em comunidades locais e sustentabilidade ambiental.",
        category: "geral",
        date: "31 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news3.svg",
        fullContent: `
            <h2>Programas de Responsabilidade Social Corporativa Ganham Força</h2>
            <span class="badge geral">GERAL</span>
            <p><strong>Data:</strong> 31 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Empresas líderes globais estão intensificando programas de responsabilidade social corporativa, reconhecendo que sucesso empresarial vai além de lucros - envolve impacto positivo na sociedade.</p>
            
            <p>Iniciativas abrangem desde educação e saúde em comunidades carentes até projetos de sustentabilidade ambiental. Voluntariado corporativo permite que funcionários contribuam com suas habilidades para causas sociais.</p>
            
            <p>Consumidores cada vez mais exigem que marcas que patronizam demonstrem compromisso genuíno com valores sociais. Transparência em relatórios de impacto social é agora esperada pelo mercado.</p>
            
            <p>Parcerias entre corporações, ONGs e instituições educacionais estão criando sinergia para resolver problemas complexos como pobreza, falta de acesso a educação e degradação ambiental.</p>
            
            <p>Dados mostram que empresas com forte compromisso RSC têm melhor retenção de talentos, maior lealdade de clientes e desempenho financeiro superior a longo prazo.</p>
        `
    },
    {
        id: 12,
        title: "Economia Digital Transforma Modelos de Negócio Tradicionales",
        description: "Startups e inovação disruptiva redefinem mercados estabelecidos.",
        category: "geral",
        date: "30 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news3.svg",
        fullContent: `
            <h2>Economia Digital Transforma Modelos de Negócio Tradicionais</h2>
            <span class="badge geral">GERAL</span>
            <p><strong>Data:</strong> 30 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>A economia digital está não apenas disruptando indústrias tradicionais, mas criando ecossistemas completamente novos de inovação e geração de valor.</p>
            
            <p>Plataformas digitais estão redistribuindo poder econômico de grandes corporações para produtores e consumidores individuais. Modelos peer-to-peer em compartilhamento de serviços crescem exponencialmente.</p>
            
            <p>Criptomoedas, blockchain e contratos inteligentes estão oferecendo alternativas aos sistemas financeiros tradicionais, particularmente em economias em desenvolvimento com acesso limitado a serviços bancários.</p>
            
            <p>Startups tecnológicas com modelos de negócio inovadores estão recebendo trilhões em investimento de venture capital global, buscando capturar oportunidades de mercado emergentes.</p>
            
            <p>Empresas tradicionais que conseguem se reinventar digitalmente prosperam, enquanto aquelas que ignoram essa transformação enfrentam obsolescência crescente. Adaptação é survival neste novo contexto econômico.</p>
        `
    },
    {
        id: 13,
        title: "Desenvolvimento de Soft Skills é Tão Importante Quanto Competências Técnicas",
        description: "Empresas buscam profissionais com habilidades emocionais bem desenvolvidas.",
        category: "educacao",
        date: "29 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news1.jpg",
        fullContent: `
            <h2>Desenvolvimento de Soft Skills é Tão Importante Quanto Competências Técnicas</h2>
            <span class="badge educacao">EDUCAÇÃO</span>
            <p><strong>Data:</strong> 29 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Pesquisas da Harvard Business School revelam que 85% das competências que determinam sucesso profissional são soft skills - inteligência emocional, comunicação, liderança e colaboração.</p>
            
            <p>Instituições educacionais de excelência agora integram desenvolvimento de soft skills em seus currículos. Workshops de inteligência emocional, simulações de negócios e projetos colaborativos são padrão.</p>
            
            <p>Profissionais com excelentes habilidades técnicas mas deficientes em comunicação frequentemente enfrentam limites em suas carreiras. Contrariamente, aqueles que combinam competência técnica com soft skills avançam rapidamente.</p>
            
            <p>Empresas como Google, Microsoft e Facebook investem pesadamente em programas que desenvolvem liderança, empatia, criatividade e resolução de conflitos entre seus colaboradores.</p>
            
            <p>O futuro profissional pertence aos que conseguem equilibrar expertise técnica com capacidades interpessoais e emocionais. Educação moderna deve preparar alunos como seres humanos completos.</p>
        `
    },
    {
        id: 14,
        title: "Computação Quântica Promete Revolucionar Processamento de Dados",
        description: "Novos avanços aproximam computadores quânticos de aplicações práticas.",
        category: "tecnologia",
        date: "28 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news2.svg",
        fullContent: `
            <h2>Computação Quântica Promete Revolucionar Processamento de Dados</h2>
            <span class="badge tecnologia">TECNOLOGIA</span>
            <p><strong>Data:</strong> 28 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>A computação quântica está deixando o reino teórico para se tornar realidade prática. IBM, Google e startups especializadas estão desenvolvendo computadores quânticos cada vez mais poderosos.</p>
            
            <p>Um computador quântico com apenas 300 qubits poderia potencialmente resolver problemas que levariam um computador clássico bilhões de anos. Aplicações incluem descoberta de medicamentos, otimização financeira e criptografia.</p>
            
            <p>O Google anunciou supremacia quântica, completando um cálculo em 200 segundos que levaria um supercomputador clássico 10 mil anos. Esse marco histórico demonstra o potencial transformador.</p>
            
            <p>Desafios permanecem: manutenção da coerência quântica, redução de erros e escalabilidade. Mas investimentos bilionários garantem que esses problemas serão rapidamente resolvidos.</p>
            
            <p>Profissionais com conhecimento em computação quântica, física quântica e algoritmos quânticos estarão em altíssima demanda nos próximos anos.</p>
        `
    },
    {
        id: 15,
        title: "Sustentabilidade Corporativa Torna-se Imperativo Competitivo",
        description: "Empresas que ignoram sustentabilidade perdem oportunidades e talentos.",
        category: "geral",
        date: "27 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news3.svg",
        fullContent: `
            <h2>Sustentabilidade Corporativa Torna-se Imperativo Competitivo</h2>
            <span class="badge geral">GERAL</span>
            <p><strong>Data:</strong> 27 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Sustentabilidade deixou de ser moda corporativa para se tornar imperativo de sobrevivência. Investidores globais estão redirecionando trilhões de dólares para empresas com forte compromisso ambiental.</p>
            
            <p>Gen Z e millennials, que representam 50% da força de trabalho, alegam que preferem trabalhar para empresas com valores ambientais alinhados aos seus. Empresas insustentáveis enfrentam déficit de talentos.</p>
            
            <p>Grandes fundos de pensão mundiais estão desinvestindo de combustíveis fósseis. Regulações governamentais cada vez mais rigorosas forçam empresas a reduzir emissões e desperdício.</p>
            
            <p>Empresas como Patagonia, Unilever e IKEA demonstraram que lucro e sustentabilidade não são mutuamente exclusivos. Produtos eco-friendly frequentemente têm margins superiores.</p>
            
            <p>O próximo dez anos será crítico. Empresas que agora integram sustentabilidade em estratégia central prosperarão; aquelas que esperam ficarão para trás competitivamente.</p>
        `
    },
    {
        id: 16,
        title: "Aprendizagem Personalizada Através de IA Transforma Educação Individual",
        description: "Tutores virtuais adaptam conteúdo ao estilo único de aprendizado de cada aluno.",
        category: "educacao",
        date: "26 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news1.jpg",
        fullContent: `
            <h2>Aprendizagem Personalizada Através de IA Transforma Educação Individual</h2>
            <span class="badge educacao">EDUCAÇÃO</span>
            <p><strong>Data:</strong> 26 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Plataformas educacionais baseadas em IA estão oferecendo experiências de aprendizado verdadeiramente personalizadas, adaptando em tempo real ao ritmo, estilo e preferências de cada aluno individual.</p>
            
            <p>Sistemas como Knewton, DreamBox e Carnegie Learning analisam milhões de pontos de dados sobre como cada aluno aprende. A IA identifica lacunas de conhecimento antes do aluno perceber.</p>
            
            <p>Alunos recebem problemas com nível exato de dificuldade - não muito fácil, não muito difícil, mas no ponto ótimo de aprendizado. Isso mantém engajamento e maximiza absorção de conteúdo.</p>
            
            <p>Professores, liberados de tarefas administrativas, podem focar em mentoria, inspiração e desenvolvimento socioemocional - aspectos que IA não pode replicar.</p>
            
            <p>Esse modelo de educação personalizada está transformando educação de mass-production em verdadeira personalização. Alunos menos privilegiados finalmente acessam qualidade antes reservada aos ricos.</p>
        `
    },
    {
        id: 17,
        title: "5G Abre Novas Possibilidades para Cidades Inteligentes",
        description: "Redes 5G ultrarrápidas viabilizam IoT em larga escala e transporte autônomo.",
        category: "tecnologia",
        date: "25 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news2.svg",
        fullContent: `
            <h2>5G Abre Novas Possibilidades para Cidades Inteligentes</h2>
            <span class="badge tecnologia">TECNOLOGIA</span>
            <p><strong>Data:</strong> 25 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>A expansão da tecnologia 5G está desbloqueando possibilidades para cidades verdadeiramente inteligentes. Latência ultra-baixa (1-10ms) permite aplicações em tempo real impossíveis com 4G.</p>
            
            <p>Veículos autônomos precisam de comunicação instantânea com infraestrutura rodoviária. 5G viabiliza milhares de sensores IoT em cada quarteirão coletando dados sobre tráfego e poluição do ar.</p>
            
            <p>Cidades como Seul, Dubai e Barcelona já implementam semáforos inteligentes que se ajustam dinamicamente, reduzindo congestionamento em 20-30%. Sistemas de monitoramento ambiental permitem resposta rápida.</p>
            
            <p>Cirurgias remotas, educação VR imersiva, experiências de realidade aumentada - aplicações que exigem 5G para operação prática.</p>
            
            <p>Profissionais em IoT, redes 5G e desenvolvimento de cidades inteligentes estão em demanda explosiva. Cidades globais competem para se tornar hubs de inovação.</p>
        `
    },
    {
        id: 18,
        title: "Diversidade e Inclusão Torna-se Vantagem Competitiva Real",
        description: "Empresas diversas mostram inovação e lucro superiores.",
        category: "geral",
        date: "24 de Janeiro, 2026",
        author: "PROZHOJE Team",
        image: "imagens/news3.svg",
        fullContent: `
            <h2>Diversidade e Inclusão Torna-se Vantagem Competitiva Real</h2>
            <span class="badge geral">GERAL</span>
            <p><strong>Data:</strong> 24 de Janeiro, 2026</p>
            <p><strong>Por:</strong> PROZHOJE Team</p>
            
            <p>Estudos McKinsey comprovam que empresas no quartil superior em diversidade étnica/de gênero têm lucratividade 35-40% superior à média. Diversidade não é apenas moralmente correta - é lucrativa.</p>
            
            <p>Equipes diversas demonstram criatividade superior, melhor resolução de problemas e tomada de decisão mais sólida. Perspectivas múltiplas reduzem vieses cognitivos e inovação prospera.</p>
            
            <p>Tech companies como Salesforce e Microsoft investem bilhões em programas de D&I. Microsoft analisou que equipes inclusivas conseguem reter talentos 22% melhor e têm 19% menos turnover.</p>
            
            <p>Inclusão vai além de gênero/etnia: neurodiversidade, pessoas com deficiência, diversidade socioeconômica. Empresas inteligentes criam ambientes acessíveis onde todos podem contribuir plenamente.</p>
            
            <p>Uma geração de líderes tem entendido: diversidade é imperativo estratégicode. Empresa homogênea não é só problemática moralmente - é competitivamente inferior. O mercado premiará diversidade.</p>
        `
    }
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
