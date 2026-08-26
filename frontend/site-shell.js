import mainLogoUrl from "./assets/main-logo.png";
import footerLogoUrl from "./assets/logo-home-final.png";

const page = document.body.dataset.page || "";

const navItems = [
  { id: "home", href: "/", label: "Home" },
  {
    id: "about",
    label: "About Us",
    children: [
      ["/about/#who-we-are", "Who we are"],
      ["/about/#our-history", "Our History"],
      ["/about/#our-team", "Our Team"],
      ["/get-involved/?interest=Partnership", "Patners"],
      ["/#story", "Success Stories"],
    ],
  },
  {
    id: "work",
    activePages: ["work", "amhs", "sifa"],
    label: "What we Do",
    children: [
      ["/our-work/#education", "Education"],
      ["/our-work/#health-care", "Health Care"],
      ["/our-work/#livelihood", "Livelihood"],
    ],
  },
  {
    id: "involved",
    activePages: ["involved", "sponsor", "volunteer", "careers"],
    label: "Get Involved",
    children: [
      ["/get-involved/#donate", "Donate"],
      ["/sponsor-a-child/", "Sponsor a Child"],
      ["/volunteer/", "Become a Volunteer"],
      ["/careers/", "Careers"],
    ],
  },
  { id: "news", href: "/#news-and-updates", label: "News & Updates" },
  { id: "contact", href: "/contact/", label: "Contact Us" },
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
    <symbol id="icon-briefcase" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2"/></symbol>
    <symbol id="icon-file" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></symbol>
    <symbol id="icon-download" viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></symbol>
    <symbol id="icon-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
    <symbol id="icon-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
    <symbol id="icon-chevron" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></symbol>
    <symbol id="icon-location" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
    <symbol id="icon-phone" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></symbol>
    <symbol id="icon-mail" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></symbol>
    <symbol id="icon-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol>
    <symbol id="icon-check" viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></symbol>
    <symbol id="icon-quote" viewBox="0 0 24 24"><path d="M3 21c3 0 7-1 7-8V5H3v8h4c0 4-1 5-4 5v3ZM14 21c3 0 7-1 7-8V5h-7v8h4c0 4-1 5-4 5v3Z"/></symbol>
    <symbol id="icon-facebook" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M14.2 8.2h3.2V4.3a19 19 0 0 0-2.9-.3c-2.9 0-4.9 1.8-4.9 5v2.8H6.3v4.4h3.3V24h4.1v-7.8h3.4l.6-4.4h-4V9.4c0-.8.2-1.2.5-1.2Z"/></symbol>
    <symbol id="icon-instagram" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/></symbol>
    <symbol id="icon-youtube" viewBox="0 0 24 24"><path d="M22 12s0-4-1-5c-1-1-3-1-9-1s-8 0-9 1-1 5-1 5 0 4 1 5 3 1 9 1 8 0 9-1 1-5 1-5Z"/><path d="m10 9 5 3-5 3V9Z"/></symbol>
    <symbol id="icon-x" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/></symbol>
    <symbol id="icon-linkedin" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M6.5 8.5H3V20h3.5V8.5ZM4.75 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 13.4c0-3.5-1.9-5.2-4.4-5.2-2 0-2.9 1.1-3.4 1.9V8.5H9.7V20h3.5v-5.7c0-1.5.3-3 2.2-3 1.9 0 1.9 1.8 1.9 3.1V20H21v-6.6Z"/></symbol>
    <symbol id="icon-whatsapp" viewBox="0 0 24 24"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-4.7a8.5 8.5 0 1 1 15.9-4.5Z"/><path d="M8.2 7.8c.3 3.9 2.2 5.8 6 7.1l1.7-1.6-2.2-1.1-.8.9c-1.6-.6-2.8-1.8-3.4-3.3l.9-.8-1.1-2.2-1.1 1Z"/></symbol>
    <symbol id="icon-location" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></symbol>
  </svg>`;

const brand = (footer = false) => footer ? `
  <a class="brand brand--footer" href="/" aria-label="AMEF home">
    <span class="brand__mark" aria-hidden="true">
      <img src="${mainLogoUrl}" alt="" />
    </span>
    <span class="brand__copy"><strong>AMEF</strong><small>Asaba Memorial Education Foundation</small></span>
  </a>` : `
  <a class="brand brand--navbar" href="/" aria-label="AMEF home">
    <img class="brand__logo" src="${mainLogoUrl}" alt="Asaba Memorial Education Foundation" />
  </a>`;

const isNavItemActive = (item) => (item.activePages || [item.id]).includes(page);

const desktopLinks = navItems.map((item) => {
  const active = isNavItemActive(item);
  if (!item.children) {
    return `<a class="nav-link${active ? " is-active" : ""}" href="${item.href}"${active ? ' aria-current="page"' : ""}>${item.label}</a>`;
  }

  return `
    <div class="nav-dropdown${active ? " is-active" : ""}" data-nav-dropdown>
      <button class="nav-dropdown__toggle" type="button" aria-expanded="false">
        ${item.label}
        <svg class="icon" aria-hidden="true"><use href="#icon-chevron"></use></svg>
      </button>
      <div class="nav-dropdown__menu">
        ${item.children.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
      </div>
    </div>`;
}).join("");

const mobileLinks = navItems.map((item) => {
  if (!item.children) return `<a href="${item.href}">${item.label}</a>`;

  return `
    <details class="mobile-nav-group"${isNavItemActive(item) ? " open" : ""}>
      <summary>${item.label}<svg class="icon" aria-hidden="true"><use href="#icon-chevron"></use></svg></summary>
      <div>${item.children.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}</div>
    </details>`;
}).join("");

const socialLinks = `
  <div class="footer-social">
    <p>Connect with AMEF</p>
    <div class="social-icons" aria-label="AMEF social media">
      <a class="social-icon social-icon--active" href="https://www.facebook.com/share/19HTNk2PDs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="AMEF on Facebook" title="Facebook"><svg aria-hidden="true"><use href="#icon-facebook"></use></svg></a>
      <a class="social-icon social-icon--active" href="https://www.instagram.com/amef163?igsh=ZDBleW5qMDBtZGI2&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="AMEF on Instagram" title="Instagram"><svg aria-hidden="true"><use href="#icon-instagram"></use></svg></a>
      <a class="social-icon social-icon--active" href="https://www.youtube.com/@ASABAMEMORIALEDUCATIONFOUNDATI" target="_blank" rel="noopener noreferrer" aria-label="AMEF on YouTube" title="YouTube"><svg aria-hidden="true"><use href="#icon-youtube"></use></svg></a>
      <a class="social-icon social-icon--active" href="https://x.com/asabamef?s=11" target="_blank" rel="noopener noreferrer" aria-label="AMEF on X" title="X"><svg aria-hidden="true"><use href="#icon-x"></use></svg></a>
      <a class="social-icon social-icon--active" href="https://www.linkedin.com/in/asaba-memorial-education-foundation-42862942b" target="_blank" rel="noopener noreferrer" aria-label="AMEF on LinkedIn" title="LinkedIn"><svg aria-hidden="true"><use href="#icon-linkedin"></use></svg></a>
      <a class="social-icon social-icon--active" href="https://wa.me/256775749226" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp AMEF at +256 775 749226" title="WhatsApp"><svg aria-hidden="true"><use href="#icon-whatsapp"></use></svg></a>
    </div>
    <small>Follow AMEF on social media or contact us on WhatsApp</small>
  </div>`;

const headerTarget = document.querySelector("[data-site-header]");
if (headerTarget) {
  headerTarget.outerHTML = `
    <header class="site-header" data-header>
      <div class="topbar">
        <div class="container topbar__inner">
          <div class="topbar__left">
            <a class="topbar__link" href="tel:+256766610442">
              <svg class="icon" aria-hidden="true"><use href="#icon-phone"></use></svg>
              <span>+256 766 610442</span>
            </a>
            <a class="topbar__link" href="https://wa.me/256775749226" target="_blank" rel="noopener noreferrer">
              <svg class="icon" aria-hidden="true"><use href="#icon-whatsapp"></use></svg>
              <span>+256 775 749226</span>
            </a>
            <a class="topbar__link" href="mailto:info@amefuganda.org">
              <svg class="icon" aria-hidden="true"><use href="#icon-mail"></use></svg>
              <span>info@amefuganda.org</span>
            </a>
            <a class="topbar__link" href="https://www.google.com/maps/search/?api=1&amp;query=1.8513450%2C31.8538220" target="_blank" rel="noopener noreferrer">
              <svg class="icon" aria-hidden="true"><use href="#icon-location"></use></svg>
              <span>Kitanyata 1 Village, Kiruli Sub-county, Masindi, Uganda</span>
            </a>
          </div>
          <div class="topbar__right">
            <div class="topbar__social" aria-label="AMEF social media">
              <a class="social-icon" href="https://www.facebook.com/share/19HTNk2PDs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="AMEF on Facebook" title="Facebook">
                <svg aria-hidden="true"><use href="#icon-facebook"></use></svg>
              </a>
              <a class="social-icon" href="https://www.instagram.com/amef163?igsh=ZDBleW5qMDBtZGI2&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="AMEF on Instagram" title="Instagram">
                <svg aria-hidden="true"><use href="#icon-instagram"></use></svg>
              </a>
              <a class="social-icon" href="https://www.youtube.com/@ASABAMEMORIALEDUCATIONFOUNDATI" target="_blank" rel="noopener noreferrer" aria-label="AMEF on YouTube" title="YouTube">
                <svg aria-hidden="true"><use href="#icon-youtube"></use></svg>
              </a>
              <a class="social-icon" href="https://x.com/asabamef?s=11" target="_blank" rel="noopener noreferrer" aria-label="AMEF on X" title="X">
                <svg aria-hidden="true"><use href="#icon-x"></use></svg>
              </a>
              <a class="social-icon" href="https://www.linkedin.com/in/asaba-memorial-education-foundation-42862942b" target="_blank" rel="noopener noreferrer" aria-label="AMEF on LinkedIn" title="LinkedIn">
                <svg aria-hidden="true"><use href="#icon-linkedin"></use></svg>
              </a>
            </div>
            <form class="topbar__search" action="/search/" method="get">
              <label for="topbar-search" class="sr-only">Search</label>
              <input id="topbar-search" type="search" name="q" placeholder="Search..." />
              <button type="submit" aria-label="Search">
                <svg class="icon" aria-hidden="true"><use href="#icon-search"></use></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <nav class="navbar" aria-label="Main navigation">
        <div class="container navbar__inner">
          ${brand()}
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle><span class="sr-only">Open menu</span><svg class="icon menu-toggle__open" aria-hidden="true"><use href="#icon-menu"></use></svg><svg class="icon menu-toggle__close" aria-hidden="true"><use href="#icon-close"></use></svg></button>
          <div class="nav-links">${desktopLinks}</div>
          <a class="button button--maroon navbar__cta" href="/get-involved/#donate">Donate</a>
        </div>
        <div class="mobile-menu" id="mobile-menu" data-mobile-menu><div class="container mobile-menu__inner">${mobileLinks}<a class="button button--gold" href="/get-involved/#donate">Donate</a></div></div>
      </nav>
    </header>`;
}

const footerTarget = document.querySelector("[data-site-footer]");
if (footerTarget) {
  footerTarget.outerHTML = `
    <footer class="footer">
      <div class="container footer__grid">
        <div class="footer__brand">
          <a class="brand brand--footer" href="/" aria-label="AMEF home">
            <span class="brand__logo" aria-hidden="true"><img src="${footerLogoUrl}" alt="" /></span>
          </a>
          <div class="footer-social">
            <p>Connect with AMEF</p>
            <div class="social-icons" aria-label="AMEF social media">
              <a class="social-icon social-icon--active" href="https://www.facebook.com/share/19HTNk2PDs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="AMEF on Facebook" title="Facebook"><svg aria-hidden="true"><use href="#icon-facebook"></use></svg></a>
              <a class="social-icon social-icon--active" href="https://www.instagram.com/amef163?igsh=ZDBleW5qMDBtZGI2&amp;utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="AMEF on Instagram" title="Instagram"><svg aria-hidden="true"><use href="#icon-instagram"></use></svg></a>
              <a class="social-icon social-icon--active" href="https://www.youtube.com/@ASABAMEMORIALEDUCATIONFOUNDATI" target="_blank" rel="noopener noreferrer" aria-label="AMEF on YouTube" title="YouTube"><svg aria-hidden="true"><use href="#icon-youtube"></use></svg></a>
              <a class="social-icon social-icon--active" href="https://x.com/asabamef?s=11" target="_blank" rel="noopener noreferrer" aria-label="AMEF on X" title="X"><svg aria-hidden="true"><use href="#icon-x"></use></svg></a>
              <a class="social-icon social-icon--active" href="https://www.linkedin.com/in/asaba-memorial-education-foundation-42862942b" target="_blank" rel="noopener noreferrer" aria-label="AMEF on LinkedIn" title="LinkedIn"><svg aria-hidden="true"><use href="#icon-linkedin"></use></svg></a>
              <a class="social-icon social-icon--active" href="https://wa.me/256775749226" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp AMEF at +256 775 749226" title="WhatsApp"><svg aria-hidden="true"><use href="#icon-whatsapp"></use></svg></a>
            </div>
          </div>
        </div>
        <div class="footer__links"><h3>Important Links</h3><a href="/about/">Our story</a><a href="/our-work/">What we do</a><a href="/get-involved/">Get involved</a><a href="/policies/">Policies</a><a href="/contact/">Contact</a></div>
        <div class="footer__links"><h3>Projects</h3><a href="/amhs/">Asaba Memorial High School</a><a href="/sifa-skilling-centre/">Sifa Skilling Hub (SSH)</a><a href="/our-work/">Health & awareness</a><a href="/our-work/">Livelihoods</a></div>
        <div class="footer__location"><h3>Physical Location</h3><address><svg class="icon" aria-hidden="true"><use href="#icon-location"></use></svg><span>Kitanyata 1 Village, Kiruli Sub-county, Masindi, Uganda</span></address><div class="footer__location-contact"><a href="tel:+256766610442"><svg class="icon" aria-hidden="true"><use href="#icon-phone"></use></svg><span>Call us: +256 766 610442</span></a><a href="https://wa.me/256775749226" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-whatsapp"></use></svg><span>WhatsApp us: +256 775 749226</span></a><a href="mailto:info@amefuganda.org"><svg class="icon" aria-hidden="true"><use href="#icon-mail"></use></svg><span>info@amefuganda.org</span></a></div></div>
      </div>
      <div class="container footer__bottom"><p>© <span data-current-year></span> Asaba Memorial Education Foundation.</p><p>Education · Empowerment · Community</p></div>
    </footer>`;
}

document.body.insertAdjacentHTML("afterbegin", iconSprite);

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const header = document.querySelector("[data-header]");
const navDropdowns = [...document.querySelectorAll("[data-nav-dropdown]")];

const setMenu = (open) => {
  menuToggle?.setAttribute("aria-expanded", String(open));
  mobileMenu?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
};

menuToggle?.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
mobileMenu?.querySelectorAll("a").forEach((item) => item.addEventListener("click", () => setMenu(false)));
const closeNavDropdowns = (except = null) => {
  navDropdowns.forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove("is-open");
    dropdown.querySelector(".nav-dropdown__toggle")?.setAttribute("aria-expanded", "false");
  });
};
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
window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeNavDropdowns();
  setMenu(false);
});

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

const teamDialog = document.querySelector("[data-team-dialog]");
let teamDialogOpener = null;

document.querySelectorAll("[data-team-open]").forEach((opener) => {
  opener.addEventListener("click", () => {
    if (!teamDialog) return;

    const biography = document.getElementById(opener.dataset.teamOpen);
    const name = teamDialog.querySelector("[data-team-dialog-name]");
    const role = teamDialog.querySelector("[data-team-dialog-role]");
    const image = teamDialog.querySelector("[data-team-dialog-image]");
    const content = teamDialog.querySelector("[data-team-dialog-biography]");
    if (!biography || !name || !role || !image || !content) return;

    name.textContent = opener.dataset.teamName;
    role.textContent = opener.dataset.teamRole;
    image.src = opener.querySelector("img")?.currentSrc || opener.querySelector("img")?.src || "";
    image.alt = `${opener.dataset.teamName}, ${opener.dataset.teamRole} at AMEF`;
    content.replaceChildren(biography.content.cloneNode(true));
    teamDialogOpener = opener;
    teamDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

teamDialog?.querySelector("[data-team-dialog-close]")?.addEventListener("click", () => teamDialog.close());
teamDialog?.addEventListener("click", (event) => {
  if (event.target === teamDialog) teamDialog.close();
});
teamDialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  teamDialogOpener?.focus();
});

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

document.querySelectorAll("[data-donation-form]").forEach((form) => {
  const customAmount = form.elements.customAmount;
  const otherAmount = form.querySelector('input[name="amount"][value="other"]');
  const error = form.querySelector("[data-donation-error]");
  const status = form.querySelector("[data-donation-status]");
  const commentToggle = form.querySelector("[data-donation-comment-toggle]");
  const commentField = form.querySelector(".donation-comment");

  customAmount?.addEventListener("focus", () => { otherAmount.checked = true; });
  customAmount?.addEventListener("input", () => {
    otherAmount.checked = true;
    customAmount.removeAttribute("aria-invalid");
    error.textContent = "";
  });

  form.querySelectorAll('input[name="amount"]').forEach((input) => {
    input.addEventListener("change", () => {
      customAmount.removeAttribute("aria-invalid");
      error.textContent = "";
      status.classList.remove("is-visible");
    });
  });

  commentToggle?.addEventListener("change", () => {
    commentField.hidden = !commentToggle.checked;
    if (commentToggle.checked) commentField.querySelector("textarea")?.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = form.querySelector('input[name="amount"]:checked');
    const amount = selected?.value === "other" ? customAmount.value.trim() : selected?.value;

    if (!selected || !amount || Number(amount) <= 0) {
      error.textContent = "Please select or enter an amount.";
      if (selected?.value === "other") {
        customAmount.setAttribute("aria-invalid", "true");
        customAmount.focus();
      } else {
        form.querySelector('input[name="amount"]')?.focus();
      }
      return;
    }

    error.textContent = "";
    status.innerHTML = 'Thank you for choosing to give. Online payments are not connected yet. <a href="/contact/?interest=General">Contact AMEF to complete your donation</a>.';
    status.classList.add("is-visible");
  });
});

document.querySelectorAll("[data-sponsorship-form]").forEach((form) => {
  const customAmount = form.elements.sponsorCustomAmount;
  const otherAmount = form.querySelector('input[name="sponsorAmount"][value="other"]');
  const error = form.querySelector("[data-sponsorship-error]");
  const status = form.querySelector("[data-sponsorship-status]");
  const commentToggle = form.querySelector("[data-sponsorship-comment-toggle]");
  const commentField = form.querySelector(".sponsor-now__comment");

  document.querySelectorAll("[data-sponsor-choice]").forEach((choice) => {
    choice.addEventListener("click", () => {
      const frequency = form.querySelector(`input[name="sponsorFrequency"][value="${choice.dataset.sponsorChoice}"]`);
      if (frequency) frequency.checked = true;
      form.closest(".sponsor-now")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => form.querySelector('input[name="sponsorAmount"]')?.focus({ preventScroll: true }), 450);
    });
  });

  customAmount?.addEventListener("focus", () => { otherAmount.checked = true; });
  customAmount?.addEventListener("input", () => {
    otherAmount.checked = true;
    customAmount.removeAttribute("aria-invalid");
    error.textContent = "";
  });

  form.querySelectorAll('input[name="sponsorAmount"]').forEach((input) => {
    input.addEventListener("change", () => {
      customAmount.removeAttribute("aria-invalid");
      error.textContent = "";
      status.classList.remove("is-visible");
    });
  });

  commentToggle?.addEventListener("change", () => {
    commentField.hidden = !commentToggle.checked;
    if (commentToggle.checked) commentField.querySelector("textarea")?.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = form.querySelector('input[name="sponsorAmount"]:checked');
    const amount = selected?.value === "other" ? customAmount.value.trim() : selected?.value;

    if (!selected || !amount || Number(amount) <= 0) {
      error.textContent = "Please select or enter an amount.";
      if (selected?.value === "other") {
        customAmount.setAttribute("aria-invalid", "true");
        customAmount.focus();
      } else {
        form.querySelector('input[name="sponsorAmount"]')?.focus();
      }
      return;
    }

    error.textContent = "";
    status.innerHTML = 'Thank you. AMEF will confirm the sponsorship arrangement before any contribution is made. <a href="/contact/?interest=Sponsor+a+Child">Continue to the contact form</a>.';
    status.classList.add("is-visible");
  });
});
