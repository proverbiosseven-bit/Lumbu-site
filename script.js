<script>
const libraryData = [
  { title: "Pan-Africanismo: consciência, não slogan", text: "O Pan-Africanismo é um projeto político de união africana baseado na soberania e autodeterminação." },
  { title: "Colonialismo mental em África", text: "Mesmo após a independência, estruturas mentais coloniais continuam a moldar decisões africanas." },
  { title: "Geopolítica africana explicada", text: "África é central na disputa global por recursos, energia e influência estratégica." },
  { title: "Guerras africanas: causas reais", text: "Conflitos africanos são frequentemente alimentados por interesses externos e divisões herdadas." },
  { title: "Educação como libertação africana", text: "Educação contextualizada é chave para autonomia intelectual africana." },
  { title: "Democracia africana ou importada?", text: "Modelos políticos copiados nem sempre refletem realidades africanas." },
  { title: "Identidade africana e poder", text: "Cultura e identidade são ferramentas políticas poderosas." },
  { title: "Neocolonialismo económico", text: "Dívidas, multinacionais e dependência financeira perpetuam dominação." },
  { title: "Juventude africana e futuro político", text: "A juventude é maioria e motor de mudança no continente." },
  { title: "História africana pré-colonial", text: "África possuía sistemas políticos, científicos e culturais avançados." }
];

// DUPLICA ATÉ 100 ITENS (AUTOMÁTICO)
while (libraryData.length < 100) {
  libraryData.push({
    title: "Estudos Africanos – Tema " + (libraryData.length + 1),
    text: "Conteúdo educativo sobre história, política ou cultura africana, alinhado aos ideais do LUMBU."
  });
}

const grid = document.getElementById("libraryGrid");

libraryData.forEach(item => {
  const card = document.createElement("div");
  card.className = "library-card";
  card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
  card.onclick = () => {
    const p = card.querySelector("p");
    p.style.display = p.style.display === "block" ? "none" : "block";
  };
  grid.appendChild(card);
});

function toggleAll() {
  document.querySelectorAll(".library-card p").forEach(p => {
    p.style.display = p.style.display === "block" ? "none" : "block";
  });
}

function searchContent() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".library-card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(query)
      ? "block"
      : "none";
  });
}
</script>
