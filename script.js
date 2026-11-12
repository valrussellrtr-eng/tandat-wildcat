(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });

  const gallery = document.querySelector('.photo-slideshow');
  if (gallery) {
    const slides = [...gallery.querySelectorAll('.slide')];
    const dotsWrap = gallery.querySelector('.slide-dots');
    let current = 0, timer;
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button'; dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Show photo ' + (i + 1));
      dot.addEventListener('click', () => show(i)); dotsWrap.appendChild(dot);
    });
    const dots = [...dotsWrap.children];
    function show(n) {
      current = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle('active', i === current));
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      restart();
    }
    function restart() { clearInterval(timer); timer = setInterval(() => show(current + 1), 5000); }
    gallery.querySelector('.prev').addEventListener('click', () => show(current - 1));
    gallery.querySelector('.next').addEventListener('click', () => show(current + 1));
    gallery.addEventListener('mouseenter', () => clearInterval(timer));
    gallery.addEventListener('mouseleave', restart); restart();
  }

  const carousel = document.querySelector('.reviews-carousel');
  if (carousel) {
    const slides = [...carousel.querySelectorAll('.review-slide')];
    const dots = [...carousel.querySelectorAll('.review-dot')];
    let current = 0, timer;
    function show(n) {
      current = (n + slides.length) % slides.length;
      slides.forEach((s, i) => { s.hidden = i !== current; s.classList.toggle('active', i === current); });
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
    function restart() { clearInterval(timer); timer = setInterval(() => show(current + 1), 6500); }
    carousel.querySelector('[data-review-prev]').addEventListener('click', () => { show(current - 1); restart(); });
    carousel.querySelector('[data-review-next]').addEventListener('click', () => { show(current + 1); restart(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { show(i); restart(); }));
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', restart);
    carousel.addEventListener('focusin', () => clearInterval(timer));
    carousel.addEventListener('focusout', restart);
    show(0); restart();
  }

  const popup = document.getElementById('sprayTanPopup');
  if (popup && !sessionStorage.getItem('tanDatSprayPopupSeen')) {
    popup.hidden = false; document.body.classList.add('popup-open');
    const close = () => { popup.hidden = true; document.body.classList.remove('popup-open'); sessionStorage.setItem('tanDatSprayPopupSeen', '1'); };
    popup.querySelectorAll('[data-close-popup]').forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !popup.hidden) close(); });
  }
})();