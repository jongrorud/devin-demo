/* Personal website interactions: theme toggle, mobile nav, contact form. */
(function () {
  "use strict";

  /* ----- Theme toggle (persisted, respects OS preference) ----------------- */
  var root = document.documentElement;
  var THEME_KEY = "site-theme";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
  }

  function initTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {
      saved = null;
    }
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    } else {
      applyTheme("dark");
    }
  }

  initTheme();

  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        /* storage unavailable; theme still applies for this session */
      }
    });
  }

  /* ----- Mobile navigation ------------------------------------------------ */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = document.querySelector("[data-nav-links]");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.addEventListener("click", function (event) {
      if (event.target.closest(".nav__link")) {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ----- Footer year ------------------------------------------------------ */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* ----- Scroll reveal ----------------------------------------------------- */
  var revealEls = Array.prototype.slice.call(
    document.querySelectorAll(".reveal")
  );
  if (revealEls.length) {
    if (
      "IntersectionObserver" in window &&
      !(
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
    ) {
      var observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  /* ----- Contact form validation ------------------------------------------ */
  var form = document.querySelector("[data-contact-form]");
  if (!form) {
    return;
  }

  var status = form.querySelector("[data-form-status]");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(field, message) {
    var wrapper = field.closest(".field");
    if (!wrapper) return;
    var errorEl = wrapper.querySelector(".field__error");
    if (message) {
      wrapper.classList.add("has-error");
      field.setAttribute("aria-invalid", "true");
      if (errorEl) errorEl.textContent = message;
    } else {
      wrapper.classList.remove("has-error");
      field.removeAttribute("aria-invalid");
      if (errorEl) errorEl.textContent = "";
    }
  }

  function validateField(field) {
    var value = field.value.trim();
    if (!value) {
      setError(field, "This field is required.");
      return false;
    }
    if (field.type === "email" && !emailPattern.test(value)) {
      setError(field, "Please enter a valid email address.");
      return false;
    }
    setError(field, "");
    return true;
  }

  var fields = Array.prototype.slice.call(
    form.querySelectorAll("input[required], textarea[required]")
  );

  fields.forEach(function (field) {
    field.addEventListener("blur", function () {
      validateField(field);
    });
    field.addEventListener("input", function () {
      if (field.closest(".field").classList.contains("has-error")) {
        validateField(field);
      }
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var valid = true;
    fields.forEach(function (field) {
      if (!validateField(field)) {
        valid = false;
      }
    });

    if (!valid) {
      if (status) {
        status.className = "form__status";
      }
      var firstError = form.querySelector(".has-error input, .has-error textarea");
      if (firstError) firstError.focus();
      return;
    }

    var name = form.querySelector("#name");
    if (status) {
      status.textContent =
        "Thanks" +
        (name && name.value ? ", " + name.value.trim() : "") +
        "! Your message has been received. I'll get back to you soon.";
      status.className = "form__status is-visible is-success";
    }
    form.reset();
  });
})();
