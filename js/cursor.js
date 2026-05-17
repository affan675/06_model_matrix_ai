/* ==============================================
   ModelMatrix – Custom Cursor & Touch Detection
   ============================================== */
(function() {
  const outer = document.getElementById('cursorOuter');
  const inner = document.getElementById('cursorInner');
  const body = document.body;

  // Detect touch device
  const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) {
    body.classList.add('touch-device');
    if (outer) outer.style.display = 'none';
    if (inner) inner.style.display = 'none';
    return; // stop custom cursor
  }

  let mouseX = 0, mouseY = 0;
  let outerX = 0, outerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth outer circle animation (inner moves automatically as child)
  function animate() {
    outerX += (mouseX - outerX) * 0.2;
    outerY += (mouseY - outerY) * 0.2;
    outer.style.transform = `translate(${outerX}px, ${outerY}px)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Hover effect on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .provider-card, .model-card, .chip__remove, input[type="checkbox"]');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => outer.classList.add('hover'));
    el.addEventListener('mouseleave', () => outer.classList.remove('hover'));
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    outer.style.opacity = '0';
    if (inner) inner.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    outer.style.opacity = '1';
    if (inner) inner.style.opacity = '1';
  });
})();