const conteudos = [
  {
    titulo: "Pan-Africanismo: consciência, não slogan",
    texto: `
O Pan-Africanismo não é um lema político vazio, mas uma consciência histórica.
Nasce da experiência comum de opressão, colonização e fragmentação do continente africano.
Defende a união dos povos africanos na política, economia, cultura e pensamento,
sem copiar modelos externos que não respondem à realidade africana.
`
  },
  {
    titulo: "Por que África é submissa a ideologias alheias?",
    texto: `
A submissão ideológica africana tem raízes no colonialismo mental.
Mesmo após a independência política, muitos Estados africanos
continuaram a importar modelos econômicos, políticos e culturais
sem adaptação às suas realidades locais.
`
  },
  {
    titulo: "As verdadeiras causas das guerras africanas",
    texto: `
As guerras africanas raramente são apenas conflitos étnicos.
Elas envolvem interesses geopolíticos externos, controle de recursos naturais,
fronteiras artificiais herdadas do colonialismo e elites locais capturadas.
`
  },
  {
    titulo: "África e a geopolítica global",
    texto: `
África ocupa posição central na disputa global por recursos estratégicos.
Potências globais veem o continente como espaço de influência,
enquanto a soberania africana ainda luta para se afirmar.
`
  },
  {
    titulo: "Identidade africana como poder político",
    texto: `
Uma África sem identidade própria é facilmente manipulável.
A consciência cultural é uma ferramenta política essencial
para fortalecer a autodeterminação dos povos africanos.
`
  },
  {
    titulo: "Democracia africana: cópia ou criação?",
    texto: `
A democracia africana não deve ser mera imitação ocidental.
Modelos tradicionais africanos de decisão coletiva
precisam ser resgatados e adaptados ao presente.
`
  },
  {
    titulo: "Educação africana e libertação",
    texto: `
A educação é o principal instrumento de libertação africana.
Não basta alfabetizar; é preciso formar consciência crítica,
identidade histórica e capacidade de decisão própria.
`
  },
  {
    titulo: "Juventude africana e futuro",
    texto: `
A juventude africana é maioria demográfica e força decisiva.
Sem formação política e cultural, torna-se vulnerável à manipulação.
`
  },
  {
    titulo: "Economia africana e dependência",
    texto: `
A economia africana ainda depende da exportação de matérias-primas.
Romper essa lógica exige industrialização, integração regional
e soberania econômica.
`
  },
  {
    titulo: "LUMBU: um movimento intelectual africano",
    texto: `
O LUMBU nasce como espaço de pensamento africano autônomo.
Não é partido, não é ONG, não é slogan.
É consciência, debate e construção intelectual africana.
`
  }
];

let limite = 4; // quantos aparecem inicialmente

function renderConteudos(filtro = "") {
  const area = document.getElementById("lista-conteudos");
  area.innerHTML = "";

  const filtrados = conteudos.filter(c =>
    c.titulo.toLowerCase().includes(filtro) ||
    c.texto.toLowerCase().includes(filtro)
  );

  filtrados.slice(0, limite).forEach((c, index) => {
    const div = document.createElement("div");
    div.className = "content-item";
    div.innerHTML = `
      <strong>${c.titulo}</strong>
      <button class="btn-toggle" onclick="toggleTexto(${index})">Ler</button>
      <div class="full-text" id="texto-${index}">
        ${c.texto}
      </div>
    `;
    area.appendChild(div);
  });

  document.getElementById("btn-mais").style.display =
    limite < filtrados.length ? "block" : "none";
}

function toggleTexto(id) {
  const el = document.getElementById(`texto-${id}`);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

function mostrarMais() {
  limite += 3;
  renderConteudos(document.getElementById("searchInput").value.toLowerCase());
}

function searchContent() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  limite = 4;
  renderConteudos(q);
}

document.addEventListener("DOMContentLoaded", () => {
  renderConteudos();
});
