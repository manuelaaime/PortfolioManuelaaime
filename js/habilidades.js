// Monta a seção HABILIDADES com os dados de dados/habilidades.js
document.getElementById("habilidades").innerHTML = `<h2>Habilidades</h2><div class="colunas">` +
  HABILIDADES.map(g => `<div><h3>${g.grupo}</h3>` + g.itens.map(([n, v]) =>
    `<div class="item"><span>${n}</span><span class="pontos" role="img" aria-label="Nível ${v} de 5">${[1,2,3,4,5].map(x => `<i class="${x <= v ? "on" : ""}"></i>`).join("")}</span></div>`).join("") + `</div>`).join("") + `</div>`;
