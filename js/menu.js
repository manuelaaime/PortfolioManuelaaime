// Menu do celular, logo e rodapé
document.getElementById("logo").textContent = PERFIL.nome;
document.getElementById("rodape-texto").textContent = "© " + new Date().getFullYear() + " " + PERFIL.nome;
const btn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
const marcar = aberto => { btn.setAttribute("aria-expanded", aberto); btn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu"); };
btn.addEventListener("click", () => marcar(menu.classList.toggle("aberto")));
const fecharMenu = () => { menu.classList.remove("aberto"); marcar(false); };
menu.addEventListener("click", e => { if (e.target.tagName === "A") fecharMenu(); });
// Fecha o menu ao tocar fora dele ou apertar Esc
document.addEventListener("click", e => { if (menu.classList.contains("aberto") && !menu.contains(e.target) && !btn.contains(e.target)) fecharMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && menu.classList.contains("aberto")) { fecharMenu(); btn.focus(); } });

// Bloqueia o menu do botão direito / toque longo e o arrastar em imagens e vídeos
["contextmenu", "dragstart"].forEach(t => document.addEventListener(t, e => {
  if (e.target.closest("img, video, .midia, .player")) e.preventDefault();
}));
