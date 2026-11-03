// Monta a seção SOBRE com os dados de dados/perfil.js
document.getElementById("sobre").innerHTML = `<h2>Sobre mim</h2><div class="miolo">
  <div><p>${PERFIL.bio}</p></div>
  <div><h3>Áreas de interesse</h3><ul class="tags">${PERFIL.interesses.map(i => `<li>${i}</li>`).join("")}</ul>
  <h3>Formação</h3><ul>${PERFIL.formacao.map(f => `<li>${f}</li>`).join("")}</ul></div></div>`;
