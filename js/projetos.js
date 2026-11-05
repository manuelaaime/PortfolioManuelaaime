// Monta a galeria e a janela de cada case com os dados de dados/projetos.js
// Campos vazios ou ausentes não aparecem no case.
// O carrossel mostra "imagem" + "mockups" + "video" (nessa ordem).
// Toda imagem aparece inteira numa moldura de tamanho fixo; o espaço que sobra
// é preenchido com a própria imagem desfocada. Se a imagem tiver quase o mesmo
// formato da moldura, ela preenche a moldura (corte mínimo, sem faixas finas).
const secProj = document.getElementById("projetos"), janela = document.getElementById("caso");
const preenchido = v => Array.isArray(v) ? v.some(x => String(x).trim()) : v != null && String(v).trim() !== "";
const legenda = p => [p.categoria, p.ano].filter(preenchido).join(", ");
const ehVideo = s => /\.(mp4|webm|mov)$/i.test(s);
const url = s => encodeURI(s.trim()); // nomes de arquivo com espaço ou acento
// Endereço completo: dentro de variável CSS, um caminho relativo seria lido a partir de css/.
const fundoBorrado = s => ehVideo(s) ? "" : ` style="--fundo-img:url('${new URL(url(s), location.href).href}')"`;

// Decide se a imagem preenche a moldura ou aparece inteira com fundo desfocado.
const TOLERANCIA = 0.15; // até 15% de diferença de formato: preenche
const ajustar = img => {
  const caixa = img.parentElement;
  if (!img.naturalWidth || !caixa.clientHeight) return;
  const dif = (img.naturalWidth / img.naturalHeight) / (caixa.clientWidth / caixa.clientHeight);
  img.classList.toggle("preenche", Math.abs(dif - 1) <= TOLERANCIA);
};
const ajustarTodas = raiz => raiz.querySelectorAll(".midia > img").forEach(img =>
  img.complete ? ajustar(img) : img.addEventListener("load", () => ajustar(img), { once: true }));
addEventListener("resize", () => ajustarTodas(document));

const capa = p => {
  if (preenchido(p.imagem)) return `<div class="capa midia"${fundoBorrado(p.imagem)}><img src="${url(p.imagem)}" alt="" loading="lazy"></div>`;
  if (preenchido(p.video)) return `<div class="capa midia"><video src="${url(p.video)}#t=0.5" muted preload="metadata" playsinline tabindex="-1" aria-hidden="true"></video><span class="selo">Vídeo</span></div>`;
  return `<div class="capa vazia" style="background-color:${p.cor}">Imagem em breve</div>`;
};
secProj.innerHTML = `<h2>Projetos</h2><div class="grade">` + PROJETOS.map((p, i) =>
  `<button class="card" data-i="${i}" aria-label="Abrir projeto ${p.titulo}">${capa(p)}
     <div class="card-info"><h3>${p.titulo}</h3><span>${legenda(p)}</span></div></button>`).join("") + `</div>`;
ajustarTodas(secProj);
const bloco = (t, txt) => preenchido(txt) ? `<h4>${t}</h4><p>${txt}</p>` : "";

