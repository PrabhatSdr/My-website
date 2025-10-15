window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


lucide.createIcons();

document.getElementById("year").textContent = new Date().getFullYear();

const text = "Hello, Prabhat here.";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeLetter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeLetter, 50);
  }
}

typeLetter();

AOS.init({
  duration: 500,
  easing: 'ease-in-out',
  once: true,
  offset: 100,
  disable: window.innerWidth < 768 ? 'mobile' : false,
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');

    if (targetId === "#") {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    history.pushState(null, '', targetId);
  });
});