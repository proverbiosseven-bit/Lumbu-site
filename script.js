const conteudos = [
  {
    titulo: "Pan-Africanismo: consciência, não slogan",
    texto: `
O Pan-Africanismo não é um lema político vazio.
É uma consciência histórica africana que nasce da experiência comum
de opressão, colonialismo e fragmentação do continente.
Seu objetivo é a união política, econômica e cultural de África.
`
  },
  {
    titulo: "Por que África é submissa a ideologias alheias?",
    texto: `
A submissão ideológica africana resulta do colonialismo mental.
Mesmo após as independências, muitos Estados africanos
continuaram a importar modelos externos sem adaptação local.
`
  },
  {
    titulo: "As verdadeiras causas das guerras africanas",
    texto: `
As guerras africanas envolvem interesses geopolíticos externos,
controle de recursos naturais, fronteiras artificiais
e elites políticas capturadas por potências estrangeiras.
`
  }
];

let limite = 3;

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
      <strong>${c.titulo}</strong><br>
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
  limite += 2;
  renderConteudos(document.getElementById("searchInput").value.toLowerCase());
}

function searchContent() {
  limite = 3;
  const q = document.getElementById("searchInput").value.toLowerCase();
  renderConteudos(q);
}

document.addEventListener("DOMContentLoaded", () => {
  renderConteudos();
});
