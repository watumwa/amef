# AMEF Website — Brevo News & Updates Integration Package

## Purpose

Integrate the already-created and successfully tested **AMEF Brevo News & Updates subscription form** into the existing **Vite-based AMEF website**.

The Brevo form is already configured and tested successfully. A test submission completed the Google reCAPTCHA challenge, displayed the configured success message, and the subscriber was added to **AMEF Newsletter Subscribers (#3)**.

Do **not** create a replacement subscription system, API, database, mailing-list workflow, or CAPTCHA implementation. Preserve the working Brevo submission mechanism.

---

## Placement

Add the subscription section to the **Home page**, positioned naturally near the bottom of the page **before the existing footer**.

Do not alter unrelated Home page sections.

## Content

**Heading:**  
Stay Connected with AMEF

**Description:**  
Receive the latest AMEF news and updates, impact stories, opportunities, events and highlights from our work in Education, Livelihood, Health Care and Child Protection.

**Email field label:**  
Enter your email address to stay connected with AMEF

**Button:**  
Subscribe to News & Updates

Keep the Google **“I'm not a robot” reCAPTCHA** between the email field and the subscription button.

**Success message:**  
Thank you for subscribing! You are now connected with AMEF and will receive our latest news, updates, opportunities and impact stories.

---

## Critical functional requirements

Preserve the following from the Brevo-generated code exactly where required:

- Existing Brevo form `POST` action.
- `data-type="subscription"`.
- `EMAIL` field name and required validation.
- Hidden `email_address_check` field.
- Hidden `locale` field.
- Existing Google reCAPTCHA **site key** and CAPTCHA callback behaviour.
- Brevo validation/submission JavaScript.
- Google reCAPTCHA JavaScript.
- Brevo success/error handling.
- Existing single-opt-in behaviour.
- Existing auto-hide behaviour after successful submission.

The destination list is already configured inside Brevo as **AMEF Newsletter Subscribers (#3)**. Do not attempt to change or select the Brevo list from the website frontend.

### Security

The Google reCAPTCHA **secret key must never be added to the frontend, repository, client-side JavaScript, or a `VITE_*` environment variable**. Only the public reCAPTCHA site key contained in the supplied Brevo HTML belongs in browser-delivered code.

The secret key was exposed during setup and should be rotated separately in Google reCAPTCHA administration after integration/testing. Do not insert that secret into this implementation.

---

## Vite integration requirements

This is a Vite-based website. Do not treat the supplied Brevo export as a complete standalone webpage.

Integrate it into the existing project appropriately:

1. Use the necessary Brevo form markup in the Home page/component structure.
2. Load Brevo's required stylesheet and scripts in a Vite-compatible way.
3. Avoid loading the same external stylesheet/script more than once.
4. Preserve Brevo-required IDs, classes, names, `data-*` attributes, form action, CAPTCHA attributes and JavaScript hooks.
5. Do not recreate the tested Brevo submission with a custom `fetch()` request unless technically unavoidable.
6. If JSX/React is used in this Vite project, convert HTML syntax to valid JSX only where necessary (for example `class` → `className`, inline styles to JSX objects, and script-loading handled appropriately) **without changing Brevo's functional identifiers or submission behaviour**.
7. Prevent Brevo's CSS from unintentionally changing unrelated AMEF website elements. Scope AMEF-specific overrides to the subscription section wherever possible.

---

## Design requirements

The finished section should look like a native part of the AMEF website rather than an external Brevo page.

Use the website's existing:
- typography,
- brand colours,
- spacing conventions,
- border radii,
- button styling,
- content widths,
- responsive conventions.

The visual hierarchy should remain:

**Stay Connected with AMEF → description → email address → CAPTCHA → Subscribe to News & Updates**

You may improve Brevo's default visual styling, but **do not remove or rename functional Brevo classes, IDs, field names, form attributes or CAPTCHA hooks required by the supplied code**.

The section must be fully responsive on desktop, laptop, tablet and mobile. In particular:
- no horizontal page overflow;
- email field remains usable at narrow widths;
- reCAPTCHA is not clipped;
- button remains accessible and readable;
- success/error messages remain readable.

---

## Required testing after implementation

Test all of the following before considering the task complete:

1. Valid email + completed CAPTCHA → successful subscription.
2. Confirm the configured success message appears.
3. Confirm the form hides after successful submission as configured.
4. Confirm the new test subscriber appears in Brevo under **AMEF Newsletter Subscribers (#3)**.
5. Empty email → required-field validation.
6. Invalid email → invalid-email validation.
7. CAPTCHA not completed → submission is prevented/validated.
8. Desktop layout.
9. Tablet layout.
10. Mobile layout.
11. Confirm no unrelated AMEF page or component was visually/functionally changed.

---

## Strict scope restriction

**Do not change anything else on the AMEF website.**

Do not modify unrelated:
- Home page sections,
- header,
- navigation,
- footer,
- About Us,
- What We Do,
- programme pages,
- Get Involved,
- routing,
- images,
- existing forms,
- links,
- text,
- branding,
- or other functionality.

Only make changes necessary to integrate and correctly display the **News & Updates subscription section**.

Preserve the rest of the website exactly as it currently exists.

---

# Complete Brevo-generated HTML

The following is the complete Brevo-generated code supplied from the tested AMEF subscription form. Preserve its functional values as instructed above.

```html
\<!-- Begin Brevo Form -->   \<!-- START - We recommend to place the below code in head tag of your website html  -->  \<style>   @font-face {     font-display: block;     font-family: Roboto;     src: url(https\://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https\://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")   }    @font-face {     font-display: fallback;     font-family: Roboto;     font-weight: 600;     src: url(https\://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https\://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")   }    @font-face {     font-display: fallback;     font-family: Roboto;     font-weight: 700;     src: url(https\://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https\://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")   }    :where(.sib-form-message-panel) {     display: none;   }    :where(.sib-form-message-panel .sib-notification__icon) {     width: 20px;     height: 20px;   }     #sib-container input:-ms-input-placeholder {     font-family: Helvetica, sans-serif;     text-align: left;     color: #c0ccda;   }    #sib-container input::placeholder {     font-family: Helvetica, sans-serif;     text-align: left;     color: #c0ccda;   }    #sib-container textarea::placeholder {     font-family: Helvetica, sans-serif;     text-align: left;     color: #c0ccda;   }     #sib-container a {     text-decoration: underline;     color: #2BB2FC;   } \</style> \<link rel="stylesheet" href="https\://sibforms.com/forms/end-form/build/sib-styles.css">   \<!--  END - We recommend to place the above code in head tag of your website html -->       \<!-- START - We recommend to place the below code where you want the form in your website html  --> \<div class="sib-form" style="text-align: center;          background-color: #EFF2F7;                                     ">   \<div id="sib-form-container" class="sib-form-container">     \<div id="error-message" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;         max-width:540px;">       \<div class="sib-form-message-panel__text sib-form-message-panel__text--center">         \<svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">           \<path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />         \</svg>         \<span class="sib-form-message-panel__inner-text">                   Your subscription could not be saved. Please try again.                                       \</span>       \</div>     \</div>     \<div>\</div>     \<div id="success-message" class="sib-form-message-panel" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#085229; background-color:#e7faf0; border-color:#13ce66; border-radius:3px;         max-width:540px;">       \<div class="sib-form-message-panel__text sib-form-message-panel__text--center">         \<svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">           \<path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />         \</svg>         \<span class="sib-form-message-panel__inner-text">                   Thank you for subscribing! You are now connected with AMEF and will receive our latest news, updates, opportunities and impact stories.                                      \</span>       \</div>     \</div>     \<div>\</div>     \<div id="sib-container" class="sib-container--large sib-container--vertical" style="max-width:540px; text-align:center; background-color:rgba(255,255,255,1); border-width:1px; border-style:solid; border-color:#C0CCD9; border-radius:3px; direction:ltr">       \<form id="sib-form" method="POST" action="https\://e70d2dca.sibforms.com/serve/MUIFAHRV3sXyaTeuGgcXiYl3ifEfkT4rJ_CcjlDlbdw2PlP8R_Vl-5LVMhILf4fjBUMNaaKCfGhNSP6s5pOwhgsKcRQHELYOEJvYDsiGw2EGMuuJPfikvYIzTkjiZjb6l_E7o4-hwrOOqQb2W-M-N9o-\_uJ2GJwZesWWr-kliyyM4BfkGEY2bK4fWwJwQgRfoNfkJ6csKDjJW-BWPw==" data-type="subscription">           \<div style="padding: 8px 0;">             \<div class="sib-form-block" style="font-family:Helvetica, sans-serif; font-size:32px; font-weight:700; text-align:left; color:#3C4858; background-color:transparent; text-align:left">             \<p>Stay Connected with AMEF\</p>           \</div>            \</div>            \<div style="padding: 8px 0;">             \<div class="sib-form-block" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#3C4858; background-color:transparent; text-align:left">             \<div class="sib-text-form-block">               \<p>Receive the latest AMEF news and updates, impact stories, opportunities, events and highlights from our work in Education, Livelihood, Health Care and Child Protection.\</p>             \</div>           \</div>            \</div>            \<div style="padding: 8px 0;">              \<div class="sib-input sib-form-block">             \<div class="form__entry entry_block">               \<div class="form__label-row ">                   \<label class="entry__label" style="font-weight: 700; text-align: left; font-family:Helvetica, sans-serif; font-size:16px; font-weight:700; text-align:left; color:#3c4858;" for="EMAIL" data-required="\*">Enter your email address to stay connected with AMEF\</label>                     \<div class="entry__field">                    \<input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" value="" placeholder="EMAIL" data-required="true" required />                  \</div>                \</div>                \<label class="entry__error entry__error--primary" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;">               \</label>                  \<label class="entry__specification" style="font-family:Helvetica, sans-serif; font-size:12px; text-align:left; color:#8390A4; text-align: left ">                 Provide your email address to subscribe. For e.g abc\@xyz.com               \</label>              \</div>           \</div>             \</div>            \<div style="padding: 8px 0;">               \<div class="sib-captcha sib-form-block">             \<div class="form__entry entry_block">               \<div class="form__label-row ">                   \<script>                   function handleCaptchaResponse() {                     var event = new Event('captchaChange');                     document.getElementById('sib-captcha').dispatchEvent(event);                   }                 \</script>                 \<div class="g-recaptcha sib-visible-recaptcha" id="sib-captcha" data-sitekey="6LfZotEtAAAAAHvn54OEWgVwciOL5AuDkoAyyJ1O" data-callback="handleCaptchaResponse" style="direction:ltr">\</div>               \</div>               \<label class="entry__error entry__error--primary" style="font-family:Helvetica, sans-serif; font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-color:#ff4949; border-radius:3px;">               \</label>                \</div>           \</div>              \</div>            \<div style="padding: 8px 0;">             \<div class="sib-form-block" style="text-align: left">             \<button class="sib-form-block__button sib-form-block__button-with-loader" style="font-family:Helvetica, sans-serif; font-size:16px; font-weight:700; text-align:left; color:#FFFFFF; background-color:#3E4857; border-width:0px; border-radius:3px;" form="sib-form" type="submit">               \<svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">                 \<path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />               \</svg>               Subscribe to News &amp; Updates             \</button>             \</div>            \</div>            \<input type="text" name="email_address_check" value="" class="input--hidden">           \<input type="hidden" name="locale" value="en">         \</form>     \</div>   \</div> \</div> \<!-- END - We recommend to place the above code where you want the form in your website html  -->  \<!-- START - We recommend to place the below code in footer or bottom of your website html  --> \<script>   window\.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';   window\.LOCALE = 'en';       window\.EMAIL_INVALID_MESSAGE = window\.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";        window\.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";    window\.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";     window\.INVALID_NUMBER = "The information provided is invalid. Please review the field format and try again.";       window\.INVALID_DATE = "Please enter a valid date";      window\.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';     window\.translation = {     common: {       selectedList: '{quantity} list selected',       selectedLists: '{quantity} lists selected',       selectedOption: '{quantity} selected',       selectedOptions: '{quantity} selected',     }   };    var AUTOHIDE = Boolean(1); \</script>    \<script defer src="https\://sibforms.com/forms/end-form/build/main.js">\</script>    \<script src="https\://www\.google.com/recaptcha/api.js?hl=en">\</script>     \<!-- END - We recommend to place the above code in footer or bottom of your website html  -->  \<!-- End Brevo Form --> &#x20;
```

---

## Completion checklist

Before handing back the implementation, confirm:

- [ ] Section appears on Home page before the existing footer.
- [ ] AMEF styling is visually consistent.
- [ ] Email field works.
- [ ] Google reCAPTCHA loads and works.
- [ ] Subscribe button submits to Brevo.
- [ ] Successful submission displays the AMEF success message.
- [ ] Successful submission reaches **AMEF Newsletter Subscribers (#3)**.
- [ ] Validation/error states work.
- [ ] Responsive behaviour works on desktop/tablet/mobile.
- [ ] No reCAPTCHA secret key is present in frontend code.
- [ ] No unrelated website content or functionality was changed.
