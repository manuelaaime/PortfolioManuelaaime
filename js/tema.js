// Tema azul ou branco. Roda no <head> para a página já abrir no tema certo.
// Sem escolha salva, segue o modo claro/escuro do aparelho.
(() => {
  const raiz = document.documentElement;
  let salvo = null;
  try { salvo = localStorage.getItem("tema"); } catch (e) {}
  const aplicar = t => {
    raiz.dataset.tema = t;
    const btn = document.getElementById("tema-btn");
    if (!btn) return;
    const outro = t === "branco" ? "azul" : "branco";
    btn.querySelector("span").textContent = outro === "branco" ? "Branco" : "Azul";
    btn.setAttribute("aria-label", "Mudar para o tema " + outro);
  };
  aplicar(salvo || (matchMedia("(prefers-color-scheme: light)").matches ? "branco" : "azul"));
  document.addEventListener("DOMContentLoaded", () => {
    aplicar(raiz.dataset.tema);
    document.getElementById("tema-btn").addEventListener("click", () => {
      const novo = raiz.dataset.tema === "branco" ? "azul" : "branco";
      aplicar(novo);
      try { localStorage.setItem("tema", novo); } catch (e) {}
    });
  });
})();
