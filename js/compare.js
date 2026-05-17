/* ==============================================
   ModelMatrix – Comparison Modal Logic
   ============================================== */
(function() {
  const modalOverlay = document.getElementById('compareModal');
  const modalBody = document.getElementById('modalBody');
  const btnCompareOpen = document.getElementById('btnCompareOpen');
  const btnModalClose = document.getElementById('btnModalClose');
  const btnModalClose2 = document.getElementById('btnModalClose2');
  const btnModalClear = document.getElementById('btnModalClear');

  function openModal() {
    const selectedNames = window.getSelectedModels ? window.getSelectedModels() : new Set();
    if (selectedNames.size < 2) return;

    const selectedModelsArray = models.filter(m => selectedNames.has(m.name));
    modalBody.innerHTML = '';

    selectedModelsArray.forEach(model => {
      const card = document.createElement('div');
      card.className = 'modal-model-card';
      card.innerHTML = `
        <h3>${model.name} <span style="color:#8B93A7;">(${model.provider})</span></h3>
        <div class="bar-group" style="margin:0.6rem 0;">
          <div class="bar"><span class="bar__label">Intelligence</span><div class="bar__track"><div class="bar__fill bar__fill--intelligence" style="width:${model.intelligence}%"></div></div><span class="bar__value">${model.intelligence}</span></div>
          <div class="bar"><span class="bar__label">Speed</span><div class="bar__track"><div class="bar__fill bar__fill--speed" style="width:${model.speed}%"></div></div><span class="bar__value">${model.speed}</span></div>
          <div class="bar"><span class="bar__label">Cost</span><div class="bar__track"><div class="bar__fill bar__fill--cost" style="width:${model.cost}%"></div></div><span class="bar__value">${model.cost}</span></div>
        </div>
        <p><strong>Context:</strong> ${model.context}</p>
        <p><strong>Release:</strong> ${model.release}</p>
        <p><strong>Price:</strong> ${model.priceInput}</p>
      `;
      modalBody.appendChild(card);
    });

    modalOverlay.style.display = 'flex';
    modalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modalOverlay.style.display = 'none';
    modalOverlay.setAttribute('aria-hidden', 'true');
  }

  function clearAndClose() {
    // Clear selections
    if (window.getSelectedModels) {
      const sel = window.getSelectedModels();
      sel.clear();
      // Uncheck all checkboxes
      document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
      // Trigger update of compare bar via custom event or direct function if accessible
      // Since main.js has updateCompareBar, we can dispatch a custom event
      window.dispatchEvent(new Event('compareCleared'));
    }
    closeModal();
  }

  btnCompareOpen.addEventListener('click', openModal);
  btnModalClose.addEventListener('click', closeModal);
  btnModalClose2.addEventListener('click', closeModal);
  btnModalClear.addEventListener('click', clearAndClose);

  // Listen for clear event from main.js
  window.addEventListener('compareCleared', () => {
    // main.js will update bar, but we ensure modal closes if open
    if (modalOverlay.style.display === 'flex') closeModal();
  });

  // Close on overlay click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
})();