
const fs = require('fs'); // fs é para file system, permitindo ler e gravar arquivos no sistema

// Listas de opçoes - podemos ir atualizando ela aos poucos
const tecnica = ["Aquarela", "Grafite", "Colagem", "Pintura"];
const tema = ["Fantasia", "Natureza", "Cotidiano", "Vida urbana", "Sobrenatural", "Sonho", "Sentimento", "Caos", "Silêncio", "Fofo", "Tecnologia", "Futuro distópico", "Mitologia",
              "Clima (chuva, neblina, calor)", "Noite", "Viagem", "Mistério", "Transformação"];
const elemento = [ 
                 // Humanos & figuras
                  "Pessoa desconhecida", "Autorretrato", "Silhueta humana", "Pessoa mascarada", "Criança", "Pessoa idosa", "Dançarino(a)", "Figura encapuzada",
                  // Animais
                  "Gato", "Cachorro", "Pássaro", "Coruja", "Peixe", "Borboleta", "Cavalo", "Lobo", "Inseto", "Ser marinho", 
                  //  Criaturas & fantasia
                  "Dragão", "Criatura mística", "Monstro amigável", "Sombra viva", "Fantasma", "Sereia", "Fada", "Demônio", "Anjo", "Criatura híbrida", "Elfo", "Goblin",
                  //  Ficção & tecnologia
                  "Robô", "Drone", "Ser cibernético/hibrido",
                  //  Natureza viva
                  "Árvore antiga", "Flor rara", "Planta carnívora", "Raízes", "Cogumelo", "Montanha viva",
                  //  Objetos com personalidade
                  "Espelho quebrado", "Relógio derretendo", "Livro amaldiçoado", "Chave antiga", "Porta misteriosa", "Janela iluminada", "Cadeira vazia", "Máscara ritual/folclorica", "Caixa selada", "Copo", "Janela",
                  // Conceitos visuais (mais abstratos)
                  "Sombra", "Reflexo", "Luz flutuante", "Fumaça", "Energia", "Fragmentos", "Portal", "Constelação", "Olhos na escuridão", "Astros"
                 ];

const today = new Date().toISOString().split("T")[0];

const file = "data/challenges.json";
const data = JSON.parse(fs.readFileSync(file, "utf8"));

if (data.some(d => d.date === today)) process.exit(0); // se ja existir um objeto com a mesma data, encerra o processo

function pick(list) {
    return list[Math.floor(Math.random() * list.length)]
}

data.push({
    date: today,
    tecnica: pick(tecnica),
    tema: pick(tema),
    elemento: pick(elemento),
});

fs.writeFileSync(file, JSON.stringify(data, null, 2) );
