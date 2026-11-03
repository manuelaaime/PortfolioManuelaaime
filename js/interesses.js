// Monta a seção ÁREAS DE INTERESSE com a lista "interesses" de dados/perfil.js
document.getElementById("interesses").innerHTML = `<h2>Áreas de interesse</h2>
  <ul class="areas">${PERFIL.interesses.map(i => `<li>${i}</li>`).join("")}</ul>`;
