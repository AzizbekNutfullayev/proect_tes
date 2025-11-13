// === PROFILE DROPDOWN ===
const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown');

profile?.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!profile.contains(e.target)) dropdown.classList.remove('active');
});

// === SIDEBAR ACCORDION ===
const accItems = document.querySelectorAll('[data-acc]');
accItems.forEach(item => {
  const header = item.querySelector('.acc-header');
  const content = item.querySelector('.acc-content');
  header.addEventListener('click', () => {
    const expanded = header.getAttribute('aria-expanded') === 'true';
    header.setAttribute('aria-expanded', !expanded);
    content.style.display = expanded ? 'none' : 'block';
  });
});

// === PAGINATION & SHUFFLE ===
const cardsContainer = document.querySelector('.card_degn');
const cards = Array.from(document.querySelectorAll('.card_degn .card'));
const pagination = document.getElementById('pagination');
const prevBtn = document.querySelector('.prev-page');
const nextBtn = document.querySelector('.next-page');

const totalPages = 10;
let currentPage = 1;

function shuffleCards() {
  let shuffled = [...cards].sort(() => Math.random() - 0.5);
  cardsContainer.innerHTML = '';
  shuffled.forEach(card => cardsContainer.appendChild(card));
}

function renderPagination() {
  pagination.innerHTML = '';
  let maxVisible = 5;
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1)
    startPage = Math.max(1, endPage - maxVisible + 1);

  if (startPage > 1) {
    addPageButton(1);
    if (startPage > 2) addEllipsis();
  }

  for (let i = startPage; i <= endPage; i++) addPageButton(i);

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) addEllipsis();
    addPageButton(totalPages);
  }

  updateButtons();
}

function addPageButton(page) {
  const btn = document.createElement('button');
  btn.textContent = page;
  if (page === currentPage) btn.classList.add('active');
  btn.addEventListener('click', () => {
    currentPage = page;
    shuffleCards();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  pagination.appendChild(btn);
}

function addEllipsis() {
  const span = document.createElement('span');
  span.textContent = '...';
  span.style.padding = '0 5px';
  pagination.appendChild(span);
}

function updateButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

prevBtn?.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    shuffleCards();
    renderPagination();
  }
});

nextBtn?.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    shuffleCards();
    renderPagination();
  }
});

renderPagination();

  document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".acc-item");

    accordions.forEach((item) => {
      const header = item.querySelector(".acc-header");
      const content = item.querySelector(".acc-content");
      const icon = header.querySelector(".chev");

      header.addEventListener("click", () => {
        const isOpen = header.classList.contains("active");

        // Barchasini yopamiz
        accordions.forEach((el) => {
          el.querySelector(".acc-header").classList.remove("active");
          el.querySelector(".acc-content").style.maxHeight = null;
          el.querySelector(".chev").style.transform = "rotate(0deg)";
        });

        // Agar bosilgan yopiq bo‘lsa — ochamiz
        if (!isOpen) {
          header.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
          icon.style.transform = "rotate(180deg)";
        }
      });
    });
  });
