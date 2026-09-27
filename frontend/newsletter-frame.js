export function setupNewsletterFrame() {
  const frame = document.querySelector("[data-newsletter-frame]");
  if (!frame) return;

  window.addEventListener("message", (event) => {
    if (
      event.origin !== window.location.origin
      || event.source !== frame.contentWindow
      || event.data?.type !== "amef-newsletter-resize"
      || !Number.isFinite(event.data.height)
    ) return;

    const height = Math.min(600, Math.max(120, Math.ceil(event.data.height)));
    frame.style.height = `${height}px`;
  });
}