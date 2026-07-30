const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll(".tabs").forEach((tabGroup) => {
  const buttons = tabGroup.querySelectorAll(".tab-button");
  const section = tabGroup.closest(".page-content");
  const items = section ? section.querySelectorAll(".filter-item") : [];
  const emptyMessage = section ? section.querySelector(".empty-message") : null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visibleCount = 0;

      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      items.forEach((item) => {
        const show = filter === "all" || item.dataset.category === filter;
        item.hidden = !show;
        if (show) visibleCount += 1;
      });

      if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
    });
  });
});