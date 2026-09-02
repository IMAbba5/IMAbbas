/**
 * Renders PORTFOLIO_DATA (js/data.js) into the page, and handles the
 * theme toggle, mobile nav, and scroll-reveal animation.
 * You should not need to edit this file to update site content —
 * edit js/data.js instead.
 */

(function () {
  "use strict";

  var d = typeof PORTFOLIO_DATA !== "undefined" ? PORTFOLIO_DATA : null;

  document.addEventListener("DOMContentLoaded", function () {
    if (!d) {
      console.error("PORTFOLIO_DATA not found — check that js/data.js loaded before js/main.js.");
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
    initWorkflowBackdrops();

    initThemeToggle();
    initMobileNav();
    initScrollReveal();
    initNetworkCanvas();
  });

  /* ---------------------------------------------------------------- */
  /* distinct n8n-style workflow backdrops                             */
  /* ---------------------------------------------------------------- */

  function initWorkflowBackdrops() {
    var configs = {
      about: {
        paths: [
          "M45 195 H170 C205 195 210 90 250 90 H360 C395 90 400 195 435 195 H545 C580 195 585 300 620 300 H730 C765 300 770 195 805 195 H925 C960 195 965 105 1005 105 H1135",
          "M170 195 C210 195 215 300 250 300 H360 C395 300 400 195 435 195",
          "M545 195 C580 195 585 90 625 90 H735 C770 90 775 195 805 195"
        ],
        nodes: [[55,195,70,"IDEA"],[250,90,90,"RESEARCH"],[250,300,90,"DATA"],[435,195,92,"AGENT"],[620,300,90,"TOOLS"],[620,90,90,"MEMORY"],[805,195,90,"MODEL"],[970,105,90,"VERIFY"],[1100,195,72,"OUT"]],
        dots: [0,1,2]
      },
      education: {
        paths: [
          "M55 85 H180 V195 H315 V85 H450 V195 H585 V305 H720 V195 H855 V85 H990 V195 H1125",
          "M315 195 V305 H450 V195",
          "M585 305 V85 H720 V195",
          "M855 195 V305 H990 V195"
        ],
        nodes: [[55,85,70,"START"],[180,195,86,"LEARN"],[315,85,86,"STUDY"],[450,195,86,"PRACTICE"],[585,305,86,"BUILD"],[720,195,86,"TEST"],[855,85,86,"REVIEW"],[990,195,86,"REFINE"],[1125,195,70,"NEXT"]],
        dots: [0,1,2]
      },
      publications: {
        paths: [
          "M50 195 H170 C205 195 215 80 250 80 H350 C385 80 395 195 430 195 H530 C565 195 575 310 610 310 H710 C745 310 755 195 790 195 H890 C925 195 935 80 970 80 H1135",
          "M170 195 C205 195 215 310 250 310 H350 C385 310 395 195 430 195",
          "M530 195 C565 195 575 80 610 80 H710 C745 80 755 195 790 195",
          "M890 195 C925 195 935 310 970 310 H1070 C1105 310 1110 195 1135 195"
        ],
        nodes: [[55,195,70,"IDEA"],[250,80,92,"SEARCH"],[250,310,92,"DATA"],[430,195,92,"METHOD"],[610,80,92,"AGENT"],[610,310,92,"EXPERIMENT"],[790,195,92,"RESULT"],[970,80,92,"REVIEW"],[970,310,92,"REVISE"],[1115,195,72,"PAPER"]],
        dots: [0,1,2]
      },
      experience: {
        paths: [
          "M50 195 H170 H290 H410 H530 H650 H770 H890 H1010 H1130",
          "M530 195 C565 195 570 90 610 90 H690 C730 90 735 195 770 195",
          "M530 195 C565 195 570 300 610 300 H690 C730 300 735 195 770 195",
          "M890 195 C925 195 930 105 970 105 H1040 C1075 105 1080 195 1130 195"
        ],
        nodes: [[55,195,72,"REQUEST"],[170,195,86,"INTAKE"],[290,195,86,"PLAN"],[410,195,86,"ROUTE"],[530,195,92,"AGENT"],[650,90,88,"TOOL A"],[650,300,88,"TOOL B"],[770,195,92,"MERGE"],[890,195,92,"VERIFY"],[1010,105,88,"LOG"],[1130,195,72,"DONE"]],
        dots: [0,1,2]
      },
      skills: {
        paths: [
          "M590 195 C510 195 460 95 370 95",
          "M590 195 C510 195 455 195 350 195",
          "M590 195 C510 195 460 295 370 295",
          "M590 195 C670 195 720 95 810 95",
          "M590 195 C670 195 725 195 840 195",
          "M590 195 C670 195 720 295 810 295"
        ],
        nodes: [[590,195,110,"SKILL HUB"],[325,95,96,"PYTORCH"],[305,195,96,"PYTHON"],[325,295,96,"OPENCV"],[855,95,96,"CLIP / SAM"],[875,195,96,"GIT / LINUX"],[855,295,96,"CUDA"],[590,195,40,"CORE"]],
        dots: [0,1,2]
      },
      certifications: {
        paths: [
          "M590 45 V105 V165 V225 V285 V345",
          "M590 165 C530 165 500 105 430 105 H310",
          "M590 225 C650 225 680 285 750 285 H870",
          "M590 285 C530 285 500 345 430 345 H310"
        ],
        nodes: [[590,45,92,"ENROLL"],[590,105,92,"COURSE"],[590,165,92,"LEARN"],[590,225,92,"ASSESS"],[590,285,92,"CERTIFY"],[590,345,92,"VERIFY"],[260,105,90,"PROGRESS"],[915,285,90,"RECORD"],[260,345,90,"BADGE"]],
        dots: [0,1,2]
      },
      mentor: {
        paths: [
          "M70 195 C150 195 160 80 245 80 H350 C430 80 430 195 510 195 H670 C750 195 750 310 830 310 H935 C1015 310 1025 195 1110 195",
          "M70 195 C150 195 160 310 245 310 H350 C430 310 430 195 510 195",
          "M510 195 C590 195 590 80 670 80 H775 C855 80 855 195 935 195",
          "M670 195 C735 195 760 195 825 195"
        ],
        nodes: [[70,195,72,"QUESTION"],[245,80,92,"MENTOR"],[245,310,92,"GOAL"],[510,195,94,"SYNC"],[670,80,92,"REVIEW"],[670,310,92,"FEEDBACK"],[825,195,92,"PLAN"],[935,195,92,"ACTION"],[1110,195,72,"GROW"]],
        dots: [0,1,2]
      },
      contact: {
        paths: [
          "M45 195 H165 C200 195 210 85 245 85 H350 C385 85 395 195 430 195 H535 C570 195 580 300 615 300 H720 C755 300 765 195 800 195 H905 C940 195 950 85 985 85 H1135",
          "M165 195 C200 195 210 300 245 300 H350 C385 300 395 195 430 195",
          "M535 195 C570 195 580 85 615 85 H720 C755 85 765 195 800 195",
          "M905 195 C940 195 950 300 985 300 H1080 C1115 300 1120 195 1135 195"
        ],
        nodes: [[55,195,70,"MESSAGE"],[245,85,92,"INTAKE"],[245,300,92,"CONTEXT"],[430,195,92,"ROUTE"],[615,85,92,"AGENT"],[615,300,92,"TOOLS"],[800,195,92,"DRAFT"],[985,85,92,"REVIEW"],[985,300,92,"LOG"],[1120,195,72,"SEND"]],
        dots: [0,1,2]
      }
    };

    Object.keys(configs).forEach(function (key) {
      var host = document.querySelector(".workflow-" + key);
      if (!host) return;
      var c = configs[key];
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 1180 390");
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

      var markerId = "arrow-" + key;
      var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      defs.innerHTML = '<marker id="' + markerId + '" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7Z" fill="currentColor"/></marker>';
      svg.appendChild(defs);

      c.paths.forEach(function (path, i) {
        var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
        p.setAttribute("d", path);
        p.setAttribute("class", "flow-line" + (i === 1 ? " alt" : i > 1 ? " branch" : ""));
        if (i === 0) p.setAttribute("marker-end", "url(#" + markerId + ")");
        svg.appendChild(p);
      });

      c.nodes.forEach(function (n, i) {
        var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("class", "flow-node" + ((n[3] === "AGENT" || n[3] === "SYNC" || n[3] === "SKILL HUB") ? " flow-agent" : ""));
        var w = n[2], h = n[3] === "CORE" ? 40 : 58, x = n[0] - w / 2, y = n[1] - h / 2;
        if (n[3] === "CORE") {
          var core = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          core.setAttribute("class", "flow-core"); core.setAttribute("cx", n[0]); core.setAttribute("cy", n[1]); core.setAttribute("r", "15");
          g.appendChild(core);
        } else {
          var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("x", x); rect.setAttribute("y", y); rect.setAttribute("width", w); rect.setAttribute("height", h); rect.setAttribute("rx", "10");
          g.appendChild(rect);
          var t = document.createElementNS("http://www.w3.org/2000/svg", "text");
          t.setAttribute("x", n[0]); t.setAttribute("y", n[1] + 4); t.setAttribute("text-anchor", "middle"); t.textContent = n[3];
          g.appendChild(t);
        }
        svg.appendChild(g);
      });

      c.dots.forEach(function (pathIndex, i) {
        var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("class", "flow-dot" + (i ? " dot-" + (i + 1) : ""));
        dot.setAttribute("cx", "45"); dot.setAttribute("cy", "195"); dot.setAttribute("r", i ? "3" : "3.5");
        var motion = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");
        motion.setAttribute("dur", (6.2 + i * 1.15) + "s"); motion.setAttribute("repeatCount", "indefinite"); motion.setAttribute("path", c.paths[pathIndex]);
        dot.appendChild(motion); svg.appendChild(dot);
      });
      host.appendChild(svg);
    });
  }

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

  /** Wraps every occurrence of `name` in `authors` with a highlight span. */
  function highlightSelf(authors, name) {
    var safeAuthors = escapeHtml(authors);
    var safeName = escapeHtml(name);
    if (!safeName) return safeAuthors;
    return safeAuthors.split(safeName).join('<span class="me">' + safeName + "</span>");
  }

  /* ---------------------------------------------------------------- */
  /* hero                                                               */
  /* ---------------------------------------------------------------- */

  function renderHero(p) {
    document.getElementById("hero-name").textContent = p.name;
    document.getElementById("hero-role").textContent = p.role;
    document.getElementById("hero-tagline").textContent = p.tagline;

    var availabilityEl = document.getElementById("hero-availability");
    if (p.availability) {
      availabilityEl.textContent = p.availability;
    } else if (availabilityEl.parentNode) {
      availabilityEl.remove();
    }

    var visual = document.getElementById("hero-visual");
    var photoImg = document.getElementById("hero-photo");
    if (p.photo) {
      photoImg.src = p.photo;
      photoImg.alt = p.name + " — portrait";
    } else if (visual) {
      visual.remove();
    }

    var actions = document.getElementById("hero-actions");

    var viewPubs = text("a", "btn btn-primary", "View publications");
    viewPubs.href = "#publications";
    actions.appendChild(viewPubs);

    if (p.email) {
      var emailBtn = text("a", "btn btn-ghost", "Email me");
      emailBtn.href = "mailto:" + p.email;
      actions.appendChild(emailBtn);
    }

    var links = p.links || {};
    var linkLabels = { github: "GitHub", linkedin: "LinkedIn", googleScholar: "Google Scholar", cvFile: "Download CV" };
    Object.keys(linkLabels).forEach(function (key) {
      if (links[key]) {
        var a = text("a", "btn btn-ghost", linkLabels[key]);
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
    document.getElementById("about-text").textContent = p.about;
  }

  /* ---------------------------------------------------------------- */
  /* education / experience (shared timeline renderer)                 */
  /* ---------------------------------------------------------------- */

  function renderEducation(list) {
    var wrap = document.getElementById("education-list");
    (list || []).forEach(function (item) {
      var node = el("div", "timeline-item");
      node.appendChild(text("span", "timeline-period", item.period));
      node.appendChild(text("h3", "timeline-title", item.degree));
      node.appendChild(text("p", "timeline-org", item.institution));
      if (item.score) node.appendChild(text("span", "timeline-score", item.score));
      wrap.appendChild(node);
    });
  }

  function renderExperience(list) {
    var wrap = document.getElementById("experience-list");
    (list || []).forEach(function (item) {
      var node = el("div", "timeline-item");
      node.appendChild(text("span", "timeline-period", item.period));
      node.appendChild(text("h3", "timeline-title", item.title));
      node.appendChild(text("p", "timeline-org", item.org + (item.location ? " — " + item.location : "")));
      if (item.bullets && item.bullets.length) {
        var ul = el("ul", "timeline-bullets");
        item.bullets.forEach(function (b) { ul.appendChild(text("li", "", b)); });
        node.appendChild(ul);
      }
      wrap.appendChild(node);
    });
  }

  /* ---------------------------------------------------------------- */
  /* publications                                                       */
  /* ---------------------------------------------------------------- */

  function renderPublications(list) {
    var wrap = document.getElementById("publications-list");
    (list || []).forEach(function (pub) {
      var card = el("article", "pub-card");

      var badges = el("div", "pub-badges");
      badges.appendChild(text("span", "badge badge-venue", pub.venue));
      badges.appendChild(text("span", "badge badge-status", pub.status));
      if (pub.firstAuthor) badges.appendChild(text("span", "badge badge-first-author", "first author"));
      card.appendChild(badges);

      card.appendChild(text("h3", "pub-title", pub.title));
      card.appendChild(el("p", "pub-authors", highlightSelf(pub.authors, "M. Abbas")));
      card.appendChild(text("p", "pub-summary", pub.summary));

      if (pub.link) {
        var a = el("a", "pub-link", "View preprint &#8594;");
        a.href = pub.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        card.appendChild(a);
      } else {
        card.appendChild(text("span", "pub-link is-disabled", "Preprint · coming soon"));
      }

      wrap.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* skills                                                             */
  /* ---------------------------------------------------------------- */

  function renderSkills(groups) {
    var wrap = document.getElementById("skills-list");
    (groups || []).forEach(function (group) {
      var block = el("div", "skill-group");
      block.appendChild(text("p", "skill-group-name", group.group));
      var row = el("div", "chip-row");
      group.items.forEach(function (item) { row.appendChild(text("span", "chip", item)); });
      block.appendChild(row);
      wrap.appendChild(block);
    });
  }

  /* ---------------------------------------------------------------- */
  /* certifications                                                     */
  /* ---------------------------------------------------------------- */

  function renderCertifications(groups) {
    var wrap = document.getElementById("certifications-list");
    (groups || []).forEach(function (group) {
      var section = el("div", "cert-group");

      var head = el("div", "cert-group-head");
      head.appendChild(text("h3", "cert-group-name", group.program));
      if (group.issuer) head.appendChild(text("span", "cert-group-issuer", group.issuer));
      section.appendChild(head);

      var grid = el("div", "cert-grid");
      (group.items || []).forEach(function (cert) {
        var card = el("figure", "cert-card");

        var imgWrap = el("a", "cert-image-wrap");
        imgWrap.href = cert.image;
        imgWrap.target = "_blank";
        imgWrap.rel = "noopener noreferrer";
        imgWrap.setAttribute("aria-label", "View full certificate: " + cert.title);
        var img = document.createElement("img");
        img.className = "cert-image";
        img.src = cert.image;
        img.alt = cert.title + " certificate";
        img.loading = "lazy";
        imgWrap.appendChild(img);
        card.appendChild(imgWrap);

        var body = el("figcaption", "cert-body");
        body.appendChild(text("p", "cert-title", cert.title));

        var metaRow = el("div", "cert-meta");
        if (cert.date) metaRow.appendChild(text("span", "cert-date", cert.date));
        if (cert.verifyUrl) {
          var link = text("a", "cert-verify", "Verify \u2197");
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
  /* references                                                         */
  /* ---------------------------------------------------------------- */

  function renderReferences(list) {
    var wrap = document.getElementById("references-list");
    (list || []).forEach(function (ref) {
      var card = el("div", "ref-card");
      if (ref.image) {
        var img = document.createElement("img");
        img.className = "ref-photo";
        img.src = ref.image;
        img.alt = ref.name + " profile photo";
        img.loading = "lazy";
        img.referrerPolicy = "no-referrer";
        card.appendChild(img);
      }
      card.appendChild(text("p", "ref-name", ref.name));
      card.appendChild(text("p", "ref-title", ref.title));
      card.appendChild(text("span", "ref-relation", ref.relation));
      if (ref.email) {
        var a = text("a", "ref-email", ref.email);
        a.href = "mailto:" + ref.email;
        card.appendChild(a);
      }
      if (ref.website) {
        var site = text("a", "ref-website ref-website-btn", "Visit website ↗");
        site.href = ref.website;
        site.target = "_blank";
        site.rel = "noopener noreferrer";
        site.setAttribute("aria-label", "Dr. Amin Ullah website");
        site.setAttribute("title", "Visit Dr. Amin Ullah website");
        card.appendChild(site);
      }
      wrap.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* contact + footer                                                   */
  /* ---------------------------------------------------------------- */

  function renderContact(p) {
    var wrap = document.getElementById("contact-actions");
    if (!wrap || !p.email) return;

    var mail = text("a", "btn btn-primary", "Send an email");
    mail.href = "mailto:" + p.email;
    wrap.appendChild(mail);
  }

  function renderFooter(data) {
    var p = data.personal || {};
    renderFooterTagline(p);
    renderFooterSocialRow(p);
    renderFooterNav();
    renderFooterDetails(data);
    renderFooterBottom(data, p);
  }

  function renderFooterTagline(p) {
    var short = "AI Engineer · Machine Learning · Researcher";
    var tagline = document.getElementById("footer-tagline");
    if (tagline) tagline.textContent = short;
    var repeat = document.getElementById("footer-tagline-repeat");
    if (repeat) repeat.textContent = short;
  }

  var SOCIAL_ICONS = {
    github:
      '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.7 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    facebook:
      '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram:
      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>',
    whatsapp:
      '<path d="M20.5 11.8a8.4 8.4 0 0 1-12.7 7.3L3.5 20.5l1.4-4.2A8.4 8.4 0 1 1 20.5 11.8Z"/><path d="M8.2 8.3c.2-.4.4-.4.8-.4h.6c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.5 1 1.3 1.8 2.3 2.3l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.6c0 .4 0 .6-.4.8-.4.2-1.2.4-1.8.2-1.2-.4-2.4-1.1-3.5-2.1-1.1-1-1.8-2.2-2.2-3.4-.2-.7 0-1.5.4-1.8Z"/>',
    wechat:
      '<path d="M9.4 5.5c-3.8 0-6.9 2.5-6.9 5.7 0 1.8 1 3.4 2.6 4.5l-.7 2.5 2.8-1.4c.7.2 1.4.3 2.2.3 3.8 0 6.9-2.5 6.9-5.7S13.2 5.5 9.4 5.5Z"/><path d="M14.2 9.1c3.4 0 6.1 2.1 6.1 4.9 0 1.5-.8 2.8-2.2 3.8l.5 1.9-2.3-1.1c-.7.2-1.4.3-2.1.3-2.4 0-4.5-1.1-5.5-2.8"/><circle cx="7.1" cy="11.2" r=".6" fill="currentColor" stroke="none"/><circle cx="11.7" cy="11.2" r=".6" fill="currentColor" stroke="none"/>',
    email:
      '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/>'
  };

  var SOCIAL_CONFIG = [
    { key: "email", label: "Email", accent: "violet", isEmail: true },
    { key: "linkedin", label: "LinkedIn", accent: "cyan" },
    { key: "github", label: "GitHub", accent: "blue" },
    { key: "instagram", label: "Instagram", accent: "violet" },
    { key: "facebook", label: "Facebook", accent: "violet" },
    { key: "whatsapp", label: "WhatsApp", accent: "teal" },
    { key: "wechat", label: "WeChat", accent: "cyan", isWeChat: true }
  ];

  function renderFooterSocialRow(p) {
    var wrap = document.getElementById("footer-social-row");
    if (!wrap) return;
    var links = p.links || {};

    SOCIAL_CONFIG.forEach(function (cfg) {
      var href = cfg.isEmail ? (p.email ? "mailto:" + p.email : "") : (cfg.isWeChat ? "" : links[cfg.key]);
      if (!href && !cfg.isWeChat) return;
      if (cfg.isWeChat && !p.wechatId) return;

      var isWide = false;
      var a = el(
        cfg.isWeChat ? "button" : "a",
        "footer-social-btn footer-social-btn--" + cfg.key,
        '<span class="footer-social-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' +
          SOCIAL_ICONS[cfg.key] +
          "</svg></span>"
      );
      a.style.setProperty("--social-accent", "var(--" + cfg.accent + ")");
      a.setAttribute("aria-label", cfg.isWeChat ? "WeChat: " + p.wechatId : cfg.label);
      a.title = cfg.isWeChat ? "WeChat: " + p.wechatId : cfg.label;

      if (cfg.isEmail) {
        a.href = href;
      } else if (cfg.isWeChat) {
        a.type = "button";
        a.addEventListener("click", function () {
          var id = p.wechatId;
          function copied() {
            a.classList.add("is-copied");
            var status = document.getElementById("wechat-copy-status");
            if (status) status.textContent = "WeChat ID copied!";
            window.setTimeout(function () {
              a.classList.remove("is-copied");
              if (status) status.textContent = "";
            }, 1800);
          }
          if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(id).then(copied).catch(function () { copiedFallback(id); });
          } else {
            copiedFallback(id);
          }
          function copiedFallback(value) {
            var area = document.createElement("textarea");
            area.value = value;
            area.setAttribute("readonly", "");
            area.style.position = "fixed";
            area.style.opacity = "0";
            document.body.appendChild(area);
            area.select();
            try { document.execCommand("copy"); } catch (e) {}
            area.remove();
            copied();
          }
        });
      } else {
        a.href = href;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      a.addEventListener("mouseenter", function () {
        document.documentElement.setAttribute("data-footer-contact", cfg.key);
      });
      a.addEventListener("mouseleave", function () {
        document.documentElement.removeAttribute("data-footer-contact");
      });
      wrap.appendChild(a);
    });

    var status = el("span", "visually-hidden", "");
    status.id = "wechat-copy-status";
    status.setAttribute("aria-live", "polite");
    wrap.appendChild(status);
  }

  function renderFooterNav() {
    var nav = document.getElementById("footer-nav");
    if (!nav) return;
    var items = [
      { href: "#about", label: "About" },
      { href: "#publications", label: "Publications" },
      { href: "#experience", label: "Experience" },
      { href: "#contact", label: "Contact" }
    ];
    items.forEach(function (item) {
      var a = text("a", "", item.label);
      a.href = item.href;
      nav.appendChild(a);
    });
  }

  function renderFooterDetails(data) {
    var wrap = document.getElementById("footer-details");
    if (!wrap) return;
    var lines = [];
    var firstEdu = (data.education || [])[0];
    if (firstEdu && firstEdu.institution) lines.push(firstEdu.institution);
    if (data.personal && data.personal.location) lines.push(data.personal.location);
    if (data.personal && data.personal.availability) lines.push(data.personal.availability);
    lines.forEach(function (line) {
      wrap.appendChild(text("span", "", line));
    });
  }

  function renderFooterBottom(data, p) {
    var copyright = document.getElementById("footer-copyright");
    var repeat = document.getElementById("footer-tagline-repeat");
    if (copyright) {
      copyright.textContent = "© All rights reserved Muhammad Abbas 26";
    }
    if (repeat) {
      repeat.textContent = "";
      repeat.setAttribute("aria-hidden", "true");
    }
  }

  /* ---------------------------------------------------------------- */
  /* theme toggle                                                       */
  /* ---------------------------------------------------------------- */

  function initThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    var root = document.documentElement;

    function syncButton() {
      var isDark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-pressed", String(isDark));
      btn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    }
    syncButton();

    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncButton();
      if (window.__redrawNetwork) window.__redrawNetwork();
    });

    // Follow the OS preference live, unless the user has picked explicitly.
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        var stored = null;
        try { stored = localStorage.getItem("theme"); } catch (err) {}
        if (!stored) {
          root.setAttribute("data-theme", e.matches ? "dark" : "light");
          syncButton();
        }
      });
    }
  }

  /* ---------------------------------------------------------------- */
  /* mobile nav                                                         */
  /* ---------------------------------------------------------------- */

  function initMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");

    function close() {
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
    function open() {
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }

    toggle.addEventListener("click", function () {
      document.body.classList.contains("nav-open") ? close() : open();
    });

    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") close();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }

  /* ---------------------------------------------------------------- */
  /* ambient network background                                        */
  /* A quiet, slow-moving node graph — draws once per frame on a fixed */
  /* canvas. Static (single frame, no animation loop) when the visitor */
  /* has asked for reduced motion.                                     */
  /* ---------------------------------------------------------------- */

  function initNetworkCanvas() {
    var canvas = document.getElementById("net-canvas");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

    var nodes = [];
    var heroNodes = [];
    var packets = [];
    var w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var LINK_DIST = 155;
    var CURSOR_RADIUS = 170;
    var HERO_LINK_DIST = 190;
    var HERO_COUNT = 30;
    var heroRotation = { x: 0, y: 0 };
    var heroRotationTarget = { x: 0, y: 0 };
    var mouse = { x: -9999, y: -9999, active: false };
    var t = 0;
    var rafId = null;
    var running = true;

    function themeColor(name, fallback) {
      var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      return v || fallback;
    }

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var count = Math.round((w * h) / 26000);
      count = Math.max(18, Math.min(count, 55));
      nodes = [];
      for (var i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          baseR: 1.2 + Math.random() * 1,
          phase: Math.random() * Math.PI * 2,
          speed: 0.6 + Math.random() * 0.6
        });
      }

      // A larger, denser neural network lives near the top of the page.
      // Its points are laid out in a loose 3D cloud so cursor movement can
      // tilt the whole graph without changing the page layout.
      heroNodes = [];
      var heroWidth = Math.min(w * 0.78, 860);
      var heroHeight = Math.min(330, Math.max(250, h * 0.34));
      for (var hi = 0; hi < HERO_COUNT; hi++) {
        var layer = hi % 4;
        var u = Math.random() * 2 - 1;
        var v = Math.random() * 2 - 1;
        var z = Math.random() * 2 - 1;
        heroNodes.push({
          x: u * heroWidth * (0.48 + layer * 0.025),
          y: v * heroHeight * (0.45 + layer * 0.02),
          z: z * 140,
          vx: (Math.random() - 0.5) * 0.09,
          vy: (Math.random() - 0.5) * 0.09,
          phase: Math.random() * Math.PI * 2,
          r: 1.8 + Math.random() * 1.8
        });
      }
      packets = [];
    }

    // Occasionally spawn a small light that travels along one existing edge,
    // giving the impression of a signal/data packet moving through the graph.
    function maybeSpawnPacket(edges) {
      if (reduceMotion || !edges.length) return;
      if (Math.random() > 0.028) return;
      var e = edges[(Math.random() * edges.length) | 0];
      packets.push({ a: e.a, b: e.b, tt: 0, speed: 0.006 + Math.random() * 0.006 });
    }

    function drawHeroNetwork() {
      if (!heroNodes.length) return;

      heroRotation.x += (heroRotationTarget.x - heroRotation.x) * 0.055;
      heroRotation.y += (heroRotationTarget.y - heroRotation.y) * 0.055;

      var cx = w * 0.5 + heroRotation.y * 38;
      var cy = Math.min(245, h * 0.24) + heroRotation.x * 20;
      var projected = [];
      var cosY = Math.cos(heroRotation.y), sinY = Math.sin(heroRotation.y);
      var cosX = Math.cos(heroRotation.x), sinX = Math.sin(heroRotation.x);

      for (var i = 0; i < heroNodes.length; i++) {
        var n = heroNodes[i];
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (Math.abs(n.x) > 520) n.vx *= -1;
          if (Math.abs(n.y) > 250) n.vy *= -1;
        }

        var x1 = n.x * cosY - n.z * sinY;
        var z1 = n.x * sinY + n.z * cosY;
        var y1 = n.y * cosX - z1 * sinX;
        var z2 = n.y * sinX + z1 * cosX;
        var scale = 1 + z2 / 900;
        projected.push({ x: cx + x1 * scale, y: cy + y1 * scale, z: z2, r: n.r * scale, phase: n.phase });
      }

      var heroLine = themeColor("--node-line", "rgba(88,210,198,0.35)");
      var heroLine2 = themeColor("--node-line-2", "rgba(127,163,232,0.28)");
      var heroDot = themeColor("--node-dot", "rgba(88,210,198,0.55)");

      // Connect nearby points, with extra links to make the top graph feel
      // like a real neural network rather than a sparse background grid.
      ctx.lineWidth = 1.15;
      for (var a = 0; a < projected.length; a++) {
        for (var b = a + 1; b < projected.length; b++) {
          var dx = projected[a].x - projected[b].x;
          var dy = projected[a].y - projected[b].y;
          var dz = projected[a].z - projected[b].z;
          var dist3 = Math.sqrt(dx * dx + dy * dy + dz * dz * 0.18);
          if (dist3 < HERO_LINK_DIST) {
            ctx.strokeStyle = (a + b) % 4 === 0 ? heroLine2 : heroLine;
            ctx.globalAlpha = Math.min(0.52, 0.12 + (1 - dist3 / HERO_LINK_DIST) * 0.42);
            ctx.beginPath();
            ctx.moveTo(projected[a].x, projected[a].y);
            ctx.lineTo(projected[b].x, projected[b].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = heroDot;
      for (var j = 0; j < projected.length; j++) {
        var hp = projected[j];
        var pulse = reduceMotion ? 0.6 : 0.55 + 0.45 * Math.sin(t * 0.018 + hp.phase);
        ctx.globalAlpha = 0.48 + pulse * 0.48;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, hp.r + pulse * 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function step() {
      if (!running) return;
      t += 1;
      ctx.clearRect(0, 0, w, h);

      var lineColor = themeColor("--node-line", "rgba(88,210,198,0.35)");
      var lineColor2 = themeColor("--node-line-2", "rgba(127,163,232,0.28)");
      var dotColor = themeColor("--node-dot", "rgba(88,210,198,0.55)");
      var packetColor = themeColor("--node-packet", "#9FE8DF");
      var footerContactActive = document.documentElement.hasAttribute("data-footer-contact");

      drawHeroNetwork();

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -20 || n.x > w + 20) n.vx *= -1;
          if (n.y < -20 || n.y > h + 20) n.vy *= -1;

          // gentle drift away from the cursor, decaying with distance
          if (mouse.active) {
            var mdx = n.x - mouse.x, mdy = n.y - mouse.y;
            var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < CURSOR_RADIUS && mdist > 0.01) {
              var force = (1 - mdist / CURSOR_RADIUS) * 0.018;
              n.x += (mdx / mdist) * force * 10;
              n.y += (mdy / mdist) * force * 10;
            }
          }
        }
      }

      var edges = [];
      ctx.lineWidth = 1;
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x;
          var dy = nodes[a].y - nodes[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            edges.push({ a: nodes[a], b: nodes[b], dist: dist });

            var nearCursor =
              mouse.active &&
              (Math.min(
                Math.hypot(nodes[a].x - mouse.x, nodes[a].y - mouse.y),
                Math.hypot(nodes[b].x - mouse.x, nodes[b].y - mouse.y)
              ) < CURSOR_RADIUS);

            var baseAlpha = 1 - dist / LINK_DIST;
            ctx.strokeStyle = (a + b) % 5 === 0 ? lineColor2 : lineColor;
            var boostedAlpha = footerContactActive ? Math.min(baseAlpha * 1.14, 0.82) : baseAlpha;
            ctx.globalAlpha = nearCursor ? Math.min(boostedAlpha * 1.9, 0.9) : boostedAlpha;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          }
        }
      }

      // pulsing nodes — soft breathing radius/opacity, offset per node so the
      // whole graph doesn't beat in unison
      ctx.globalAlpha = 1;
      for (var j = 0; j < nodes.length; j++) {
        var nd = nodes[j];
        var pulse = reduceMotion ? 0.5 : 0.5 + 0.5 * Math.sin(t * 0.02 * nd.speed + nd.phase);
        ctx.globalAlpha = 0.55 + pulse * 0.45;
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, nd.baseR + pulse * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // traveling data packets along existing edges
      maybeSpawnPacket(edges);
      for (var k = packets.length - 1; k >= 0; k--) {
        var p = packets[k];
        p.tt += p.speed;
        if (p.tt >= 1) { packets.splice(k, 1); continue; }
        var px = p.a.x + (p.b.x - p.a.x) * p.tt;
        var py = p.a.y + (p.b.y - p.a.y) * p.tt;
        var fade = Math.sin(p.tt * Math.PI);
        ctx.globalAlpha = fade;
        ctx.fillStyle = packetColor;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reduceMotion) rafId = requestAnimationFrame(step);
    }

    resize();
    step();

    // If motion is reduced, step() only paints once — repaint on theme
    // change so the node color still matches light/dark.
    if (reduceMotion) {
      window.__redrawNetwork = step;
    }

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
      if (reduceMotion) setTimeout(step, 220);
    });

    if (!reduceMotion && !isCoarsePointer) {
      window.addEventListener("mousemove", function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
        heroRotationTarget.y = ((e.clientX / Math.max(1, w)) - 0.5) * 0.42;
        heroRotationTarget.x = ((e.clientY / Math.max(1, h)) - 0.35) * -0.30;
      }, { passive: true });
      window.addEventListener("mouseleave", function () {
        mouse.active = false;
        heroRotationTarget.x = 0;
        heroRotationTarget.y = 0;
      });
    }

    // Pause the animation loop when the tab isn't visible.
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        running = false;
        if (rafId) cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        running = true;
        step();
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /* scroll reveal                                                      */
  /* ---------------------------------------------------------------- */

  function initScrollReveal() {
    var targets = document.querySelectorAll(".reveal, .badge-reveal");
    if (!("IntersectionObserver" in window) || !targets.length) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach(function (t) { io.observe(t); });
  }
})();
