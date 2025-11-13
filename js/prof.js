document.addEventListener("DOMContentLoaded", () => {
  const profile = document.querySelector(".profile");
  const dropdown = document.querySelector(".dropdown");

  if (profile && dropdown) {
    profile.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      document.querySelectorAll(".dropdown.active").forEach(d => {
        if (d !== dropdown) d.classList.remove("active");
      });

      dropdown.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!profile.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  }
});
