const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const header = document.querySelector("[data-header]");
const navDropdowns = [...document.querySelectorAll("[data-nav-dropdown]")];

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

function closeNavDropdowns(except = null) {
  navDropdowns.forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".nav-dropdown__toggle")?.setAttribute("aria-expanded", "false");
  });
}

navDropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".nav-dropdown__toggle");
  toggle?.addEventListener("click", () => {
    const open = !dropdown.classList.contains("is-open");
    closeNavDropdowns(dropdown);
    dropdown.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-nav-dropdown]")) closeNavDropdowns();
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
  if (event.key !== "Escape") return;
  closeNavDropdowns();
  if (menuToggle?.getAttribute("aria-expanded") === "true") setMenu(false);
});

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSlides = heroSlider ? [...heroSlider.querySelectorAll(".hero-slide")] : [];
const heroDotsContainer = document.querySelector("[data-hero-dots]");
const heroCurrent = document.querySelector("[data-hero-current]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (heroSlider && heroSlides.length > 0) {
  let current = 0;
  let heroTimer;

  const dots = heroSlides.map((_, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "hero-slider__dot" + (i === 0 ? " is-active" : "");
    btn.setAttribute("aria-label", `Go to slide ${i + 1}`);
    btn.setAttribute("aria-current", i === 0 ? "true" : "false");
    btn.addEventListener("click", () => {
      goTo(i);
      restartHeroTimer();
    });
    return btn;
  });

  heroDotsContainer?.append(...dots);

  function goTo(index) {
    current = (index + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, i) => {
      const active = i === current;
      slide.classList.toggle("hero-slide--active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-current", String(active));
    });
    if (heroCurrent) heroCurrent.textContent = String(current + 1).padStart(2, "0");
  }

  function stopHeroTimer() {
    window.clearInterval(heroTimer);
  }

  function startHeroTimer() {
    if (!reduceMotion.matches && !document.hidden) {
      heroTimer = window.setInterval(() => goTo(current + 1), 6500);
    }
  }

  function restartHeroTimer() {
    stopHeroTimer();
    startHeroTimer();
  }

  heroSlider.querySelector(".hero-slider__btn--prev")?.addEventListener("click", () => {
    goTo(current - 1);
    restartHeroTimer();
  });
  heroSlider.querySelector(".hero-slider__btn--next")?.addEventListener("click", () => {
    goTo(current + 1);
    restartHeroTimer();
  });
  heroSlider.addEventListener("mouseenter", stopHeroTimer);
  heroSlider.addEventListener("mouseleave", startHeroTimer);
  heroSlider.addEventListener("focusin", stopHeroTimer);
  heroSlider.addEventListener("focusout", startHeroTimer);
  document.addEventListener("visibilitychange", restartHeroTimer);
  reduceMotion.addEventListener("change", restartHeroTimer);

  goTo(0);
  startHeroTimer();
}

const partnerCarousel = document.querySelector("[data-partner-carousel]");
const partnerTrack = partnerCarousel?.querySelector(".partner-carousel__track");

if (partnerCarousel && partnerTrack) {
  let partnerTimer;

  function partnerStep() {
    const card = partnerTrack.querySelector(".partner-card");
    if (!card) return 0;
    const gap = Number.parseFloat(getComputedStyle(partnerTrack).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function movePartners(direction = 1) {
    const step = partnerStep();
    const atEnd = partnerTrack.scrollLeft + partnerTrack.clientWidth >= partnerTrack.scrollWidth - step / 2;
    const atStart = partnerTrack.scrollLeft <= step / 2;
    const left = direction > 0 && atEnd
      ? 0
      : direction < 0 && atStart
        ? partnerTrack.scrollWidth
        : partnerTrack.scrollLeft + step * direction;
    partnerTrack.scrollTo({ left, behavior: reduceMotion.matches ? "auto" : "smooth" });
  }

  function stopPartnerTimer() {
    window.clearInterval(partnerTimer);
  }

  function startPartnerTimer() {
    if (!reduceMotion.matches && !document.hidden) {
      partnerTimer = window.setInterval(() => movePartners(1), 4200);
    }
  }

  function restartPartnerTimer() {
    stopPartnerTimer();
    startPartnerTimer();
  }

  document.querySelector("[data-partner-prev]")?.addEventListener("click", () => {
    movePartners(-1);
    restartPartnerTimer();
  });
  document.querySelector("[data-partner-next]")?.addEventListener("click", () => {
    movePartners(1);
    restartPartnerTimer();
  });
  partnerCarousel.addEventListener("mouseenter", stopPartnerTimer);
  partnerCarousel.addEventListener("mouseleave", startPartnerTimer);
  partnerCarousel.addEventListener("focusin", stopPartnerTimer);
  partnerCarousel.addEventListener("focusout", startPartnerTimer);
  startPartnerTimer();
}
