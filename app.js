// Flat Free - Interactive Web App JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // --- SPA Router ---
  const navLinks = document.querySelectorAll('.nav-link');
  const pageViews = document.querySelectorAll('.page-view');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  function navigateTo(targetId) {
    // Normalize page id
    let pageId = targetId.replace('#', '');
    if (!pageId || pageId === '') pageId = 'home';

    // Verify view exists
    const targetView = document.getElementById(`view-${pageId}`);
    if (!targetView) return;

    // Deactivate all views & nav links
    pageViews.forEach(view => view.classList.remove('active'));
    navLinks.forEach(link => {
      link.classList.remove('active-nav');
      if (link.getAttribute('href') === `#${pageId}`) {
        link.classList.add('active-nav');
      }
    });

    // Activate target view
    targetView.classList.add('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu if open
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }

  // Bind click handlers to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetHash = link.getAttribute('href');
      if (targetHash && targetHash.startsWith('#')) {
        e.preventDefault();
        window.location.hash = targetHash;
        navigateTo(targetHash);
      }
    });
  });

  // Handle hash change events & direct deep links
  window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash);
  });

  // Initialize view from current URL hash
  if (window.location.hash) {
    navigateTo(window.location.hash);
  } else {
    navigateTo('home');
  }

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // --- Fleet ROI Calculator ---
  const fleetSizeInput = document.getElementById('calc-fleet-size');
  const fleetSizeVal = document.getElementById('calc-fleet-size-val');
  const puncturesInput = document.getElementById('calc-punctures');
  const puncturesVal = document.getElementById('calc-punctures-val');
  const downtimeInput = document.getElementById('calc-downtime');
  const downtimeVal = document.getElementById('calc-downtime-val');

  const resultSavingsYear = document.getElementById('res-savings-year');
  const resultHoursSaved = document.getElementById('res-hours-saved');
  const resultRoiPct = document.getElementById('res-roi-pct');
  const resultBar = document.getElementById('res-bar');

  function updateCalculator() {
    if (!fleetSizeInput || !puncturesInput || !downtimeInput) return;

    const fleetSize = parseInt(fleetSizeInput.value) || 10;
    const puncturesPerMonth = parseFloat(puncturesInput.value) || 2;
    const downtimeCost = parseInt(downtimeInput.value) || 450;

    // Display values
    fleetSizeVal.textContent = fleetSize;
    puncturesVal.textContent = puncturesPerMonth;
    downtimeVal.textContent = `R$ ${downtimeCost.toLocaleString('pt-BR')}`;

    // Calculation logic
    const totalPuncturesYear = fleetSize * puncturesPerMonth * 12;
    const preventedPuncturesYear = Math.round(totalPuncturesYear * 0.92); // Flat Free seals 92%+ punctures
    const annualDowntimeSavings = preventedPuncturesYear * downtimeCost;
    const hoursSaved = preventedPuncturesYear * 2.5; // Average 2.5h machine downtime per puncture
    const estimatedProductivityGain = hoursSaved * 120; // R$ 120/h average machine productivity

    const totalAnnualSavings = annualDowntimeSavings + estimatedProductivityGain;

    if (resultSavingsYear) {
      resultSavingsYear.textContent = `R$ ${Math.round(totalAnnualSavings).toLocaleString('pt-BR')}`;
    }
    if (resultHoursSaved) {
      resultHoursSaved.textContent = `${Math.round(hoursSaved).toLocaleString('pt-BR')}h`;
    }
    if (resultRoiPct) {
      resultRoiPct.textContent = `380%`;
    }
    if (resultBar) {
      const pct = Math.min(100, Math.max(20, Math.round((fleetSize / 100) * 100)));
      resultBar.style.width = `${pct}%`;
    }
  }

  // Attach event listeners to range inputs
  [fleetSizeInput, puncturesInput, downtimeInput].forEach(inp => {
    if (inp) {
      inp.addEventListener('input', updateCalculator);
    }
  });
  updateCalculator();

  // --- Video Modal Handler ---
  const videoModal = document.getElementById('video-modal');
  const videoElement = document.getElementById('modal-video');
  const closeModalBtn = document.getElementById('close-video-modal');

  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const videoSrc = card.getAttribute('data-video') || 'assets/demo1.mp4';
      if (videoElement) {
        videoElement.src = videoSrc;
      }
      if (videoModal) {
        videoModal.classList.remove('hidden');
        videoModal.classList.add('flex');
        videoElement.play().catch(() => {});
      }
    });
  });

  if (closeModalBtn && videoModal) {
    closeModalBtn.addEventListener('click', () => {
      videoModal.classList.add('hidden');
      videoModal.classList.remove('flex');
      if (videoElement) {
        videoElement.pause();
      }
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.add('hidden');
        videoModal.classList.remove('flex');
        if (videoElement) {
          videoElement.pause();
        }
      }
    });
  }

  // --- Quote Form Handler ---
  const quoteForm = document.getElementById('quote-form');
  const quoteModal = document.getElementById('quote-success-modal');
  const closeQuoteModal = document.getElementById('close-quote-modal');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quote-name')?.value || 'Cliente';
      const company = document.getElementById('quote-company')?.value || 'Empresa';
      
      if (quoteModal) {
        const clientNameEl = document.getElementById('modal-client-name');
        if (clientNameEl) clientNameEl.textContent = `${name} (${company})`;
        quoteModal.classList.remove('hidden');
        quoteModal.classList.add('flex');
      }

      quoteForm.reset();
    });
  }

  if (closeQuoteModal && quoteModal) {
    closeQuoteModal.addEventListener('click', () => {
      quoteModal.classList.add('hidden');
      quoteModal.classList.remove('flex');
    });
  }
});
