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
  {function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
{let pontos = 0;

function responder(resposta){

    let resultado = document.getElementById("resultado");

    if(resposta == "certo"){
        pontos++;
        resultado.innerHTML = "✅ Resposta correta!";
    }else{
        resultado.innerHTML = "❌ Resposta incorreta!";
    }
}

function mostrarResultado(){
    document.getElementById("pontuacao").innerHTML =
    "🌱 Você acertou " + pontos + " perguntas!";
}


