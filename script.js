const somErro = new Audio('https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg');

const app = document.getElementById('app');

function telaInicial() {
  app.innerHTML = `
    <h2>🍣 Deseja receber sushi de graça por Sedex?</h2>
    <div style="text-align:center;">
      <button id="cancelar">Cancelar</button>
      <button id="receber">Receber</button>
    </div>
  `;
  document.getElementById('cancelar').onclick = () => {
    app.innerHTML = `
      <h2>Cancelado. Até mais! 😽</h2>
      <div style="text-align: center; margin-top: 20px;">
        <button id="voltar">Voltar</button>
      </div>
    `;
    document.getElementById('voltar').onclick = telaInicial;
  };
  document.getElementById('receber').onclick = () => {
    telaEnviando();
  };
}

function telaEnviando() {
  app.innerHTML = `
    <div style="text-align:center; font-size: 2rem;">🚚</div>
    <h2>Enviando sushi por Sedex...</h2>
    <div class="spinner"></div>
  `;
  setTimeout(() => {
    telaErro();
  }, 3500);
}

function telaErro() {
  app.innerHTML = `
    <div class="win98-error piscar">
      <div class="win98-title-bar">
        <span>Erro Fatal!</span>
        <button class="win98-close">✕</button>
      </div>
      <div class="win98-body">
        <div class="win98-icon-text">
          <div style="font-size: 32px; line-height: 1;">⚠️</div>
          <span>
            Falha no envio do sushi.<br />
            Motivo: a beleza do destinatário causou instabilidade no sistema.
          </span>
        </div>
        <div class="win98-buttons" style="display: inline-flex; justify-content: center; gap: 16px;">
          <button id="retry">Tentar novamente</button>
          <button id="cancelError">Cancelar</button>
        </div>
      </div>
    </div>
  `;

  somErro.play(); // Só aqui, na exibição da tela erro

  document.getElementById("retry").onclick = () => {
    telaEnviando(); // Vai direto pro caminhão e spinner
  };
  document.getElementById("cancelError").onclick = () => {
    app.innerHTML = `
      <h2>Envio cancelado. Tome mais cuidado! Estamos em manutenção após tal fator crítico. Volte sempre! ❤️</h2>
      <div style="text-align: center; margin-top: 20px;">
        <button id="voltar">Voltar</button>
      </div>
    `;
    document.getElementById('voltar').onclick = telaInicial;
  };
  document.querySelector(".win98-close").onclick = telaInicial;
}

// inicializa tudo
telaInicial();
