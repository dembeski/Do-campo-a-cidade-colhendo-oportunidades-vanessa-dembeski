const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de sair da escola, sem saber qual caminho seguir, se irá migrar para a cidade ou investir na agricultura e se depara com a tecnologia que está vindo com tudo no campo. Trazendo vários benefícios dentro do âmbito de trabalho, qual será a sua primeira reação ao se deparar com todos os avanços tecnológicos?",
        alternativas: [
            {
                texto: "Uma péssima ideia!",
                afirmacao: "Nosso projeto visa ajudar "
            },
            {
                texto: "Uma excelente oportunidade!",
                afirmacao: "Nosso projeto visa ajudar",
            }
        ]
    },
    {
        enunciado: "Na cidade, os jovens podem encontrar oportunidades em áreas como tecnologia da informação, marketing digital, áreas de administração, buscar educação superior, oportunidades de trabalho em indústrias.",
        alternativas: [
            {
                texto: "Mas afinal, quais as oportunidades que o campo oferece em meio a tantas tecnologias?",
                afirmacao: "os jovens a entenderem as opções de carreira disponíveis,"
            },
            
        ]
    },
    {
        enunciado: "No meio rural, as opções incluem agricultura de precisão, agroindústrias, gestão de recursos naturais, agricultura de precisão, a irrigação inteligente e uso de drones para monitoramento das lavouras, essas são algumas das inovações que estão revolucionando.",
        alternativas: [
            
            {
                texto: "Isso é uma excelente oportunidade, pois trará vários benefícios!",
                afirmacao: "tanto na cidade quanto no meio rural, destacando o papel da tecnologia em cada um dos lugares."
            }
        ]
    },
    {
        enunciado: "Após pesquisar muito e pedir a opinião de pessoas que já passaram por isso, você decide ir para a área rural ou urbana?",
        alternativas: [
            {
                texto: "Rural",
                afirmacao: "destacando o papel da tecnologia em cada um dos lugares."
            },
            {
                texto: "Urbana",
                afirmacao: "A tecnologia tem transformado a agricultura,"
            }
        ]
    },
    {
        enunciado: "Ambas as áreas irão trazer vários benefícios para os jovens, aqui estão algumas opçoẽs que estão revolucionando com o apoio de toda a tecnologia.",
        alternativas: [
            {
                texto: "Na cidade está sebdo criado semáforos inteligentes, o 5G, inteliência artificial, análise de dados, entre outras opções.",
                afirmacao: "permitindo que os jovens empreendedores utilizem ferramentas como drones, sensores e software de gestão para aumentar a produtividade e sustentabilidade."
            },
            {
                texto: "Na área rural, a automação das máquinas inteligentes, imagens aéreas, gestão digital, soluções sustentáveis, irrigação avançada, entre outras opções.",
                afirmacao: "permitindo que os jovens empreendedores utilizem ferramentas como drones, sensores e softwares de gestão para aumentar a produtividade e sustentabilidade."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
