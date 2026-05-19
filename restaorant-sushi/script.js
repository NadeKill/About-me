const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const filterButtons = document.querySelectorAll("[data-filter]");
const dishes = document.querySelectorAll("[data-category]");
const form = document.querySelector("[data-reservation-form]");
const formMessage = document.querySelector("[data-form-message]");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    dishes.forEach((dish) => {
      const shouldShow = filter === "all" || dish.dataset.category === filter;
      dish.classList.toggle("hidden", !shouldShow);
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "Guest";
  const experience = data.get("experience") || "your experience";
  formMessage.textContent = `Thank you, ${name}. Your ${experience.toString().toLowerCase()} request is ready for restaurant confirmation.`;
  form.reset();
});
