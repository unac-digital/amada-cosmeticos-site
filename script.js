(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');
  const menuLinks = menu?.querySelectorAll('a') ?? [];

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu?.classList.toggle('is-open', !isOpen);
  });

  menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  const hero = document.querySelector('.hero');
  const swatches = document.querySelector('.swatch-stage');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  hero?.addEventListener('pointermove', (event) => {
    if (!swatches || reducedMotion.matches || event.pointerType === 'touch') return;
    const bounds = hero.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;
    swatches.style.setProperty('--mx', `${x}px`);
    swatches.style.setProperty('--my', `${y}px`);
  });

  hero?.addEventListener('pointerleave', () => {
    swatches?.style.setProperty('--mx', '0px');
    swatches?.style.setProperty('--my', '0px');
  });

  const copyButton = document.querySelector('#copy-message');
  const message = document.querySelector('#message-text');
  const status = document.querySelector('#copy-status');

  const legacyCopy = (text) => {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    return copied;
  };

  copyButton?.addEventListener('click', async () => {
    const text = message?.textContent?.trim();
    if (!text || !status) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else if (!legacyCopy(text)) {
        throw new Error('copy unavailable');
      }
      status.textContent = 'Mensagem copiada. Agora é só colar no canal que você preferir.';
      copyButton.textContent = 'Mensagem copiada';
    } catch {
      status.textContent = 'Não foi possível copiar automaticamente. Selecione o texto acima e copie manualmente.';
    }
  });
})();
