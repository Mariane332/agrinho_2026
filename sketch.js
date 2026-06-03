let folhas = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  for(let i = 0; i < 30; i++){
    folhas.push({
      x: random(width),
      y: random(height),
      tamanho: random(10, 25),
      velocidade: random(1, 3)
    });
  }
}

function draw() {
  clear();

  for(let folha of folhas){
    fill(76, 175, 80, 180);
    noStroke();

    ellipse(
      folha.x,
      folha.y,
      folha.tamanho,
      folha.tamanho * 0.6
    );

    folha.y += folha.velocidade;

    if(folha.y > height){
      folha.y = -20;
      folha.x = random(width);
    }
  }
const perguntas = [
{
    pergunta: "Qual prática ajuda a conservar o solo?",
    opcoes: ["Plantio Direto", "Queimadas", "Desmatamento"],
    correta: 0
},
{
    pergunta: "O que a rotação de culturas faz?",
    opcoes: ["Empobrece o solo", "Melhora a fertilidade", "Aumenta a erosão"],
    correta: 1
},
{
    pergunta: "Qual sistema combina agricultura, pecuária e árvores?",
    opcoes: ["ILPF", "Monocultura", "Queimada Controlada"],
    correta: 0
},
{
    pergunta: "O que reduz o impacto ambiental no campo?",
    opcoes: ["Uso consciente da água", "Desmatamento", "Poluição dos rios"],
    correta: 0
},
{
    pergunta: "Qual é o objetivo da agricultura sustentável?",
    opcoes: ["Produzir sem pensar no futuro", "Produzir preservando recursos", "Produzir menos alimentos"],
    correta: 1
}
];

let atual = 0;
let pontos = 0;

function carregarPergunta(){

    document.getElementById("pergunta").innerHTML =
    perguntas[atual].pergunta;

    document.getElementById("op0").innerHTML =
    perguntas[atual].opcoes[0];

    document.getElementById("op1").innerHTML =
    perguntas[atual].opcoes[1];

    document.getElementById("op2").innerHTML =
    perguntas[atual].opcoes[2];
}

function responder(escolha){

    if(escolha === perguntas[atual].correta){
        pontos++;
    }

    atual++;

    if(atual < perguntas.length){
        carregarPergunta();
    }else{
        document.querySelector(".quiz").innerHTML =
        `<h1>🌾 Quiz Finalizado!</h1>
        <h2>Você acertou ${pontos} de ${perguntas.length} perguntas!</h2>`;
    }
}

carregarPergunta();


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
