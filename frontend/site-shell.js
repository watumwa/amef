const page = document.body.dataset.page || "";

const navItems = [
  ["about", "/about/", "About"],
  ["work", "/our-work/", "Our work"],
  ["amhs", "/amhs/", "AMHS"],
  ["sifa", "/sifa-skilling-centre/", "Sifa Centre"],
  ["contact", "/contact/", "Contact"],
];

const iconSprite = `
  <svg class="svg-sprite" aria-hidden="true">
    <symbol id="icon-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
    <symbol id="icon-book" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z"/><path d="M8 7h8M8 10h7"/></symbol>
    <symbol id="icon-spark" viewBox="0 0 24 24"><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></symbol>
    <symbol id="icon-heart" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></symbol>
    <symbol id="icon-users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></symbol>
    <symbol id="icon-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></symbol>
    <symbol id="icon-droplet" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-5-7-13-7-13S5 10 5 15a7 7 0 0 0 7 7Z"/></symbol>
    <symbol id="icon-seedling" viewBox="0 0 24 24"><path d="M12 22V10M7 15c-3 0-5-2-5-6 4 0 7 2 7 5M17 12c3 0 5-2 5-6-4 0-7 2-7 5"/></symbol>
    <symbol id="icon-school" viewBox="0 0 24 24"><path d="m3 10 9-6 9 6M5 9v10M19 9v10M3 20h18M9 20v-6h6v6"/></symbol>
    <symbol id="icon-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
    <symbol id="icon-location" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
    <symbol id="icon-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol>
    <symbol id="icon-quote" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-1 5-4 5v3ZM14 21c3 0 7-1 7-8V5h-7v8h4c0 4-1 5-4 5v3Z"/></symbol>
    <symbol id="icon-facebook" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M14.2 8.2h3.2V4.3a19 19 0 0 0-2.9-.3c-2.9 0-4.9 1.8-4.9 5v2.8H6.3v4.4h3.3V24h4.1v-7.8h3.4l.6-4.4h-4V9.4c0-.8.2-1.2.5-1.2Z"/></symbol>
    <symbol id="icon-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/></symbol>
    <symbol id="icon-youtube" viewBox="0 0 24 24"><path d="M22 12s0-4-1-5c-1-1-3-1-9-1s-8 0-9 1-1 5-1 5 0 4 1 5 3 1 9 1 8 0 9-1 1-5 1-5Z"/><path d="m10 9 5 3-5 3V9Z"/></symbol>
    <symbol id="icon-tiktok" viewBox="0 0 24 24"><path d="M15 4v10.3a4.3 4.3 0 1 1-4-4.3M15 4c.5 2.8 2.2 4.5 5 5"/></symbol>
    <symbol id="icon-whatsapp" viewBox="0 0 24 24"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-4.7a8.5 8.5 0 1 1 15.9-4.5Z"/><path d="M8.2 7.8c.3 3.9 2.2 5.8 6 7.1l1.7-1.6-2.2-1.1-.8.9c-1.6-.6-2.8-1.8-3.4-3.3l.9-.8-1.1-2.2-1.1 1Z"/></symbol>
  </svg>`;

const brand = (footer = false) => `
  <a class="brand${footer ? " brand--footer" : ""}" href="/" aria-label="AMEF home">
    <span class="brand__mark" aria-hidden="true">
      <svg viewBox="0 0 48 48"><path class="brand__book" d="M6 12.5c7.7 0 13.5 2 18 6 4.5-4 10.3-6 18-6v23c-7.7 0-13.5 2-18 6-4.5-4-10.3-6-18-6v-23Z"/><path class="brand__spine" d="M24 19v22"/><path class="brand__sun" d="M24 5v7M15.5 8.5l4.5 5M32.5 8.5l-4.5 5"/></svg>
    </span>
    <span class="brand__copy"><strong>AMEF</strong><small>Asaba Memorial Education Foundation</small></span>
  </a>`;

const links = navItems.map(([id, href, label]) => `<a href="${href}"${page === id ? ' class="is-active" aria-current="page"' : ""}>${label}</a>`).join("");

