import childProtectionPdfUrl from "./assets/policies/AMEF_CHILD_PROTECTION_POLICY_VERSION_1.0.pdf?url";
import pseahPdfUrl from "./assets/policies/AMEF_PSEAH_Policy_version 1.0.pdf?url";

const policyUrls = {
  "child-pdf": childProtectionPdfUrl,
  "pseah-pdf": pseahPdfUrl,
};

document.querySelectorAll("[data-policy]").forEach((link) => {
  link.href = policyUrls[link.dataset.policy];
});
