// EDITE AQUI: cada { ... } é um projeto. Copie um bloco para adicionar outro.
// imagem: coloque o arquivo em assets/img/ e escreva "assets/img/nome.jpg". Deixe "" para usar a cor.
// mockups: lista de imagens extras do projeto (opcional).
// Os textos abaixo são exemplos completos: troque pelos seus projetos reais.
const PROJETOS = [
  {
    "titulo": "Café Tropeiro",
    "categoria": "Identidade visual",
    "ano": "2025",
    "cor": "#3F68F4",
    "imagem": "",
    "mockups": [],
    "contexto": "Projeto da disciplina de Identidade Visual: criar a marca de uma cafeteria de bairro que torra grãos de pequenos produtores. O briefing pedia uma marca acolhedora, fácil de reconhecer e capaz de funcionar tanto na fachada quanto em embalagens e redes sociais.",
    "problema": "Cafeterias de bairro costumam parecer iguais: tons de marrom, grãos desenhados e letras manuscritas. A marca precisava se destacar na vitrine e mostrar a origem artesanal sem cair no clichê.",
    "conceito": "A ideia central é o encontro: o logotipo reúne duas formas de xícara que se encaixam, como pessoas à mesa. A cor vibrante substitui o marrom tradicional e dá energia à marca.",
    "tipografia": "Bricolage Grotesque Bold nos títulos, pelo desenho de letras expressivo e amigável. Instrument Sans nos textos de apoio, pela boa leitura em tamanhos pequenos, como rótulos e cardápios.",
    "paleta": [
      "#FF006E",
      "#FFBE0B",
      "#FB5607",
      "#001219"
    ],
    "grid": "O logotipo foi construído sobre uma malha de círculos para garantir proporção em todos os tamanhos. A papelaria segue um grid de 12 colunas, e os mockups mostram cartão, copo, sacola e fachada.",
    "resultado": "Manual de marca de 24 páginas com logotipo, versões, área de proteção, paleta, tipografia e usos incorretos. A marca foi validada com o professor e com dois clientes de teste.",
    "aplicacao": "A marca foi aplicada em copos, sacolas, cardápio, papelaria e perfil do Instagram. Os mockups mostram a identidade funcionando em materiais impressos e digitais."
  },
  {
    "titulo": "Revista Maré",
    "categoria": "Editorial",
    "ano": "2025",
    "cor": "#3F68F4",
    "imagem": "",
    "mockups": [],
    "contexto": "Projeto da disciplina de Design Editorial: diagramar o primeiro número de uma revista independente sobre cultura e cotidiano de cidades litorâneas, com 32 páginas e tiragem pequena.",
    "problema": "A revista tinha textos longos, fotos de qualidade variada e pouco orçamento. Era preciso criar ritmo de leitura e uma identidade própria sem depender de muitas imagens.",
    "conceito": "O conceito é a maré: páginas que alternam momentos cheios e vazios, com textos densos seguidos de páginas de respiro tipográfico, como ondas que avançam e recuam.",
    "tipografia": "Títulos em Bricolage Grotesque ExtraBold em tamanhos grandes. Texto corrido em uma fonte serifada legível de 10 pt, com entrelinha de 15 pt, para leitura longa no papel.",
    "paleta": [
      "#8338EC",
      "#3A86FF",
      "#FFBE0B",
      "#001219"
    ],
    "grid": "Grid de 6 colunas com margens generosas e módulos de linha de base de 15 pt. Há três tipos de página: abertura de matéria, texto contínuo e página de respiro com citação.",
    "resultado": "Revista com 32 páginas, capa, índice, cinco matérias e uma seção de agenda. Os arquivos foram preparados em PDF para impressão, com sangria e marcas de corte.",
    "aplicacao": "A revista foi impressa em pequena tiragem e distribuída em cafés e centros culturais. Uma versão digital foi publicada para leitura no celular."
  },
  {
    "titulo": "App Feira Viva",
    "categoria": "UI/UX",
    "ano": "2026",
    "cor": "#3F68F4",
    "imagem": "",
    "mockups": [],
    "contexto": "Projeto de conclusão de curso de UI/UX: um aplicativo que conecta moradores a feiras livres e produtores locais, com cardápio de produtos, reservas e retirada.",
    "problema": "Pesquisas com 18 pessoas mostraram que os moradores não sabem quais produtos há em cada feira nem os horários. Já os feirantes perdem vendas por falta de divulgação.",
    "conceito": "O app funciona como uma feira de bolso: o visual é colorido, cada categoria de alimento tem sua cor, e as telas são simples para pessoas de qualquer idade.",
    "tipografia": "Instrument Sans em todas as telas, nos pesos 500 e 600, pela clareza em tamanhos pequenos. Botões e rótulos usam no mínimo 16 px para facilitar a leitura.",
    "paleta": [
      "#3A86FF",
      "#FFBE0B",
      "#FF006E",
      "#001219"
    ],
    "grid": "Grid de 4 colunas no celular, com espaçamentos múltiplos de 8 px. O processo incluiu pesquisa, personas, jornada do usuário, wireframes de baixa fidelidade e protótipo navegável no Figma.",
    "resultado": "Protótipo com 24 telas, biblioteca de componentes e teste de usabilidade com 8 pessoas. A tarefa de reservar um produto passou de 6 toques para 3 após os ajustes.",
    "aplicacao": "O protótipo foi apresentado à banca e a uma associação de feirantes. O design system deixa o projeto pronto para desenvolvimento."
  },
  {
    "titulo": "Doce Caminho",
    "categoria": "Embalagem",
    "ano": "2024",
    "cor": "#3F68F4",
    "imagem": "",
    "mockups": [],
    "contexto": "Projeto de Design de Embalagem: criar a linha de embalagens para uma marca artesanal de doces de frutas do Nordeste, para venda em feiras e presentes.",
    "problema": "As embalagens precisavam proteger os doces, caber em pequenas caixas de transporte e comunicar o sabor sem ficar visualmente poluídas.",
    "conceito": "Cada sabor ganhou uma cor e uma forma geométrica simples inspirada na fruta, formando uma coleção que fica ainda mais bonita quando exposta lado a lado.",
    "tipografia": "Títulos em Bricolage Grotesque, com nomes dos sabores em caixa alta e informações legais em Instrument Sans, no tamanho mínimo exigido pela legislação.",
    "paleta": [
      "#FB5607",
      "#FFBE0B",
      "#FF006E",
      "#8338EC"
    ],
    "grid": "A planificação foi feita em papel cartão, com abas de encaixe sem cola. O grid divide a frente da caixa em três áreas: marca, forma da fruta e informações do produto.",
    "resultado": "Quatro caixas, uma para cada sabor, mais uma embalagem de presente com os quatro juntos. Os mockups foram feitos em 3D e a faca de corte foi testada em protótipo físico.",
    "aplicacao": "A coleção foi produzida em pequena tiragem e vendida em feiras de artesanato, com ótima resposta do público às cores e ao formato das caixas."
  },
  {
    "titulo": "Ateliê Sol Nascente",
    "categoria": "Identidade visual",
    "ano": "2024",
    "cor": "#3F68F4",
    "imagem": "",
    "mockups": [],
    "contexto": "Projeto autoral: criar a identidade de um ateliê de cerâmica e bordado que também oferece oficinas para iniciantes.",
    "problema": "A marca precisava transmitir o trabalho manual sem parecer rústica demais e atrair tanto público jovem quanto adultos que buscam atividades criativas.",
    "conceito": "O conceito parte da marca da mão no barro: o símbolo é um sol formado por pontos, como se fosse carimbado. A identidade mistura o artesanal com a cor forte e moderna.",
    "tipografia": "Bricolage Grotesque para o logotipo e Instrument Sans para o texto. O contraste entre letras expressivas e leitura limpa traduz a combinação de tradição e contemporaneidade.",
    "paleta": [
      "#FFBE0B",
      "#FF006E",
      "#001219",
      "#E8EEF0"
    ],
    "grid": "O símbolo usa uma malha de pontos de 8 por 8 módulos. Os materiais usam grid modular em A5 e A4, com as cores aplicadas em blocos grandes.",
    "resultado": "Logotipo com cinco versões, kit de papelaria, etiquetas para peças de cerâmica e modelo de posts para redes sociais, todos reunidos em um guia de uso.",
    "aplicacao": "A identidade foi aplicada em etiquetas, sacolas de papel, cartões de visita, convites das oficinas e no perfil do Instagram do ateliê."
  }
];
