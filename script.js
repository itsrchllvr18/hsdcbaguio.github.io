// SECTION: Utility - smooth scroll to target
function smoothScrollTo(target) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - 80; // offset for sticky header

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

// SECTION: Navigation - mobile toggle & smooth links
const nav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".nav-toggle");

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Smooth scroll for nav links and buttons with data-scroll-target
const scrollTriggers = document.querySelectorAll("a[href^='#'], [data-scroll-target]");

scrollTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    const targetSelector =
      trigger.getAttribute("data-scroll-target") || trigger.getAttribute("href");

    if (!targetSelector || !targetSelector.startsWith("#")) return;

    const target = document.querySelector(targetSelector);
    if (!target) return;

    event.preventDefault();

    // Close mobile nav if open
    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }

    smoothScrollTo(target);
  });
});

// SECTION: FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) return;

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    answer.hidden = !isOpen;
  });
});

// SECTION: Contact form handling
const form = document.getElementById("contact-form");

if (form) {
  const successMessage = form.querySelector(".form-success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Simple UX: show success message and clear form
    if (successMessage) {
      successMessage.hidden = false;
    }

    form.reset();
  });
}

// SECTION: Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
