(() => {
  const loader = document.querySelector('#loader');
  const progressBar = document.querySelector('#loader-progress');
  const percentLabel = document.querySelector('#loader-percent');
  const statusLabel = document.querySelector('#loader-status');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function finishLoading() {
    if (!loader) return;
    progressBar.style.width = '100%';
    percentLabel.textContent = '100%';
    statusLabel.textContent = 'INTERFACE READY';
    window.setTimeout(() => loader.classList.add('loader--out'), reduceMotion ? 0 : 180);
    window.setTimeout(() => loader.remove(), reduceMotion ? 50 : 800);
  }

  if (loader) {
    let progress = 0;
    const progressTimer = window.setInterval(() => {
      progress = Math.min(progress + Math.ceil(Math.random() * 12), 92);
      progressBar.style.width = `${progress}%`;
      percentLabel.textContent = `${String(progress).padStart(3, '0')}%`;
    }, 90);

    const started = Date.now();
    const onReady = () => {
      window.clearInterval(progressTimer);
      window.setTimeout(finishLoading, Math.max(0, 850 - (Date.now() - started)));
    };
    if (document.readyState === 'complete') onReady();
    else window.addEventListener('load', onReady, { once: true });
  }
})();
