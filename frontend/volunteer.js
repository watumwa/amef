const form = document.querySelector("[data-volunteer-form]");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const value = (name) => data.get(name)?.toString().trim() || "Not provided";
  const applicantName = value("name");
  const subject = `Volunteer application – ${applicantName}`;
  const body = [
    "Hello AMEF team,",
    "",
    "I would like to apply to volunteer with AMEF. My details are below:",
    "",
    `Full name: ${applicantName}`,
    `Email: ${value("email")}`,
    `Phone: ${value("phone")}`,
    `Current location: ${value("location")}`,
    `Area of interest: ${value("interest")}`,
    `Availability: ${value("availability")}`,
    "",
    "Relevant skills or experience:",
    value("experience"),
    "",
    "Why I would like to volunteer with AMEF:",
    value("motivation"),
    "",
    "Kind regards,",
    applicantName,
  ].join("\n");

  const status = form.querySelector("[data-volunteer-status]");
  status.textContent = "Your email application is ready. Review it in your email application and select Send to complete your application.";
  status.classList.add("is-visible");

  window.location.href = `mailto:info@amefuganda.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
