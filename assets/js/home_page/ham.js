// ...existing code...
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("ham.js loaded");

    // 支援 id 或 class，避免選擇器不符導致無效
    const toggle =
      document.getElementById("nav-toggle") ||
      document.querySelector(".nav-toggle");
    const nav =
      document.getElementById("main-nav-list") ||
      document.querySelector(".main-nav-list");

    if (!toggle) {
      console.warn(
        "nav toggle element not found (expected #nav-toggle or .nav-toggle)"
      );
      return;
    }
    if (!nav) {
      console.warn(
        "nav list element not found (expected #main-nav-list or .main-nav-list)"
      );
      return;
    }

    // Accessibility defaults
    toggle.setAttribute("role", "button");
    toggle.setAttribute(
      "aria-controls",
      nav.id || nav.className || "main-nav-list"
    );
    if (!toggle.hasAttribute("aria-expanded"))
      toggle.setAttribute("aria-expanded", "false");

    // Toggle menu
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      const opened = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(!!opened));
      console.log("nav toggled, opened=", opened);
    });

    // Keyboard support
    toggle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle.click();
      }
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        if (nav.classList.contains("active")) {
          nav.classList.remove("active");
          toggle.setAttribute("aria-expanded", "false");
          console.log("nav closed by outside click");
        }
      }
    });
  });
})();
