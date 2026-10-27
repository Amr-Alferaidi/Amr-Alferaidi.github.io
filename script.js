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
})();
