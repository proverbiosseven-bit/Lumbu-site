// Mostrar/ocultar conteúdo dos posts
function togglePost(post) {
  const content = post.querySelector('.post-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
}

// Mostrar/ocultar solidariedade
function toggleSolidariedade() {
  const dados = document.getElementById('dados');
  dados.style.display = dados.style.display === 'block' ? 'none' : 'block';
}
