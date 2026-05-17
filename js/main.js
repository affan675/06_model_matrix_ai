/* ==============================================
   ModelMatrix – Main UI Rendering & Interaction
   ============================================== */
(function() {
  const providerGrid = document.getElementById('providerGrid');
  const modelGrid = document.getElementById('modelGrid');
  const modelSection = document.getElementById('modelSection');
  const providerSection = document.getElementById('providerSection');
  const emptyState = document.getElementById('emptyState');
  const modelSectionTitle = document.getElementById('modelSectionTitle');
  const btnShowAll = document.getElementById('btnShowAll');
  const compareBar = document.getElementById('compareBar');
  const compareBarChips = document.getElementById('compareBarChips');
  const btnCompareOpen = document.getElementById('btnCompareOpen');
  const btnCompareClear = document.getElementById('btnCompareClear');

  // State
  let selectedProvider = null;
  let selectedModels = new Set(); // store model names for comparison

  // ---- Render Provider Cards ----
  const providers = [...new Set(models.map(m => m.provider))];
  const providerIcons = {
    "Anthropic": "🧠", "OpenAI": "🤖", "Google": "🔍", "DeepSeek": "🐋",
    "Meta": "🦙", "Mistral": "🌬️", "Perplexity": "🔎", "xAI": "🚀",
    "Z.AI": "🇨🇳", "NVIDIA": "💻", "Cohere": "🔗"
  };

  function renderProviders() {
    providerGrid.innerHTML = '';
    providers.forEach(prov => {
      const card = document.createElement('div');
      card.className = 'provider-card';
      card.innerHTML = `
        <span class="provider-card__icon">${providerIcons[prov] || '⚡'}</span>
        <span class="provider-card__name">${prov}</span>
        <span class="provider-card__desc">${prov} models</span>
      `;
      card.addEventListener('click', () => filterByProvider(prov));
      providerGrid.appendChild(card);
    });
  }

  function filterByProvider(prov) {
    selectedProvider = prov;
    providerSection.style.display = 'none';
    modelSection.style.display = 'block';
    emptyState.style.display = 'none';
    modelSectionTitle.textContent = `${prov} Models`;
    btnShowAll.style.display = 'inline-block';
    renderModelCards(prov);
  }

  btnShowAll.addEventListener('click', () => {
    selectedProvider = null;
    providerSection.style.display = 'block';
    modelSection.style.display = 'none';
    emptyState.style.display = 'block';
    btnShowAll.style.display = 'none';
    modelGrid.innerHTML = '';
  });

  // ---- Render Model Cards ----
  function renderModelCards(provider) {
    const filtered = models.filter(m => m.provider === provider);
    modelGrid.innerHTML = '';
    if (filtered.length === 0) {
      modelGrid.innerHTML = '<p>No models found.</p>';
      return;
    }
    filtered.forEach(model => {
      const card = document.createElement('div');
      card.className = 'model-card';
      card.innerHTML = `
        <div class="model-card__header">
          <span class="model-card__name">${model.name}</span>
          <label class="model-card__check">
            <input type="checkbox" class="compare-checkbox" data-model="${model.name}" ${selectedModels.has(model.name) ? 'checked' : ''}>
            Compare
          </label>
        </div>
        <div class="bar-group">
          <div class="bar">
            <span class="bar__label">Intelligence</span>
            <div class="bar__track"><div class="bar__fill bar__fill--intelligence" style="width:${model.intelligence}%"></div></div>
            <span class="bar__value">${model.intelligence}</span>
          </div>
          <div class="bar">
            <span class="bar__label">Speed</span>
            <div class="bar__track"><div class="bar__fill bar__fill--speed" style="width:${model.speed}%"></div></div>
            <span class="bar__value">${model.speed}</span>
          </div>
          <div class="bar">
            <span class="bar__label">Cost</span>
            <div class="bar__track"><div class="bar__fill bar__fill--cost" style="width:${model.cost}%"></div></div>
            <span class="bar__value">${model.cost}</span>
          </div>
        </div>
        <div class="model-card__footer">
          <a href="${model.url}" target="_blank" rel="noopener noreferrer" class="btn--try">
            <i class="fa-solid fa-up-right-from-square"></i> Try on ${model.provider}
          </a>
        </div>
      `;
      modelGrid.appendChild(card);
    });

    // Attach checkbox listeners
    document.querySelectorAll('.compare-checkbox').forEach(cb => {
      cb.addEventListener('change', handleCompareCheckbox);
    });
  }

  // ---- Compare Checkbox Logic ----
  function handleCompareCheckbox(e) {
    const modelName = e.target.dataset.model;
    if (e.target.checked) {
      if (selectedModels.size >= 4) {
        alert('You can compare up to 4 models only.');
        e.target.checked = false;
        return;
      }
      selectedModels.add(modelName);
    } else {
      selectedModels.delete(modelName);
    }
    updateCompareBar();
  }

  function updateCompareBar() {
    if (selectedModels.size === 0) {
      compareBar.style.display = 'none';
      return;
    }
    compareBar.style.display = 'flex';
    compareBarChips.innerHTML = '';
    selectedModels.forEach(name => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.innerHTML = `${name} <span class="chip__remove" data-model="${name}">✕</span>`;
      compareBarChips.appendChild(chip);
    });
    btnCompareOpen.disabled = selectedModels.size < 2;

    // Remove chip listeners
    document.querySelectorAll('.chip__remove').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const name = e.target.dataset.model;
        selectedModels.delete(name);
        // Uncheck corresponding checkbox
        document.querySelectorAll('.compare-checkbox').forEach(cb => {
          if (cb.dataset.model === name) cb.checked = false;
        });
        updateCompareBar();
      });
    });
  }

  btnCompareClear.addEventListener('click', () => {
    selectedModels.clear();
    document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
    updateCompareBar();
  });

  // Expose selected models for compare.js
  window.getSelectedModels = () => selectedModels;

  // Initialize
  renderProviders();
  updateCompareBar();
})();