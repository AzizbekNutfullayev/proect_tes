const links = document.querySelectorAll('.course_link a');
const cards = document.querySelectorAll('.course_card .card');
document.getElementById('nextPage').addEventListener('click', function() {
  window.location.href = "./about.html";
});

document.getElementById('goToLogin').addEventListener('click', function() {
  window.location.href = "./page/login.html";
})
document.getElementById('goTo').addEventListener('click', function() {
  window.location.href = "./page/login.html";
})
document.getElementById('nextP').addEventListener('click', function() {
  window.location.href = "./page/login.html";
})

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const type = link.dataset.type;
    cards.forEach(card => {
      if (card.dataset.type === type) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const activeType = document.querySelector('.course_link a.active').dataset.type;
  cards.forEach(card => {
    card.style.display = card.dataset.type === activeType ? 'block' : 'none';
  });
});

