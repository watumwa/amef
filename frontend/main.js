const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const header = document.querySelector("[data-header]");

function setMenu(open) {
  menuToggle?.setAttribute("aria-expanded", String(open));
  mobileMenu?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuToggle?.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

mobileMenu?.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("click", () => setMenu(false));
});

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -48px" },
);

document.querySelectorAll(".reveal:not(.is-visible)").forEach((item) => revealObserver.observe(item));

function setupDialog(dialog, openers) {
  if (!dialog) return;

  openers.forEach((opener) => {
    opener.addEventListener("click", () => {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
      document.body.classList.add("dialog-open");
    });
  });

  dialog.querySelectorAll("[data-dialog-close]").forEach((closer) => {
    closer.addEventListener("click", () => dialog.close());
  });

  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    if (!inside) dialog.close();
  });

  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}

const storyDialog = document.querySelector("[data-story-dialog]");
const supportDialog = document.querySelector("[data-support-dialog]");
setupDialog(storyDialog, document.querySelectorAll("[data-story-open]"));
setupDialog(supportDialog, document.querySelectorAll("[data-support-open]"));

document.querySelectorAll("[data-support-option]").forEach((option) => {
  option.addEventListener("click", () => {
    const interest = option.dataset.supportOption;
    supportDialog?.close();
    const select = document.querySelector("[data-interest]");
    if (select) select.value = interest;
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.querySelector('[name="name"]')?.focus({ preventScroll: true }), 700);
  });
});

const contactForm = document.querySelector("[data-contact-form]");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = contactForm.querySelector("[data-form-status]");
  const submit = contactForm.querySelector('button[type="submit"]');
  const name = new FormData(contactForm).get("name")?.toString().trim().split(" ")[0] || "there";

  submit.disabled = true;
  submit.textContent = "Received";
  status.textContent = `Thank you, ${name}. This preview has captured your interest locally; connect the form to the client’s inbox before launch.`;
  status.classList.add("is-visible");

  window.setTimeout(() => {
    submit.disabled = false;
    submit.innerHTML = 'Send another message <svg class="icon" aria-hidden="true"><use href="#icon-arrow"></use></svg>';
  }, 1800);
});

document.querySelector("[data-current-year]").textContent = new Date().getFullYear();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") setMenu(false);
});
