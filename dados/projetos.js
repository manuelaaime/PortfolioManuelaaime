// EDITE AQUI: cada { ... } é um projeto. Copie um bloco para adicionar outro.
// imagem: coloque o arquivo em assets/img/ e escreva "assets/img/nome.jpg". Deixe "" para usar a cor.
// mockups: lista de imagens extras do projeto (opcional).
// video: um vídeo .mp4 do projeto (opcional). Aparece no carrossel depois das imagens.
// Os textos abaixo são exemplos completos: troque pelos seus projetos reais.
const PROJETOS = [
  {
    "titulo": "PULSE",
    "categoria": "Identidade visual",
    "ano": "2026",
    "cor": "#3F68F4",
    "imagem": "assets/img/pulse/pulse1.jpeg",
    "mockups": ["assets/img/pulse/pulse2.jpeg", "assets/img/pulse/pulse3.jpeg", "assets/img/pulse/pulse4.jpeg"],
    "contexto": "Projeto desenvolvido para a Semana Acadêmica de Design Gráfico do Instituto Federal da Paraíba (IFPB) – Campus Cabedelo. Com o tema “IA e Inovação: Automação, Justiça Social e Coletividade”, o Pulse propõe uma experiência que conecta design, tecnologia e criatividade, incentivando a troca de conhecimentos e a construção coletiva.",
    "problema": "O desafio era traduzir um tema amplo que envolveu tecnologia, inteligência artificial e relações humanas, em uma identidade visual marcante e coerente. A proposta precisava fugir das representações tecnológicas convencionais, criando uma linguagem própria, capaz de comunicar inovação sem perder o caráter criativo, dinâmico e colaborativo do evento.",
    "conceito": "A identidade parte da ideia de conexão. Os cabos e fios assumem o protagonismo visual, simbolizando as relações entre pessoas e tecnologia, a circulação de informações e a conexão dos estudantes com o evento. A estética foi inspirada em festivais de música como Lollapalooza e Rock In RIo",
    "tipografia": "Foi desenvolvida uma tipografia exclusiva para o evento, a Circuit Display, inspirada na comunicação por fios e nas conexões. Como tipografia secundária, foi utilizada a IBM Plex Mono Semibold, trazendo equilíbrio, legibilidade e uma referência visual ao universo tecnológico.",
    "paleta": [
      "#E363A1",
      "#F8461C",
      "#404797",
      "	#23A361"
    ],
    "resultado": "Manual de marca de 24 páginas com logotipo, versões, limite de redução, paleta, tipografia e usos incorretos. A Identidade Visual foi aprovada pela banca de professores do evento e executada pela equipe que desenvolveu a marca",
    "aplicacao": "A identidade foi aplicada em diferentes materiais e produtos, incluindo papelaria impressa, peças gráficas para redes sociais, crachás, pôsteres, bottons, camisetas e brindes. Também foi desenvolvido um site exclusivo para o evento."
  },
  {
    "titulo": "Instituto Melhor Amigo",
    "categoria": "Ergonomia Informacional",
    "ano": "2026",
    "cor": "#3F68F4",
    "imagem": "assets/img/melhoramigo/ma1.jpeg",
    "mockups": [],
    "contexto": "Projeto acadêmico desenvolvido para a disciplina de Ergonomia Informacional, com a proposta de criar um protótipo de alta fidelidade para um aplicativo de adoção de animais. O Instituto Melhor Amigo foi pensado para aproximar pessoas e animais que buscam um novo lar, tornando o processo de adoção mais acessível e intuitivo.",
    "problema": "A experiência de adoção pode apresentar dificuldades relacionadas à localização de animais, ao acesso às informações e à compreensão das etapas necessárias para adotar. O desafio era desenvolver uma interface que facilitasse essa jornada, organizando informações de maneira clara e proporcionando uma navegação simples e eficiente.",
    "conceito": "O aplicativo busca aproximar pessoas e animais por meio de uma experiência digital acolhedora, acessível e intuitiva. A interface foi pensada para transmitir confiança e afeto, equilibrando a sensibilidade da causa animal com a funcionalidade de um produto digital.",
    "tipografia": "A família tipográfica Inter foi escolhida por sua versatilidade, legibilidade e clareza em ambientes digitais.",
    "paleta": [
      "#038D93",
      "#FD5602",
      "#FDAD02",
      "#FFF2E8",
      "#ffffff",
      "#000000",
    ],
    "resultado": "Foram desenvolvidas 10 telas de alta fidelidade, cada uma direcionada à aplicação de uma das 10 heurísticas de usabilidade de Jakob Nielsen. O objetivo foi explorar princípios como visibilidade do status do sistema, consistência, prevenção de erros, reconhecimento em vez de memorização e liberdade de navegação, transformando fundamentos teóricos em soluções práticas de interface.",
    "aplicacao": "As soluções foram apresentadas por meio de telas digitais e mockups do aplicativo, demonstrando a aplicação da identidade visual."
  },
  {
    "titulo": "Especialista Anvisa e EA Suplementos",
    "categoria": "Design Editorial",
    "ano": "2026",
    "cor": "#3F68F4",
    "imagem": "assets/img/ea/1.jpeg",
    "mockups": ["assets/img/ea/2.jpeg", "assets/img/ea/3.jpeg", "assets/img/ea/4.jpeg"],
    "contexto": "Gestão de redes sociais e a criação de peças gráficas para as marcas Especialista Anvisa e EA Suplementos. A comunicação abrangia os segmentos de assuntos regulatórios, saúde, cosméticos, bem-estar e suplementos exclusivos, com conteúdos voltados à informação, orientação e divulgação de produtos.",
    "problema": "O principal desafio era transformar assuntos técnicos e regulatórios em conteúdos visuais acessíveis, atrativos e de fácil compreensão. Era necessário acompanhar as atualizações e tendências do setor, especialmente as publicações da Anvisa, traduzindo informações relevantes em peças que despertassem o interesse do público sem comprometer a credibilidade e a precisão das informações.",
    "conceito": "A proposta era desenvolver uma comunicação contemporânea, direta e reconhecível, que unisse a seriedade dos assuntos regulatórios à energia do segmento de saúde e suplementação.",
    "tipografia": "A família tipográfica Montserrat foi escolhida por sua estética geométrica, moderna e versátil. Sua aplicação permite construir hierarquias visuais bem definidas, destacando títulos, informações importantes e chamadas para ação, mantendo a consistência entre as publicações.",
    "paleta": [
      "#31FD1F",
      "#000000",
      "#FFFFFF"
    ],
    "resultado": "O trabalho resultou em uma comunicação digital estruturada para as marcas Especialista Anvisa e EA Suplementos, com produção contínua de conteúdo, fortalecimento da presença nas redes sociais e padronização visual das publicações.",
    "aplicacao": "A identidade foi aplicada em posts, carrosséis, stories e outras peças gráficas para redes sociais. Além da criação visual, o trabalho envolveu o gerenciamento dos perfis, acompanhamento de pautas relevantes, planejamento de conteúdos e adaptação da comunicação às necessidades de cada marca."
  },
  {
    "titulo": "Chocolatto | Três Corações",
    "categoria": "Fotografia Digital",
    "ano": "2026",
    "cor": "#3F68F4",
    "imagem": "assets/img/trescoracoes/1.jpeg",
    "mockups": ["assets/img/trescoracoes/2.jpeg", "assets/img/trescoracoes/3.jpeg"],
    "contexto": "Projeto prático desenvolvido em laboratório para a disciplina de Fotografia Digital, com foco na fotografia publicitária de produtos. A proposta consistiu em construir uma composição fotográfica para o Chocolatto, da marca Três Corações, explorando elementos visuais capazes de comunicar os atributos do produto e despertar o interesse do consumidor.",
    "problema": "A fotografia precisava transmitir uma experiência sensorial, destacando o caráter envolvente do chocolate sem perder a sofisticação da apresentação.",
    "conceito": "A direção fotográfica foi construída a partir do conceito “Charmoso, Envolvente e Caloroso”, tendo como referência o arquétipo do Amante. A proposta era despertar sensações de prazer, desejo e aconchego, transformando a fotografia em uma representação visual da experiência de consumir o produto.",
    "paleta": [
      "#8C1C1D",
      "#A36D48",
      "#BD8D54",
      "#3c220C"
    ],
    "composicao": "O cenário foi construído sobre um fundo marrom, utilizando grãos e um pedaço de madeira como adereços (props). Esses elementos foram escolhidos para reforçar a conexão com o universo do chocolate e criar profundidade visual sem competir com o produto.",
    "iluminacao": "A fotografia utilizou iluminação lateral e quente, criando sombras suaves e valorizando as texturas, os volumes e os detalhes da embalagem. O ângulo frontal foi escolhido para evidenciar o produto, enquanto o enquadramento em plano detalhe (close-up) aproxima o observador da composição, destacando características visuais e estimulando uma percepção mais sensorial.",
    "resultado": "O resultado foi uma fotografia publicitária de produto que explora a estética sensorial do chocolate, traduzindo visualmente os conceitos de charme, envolvimento e calor. A direção de arte buscou valorizar a embalagem e as cápsulas, equilibrando sofisticação e apelo comercial.",
    "aplicacao": "A composição foi desenvolvida em ambiente de laboratório, envolvendo planejamento de cenário, seleção de adereços, definição de paleta cromática, posicionamento do produto e controle da iluminação. O exercício permitiu explorar técnicas de fotografia publicitária e direção de arte aplicadas à valorização de produtos."
  },
  {
    "titulo": "Grupo FMS | Outubro Rosa",
    "categoria": "Produção Audiovisual",
    "ano": "2026",
    "cor": "#3F68F4",
    "imagem": "",
    "mockups": [],
    "video": "assets/img/fms/Vídeo Outubro Rosa FMS.mp4",
    "contexto": "Projeto audiovisual desenvolvido para o Grupo FMS durante a campanha Outubro Rosa. A proposta foi produzir um vídeo institucional de conscientização sobre a prevenção do câncer de mama, promovendo informação e incentivando o cuidado com a saúde entre os colaboradores da empresa.",
    "problema": "O desafio era abordar um tema de saúde tão importante de maneira acolhedora, informativa e acessível, criando uma comunicação que fosse além de uma campanha institucional tradicional. O vídeo precisava aproximar o assunto da realidade dos colaboradores, valorizando tanto a orientação profissional quanto as mensagens de conscientização compartilhadas pelas próprias funcionárias.",
    "conceito": "A narrativa foi construída a partir da união entre informação e proximidade. A participação de uma médica especialista trouxe embasamento e orientação profissional, enquanto os depoimentos das colaboradoras acrescentaram uma dimensão humana à campanha.",
    "captacao": "A captação foi planejada para valorizar os relatos, preservar a clareza das mensagens e construir uma comunicação audiovisual adequada ao contexto institucional.",
    "aplicacao": "O vídeo foi apresentado aos colaboradores do Grupo FMS como parte das ações internas da campanha Outubro Rosa, funcionando como uma ferramenta de comunicação e conscientização no ambiente corporativo."
  }
];
