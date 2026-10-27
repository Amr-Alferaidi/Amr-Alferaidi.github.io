(() => {
  const menuButton = document.querySelector('#menu-toggle');
  const navigation = document.querySelector('#primary-nav');
  menuButton?.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '✕' : '☰';
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  }));
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => {
      const fallback = img.dataset.fallback;
      if (fallback && !img.src.endsWith(fallback)) img.src = fallback;
    });
  });

  // Project screenshots: accessible lightbox using the native dialog element.
  const dialog = document.querySelector('#project-image-dialog');
  const dialogImg = document.querySelector('#image-dialog-img');
  const dialogTitle = document.querySelector('#image-dialog-title');
  document.querySelectorAll('[data-open-image]').forEach(button => button.addEventListener('click', () => {
    const card = button.closest('.project-card');
    const photo = card?.querySelector('.project-image img');
    if (!photo || !dialog || !dialogImg) return;
    dialogImg.src = photo.currentSrc || photo.src;
    dialogImg.alt = photo.alt;
    dialogTitle.textContent = card.querySelector('h3')?.textContent?.trim() || 'Project screenshot';
    if (typeof dialog.showModal === 'function') dialog.showModal();
  }));
  document.querySelector('.dialog-close')?.addEventListener('click', () => dialog?.close());
  dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
})();
