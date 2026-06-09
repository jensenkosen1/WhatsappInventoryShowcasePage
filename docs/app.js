/* Scroll animation observer */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.feature-card, .tech-card, .schema-card, .step-content, .hero-stats, .section-title, .section-subtitle, .section-label')
  .forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

/* Staggered animation delay for grids */
document.querySelectorAll('.features-grid .feature-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.07}s`;
});
document.querySelectorAll('.tech-grid .tech-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.06}s`;
});
document.querySelectorAll('.schema-grid .schema-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.06}s`;
});

/* Nav scroll effect */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* Animated WhatsApp messages */
const messages = document.querySelectorAll('.wa-bubble');
messages.forEach((msg, i) => {
  msg.style.opacity = '0';
  msg.style.transform = 'translateY(10px)';
  setTimeout(() => {
    msg.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    msg.style.opacity = '1';
    msg.style.transform = 'translateY(0)';
  }, 800 + i * 600);
});

/* Typing indicator cycling */
function addTypingIndicator() {
  const container = document.getElementById('wa-messages');
  if (!container) return;
  const typing = document.createElement('div');
  typing.className = 'wa-bubble wa-recv';
  typing.innerHTML = '<span style="font-size:18px;letter-spacing:2px">●●●</span>';
  typing.style.opacity = '0';
  typing.style.fontSize = '10px';
  typing.style.color = '#aaa';
  container.appendChild(typing);
  requestAnimationFrame(() => {
    typing.style.transition = 'opacity 0.3s';
    typing.style.opacity = '1';
  });
  setTimeout(() => {
    typing.style.opacity = '0';
    setTimeout(() => typing.remove(), 300);
  }, 1200);
}

setInterval(addTypingIndicator, 5000);
