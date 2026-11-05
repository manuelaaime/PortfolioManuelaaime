// Monta a seção CONTATO: botão do WhatsApp (com mensagem pronta), e-mail e redes. Dados em dados/perfil.js.
const iconesContato = {
  linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 8.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3V10Zm5 0h2.9v1.4h.1a3.2 3.2 0 0 1 2.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3V10Z"/></svg>`,
  behance: `<svg viewBox="0 0 32 24" aria-hidden="true"><path d="M2 3h8.2c4 0 6 1.5 6 4.5 0 1.8-.9 3-2.4 3.7 2.2.6 3.4 2.2 3.4 4.5 0 3.5-2.8 5.3-6.5 5.3H2V3Zm4 3v4h3.8c1.6 0 2.5-.6 2.5-2s-.9-2-2.5-2H6Zm0 7v4.5h4.2c1.8 0 2.9-.7 2.9-2.3 0-1.5-1.1-2.2-2.9-2.2H6Zm14.2-8h8v2.2h-8V5Zm10.7 10.1h-7.5c.1 1.7 1 2.7 2.6 2.7 1 0 1.8-.5 2.1-1.2h2.7c-.8 2.6-2.6 3.9-5 3.9-3.4 0-5.5-2.2-5.5-5.6 0-3.3 2.2-5.7 5.5-5.7 3.4 0 5.2 2.5 5.1 5.9Zm-7.5-1.9h4.5c-.2-1.3-1-2-2.2-2-1.3 0-2.1.8-2.3 2Z"/></svg>`,
  instagram: `<svg class="instagram" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="ponto" cx="17.5" cy="6.8" r="1"/></svg>`
};
const iconeWhats = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z"/></svg>`;
// Link do WhatsApp com a mensagem pronta
const linkWhats = `https://wa.me/${PERFIL.whatsapp}?text=${encodeURIComponent(PERFIL.mensagemWhatsapp)}`;
// Dois blocos: o convite com a ação principal (WhatsApp) e, ao lado, os outros canais.
document.getElementById("contato").innerHTML = `<h2>Contato</h2>
  <aside class="cartao-contato" aria-label="Informações de contato">
    <div class="convite">
      <h3>Vamos conversar?</h3>
      <p>Estou disponível para projetos, serviços e novas oportunidades.</p>
      <a class="btn-whats" href="${linkWhats}" target="_blank" rel="noopener noreferrer">${iconeWhats}Conversar no WhatsApp</a>
    </div>
    <div class="canais">
      <div class="grupo">
        <p class="rotulo">Ou através de:</p>
        <a class="email-contato" href="mailto:${PERFIL.email}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>${PERFIL.email}</a>
      </div>
      <div class="grupo">
        <p class="rotulo" id="rotulo-redes">Redes sociais</p>
        <ul class="lista" aria-labelledby="rotulo-redes">${PERFIL.links.map(l => {
          const icone = iconesContato[l.nome.toLowerCase()] || `<span class="icone-texto" aria-hidden="true">${l.nome.slice(0, 2)}</span>`;
          return `<li><a href="${l.url}" target="_blank" rel="noopener noreferrer" aria-label="${l.nome} (abre em nova aba)" title="${l.nome}">${icone}</a></li>`;
        }).join("")}</ul>
      </div>
    </div>
  </aside>`;
