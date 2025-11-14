const links = document.querySelectorAll('.course_link a');
const cards = document.querySelectorAll('.course_card .card');

// INPUTLAR
const searchInput = document.querySelector('.inp_1');
const categoryInput = document.querySelector('.inp_2');
const topicInput = document.querySelector('.inp_3');
const filterBtn = document.querySelector('.filter_button');

// ---- CATEGORY LINK BOSILGANDA FILTER ----
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const type = link.dataset.type;
    filterCards(type, searchInput.value.trim(), topicInput.value.trim());
  });
});

// ---- SAHIFA OCHILGANDA DEFAULT FILTER ----
document.addEventListener('DOMContentLoaded', () => {
  const activeType = document.querySelector('.course_link a.active').dataset.type;
  filterCards(activeType);
});

// ---- SEARCH, CATEGORY va TOPIC filterlari ----
filterBtn.addEventListener('click', () => {
  const activeType = document.querySelector('.course_link a.active').dataset.type;

  const searchText = searchInput.value.trim().toLowerCase();
  const categoryText = categoryInput.value.trim().toLowerCase();
  const topicText = topicInput.value.trim().toLowerCase();

  filterCards(activeType, searchText, topicText, categoryText);
});

// ---- FILTER FUNCTION ----
function filterCards(type, search = "", topic = "", categoryInputVal = "") {
  cards.forEach(card => {
    const cardType = card.dataset.type.toLowerCase();
    const cardTitle = card.querySelector('h3').innerText.toLowerCase();
    const cardAuthor = card.querySelector('.author').innerText.toLowerCase();

    // CATEGORY input bo'yicha filter
    const categoryMatch =
      categoryInputVal === "" || cardType.includes(categoryInputVal);

    // SEARCH input bo'yicha filter (nomi ichidan)
    const searchMatch =
      search === "" || cardTitle.includes(search) || cardAuthor.includes(search);

    // TOPIC bo‘yicha filter (hozircha title ichidan izlaymiz)
    const topicMatch =
      topic === "" || cardTitle.includes(topic);

    // CATEGORY LINK bo'yicha
    const typeMatch = cardType === type;

    // Agar hammasi to‘g‘ri bo‘lsa ko‘rsatamiz
    if (typeMatch && searchMatch && categoryMatch && topicMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Location buttons
document.getElementById('nextPa').addEventListener('click', function () {
  window.location.href = "./page/about.html";
});
