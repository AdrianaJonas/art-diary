
const fs = require('fs'); // fs é para file system, permitindo ler e gravar arquivos no sistema

// Listas de opçoes - podemos ir atualizando ela aos poucos
const tecnica = ["Aquarela", "Grafite", "Colagem", "Pintura"];
const temas = ["Fantasia", "Natureza", "Cotidiano", "Vida urbana", "Sobrenatural"];
const elemento = ["Copo", "Gato", "Dragão", "Janela"];

const today = new Date().toISOString().split("T")[0];

const data = JSON.parse(
  fs.readFileSync("data/challenges.json", "utf8")
);

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
