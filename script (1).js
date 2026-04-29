// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.about-grid, .skill-bar-item, .cert-card, .project-card, .contact-item, section h2, .contact-sub'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Stagger cert & project cards
document.querySelectorAll('.cert-card, .project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// Animate skill bars when they enter view
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-bar-fill');
      if (fill) fill.style.width = fill.dataset.width + '%';
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-bar-item').forEach(item => barObserver.observe(item));

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? '#f5f2ec' : '';
  });
});
