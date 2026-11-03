// Monta a seção CONTATO. O formulário abre o seu app de e-mail com a mensagem pronta.
document.getElementById("contato").innerHTML = `<h2>Contato</h2><div class="miolo">
  <div><p>Vamos conversar sobre um projeto, estágio ou oportunidade.</p>
  <ul class="lista"><li><a href="mailto:${PERFIL.email}">${PERFIL.email}</a></li>
  ${PERFIL.links.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.nome}</a></li>`).join("")}</ul></div>
  <form id="form"><label>Nome<input name="nome" required></label>
  <label>E-mail<input type="email" name="email" required></label>
  <label>Mensagem<textarea name="msg" rows="5" required></textarea></label>
  <button class="btn" type="submit">Enviar mensagem</button></form></div>`;
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault(); const f = new FormData(e.target);
  location.href = `mailto:${PERFIL.email}?subject=${encodeURIComponent("Contato pelo portfólio: " + f.get("nome"))}&body=${encodeURIComponent(f.get("msg") + "\n\n" + f.get("email"))}`;
});
