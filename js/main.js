/**
 * Renders PORTFOLIO_DATA (js/data.js) into the page, and handles the
 * theme toggle, mobile nav, clean page routing, and scroll-reveal animation.
 *
 * Site content should still be edited in js/data.js.
 */

(function () {
  "use strict";

  var d = typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : null;

  document.addEventListener("DOMContentLoaded", function () {
    if (!d) {
      console.error(
        "PORTFOLIO_DATA not found — check that js/data.js loaded before js/main.js."
      );
      return;
    }

    renderHero(d.personal);
    renderAbout(d.personal);
    renderEducation(d.education);
    renderPublications(d.publications);
    renderExperience(d.experience);
    renderSkills(d.skills);
    renderCertifications(d.certifications);
    renderReferences(d.references);
    renderContact(d.personal);
    renderFooter(d);

    initPageRouting();
    initThemeToggle();
    initMobileNav();
    initScrollReveal();
    initNetworkCanvas();
  });

  /* ---------------------------------------------------------------- */
  /* small helpers                                                     */
  /* ---------------------------------------------------------------- */

  function el(tag, className, html) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function text(tag, className, str) {
    var e = document.createElement(tag);
    if (className) e.className = className;
    e.textContent = str;
    return e;
  }

  function escapeHtml(str) {
    var d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  function highlightSelf(authors, name) {
    var safeAuthors = escapeHtml(authors);
    var safeName = escapeHtml(name);

    if (!safeName) return safeAuthors;

    return safeAuthors
      .split(safeName)
      .join('<span class="me">' + safeName + "</span>");
  }

  /* ---------------------------------------------------------------- */
  /* clean page routing                                                */
  /* ---------------------------------------------------------------- */

  var PAGE_ROUTES = {
    "/": "home",
    "/about": "about",
    "/education": "education",
    "/publications": "publications",
    "/experience": "experience",
    "/skills": "skills",
    "/certifications": "certifications",
    "/references": "references",
    "/contact": "contact"
  };

  function initPageRouting() {
    var path = window.location.pathname.replace(/\/+$/, "") || "/";
    var page = PAGE_ROUTES[path] || "home";

    var hero = document.querySelector(".hero");

    var sections = {
      about: document.getElementById("about"),
      education: document.getElementById("education"),
      publications: document.getElementById("publications"),
      experience: document.getElementById("experience"),
      skills: document.getElementById("skills"),
      certifications: document.getElementById("certifications"),
      references: document.getElementById("references"),
      contact: document.getElementById("contact")
    };

    /* Home page shows hero only */
    if (hero) {
      hero.style.display = page === "home" ? "" : "none";
    }

    /* Show only the requested section on internal pages */
    Object.keys(sections).forEach(function (key) {
      var section = sections[key];

      if (!section) return;

      section.style.display = page === key ? "" : "none";
    });

    /* Page titles */
    var titles = {
      home: "Muhammad Abbas — Computer Vision & Deep Learning Researcher",
      about: "About — Muhammad Abbas",
      education: "Education — Muhammad Abbas",
      publications: "Publications — Muhammad Abbas",
      experience: "Experience — Muhammad Abbas",
      skills: "Skills — Muhammad Abbas",
      certifications: "Certifications — Muhammad Abbas",
      references: "References — Muhammad Abbas",
      contact: "Contact — Muhammad Abbas"
    };

    document.title = titles[page] || titles.home;

    /* Active navigation item */
    var navLinks = document.querySelectorAll("#nav-links a");

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");

      if (href === path) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* hero                                                              */
  /* ---------------------------------------------------------------- */

  function renderHero(p) {
    var heroName = document.getElementById("hero-name");
    var heroRole = document.getElementById("hero-role");
    var heroTagline = document.getElementById("hero-tagline");

    if (heroName) heroName.textContent = p.name;
    if (heroRole) heroRole.textContent = p.role;
    if (heroTagline) heroTagline.textContent = p.tagline;

    var availabilityEl = document.getElementById("hero-availability");

    if (availabilityEl) {
      if (p.availability) {
        availabilityEl.textContent = p.availability;
      } else if (availabilityEl.parentNode) {
        availabilityEl.remove();
      }
    }

    var visual = document.getElementById("hero-visual");
    var photoImg = document.getElementById("hero-photo");

    if (p.photo && photoImg) {
      photoImg.src = p.photo;
      photoImg.alt = p.name + " — portrait";
    } else if (visual) {
      visual.remove();
    }

    var actions = document.getElementById("hero-actions");

    if (!actions) return;

    var viewPubs = text(
      "a",
      "btn btn-primary",
      "View publications"
    );

    viewPubs.href = "/publications";
    actions.appendChild(viewPubs);

    if (p.email) {
      var emailBtn = text(
        "a",
        "btn btn-ghost",
        "Email me"
      );

      emailBtn.href = "mailto:" + p.email;
      actions.appendChild(emailBtn);
    }

    var links = p.links || {};

    var linkLabels = {
      github: "GitHub",
      linkedin: "LinkedIn",
      googleScholar: "Google Scholar",
      cvFile: "Download CV"
    };

    Object.keys(linkLabels).forEach(function (key) {
      if (links[key]) {
        var a = text(
          "a",
          "btn btn-ghost",
          linkLabels[key]
        );

        a.href = links[key];

        if (key !== "cvFile") {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }

        actions.appendChild(a);
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* about                                                              */
  /* ---------------------------------------------------------------- */

  function renderAbout(p) {
    var target = document.getElementById("about-text");

    if (target) {
      target.textContent = p.about;
    }
  }

  /* ---------------------------------------------------------------- */
  /* education                                                         */
  /* ---------------------------------------------------------------- */

  function renderEducation(list) {
    var wrap = document.getElementById("education-list");

    if (!wrap) return;

    (list || []).forEach(function (item) {
      var node = el("div", "timeline-item");

      node.appendChild(
        text("span", "timeline-period", item.period)
      );

      node.appendChild(
        text("h3", "timeline-title", item.degree)
      );

      node.appendChild(
        text("p", "timeline-org", item.institution)
      );

      if (item.score) {
        node.appendChild(
          text("span", "timeline-score", item.score)
        );
      }

      wrap.appendChild(node);
    });
  }

  /* ---------------------------------------------------------------- */
  /* experience                                                        */
  /* ---------------------------------------------------------------- */

  function renderExperience(list) {
    var wrap = document.getElementById("experience-list");

    if (!wrap) return;

    (list || []).forEach(function (item) {
      var node = el("div", "timeline-item");

      node.appendChild(
        text("span", "timeline-period", item.period)
      );

      node.appendChild(
        text("h3", "timeline-title", item.title)
      );

      node.appendChild(
        text(
          "p",
          "timeline-org",
          item.org +
            (item.location ? " — " + item.location : "")
        )
      );

      if (item.bullets && item.bullets.length) {
        var ul = el("ul", "timeline-bullets");

        item.bullets.forEach(function (b) {
          ul.appendChild(text("li", "", b));
        });

        node.appendChild(ul);
      }

      wrap.appendChild(node);
    });
  }

  /* ---------------------------------------------------------------- */
  /* publications                                                      */
  /* ---------------------------------------------------------------- */

  function renderPublications(list) {
    var wrap = document.getElementById("publications-list");

    if (!wrap) return;

    /*
     * Temporary publication notice.
     * Detailed publication cards are intentionally hidden for now.
     */

    var notice = el("div", "pub-card");

    notice.innerHTML =
      '<h3 class="pub-title">WACV 2027 · IEEE Access</h3>' +
      '<p class="pub-summary">Two manuscripts are currently under review.</p>';

    wrap.appendChild(notice);
  }

  /* ---------------------------------------------------------------- */
  /* skills                                                             */
  /* ---------------------------------------------------------------- */

  function renderSkills(groups) {
    var wrap = document.getElementById("skills-list");

    if (!wrap) return;

    (groups || []).forEach(function (group) {
      var block = el("div", "skill-group");

      block.appendChild(
        text("p", "skill-group-name", group.group)
      );

      var row = el("div", "chip-row");

      (group.items || []).forEach(function (item) {
        row.appendChild(
          text("span", "chip", item)
        );
      });

      block.appendChild(row);
      wrap.appendChild(block);
    });
  }

  /* ---------------------------------------------------------------- */
  /* certifications                                                    */
  /* ---------------------------------------------------------------- */

  function renderCertifications(groups) {
    var wrap = document.getElementById("certifications-list");

    if (!wrap) return;

    (groups || []).forEach(function (group) {
      var section = el("div", "cert-group");

      var head = el("div", "cert-group-head");

      head.appendChild(
        text("h3", "cert-group-name", group.program)
      );

      if (group.issuer) {
        head.appendChild(
          text("span", "cert-group-issuer", group.issuer)
        );
      }

      section.appendChild(head);

      var grid = el("div", "cert-grid");

      (group.items || []).forEach(function (cert) {
        var card = el("figure", "cert-card");

        var imgWrap = el("a", "cert-image-wrap");

        imgWrap.href = cert.image;
        imgWrap.target = "_blank";
        imgWrap.rel = "noopener noreferrer";

        imgWrap.setAttribute(
          "aria-label",
          "View full certificate: " + cert.title
        );

        var img = document.createElement("img");

        img.className = "cert-image";
        img.src = cert.image;
        img.alt = cert.title + " certificate";
        img.loading = "lazy";

        imgWrap.appendChild(img);
        card.appendChild(imgWrap);

        var body = el("figcaption", "cert-body");

        body.appendChild(
          text("p", "cert-title", cert.title)
        );

        var metaRow = el("div", "cert-meta");

        if (cert.date) {
          metaRow.appendChild(
            text("span", "cert-date", cert.date)
          );
        }

        if (cert.verifyUrl) {
          var link = text(
            "a",
            "cert-verify",
            "Verify ↗"
          );

          link.href = cert.verifyUrl;
          link.target = "_blank";
          link.rel = "noopener noreferrer";

          metaRow.appendChild(link);
        }

        body.appendChild(metaRow);
        card.appendChild(body);
        grid.appendChild(card);
      });

      section.appendChild(grid);
      wrap.appendChild(section);
    });
  }

  /* ---------------------------------------------------------------- */
  /* references                                                        */
  /* ---------------------------------------------------------------- */

  function renderReferences(list) {
    var wrap = document.getElementById("references-list");

    if (!wrap) return;

    (list || []).forEach(function (ref) {
      var card = el("div", "ref-card");

      card.appendChild(
        text("p", "ref-name", ref.name)
      );

      card.appendChild(
        text("p", "ref-title", ref.title)
      );

      card.appendChild(
        text("span", "ref-relation", ref.relation)
      );

      if (ref.email) {
        var a = text(
          "a",
          "ref-email",
          ref.email
        );

        a.href = "mailto:" + ref.email;
        card.appendChild(a);
      }

      wrap.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* contact                                                           */
  /* ---------------------------------------------------------------- */

  function renderContact(p) {
    var wrap = document.getElementById("contact-actions");

    if (!wrap) return;

    if (p.email) {
      var mail = text(
        "a",
        "btn btn-primary",
        "Send an email"
      );

      mail.href = "mailto:" + p.email;
      wrap.appendChild(mail);
    }

    if (p.phone) {
      var call = text(
        "a",
        "btn btn-ghost",
        "Call"
      );

      call.href =
        "tel:" + p.phone.replace(/\s+/g, "");

      wrap.appendChild(call);
    }

    var links = p.links || {};

    var linkLabels = {
      github: "GitHub",
      linkedin: "LinkedIn",
      googleScholar: "Google Scholar"
    };

    Object.keys(linkLabels).forEach(function (key) {
      if (links[key]) {
        var a = text(
          "a",
          "btn btn-ghost",
          linkLabels[key]
        );

        a.href = links[key];
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        wrap.appendChild(a);
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* footer                                                            */
  /* ---------------------------------------------------------------- */

  function renderFooter(data) {
    var p = data.personal || {};

    renderFooterTagline(p);
    renderFooterSocialRow(p);
    renderFooterNav();
    renderFooterDetails(data);
    renderFooterBottom(data, p);
  }

  function renderFooterTagline(p) {
    var short = p.role || "";

    var tagline = document.getElementById(
      "footer-tagline"
    );

    if (tagline) {
      tagline.textContent = short;
    }

    var repeat = document.getElementById(
      "footer-tagline-repeat"
    );

    if (repeat) {
      repeat.textContent = short;
    }
  }

  var SOCIAL_ICONS = {
    email:
      '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/>',

    github:
      '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.7 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',

    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',

    googleScholar:
      '<path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"/>',

    orcid:
      '<circle cx="12" cy="12" r="9"/><text x="12" y="15.3" text-anchor="middle" font-size="7.5" font-family="Inter, sans-serif" font-weight="700" fill="currentColor" stroke="none">iD</text>',

    instagram:
      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>',

    facebook:
      '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'
  };

  var SOCIAL_CONFIG = [
    {
      key: "instagram",
      label: "Instagram"
    },
    {
      key: "facebook",
      label: "Facebook"
    },
    {
      key: "linkedin",
      label: "LinkedIn"
    },
    {
      key: "github",
      label: "GitHub"
    },
    {
      key: "googleScholar",
      label: "Google Scholar"
    },
    {
      key: "orcid",
      label: "ORCID"
    },
    {
      key: "email",
      label: "Email",
      isEmail: true
    }
  ];

  function renderFooterSocialRow(p) {
    var wrap = document.getElementById(
      "footer-social-row"
    );

    if (!wrap) return;

    var links = p.links || {};

    SOCIAL_CONFIG.forEach(function (cfg) {
      var href = cfg.isEmail
        ? p.email
          ? "mailto:" + p.email
          : ""
        : links[cfg.key];

      if (!href) return;

      var a = el(
        "a",
        "footer-social-btn",
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
          SOCIAL_ICONS[cfg.key] +
          "</svg>"
      );

      a.href = href;
      a.setAttribute("aria-label", cfg.label);
      a.title = cfg.label;

      if (!cfg.isEmail) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      wrap.appendChild(a);
    });
  }

  function renderFooterNav() {
    var nav = document.getElementById("footer-nav");

    if (!nav) return;

    var items = [
      {
        href: "/about",
        label: "About"
      },
      {
        href: "/publications",
        label: "Publications"
      },
      {
        href: "/experience",
        label: "Experience"
      },
      {
        href: "/contact",
        label: "Contact"
      }
    ];

    items.forEach(function (item) {
      var a = text(
        "a",
        "",
        item.label
      );

      a.href = item.href;
      nav.appendChild(a);
    });
  }

  function renderFooterDetails(data) {
    var wrap = document.getElementById(
      "footer-details"
    );

    if (!wrap) return;

    var lines = [];

    var firstEdu =
      (data.education || [])[0];

    if (
      firstEdu &&
      firstEdu.institution
    ) {
      lines.push(firstEdu.institution);
    }

    if (
      data.personal &&
      data.personal.location
    ) {
      lines.push(data.personal.location);
    }

    if (
      data.personal &&
      data.personal.availability
    ) {
      lines.push(
        data.personal.availability
      );
    }

    lines.forEach(function (line) {
      wrap.appendChild(
        text("span", "", line)
      );
    });
  }

  function renderFooterBottom(data, p) {
    var copyright = document.getElementById(
      "footer-copyright"
    );

    if (copyright) {
      var year = new Date().getFullYear();

      var updated = data.lastUpdated
        ? " · updated " + data.lastUpdated
        : "";

      copyright.textContent =
        "© " +
        year +
        " " +
        (p.name || "") +
        updated;
    }
  }

  /* ---------------------------------------------------------------- */
  /* theme toggle                                                      */
  /* ---------------------------------------------------------------- */

  function initThemeToggle() {
    var btn = document.getElementById(
      "theme-toggle"
    );

    var root = document.documentElement;

    if (!btn) return;

    function syncButton() {
      var isDark =
        root.getAttribute("data-theme") ===
        "dark";

      btn.setAttribute(
        "aria-pressed",
        String(isDark)
      );

      btn.setAttribute(
        "aria-label",
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      );
    }

    syncButton();

    btn.addEventListener("click", function () {
      var next =
        root.getAttribute("data-theme") ===
        "dark"
          ? "light"
          : "dark";

      root.setAttribute(
        "data-theme",
        next
      );

      try {
        localStorage.setItem(
          "theme",
          next
        );
      } catch (e) {}

      syncButton();

      if (window.__redrawNetwork) {
        window.__redrawNetwork();
      }
    });

    if (window.matchMedia) {
      var mediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      var handleThemeChange = function (e) {
        var stored = null;

        try {
          stored =
            localStorage.getItem(
              "theme"
            );
        } catch (err) {}

        if (!stored) {
          root.setAttribute(
            "data-theme",
            e.matches ? "dark" : "light"
          );

          syncButton();
        }
      };

      if (
        typeof mediaQuery.addEventListener ===
        "function"
      ) {
        mediaQuery.addEventListener(
          "change",
          handleThemeChange
        );
      } else if (
        typeof mediaQuery.addListener ===
        "function"
      ) {
        mediaQuery.addListener(
          handleThemeChange
        );
      }
    }
  }

  /* ---------------------------------------------------------------- */
  /* mobile nav                                                        */
  /* ---------------------------------------------------------------- */

  function initMobileNav() {
    var toggle =
      document.getElementById("nav-toggle");

    var links =
      document.getElementById("nav-links");

    if (!toggle || !links) return;

    function close() {
      document.body.classList.remove(
        "nav-open"
      );

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.setAttribute(
        "aria-label",
        "Open menu"
      );
    }

    function open() {
      document.body.classList.add(
        "nav-open"
      );

      toggle.setAttribute(
        "aria-expanded",
        "true"
      );

      toggle.setAttribute(
        "aria-label",
        "Close menu"
      );
    }

    toggle.addEventListener(
      "click",
      function () {
        document.body.classList.contains(
          "nav-open"
        )
          ? close()
          : open();
      }
    );

    links.addEventListener(
      "click",
      function (e) {
        if (
          e.target.tagName === "A"
        ) {
          close();
        }
      }
    );

    document.addEventListener(
      "keydown",
      function (e) {
        if (e.key === "Escape") {
          close();
        }
      }
    );
  }

  /* ---------------------------------------------------------------- */
  /* ambient network background                                       */
  /* ---------------------------------------------------------------- */

  function initNetworkCanvas() {
    var canvas =
      document.getElementById("net-canvas");

    if (
      !canvas ||
      !canvas.getContext
    ) {
      return;
    }

    var ctx =
      canvas.getContext("2d");

    var reduceMotion =
      window.matchMedia &&
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

    var isCoarsePointer =
      window.matchMedia &&
      window.matchMedia(
        "(pointer: coarse)"
      ).matches;

    var nodes = [];
    var packets = [];

    var w = 0;
    var h = 0;

    var dpr = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    var LINK_DIST = 150;
    var CURSOR_RADIUS = 160;

    var mouse = {
      x: -9999,
      y: -9999,
      active: false
    };

    var t = 0;
    var rafId = null;
    var running = true;

    function themeColor(
      name,
      fallback
    ) {
      var v =
        getComputedStyle(
          document.documentElement
        )
          .getPropertyValue(name)
          .trim();

      return v || fallback;
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      canvas.style.width =
        w + "px";

      canvas.style.height =
        h + "px";

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      var count = Math.round(
        (w * h) / 34000
      );

      count = Math.max(
        16,
        Math.min(count, 60)
      );

      nodes = [];

      for (
        var i = 0;
        i < count;
        i++
      ) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx:
            (Math.random() - 0.5) *
            0.16,
          vy:
            (Math.random() - 0.5) *
            0.16,
          baseR:
            1.2 +
            Math.random() * 1,
          phase:
            Math.random() *
            Math.PI *
            2,
          speed:
            0.6 +
            Math.random() * 0.6
        });
      }

      packets = [];
    }

    function maybeSpawnPacket(
      edges
    ) {
      if (
        reduceMotion ||
        !edges.length
      ) {
        return;
      }

      if (
        Math.random() > 0.028
      ) {
        return;
      }

      var e =
        edges[
          (Math.random() *
            edges.length) |
            0
        ];

      packets.push({
        a: e.a,
        b: e.b,
        tt: 0,
        speed:
          0.006 +
          Math.random() * 0.006
      });
    }

    function step() {
      if (!running) return;

      t += 1;

      ctx.clearRect(
        0,
        0,
        w,
        h
      );

      var lineColor =
        themeColor(
          "--node-line",
          "rgba(88,210,198,0.35)"
        );

      var lineColor2 =
        themeColor(
          "--node-line-2",
          "rgba(127,163,232,0.28)"
        );

      var dotColor =
        themeColor(
          "--node-dot",
          "rgba(88,210,198,0.55)"
        );

      var packetColor =
        themeColor(
          "--node-packet",
          "#9FE8DF"
        );

      for (
        var i = 0;
        i < nodes.length;
        i++
      ) {
        var n = nodes[i];

        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;

          if (
            n.x < -20 ||
            n.x > w + 20
          ) {
            n.vx *= -1;
          }

          if (
            n.y < -20 ||
            n.y > h + 20
          ) {
            n.vy *= -1;
          }

          if (mouse.active) {
            var mdx =
              n.x - mouse.x;

            var mdy =
              n.y - mouse.y;

            var mdist =
              Math.sqrt(
                mdx * mdx +
                  mdy * mdy
              );

            if (
              mdist <
                CURSOR_RADIUS &&
              mdist > 0.01
            ) {
              var force =
                (1 -
                  mdist /
                    CURSOR_RADIUS) *
                0.018;

              n.x +=
                (mdx / mdist) *
                force *
                10;

              n.y +=
                (mdy / mdist) *
                force *
                10;
            }
          }
        }
      }

      var edges = [];

      ctx.lineWidth = 1;

      for (
        var a = 0;
        a < nodes.length;
        a++
      ) {
        for (
          var b = a + 1;
          b < nodes.length;
          b++
        ) {
          var dx =
            nodes[a].x -
            nodes[b].x;

          var dy =
            nodes[a].y -
            nodes[b].y;

          var dist =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            dist < LINK_DIST
          ) {
            edges.push({
              a: nodes[a],
              b: nodes[b],
              dist: dist
            });

            var nearCursor =
              mouse.active &&
              Math.min(
                Math.hypot(
                  nodes[a].x -
                    mouse.x,
                  nodes[a].y -
                    mouse.y
                ),
                Math.hypot(
                  nodes[b].x -
                    mouse.x,
                  nodes[b].y -
                    mouse.y
                )
              ) <
                CURSOR_RADIUS;

            var baseAlpha =
              1 -
              dist /
                LINK_DIST;

            ctx.strokeStyle =
              (a + b) % 5 === 0
                ? lineColor2
                : lineColor;

            ctx.globalAlpha =
              nearCursor
                ? Math.min(
                    baseAlpha *
                      1.9,
                    0.9
                  )
                : baseAlpha;

            ctx.beginPath();

            ctx.moveTo(
              nodes[a].x,
              nodes[a].y
            );

            ctx.lineTo(
              nodes[b].x,
              nodes[b].y
            );

            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      for (
        var j = 0;
        j < nodes.length;
        j++
      ) {
        var nd = nodes[j];

        var pulse = reduceMotion
          ? 0.5
          : 0.5 +
            0.5 *
              Math.sin(
                t *
                  0.02 *
                  nd.speed +
                  nd.phase
              );

        ctx.globalAlpha =
          0.55 +
          pulse * 0.45;

        ctx.fillStyle =
          dotColor;

        ctx.beginPath();

        ctx.arc(
          nd.x,
          nd.y,
          nd.baseR +
            pulse * 0.9,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalAlpha = 1;

      maybeSpawnPacket(edges);

      for (
        var k =
          packets.length - 1;
        k >= 0;
        k--
      ) {
        var p = packets[k];

        p.tt += p.speed;

        if (p.tt >= 1) {
          packets.splice(k, 1);
          continue;
        }

        var px =
          p.a.x +
          (p.b.x - p.a.x) *
            p.tt;

        var py =
          p.a.y +
          (p.b.y - p.a.y) *
            p.tt;

        var fade =
          Math.sin(
            p.tt * Math.PI
          );

        ctx.globalAlpha =
          fade;

        ctx.fillStyle =
          packetColor;

        ctx.beginPath();

        ctx.arc(
          px,
          py,
          1.8,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (!reduceMotion) {
        rafId =
          requestAnimationFrame(
            step
          );
      }
    }

    resize();
    step();

    if (reduceMotion) {
      window.__redrawNetwork =
        step;
    }

    var resizeTimer;

    window.addEventListener(
      "resize",
      function () {
        clearTimeout(
          resizeTimer
        );

        resizeTimer =
          setTimeout(
            resize,
            200
          );

        if (reduceMotion) {
          setTimeout(
            step,
            220
          );
        }
      }
    );

    if (
      !reduceMotion &&
      !isCoarsePointer
    ) {
      window.addEventListener(
        "mousemove",
        function (e) {
          mouse.x =
            e.clientX;

          mouse.y =
            e.clientY;

          mouse.active = true;
        },
        {
          passive: true
        }
      );

      window.addEventListener(
        "mouseleave",
        function () {
          mouse.active =
            false;
        }
      );
    }

    document.addEventListener(
      "visibilitychange",
      function () {
        if (
          document.hidden
        ) {
          running = false;

          if (rafId) {
            cancelAnimationFrame(
              rafId
            );
          }
        } else if (
          !reduceMotion
        ) {
          running = true;
          step();
        }
      }
    );
  }

  /* ---------------------------------------------------------------- */
  /* scroll reveal                                                     */
  /* ---------------------------------------------------------------- */

  function initScrollReveal() {
    var targets =
      document.querySelectorAll(
        ".reveal, .badge-reveal"
      );

    if (
      !(
        "IntersectionObserver" in
        window
      ) ||
      !targets.length
    ) {
      targets.forEach(
        function (t) {
          t.classList.add(
            "is-visible"
          );
        }
      );

      return;
    }

    var io =
      new IntersectionObserver(
        function (entries) {
          entries.forEach(
            function (entry) {
              if (
                entry.isIntersecting
              ) {
                entry.target.classList.add(
                  "is-visible"
                );

                io.unobserve(
                  entry.target
                );
              }
            }
          );
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -40px 0px"
        }
      );

    targets.forEach(
      function (t) {
        io.observe(t);
      }
    );
  }
})();