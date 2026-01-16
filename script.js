// ===== TOGGLE POSTS =====
function togglePost(post) {
  const content = post.querySelector('.post-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// ===== TOGGLE SOLIDARIEDADE =====
function toggleSolidariedade() {
  const dados = document.getElementById('dados');
  dados.style.display = dados.style.display === 'block' ? 'none' : 'block';
}

// ===== ADICIONAR POSTS DINAMICAMENTE =====
const posts = [
  {
    titulo: "África não precisa de salvadores",
    texto: `
      <p>África nunca foi pobre. O que existe é um continente historicamente explorado, fragmentado e impedido de decidir o próprio destino.</p>
      <p>A política internacional não tem amigos, tem conveniências.</p>
      <p>Nenhum povo se liberta por procuração. A libertação começa na consciência e no pensamento próprio.</p>
    `
  },
  {
    titulo: "Pan-Africanismo: consciência, não slogan",
    texto: `
      <p>O Pan-Africanismo nasce como resposta à fragmentação imposta ao continente africano.</p>
      <p>Mais do que união simbólica, propõe autonomia política, econômica e cultural.</p>
      <p>Com consciência, torna-se instrumento de emancipação e cooperação continental.</p>
    `
  },
  {
    titulo: "Colonialismo e neocolonialismo",
    texto: `
      <p>O colonialismo deixou marcas profundas: fronteiras artificiais e economias dependentes.</p>
      <p>O neocolonialismo atua por dívidas, influência política e controle econômico.</p>
      <p>Romper isso exige estratégia africana própria.</p>
    `
  },
  {
    titulo: "Geopolítica africana: quem decide?",
    texto: `
      <p>Recursos naturais e posição estratégica fazem da África alvo constante de interesses externos.</p>
      <p>Entender isso é defender soberania e planejamento interno.</p>
    `
  },
  {
    titulo: "Identidade africana como poder",
    texto: `
      <p>Reconhecer e valorizar cultura, línguas e tradições fortalece a participação social e política.</p>
      <p>A identidade africana é central para projetos de autonomia e desenvolvimento.</p>
    `
  }
];

// Gerar posts na biblioteca
const container = document.getElementById("posts-container");

posts.forEach(post => {
  const div = document.createElement("div");
  div.className = "post";
  div.onclick = () => togglePost(div);

  div.innerHTML = `
    <h3>${post.titulo}</h3>
    <div class="post-content">${post.texto}</div>
  `;

  container.appendChild(div);
});
