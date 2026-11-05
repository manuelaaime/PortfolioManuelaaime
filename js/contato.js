// Monta a seção CONTATO. O formulário abre o seu app de e-mail com a mensagem pronta.
const iconesContato = {
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3V10Zm5 0h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3V10Z"/></svg>`,
  behance: `<svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 3h8.2c4 0 6 1.5 6 4.5 0 1.8-.9 3-2.4 3.7 2.2.6 3.4 2.2 3.4 4.5 0 3.5-2.8 5.3-6.5 5.3H2V3Zm4 3v4h3.8c1.6 0 2.5-.6 2.5-2s-.9-2-2.5-2H6Zm0 7v4.5h4.2c1.8 0 2.9-.7 2.9-2.3 0-1.5-1.1-2.2-2.9-2.2H6Zm14.2-8h8v2.2h-8V5Zm10.7 10.1h-7.5c.1 1.7 1 2.7 2.6 2.7 1 0 1.8-.5 2.1-1.2h2.7c-.8 2.6-2.6 3.9-5 3.9-3.4 0-5.5-2.2-5.5-5.6 0-3.3 2.2-5.7 5.5-5.7 3.4 0 5.2 2.5 5.1 5.9Zm-7.5-1.9h4.5c-.2-1.3-1-2-2.2-2-1.3 0-2.1.8-2.3 2Z"/></svg>`,
  instagram: `<svg class="instagram" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="ponto" cx="17.5" cy="6.8" r="1"/></svg>`
};
document.getElementById("contato").innerHTML = `<h2>Contato</h2><div class="miolo">
  <form id="form">
    <label>Nome<input name="nome" autocomplete="name" required></label>
    <label>E-mail<input type="email" name="email" autocomplete="email" required></label>
    <label>Mensagem<textarea name="msg" rows="5" required></textarea></label>
    <button class="btn" type="submit">Enviar mensagem</button>
  </form>
  <aside class="cartao-contato" aria-label="Informações de contato">
    <div><h3>Vamos conversar?</h3><p>Estou disponível para projetos, estágios e novas oportunidades.</p></div>
    <div><h3>Contato</h3><a class="email-contato" href="mailto:${PERFIL.email}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>${PERFIL.email}</a></div>
    <div><h3>Redes sociais</h3><ul class="lista">${PERFIL.links.map(l => {
      const icone = iconesContato[l.nome.toLowerCase()] || `<span class="icone-texto" aria-hidden="true">${l.nome.slice(0, 2)}</span>`;
      return `<li><a href="${l.url}" target="_blank" rel="noopener noreferrer" aria-label="${l.nome} (abre em nova aba)" title="${l.nome}">${icone}</a></li>`;
    }).join("")}</ul></div>
  </aside>
</div>`;
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault(); const f = new FormData(e.target);
  location.href = `mailto:${PERFIL.email}?subject=${encodeURIComponent("Contato pelo portfólio: " + f.get("nome"))}&body=${encodeURIComponent(f.get("msg") + "\n\n" + f.get("email"))}`;
});
