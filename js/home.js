// Monta a seção HOME com os dados de dados/perfil.js
document.getElementById("home").innerHTML = `
  ${PERFIL.foto ? `<img class="foto" src="${PERFIL.foto}" alt="Foto de ${PERFIL.nome}">` : ""}
  <div class="texto">
  <p class="area">${PERFIL.especialidade}</p>
  <h1>${PERFIL.nome}</h1>
  <p class="valor">${PERFIL.propostaDeValor}</p>
  <p class="estetica">${PERFIL.estetica}</p>
  <div class="faixa" aria-hidden="true"></div>
  <div class="acoes"><a class="btn" href="#projetos">Ver projetos</a></div></div>`;
