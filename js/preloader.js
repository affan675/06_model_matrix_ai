/* ==============================================
   ModelMatrix – Preloader with Dynamic Messages
   ============================================== */
(function() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('preloaderBar');
  const messageEl = document.getElementById('preloaderMessage');
  const percentEl = document.getElementById('preloaderPercent');
  const mainContent = document.getElementById('mainContent');

  const messages = {
    30: "Spinning up neural clusters…",
    70: "Comparing model matrices…",
    100: "Ready!"
  };

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1;
    if (progress > 100) progress = 100;

    progressBar.style.width = progress + '%';
    percentEl.textContent = progress + '%';

    // Change message at milestones
    if (messages[progress]) {
      messageEl.textContent = messages[progress];
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        mainContent.style.opacity = '1';
        // Remove preloader from DOM after fade
        setTimeout(() => {
          if (preloader) preloader.remove();
        }, 700);
      }, 200);
    }
  }, 60); // total ~2 sec
})();