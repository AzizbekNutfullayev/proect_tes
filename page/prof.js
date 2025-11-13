document.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile");
  const dropdown = document.querySelector(".dropdown");

  if (profile && dropdown) {
    // Profil rasmini bosganda ochilsin / yopilsin
    profile.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Barcha ochilgan dropdownlarni yopish (agar ko‘p profil bo‘lsa)
      document.querySelectorAll(".dropdown.active").forEach(d => {
        if (d !== dropdown) d.classList.remove("active");
      });

      // Joriy dropdownni ochish / yopish
      dropdown.classList.toggle("active");
    });

    // Sahifaning boshqa joyiga bosilganda yopilsin
    document.addEventListener("click", (e) => {
      if (!profile.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }
});