// ÍCONES
const svg = (d, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
const seta = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
const ic = {
  play: svg(`<path d="M7 4.5v15l13-7.5z" fill="currentColor"/>`, "i-play"),
  pausa: svg(`<path d="M6 4.5h4.5v15H6zM13.5 4.5H18v15h-4.5z" fill="currentColor"/>`, "i-pausa"),
  som: svg(`<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`, "i-som"),
  mudo: svg(`<path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="m16.5 9.5 5 5m0-5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`, "i-mudo"),
  tela: svg(`<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>`)
};

// PLAYER DE VÍDEO PERSONALIZADO
const player = (s, rotulo) => `<div class="player" data-estado="pausado">
  <video src="${url(s)}" preload="metadata" playsinline controlslist="nodownload noplaybackrate" disablepictureinpicture aria-label="${rotulo}"></video>
  <span class="p-aviso" aria-live="polite"></span>
  <button class="player-grande" type="button" aria-label="Reproduzir vídeo">${ic.play}</button>
  <div class="player-barra">
    <button class="p-play" type="button" aria-label="Reproduzir">${ic.play}${ic.pausa}</button>
    <input class="p-tempo" type="range" min="0" max="1000" step="1" value="0" aria-label="Posição do vídeo">
    <span class="p-hora">0:00 / 0:00</span>
    <button class="p-som" type="button" aria-label="Tirar o som">${ic.som}${ic.mudo}</button>
    <button class="p-tela" type="button" aria-label="Tela cheia">${ic.tela}</button>
  </div>
</div>`;
const hora = t => isFinite(t) ? `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}` : "0:00";
const ligarPlayer = el => {
  const v = el.querySelector("video"), barra = el.querySelector(".p-tempo"), txt = el.querySelector(".p-hora");
  const btPlay = el.querySelector(".p-play"), btSom = el.querySelector(".p-som");
  const alternar = () => v.paused ? v.play() : v.pause();
  let espera;
  const mostrar = () => { el.classList.add("ativo"); clearTimeout(espera); espera = setTimeout(() => el.classList.remove("ativo"), 2200); };
  const atualizarTempo = () => {
    const pct = v.duration ? v.currentTime / v.duration * 100 : 0;
    barra.value = pct * 10; barra.style.setProperty("--p", pct + "%");
    txt.textContent = `${hora(v.currentTime)} / ${hora(v.duration)}`;
  };
  // SEGURAR NO CANTO SUPERIOR DIREITO = 2x (solta e volta ao normal)
  const aviso = el.querySelector(".p-aviso");
  let timer, acelerou = false, avisou = false;
  // Canto medido sobre a imagem do vídeo (sem as faixas pretas laterais/superiores)
  const naZona = e => {
    const r = v.getBoundingClientRect(), k = Math.min(r.width / v.videoWidth, r.height / v.videoHeight) || 1;
    const w = v.videoWidth * k || r.width, h = v.videoHeight * k || r.height;
    const x0 = r.left + (r.width - w) / 2, y0 = r.top + (r.height - h) / 2;
    return e.clientX > x0 + w * 0.6 && e.clientX < x0 + w && e.clientY > y0 && e.clientY < y0 + h * 0.5;
  };
  v.addEventListener("pointerdown", e => {
    acelerou = false;
    if (v.paused || !naZona(e)) return;
    timer = setTimeout(() => { acelerou = true; v.playbackRate = 2; aviso.textContent = "2× ▸▸"; el.classList.add("rapido"); }, 350);
  });
  const soltar = () => {
    clearTimeout(timer);
    if (el.classList.contains("rapido")) { v.playbackRate = 1; el.classList.remove("rapido"); }
  };
  ["pointerup", "pointercancel", "pointerleave"].forEach(t => v.addEventListener(t, soltar));
  // Na primeira vez que o vídeo toca, mostra a dica por alguns segundos
  v.addEventListener("play", () => {
    if (avisou) return; avisou = true;
    aviso.textContent = "Segure no canto superior direito para 2×";
    el.classList.add("dica"); setTimeout(() => el.classList.remove("dica"), 3000);
  });
  v.addEventListener("click", () => { if (acelerou) { acelerou = false; return; } alternar(); });
  el.querySelector(".player-grande").addEventListener("click", alternar);
  btPlay.addEventListener("click", alternar);
  v.addEventListener("play", () => { el.dataset.estado = "tocando"; btPlay.setAttribute("aria-label", "Pausar"); mostrar(); });
  v.addEventListener("pause", () => { el.dataset.estado = "pausado"; btPlay.setAttribute("aria-label", "Reproduzir"); });
  v.addEventListener("timeupdate", atualizarTempo);
  v.addEventListener("loadedmetadata", atualizarTempo);
  barra.addEventListener("input", () => { if (v.duration) v.currentTime = barra.value / 1000 * v.duration; atualizarTempo(); });
  btSom.addEventListener("click", () => { v.muted = !v.muted; });
  v.addEventListener("volumechange", () => { el.classList.toggle("mudo", v.muted); btSom.setAttribute("aria-label", v.muted ? "Ativar o som" : "Tirar o som"); });
  el.querySelector(".p-tela").addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (el.requestFullscreen) el.requestFullscreen();
    else if (v.webkitEnterFullscreen) v.webkitEnterFullscreen(); // iPhone
  });
  ["pointermove", "pointerdown"].forEach(t => el.addEventListener(t, mostrar));
};

