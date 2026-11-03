// Monta a seção SOBRE com os dados de dados/perfil.js
document.getElementById("sobre").innerHTML = `<h2>Sobre mim</h2><div class="miolo">
  <div><p>${PERFIL.bio}</p></div>
  <div><h3>Experiências</h3><ul class="tags">${PERFIL.experiencias.map(x => `<li>${x}</li>`).join("")}</ul>
  <h3>Formação</h3><ul>${PERFIL.formacao.map(f => `<li>${f}</li>`).join("")}</ul></div></div>`;
