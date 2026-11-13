import "./whatsapp-chat.css";

const dismissalKey = "amef-whatsapp-dismissed";
const chatUrl = "https://wa.me/2562009225226";

export function setupWhatsAppChat() {
  if (document.querySelector("[data-whatsapp-chat]")) return;

  const widget = document.createElement("div");
  widget.className = "whatsapp-chat";
  widget.dataset.whatsappChat = "";
  widget.innerHTML = `
    <section class="whatsapp-chat__panel" id="amef-whatsapp-welcome" role="region" aria-labelledby="amef-whatsapp-title" hidden>
      <header class="whatsapp-chat__header">
        <h2 id="amef-whatsapp-title">Welcome to AMEF! 👋</h2>
        <button class="whatsapp-chat__close" type="button" aria-label="Close WhatsApp welcome">&times;</button>
      </header>
      <div class="whatsapp-chat__body">
        <p>Hello! Welcome to Asaba Memorial Education Foundation. How can we help you today? Chat with our team on WhatsApp for inquiries about our programmes, partnerships, donations and other services.</p>
        <a class="whatsapp-chat__link" href="${chatUrl}" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp (opens in a new tab)">Chat on WhatsApp</a>
      </div>
    </section>
    <button class="whatsapp-chat__toggle" type="button" aria-label="Open WhatsApp welcome" aria-controls="amef-whatsapp-welcome" aria-expanded="false">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-4.7a8.5 8.5 0 1 1 15.9-4.5Z"/><path d="M8.2 7.8c.3 3.9 2.2 5.8 6 7.1l1.7-1.6-2.2-1.1-.8.9c-1.6-.6-2.8-1.8-3.4-3.3l.9-.8-1.1-2.2-1.1 1Z"/></svg>
    </button>`;
  document.body.append(widget);

  const panel = widget.querySelector("section");
  const toggle = widget.querySelector(".whatsapp-chat__toggle");
  const close = widget.querySelector(".whatsapp-chat__close");
  // Storage can be blocked by browser privacy settings; chat must still work.
  function dismiss() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    try { sessionStorage.setItem(dismissalKey, "true"); } catch { /* In-memory state still applies. */ }
    toggle.focus({ preventScroll: true });
  }
  function open(moveFocus = false) {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    if (moveFocus) close.focus({ preventScroll: true });
  }
  close.addEventListener("click", dismiss);
  toggle.addEventListener("click", () => panel.hidden ? open(true) : dismiss());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      // Let existing menus and modal dialogs handle their own Escape key.
      if (document.body.matches(".menu-open, .dialog-open")) return;
      dismiss();
    }
  });
  let dismissed = false;
  try { dismissed = sessionStorage.getItem(dismissalKey) === "true"; } catch { /* Show the welcome when storage is unavailable. */ }
  if (!dismissed) open();
}
