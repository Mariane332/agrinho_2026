
// ===== ANIMAÇÃO DAS FOLHAS =====

let folhas = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    for (let i = 0; i < 30; i++) {
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

    for (let folha of folhas) {

        fill(76, 175, 80, 180);
        noStroke();

        ellipse(
            folha.x,
            folha.y,
            folha.tamanho,
            folha.tamanho * 0.6
        );

        folha.y += folha.velocidade;

        if (folha.y > height) {
            folha.y = -20;
            folha.x = random(width);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


// ===== QUIZ =====

function corrigirQuiz() {

    let pontos = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    if (q1 && q1.value === "certo") pontos++;
    if (q2 && q2.value === "certo") pontos++;
    if (q3 && q3.value === "certo") pontos++;
    if (q4 && q4.value === "certo") pontos++;
    if (q5 && q5.value === "certo") pontos++;

    let mensagem = "";

    if (pontos === 5) {
        mensagem = "🏆 Excelente! Você entende muito de agro sustentável!";
    }
    else if (pontos >= 3) {
        mensagem = "🌱 Muito bem! Você tem um bom conhecimento sobre sustentabilidade.";
    }
    else {
        mensagem = "📚 Continue aprendendo sobre práticas agrícolas sustentáveis!";
    }

    document.getElementById("resultado").innerHTML =
        "<h2>Você acertou " + pontos + " de 5 perguntas!</h2><p>" + mensagem + "</p>";
}