const socialLinks = `
  <div class="footer-social">
    <p>Connect with AMEF</p>
    <div class="social-icons" aria-label="AMEF social media">
      <span class="social-icon social-icon--pending" role="img" aria-label="Facebook link pending" title="Facebook profile link pending"><svg aria-hidden="true"><use href="#icon-facebook"></use></svg></span>
      <span class="social-icon social-icon--pending" role="img" aria-label="Instagram link pending" title="Instagram profile link pending"><svg aria-hidden="true"><use href="#icon-instagram"></use></svg></span>
      <span class="social-icon social-icon--pending" role="img" aria-label="YouTube link pending" title="YouTube channel link pending"><svg aria-hidden="true"><use href="#icon-youtube"></use></svg></span>
      <span class="social-icon social-icon--pending" role="img" aria-label="TikTok link pending" title="TikTok profile link pending"><svg aria-hidden="true"><use href="#icon-tiktok"></use></svg></span>
      <a class="social-icon social-icon--active" href="https://wa.me/256775749226" target="_blank" rel="noopener noreferrer" aria-label="Contact AMHS on WhatsApp" title="WhatsApp"><svg aria-hidden="true"><use href="#icon-whatsapp"></use></svg></a>
    </div>
    <small>Official profile links pending · WhatsApp is active</small>
  </div>`;

const headerTarget = document.querySelector("[data-site-header]");
if (headerTarget) {
  headerTarget.outerHTML = `
    <header class="site-header" data-header>
      <div class="topbar"><div class="container topbar__inner"><p>Education that reaches every child</p><span class="topbar__location"><svg class="icon" aria-hidden="true"><use href="#icon-location"></use></svg>Kiruli Sub-county, Uganda</span></div></div>
      <nav class="navbar" aria-label="Main navigation">
        <div class="container navbar__inner">
          ${brand()}
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle><span class="sr-only">Open menu</span><svg class="icon menu-toggle__open" aria-hidden="true"><use href="#icon-menu"></use></svg><svg class="icon menu-toggle__close" aria-hidden="true"><use href="#icon-close"></use></svg></button>
          <div class="nav-links">${links}</div>
          <a class="button button--maroon navbar__cta" href="/get-involved/">Support our work <svg class="icon" aria-hidden="true"><use href="#icon-arrow"></use></svg></a>
        </div>
        <div class="mobile-menu" id="mobile-menu" data-mobile-menu><div class="container mobile-menu__inner">${links}<a class="button button--gold" href="/get-involved/">Support our work</a></div></div>
      </nav>
    </header>`;
}

const footerTarget = document.querySelector("[data-site-footer]");
if (footerTarget) {
  footerTarget.outerHTML = `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">${brand(true)}<p>Turning remembrance into action, hopelessness into hope, and potential into opportunity.</p>${socialLinks}</div>
        <div class="footer__links"><h3>Explore</h3><a href="/about/">Our story</a><a href="/our-work/">What we do</a><a href="/get-involved/">Get involved</a><a href="/contact/">Contact</a></div>
        <div class="footer__links"><h3>Our work</h3><a href="/amhs/">Asaba Memorial High School</a><a href="/sifa-skilling-centre/">Sifa Skilling Centre</a><a href="/our-work/">Health & awareness</a><a href="/our-work/">Livelihoods</a></div>
        <div class="footer__action"><p>Help opportunity travel further.</p><a class="button button--gold" href="/get-involved/">Support our work</a></div>
      </div>
      <div class="container footer__bottom"><p>© <span data-current-year></span> Asaba Memorial Education Foundation.</p><p>Education · Empowerment · Community</p></div>
    </footer>`;
}

document.body.insertAdjacentHTML("afterbegin", iconSprite);

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const header = document.querySelector("[data-header]");

const setMenu = (open) => {
  menuToggle?.setAttribute("aria-expanded", String(open));
  mobileMenu?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
};

menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
mobileMenu?.querySelectorAll("a").forEach((item) => item.addEventListener("click", () => setMenu(false)));
window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });
document.addEventListener("keydown", (event) => event.key === "Escape" && setMenu(false));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -35px" });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
document.querySelectorAll("[data-current-year]").forEach((item) => { item.textContent = new Date().getFullYear(); });

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    const button = form.querySelector('button[type="submit"]');
    const name = new FormData(form).get("name")?.toString().trim().split(" ")[0] || "there";
    button.disabled = true;
    button.textContent = "Received";
    status.textContent = `Thank you, ${name}. This preview has captured your interest locally; connect the form to the client’s confirmed inbox before launch.`;
    status.classList.add("is-visible");
    setTimeout(() => { button.disabled = false; button.textContent = "Send another message"; }, 1600);
  });
});
