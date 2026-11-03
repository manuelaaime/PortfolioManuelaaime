// Menu do celular, logo e rodapé
document.getElementById("logo").textContent = PERFIL.nome;
document.getElementById("rodape-texto").textContent = "© " + new Date().getFullYear() + " " + PERFIL.nome;
const btn = document.querySelector(".menu-btn"), menu = document.getElementById("menu");
btn.addEventListener("click", () => btn.setAttribute("aria-expanded", menu.classList.toggle("aberto")));
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("aberto"); btn.setAttribute("aria-expanded", "false"); } });
