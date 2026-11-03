// Monta a galeria e a janela de cada case com os dados de dados/projetos.js
const secProj = document.getElementById("projetos"), janela = document.getElementById("caso");
const fundo = p => p.imagem ? `background-image:url('${p.imagem}');background-color:${p.cor}` : `background-color:${p.cor}`;
secProj.innerHTML = `<h2>Projetos</h2><div class="grade">` + PROJETOS.map((p, i) =>
  `<button class="card" data-i="${i}" aria-label="Abrir projeto ${p.titulo}">
     <div class="capa${p.imagem ? "" : " vazia"}" style="${fundo(p)}">${p.imagem ? "" : "Imagem em breve"}</div>
     <div class="card-info"><h3>${p.titulo}</h3><span>${p.categoria}, ${p.ano}</span></div></button>`).join("") + `</div>`;
const bloco = (t, txt) => `<h4>${t}</h4><p>${txt}</p>`;
secProj.addEventListener("click", e => {
  const c = e.target.closest(".card"); if (!c) return;
  const p = PROJETOS[c.dataset.i];
  janela.innerHTML = `<button class="btn fechar" aria-label="Fechar">Fechar</button><div class="caso">
    <h3>${p.titulo}</h3><p class="cat">${p.categoria}, ${p.ano}</p>
    ${bloco("Contexto", p.contexto)}${bloco("Problema", p.problema)}${bloco("Conceito", p.conceito)}
    ${bloco("Tipografia", p.tipografia)}
    <h4>Paleta de cores</h4><div class="paleta">${p.paleta.map(c => `<i style="background:${c}" title="${c}"></i>`).join("")}</div>
    ${bloco("Grid e mockups", p.grid)}${bloco("Resultado final", p.resultado)}${bloco("Aplicação prática", p.aplicacao)}
    <div class="imgs">${[p.imagem, ...p.mockups].filter(Boolean).map(s => `<img src="${s}" alt="Imagem do projeto ${p.titulo}" loading="lazy">`).join("")}</div></div>`;
  janela.showModal();
});
janela.addEventListener("click", e => { if (e.target === janela || e.target.classList.contains("fechar")) janela.close(); });
