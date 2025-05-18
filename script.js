const navLinks = document.querySelector('.nav-links');
const navToggle = document.createElement('button');
navToggle.className = 'nav-toggle';
navToggle.setAttribute('aria-label', 'Toggle navigation');
navToggle.innerHTML = '&#9776;'; 

document.querySelector('nav').prepend(navToggle);

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
