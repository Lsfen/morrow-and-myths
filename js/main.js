(function () {
  "use strict";

  // ---------- Episodes ----------
  function escapeHTML(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderEpisodes() {
    var grid = document.getElementById("episode-grid");
    if (!grid || typeof EPISODES === "undefined") return;

    grid.innerHTML = EPISODES.map(function (ep, i) {
      var released = ep.status !== "coming-soon";
      var badge = released ? "Watch now" : "Coming soon";
      var tag = released ? "a" : "div";
      var attrs = released
        ? ' href="' + escapeHTML(ep.link) + '" target="_blank" rel="noopener"'
        : ' aria-disabled="true"';
      var number = String(EPISODES.length - i).padStart(2, "0");

      return (
        "<article class=\"episode " + (released ? "is-released" : "is-soon") + "\">" +
          "<" + tag + " class=\"episode-card\"" + attrs + ">" +
            "<div class=\"episode-media\">" +
              "<img src=\"" + escapeHTML(ep.image) + "\" alt=\"Cover art for " + escapeHTML(ep.title) + "\" loading=\"lazy\" onerror=\"this.remove()\">" +
            "</div>" +
            "<span class=\"episode-badge\">" + badge + "</span>" +
            "<div class=\"episode-info\">" +
              "<p class=\"episode-meta\">Guest No. " + number + (ep.origin ? " &middot; " + escapeHTML(ep.origin) : "") + "</p>" +
              "<h3>" + escapeHTML(ep.title) + "</h3>" +
              "<p class=\"episode-summary\">" + escapeHTML(ep.summary) + "</p>" +
              (released
                ? "<span class=\"episode-cta\"><span class=\"play\" aria-hidden=\"true\"></span>Watch on Facebook Reels</span>"
                : "<span class=\"episode-cta\">" + escapeHTML(ep.date || "Arriving soon") + "</span>") +
            "</div>" +
          "</" + tag + ">" +
        "</article>"
      );
    }).join("");
  }

  // ---------- Mobile nav ----------
  function setupNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.getElementById("nav-links");
    var nav = document.querySelector(".site-nav");
    if (!toggle || !links) return;

    function close() {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.classList.remove("nav-open");
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      document.body.classList.toggle("nav-open", !open);
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });

    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Gentle reveal on scroll ----------
  function setupReveal() {
    var els = document.querySelectorAll(".section-head, .character-text, .portrait, .archive-head, .archive-art, .archive-body, .ritual li, .episode, .follow-card");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    els.forEach(function (el) { el.classList.add("reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderEpisodes();
    setupNav();
    setupReveal();
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