// CARROSSEL
const carrossel = (itens, titulo) => {
  if (!itens.length) return "";
  const varias = itens.length > 1;
  return `<div class="carrossel" role="region" aria-roledescription="carrossel" aria-label="Fotos do projeto ${titulo}">
    <div class="quadro">
      <div class="trilho" tabindex="0">${itens.map((s, i) => {
        const rotulo = `${ehVideo(s) ? "Vídeo" : "Foto"} ${i + 1} de ${itens.length} do projeto ${titulo}`;
        return `<div class="slide midia"${fundoBorrado(s)}>${ehVideo(s) ? player(s, rotulo)
          : `<img src="${url(s)}" alt="${rotulo}"${i ? ` loading="lazy"` : ""}>`}</div>`;
      }).join("")}</div>
      ${varias ? `<button class="seta anterior" type="button" aria-label="Anterior" hidden>${seta("M15 18l-6-6 6-6")}</button>
      <button class="seta proxima" type="button" aria-label="Próxima">${seta("M9 18l6-6-6-6")}</button>
      <span class="contador" aria-live="polite">1/${itens.length}</span>` : ""}
    </div>
    ${varias ? `<div class="bolinhas" aria-hidden="true">${itens.map((_, i) => `<i${i ? "" : ` class="ativa"`}></i>`).join("")}</div>` : ""}
  </div>`;
};
const pausarVideos = () => janela.querySelectorAll("video").forEach(v => v.pause());
const ligarCarrossel = () => {
  const trilho = janela.querySelector(".trilho"); if (!trilho) return;
  janela.querySelectorAll(".player").forEach(ligarPlayer);
  ajustarTodas(trilho);
  const total = trilho.children.length; if (total < 2) return;
  const ant = janela.querySelector(".anterior"), prox = janela.querySelector(".proxima");
  const contador = janela.querySelector(".contador"), bolinhas = janela.querySelectorAll(".bolinhas i");
  const atual = () => Math.round(trilho.scrollLeft / trilho.clientWidth);
  const ir = i => trilho.scrollTo({ left: Math.max(0, Math.min(total - 1, i)) * trilho.clientWidth });
  let ultimo = 0;
  trilho.addEventListener("scroll", () => {
    const i = atual(); if (i === ultimo) return; ultimo = i;
    contador.textContent = `${i + 1}/${total}`;
    bolinhas.forEach((b, n) => b.classList.toggle("ativa", n === i));
    ant.hidden = i === 0; prox.hidden = i === total - 1;
    pausarVideos(); // ao trocar de item, o vídeo para de tocar
  }, { passive: true });
  ant.addEventListener("click", () => ir(atual() - 1));
  prox.addEventListener("click", () => ir(atual() + 1));
  trilho.addEventListener("keydown", e => {
    if (e.target.matches("input")) return; // setas na barra do vídeo controlam o vídeo
    if (e.key === "ArrowLeft") { e.preventDefault(); ir(atual() - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); ir(atual() + 1); }
  });
};

secProj.addEventListener("click", e => {
  const c = e.target.closest(".card"); if (!c) return;
  const p = PROJETOS[c.dataset.i];
  const cores = (p.paleta || []).map(x => String(x).trim()).filter(Boolean);
  const itens = [p.imagem, ...(p.mockups || []), p.video].filter(preenchido);
  janela.innerHTML = `<button class="btn fechar" type="button" aria-label="Fechar"><span class="fechar-texto">Fechar</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button><div class="caso">
    ${carrossel(itens, p.titulo)}
    <h3>${p.titulo}</h3>${legenda(p) ? `<p class="cat">${legenda(p)}</p>` : ""}
    ${bloco("Contexto", p.contexto)}${bloco("Problema", p.problema)}${bloco("Conceito", p.conceito)}${bloco("Captação", p.captacao)}
    ${bloco("Tipografia", p.tipografia)}${bloco("Composição", p.composicao)}${bloco("Iluminação e Enquadramento", p.iluminacao)}
    ${cores.length ? `<h4>Paleta de cores</h4><div class="paleta">${cores.map(c => `<i tabindex="0" data-hex="${c}" aria-label="Cor ${c}"></i>`).join("")}</div>` : ""}
    ${bloco("Resultado final", p.resultado)}${bloco("Aplicação prática", p.aplicacao)}</div>`;
  janela.querySelectorAll(".paleta i").forEach(i => i.style.background = i.dataset.hex);
  document.documentElement.classList.add("caso-aberto");
  if (!history.state?.caso) history.pushState({ caso: true }, "");
  janela.showModal();
  janela.querySelector(".caso").scrollTop = 0;
  ligarCarrossel();
});
janela.addEventListener("click", e => { if (e.target === janela || e.target.closest(".fechar")) janela.close(); });
// Com o case aberto, só o conteúdo do case rola; a página por trás fica parada.
// Ao fechar, o vídeo (se estiver tocando) para.
janela.addEventListener("close", () => {
  pausarVideos(); document.documentElement.classList.remove("caso-aberto");
  if (history.state?.caso) history.back(); // fechou pelo botão/Esc: tira a entrada extra do histórico
});
// Botão "voltar" do celular (ou do navegador) fecha o case em vez de sair do site.
addEventListener("popstate", () => { if (janela.open) janela.close(); });
