/* ─────────────────────────────────────────────────────────────
 * Ask Ninad — floating chat widget
 *
 * Vanilla JS. No build step, no framework, no dependencies. Loaded as a plain
 * <script> so it lives entirely outside the React tree — if this file throws,
 * the portfolio itself is unaffected.
 *
 * Backend: https://github.com/ninadpshah/ask-ninad-worker
 * ───────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  var ENDPOINT = "https://ask-ninad.ninadpshah2.workers.dev/ask";
  var EMAIL = "ninadpshah2@gmail.com";
  var MAX_CHARS = 300;

  // Matches portfolio-atelier.jsx exactly. No new colours.
  var C = {
    bg: "#1a1610",
    panel: "#221d15",
    card: "#2b251c",
    ink: "#f4ebd9",
    softInk: "#bdb09a",
    mutedInk: "#7f7461",
    rule: "#3a3328",
    accent: "#f0a279",
  };

  var CHIPS = [
    {
      group: "Experience",
      items: [
        "What do you do at Armor1?",
        "What did you build at CAPX?",
        "Have you shipped AI to production?",
      ],
    },
    {
      group: "Projects",
      items: [
        "Tell me about the SEC filings tool.",
        "How do you know your RAG pipeline actually works?",
        "What did your IPO model predict?",
      ],
    },
    {
      group: "Background",
      items: [
        "Where did you study?",
        "Are you open to relocating?",
        "What kind of role are you looking for?",
      ],
    },
  ];

  var prepared = null; // lazily loaded fallback-answers.json
  var busy = false;
  var open = false;

  // ── styles ─────────────────────────────────────────────────────────────────

  var css = [
    // The page sets `body { zoom: 1.25 }`, which a position:fixed child would
    // inherit — a 60px button would render at 75px and offsets would drift.
    // 1.25 x 0.8 = 1, so the widget renders at true CSS pixels.
    "#an-root{zoom:.8;position:fixed;right:24px;bottom:24px;z-index:2147483000;",
    "font-family:'DM Sans',system-ui,sans-serif;}",

    // margin-left:auto keeps the launcher flush with the root's right edge.
    // Without it the button sits left-aligned inside a root sized by the wider
    // nudge, and the nudge's arrow ends up pointing at empty space.
    "#an-btn{position:relative;display:flex;align-items:center;gap:11px;cursor:pointer;",
    "margin-left:auto;",
    "background:" + C.accent + ";color:" + C.bg + ";border:none;",
    "padding:19px 26px;font-family:'JetBrains Mono',ui-monospace,monospace;",
    "font-size:14px;letter-spacing:1.4px;text-transform:uppercase;font-weight:700;",
    "box-shadow:0 8px 30px rgba(0,0,0,.5);transition:transform .15s ease;}",
    "#an-btn:hover{transform:translateY(-2px);}",
    "#an-btn[hidden]{display:none;}",

    // Pulse ring. Drawn on a pseudo-element so it never affects layout or the
    // button's hit area.
    "#an-btn::after{content:'';position:absolute;inset:0;pointer-events:none;",
    "box-shadow:0 0 0 0 rgba(240,162,121,.55);animation:an-pulse 2.6s infinite;}",
    "@keyframes an-pulse{0%{box-shadow:0 0 0 0 rgba(240,162,121,.5);}",
    "70%{box-shadow:0 0 0 16px rgba(240,162,121,0);}",
    "100%{box-shadow:0 0 0 0 rgba(240,162,121,0);}}",
    "#an-dot{width:9px;height:9px;border-radius:50%;background:" + C.bg + ";}",

    // One-time nudge. Corner blindness is real — size alone does not fix it.
    "#an-nudge{position:relative;margin-bottom:12px;margin-left:auto;width:max-content;",
    "max-width:250px;background:" + C.card + ";border:1px solid " + C.accent + ";",
    "color:" + C.ink + ";padding:12px 30px 12px 14px;font-size:13px;line-height:1.45;",
    "box-shadow:0 8px 30px rgba(0,0,0,.5);animation:an-in .35s ease;}",
    "#an-nudge[hidden]{display:none;}",
    "#an-nudge::after{content:'';position:absolute;right:26px;bottom:-7px;width:12px;height:12px;",
    "background:" + C.card + ";border-right:1px solid " + C.accent + ";",
    "border-bottom:1px solid " + C.accent + ";transform:rotate(45deg);}",
    "#an-nudge-x{position:absolute;top:4px;right:6px;background:none;border:none;",
    "color:" + C.mutedInk + ";cursor:pointer;font-size:16px;line-height:1;padding:2px 4px;}",
    "#an-nudge-x:hover{color:" + C.ink + ";}",
    "@keyframes an-in{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:none;}}",

    "@media (prefers-reduced-motion:reduce){",
    "#an-btn::after{animation:none;}#an-nudge{animation:none;}",
    "}",

    "#an-panel{width:392px;max-width:calc(100vw - 32px);height:560px;",
    "max-height:calc(100vh - 48px);background:" + C.panel + ";",
    "border:1px solid " + C.rule + ";box-shadow:0 18px 60px rgba(0,0,0,.6);",
    "display:flex;flex-direction:column;overflow:hidden;}",
    "#an-panel[hidden]{display:none;}",

    "#an-head{padding:16px 18px;border-bottom:1px solid " + C.rule + ";",
    "background:" + C.card + ";display:flex;align-items:flex-start;gap:12px;}",
    ".an-title{font-family:'Newsreader',Georgia,serif;font-size:20px;color:" + C.ink + ";line-height:1.1;}",
    ".an-sub{font-size:11.5px;color:" + C.softInk + ";line-height:1.45;margin-top:5px;}",
    "#an-close{margin-left:auto;background:none;border:none;color:" + C.mutedInk + ";",
    "cursor:pointer;font-size:20px;line-height:1;padding:2px 4px;}",
    "#an-close:hover{color:" + C.ink + ";}",

    "#an-log{flex:1;overflow-y:auto;padding:16px 18px;display:flex;",
    "flex-direction:column;gap:14px;scrollbar-width:thin;}",
    "#an-log::-webkit-scrollbar{width:8px;}",
    "#an-log::-webkit-scrollbar-thumb{background:" + C.rule + ";}",

    ".an-q{align-self:flex-end;max-width:85%;background:" + C.card + ";",
    "border:1px solid " + C.rule + ";padding:9px 12px;font-size:13px;",
    "color:" + C.ink + ";line-height:1.45;}",
    ".an-a{max-width:92%;font-size:13.5px;color:" + C.softInk + ";line-height:1.6;}",
    ".an-src{display:inline-block;margin-top:8px;font-family:'JetBrains Mono',ui-monospace,monospace;",
    "font-size:9px;letter-spacing:1px;text-transform:uppercase;color:" + C.accent + ";",
    "border:1px solid " + C.rule + ";padding:3px 7px;}",

    ".an-dots span{display:inline-block;width:5px;height:5px;border-radius:50%;",
    "background:" + C.mutedInk + ";margin-right:4px;animation:an-b 1.2s infinite;}",
    ".an-dots span:nth-child(2){animation-delay:.2s;}",
    ".an-dots span:nth-child(3){animation-delay:.4s;}",
    "@keyframes an-b{0%,60%,100%{opacity:.25;}30%{opacity:1;}}",

    ".an-grp{font-family:'JetBrains Mono',ui-monospace,monospace;font-size:9px;",
    "letter-spacing:1.2px;text-transform:uppercase;color:" + C.mutedInk + ";margin:2px 0 7px;}",
    ".an-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;}",
    ".an-chip{cursor:pointer;background:transparent;color:" + C.ink + ";",
    "border:1px solid " + C.rule + ";padding:6px 10px;font-size:11.5px;",
    "font-family:inherit;text-align:left;line-height:1.3;}",
    ".an-chip:hover{border-color:" + C.accent + ";color:" + C.accent + ";}",
    ".an-chip:disabled{opacity:.45;cursor:default;}",

    "#an-form{border-top:1px solid " + C.rule + ";padding:12px;display:flex;gap:8px;",
    "background:" + C.card + ";}",
    "#an-input{flex:1;background:" + C.bg + ";border:1px solid " + C.rule + ";",
    "color:" + C.ink + ";padding:10px 12px;font-family:inherit;font-size:13px;outline:none;}",
    "#an-input:focus{border-color:" + C.accent + ";}",
    "#an-send{background:" + C.accent + ";color:" + C.bg + ";border:none;cursor:pointer;",
    "padding:0 15px;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;",
    "letter-spacing:1px;text-transform:uppercase;font-weight:600;}",
    "#an-send:disabled{opacity:.4;cursor:default;}",

    "#an-foot{padding:8px 12px 10px;text-align:center;",
    "font-family:'JetBrains Mono',ui-monospace,monospace;font-size:8.5px;",
    "letter-spacing:.8px;text-transform:uppercase;color:" + C.mutedInk + ";",
    "background:" + C.card + ";}",

    "#an-root a{color:" + C.accent + ";}",

    // On small screens the panel becomes a near-full-screen sheet, and the
    // launcher shrinks so it never collides with page content.
    "@media (max-width:520px){",
    "#an-root{right:12px;bottom:12px;left:12px;}",
    "#an-panel{width:auto;height:calc(100vh - 90px);}",
    "#an-btn{margin-left:auto;padding:12px 16px;font-size:11px;}",
    "}",
  ].join("");

  // ── dom helpers ────────────────────────────────────────────────────────────

  function el(tag, attrs, text) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    if (text != null) n.textContent = text;
    return n;
  }

  var root, panel, btn, log, input, send, nudge;

  function dismissNudge(remember) {
    if (!nudge || nudge.hidden) return;
    nudge.hidden = true;
    if (remember) {
      try { sessionStorage.setItem("an-nudged", "1"); } catch (e) {}
    }
  }

  function build() {
    var style = el("style");
    style.textContent = css;
    document.head.appendChild(style);

    root = el("div", { id: "an-root" });

    nudge = el("div", { id: "an-nudge", hidden: "" });
    nudge.appendChild(
      el("div", null, "Too lazy to read all this? Ask my AI instead. →"),
    );
    var nx = el("button", { id: "an-nudge-x", type: "button", "aria-label": "Dismiss" }, "×");
    nudge.appendChild(nx);

    btn = el("button", {
      id: "an-btn",
      type: "button",
      "aria-label": "Open the Ask Ninad chat",
    });
    btn.appendChild(el("span", { id: "an-dot" }));
    btn.appendChild(el("span", null, "Ask Ninad"));

    panel = el("div", {
      id: "an-panel",
      role: "dialog",
      "aria-label": "Ask Ninad",
      hidden: "",
    });

    var head = el("div", { id: "an-head" });
    var htxt = el("div");
    htxt.appendChild(el("div", { class: "an-title" }, "AI Ninad"));
    htxt.appendChild(
      el(
        "div",
        { class: "an-sub" },
        "An AI trained on my real resume — it says “I”, but I checked its homework.",
      ),
    );
    head.appendChild(htxt);
    var close = el("button", { id: "an-close", type: "button", "aria-label": "Close" }, "×");
    head.appendChild(close);

    log = el("div", { id: "an-log", "aria-live": "polite" });

    var form = el("form", { id: "an-form" });
    input = el("input", {
      id: "an-input",
      type: "text",
      maxlength: String(MAX_CHARS),
      placeholder: "Ask me anything about my work…",
      "aria-label": "Your question",
      autocomplete: "off",
    });
    send = el("button", { id: "an-send", type: "submit" }, "Ask");
    form.appendChild(input);
    form.appendChild(send);

    var foot = el(
      "div",
      { id: "an-foot" },
      "Runs on free infrastructure · Questions aren’t stored",
    );

    panel.appendChild(head);
    panel.appendChild(log);
    panel.appendChild(form);
    panel.appendChild(foot);
    root.appendChild(panel);
    root.appendChild(nudge);
    root.appendChild(btn);
    document.body.appendChild(root);

    btn.addEventListener("click", function () { toggle(true); });
    close.addEventListener("click", function () { toggle(false); });
    nudge.addEventListener("click", function () { toggle(true); });
    nx.addEventListener("click", function (e) {
      e.stopPropagation();
      dismissNudge(true);
    });

    // Show once per session, after the visitor has had a moment to look around.
    var seen = false;
    try { seen = sessionStorage.getItem("an-nudged") === "1"; } catch (e) {}
    if (!seen) {
      setTimeout(function () { if (!open) nudge.hidden = false; }, 4500);
    }

    // Let the page open the panel — the whoami.sh block links to this.
    window.askNinad = {
      open: function () { toggle(true); },
      close: function () { toggle(false); },
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = input.value.trim();
      if (!q || busy) return;
      input.value = "";
      submit(q);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && open) toggle(false);
    });

    greet();
  }

  function toggle(next) {
    open = next;
    if (next) dismissNudge(true);
    panel.hidden = !next;
    btn.hidden = next;
    if (next) setTimeout(function () { input.focus(); }, 30);
    else btn.focus();
  }

  // ── conversation ───────────────────────────────────────────────────────────

  function scroll() { log.scrollTop = log.scrollHeight; }

  function greet() {
    var intro = el(
      "div",
      { class: "an-a" },
      "Hi — I’m AI Ninad. Ask me anything about my work. I answer from my real resume, and I did check its homework.",
    );
    log.appendChild(intro);
    renderChips();
  }

  function renderChips(autoScroll) {
    var wrap = el("div");
    CHIPS.forEach(function (g) {
      wrap.appendChild(el("div", { class: "an-grp" }, g.group));
      var row = el("div", { class: "an-chips" });
      g.items.forEach(function (q) {
        var c = el("button", { class: "an-chip", type: "button" }, q);
        c.addEventListener("click", function () {
          if (busy) return;
          submit(q);
        });
        row.appendChild(c);
      });
      wrap.appendChild(row);
    });
    log.appendChild(wrap);
    // On first paint the greeting must stay visible — scrolling to the bottom
    // would push it out of view before anyone reads it.
    if (autoScroll) scroll();
  }

  function setBusy(state) {
    busy = state;
    send.disabled = state;
    Array.prototype.forEach.call(log.querySelectorAll(".an-chip"), function (c) {
      c.disabled = state;
    });
  }

  function submit(question) {
    setBusy(true);
    log.appendChild(el("div", { class: "an-q" }, question));

    var typing = el("div", { class: "an-a an-dots" });
    typing.appendChild(el("span"));
    typing.appendChild(el("span"));
    typing.appendChild(el("span"));
    log.appendChild(typing);
    scroll();

    ask(question)
      .then(function (r) { typing.remove(); render(r); })
      .catch(function () { typing.remove(); render({ fallback: true }); })
      .then(function () { setBusy(false); scroll(); });
  }

  function ask(question) {
    return fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: question.slice(0, MAX_CHARS) }),
    }).then(function (res) {
      // A non-2xx is still a controlled outcome — fall back rather than throw.
      if (!res.ok) return { fallback: true };
      return res.json();
    });
  }

  function render(r) {
    if (r && r.answer && !r.fallback) {
      var a = el("div", { class: "an-a" }, r.answer);
      if (r.source) {
        a.appendChild(el("br"));
        a.appendChild(el("span", { class: "an-src" }, "from: " + r.source));
      }
      log.appendChild(a);
      return;
    }
    return degrade(r && r.question);
  }

  // Fallback mode. The widget must never look broken: the last question is
  // answered from the reviewed static file when we have it, and otherwise the
  // visitor gets a plain explanation and a way to reach Ninad.
  function degrade() {
    var lastQ = "";
    var qs = log.querySelectorAll(".an-q");
    if (qs.length) lastQ = qs[qs.length - 1].textContent;

    return loadPrepared().then(function (bank) {
      var hit = bank && bank[normalise(lastQ)];
      if (hit) {
        var a = el("div", { class: "an-a" }, hit.answer);
        if (hit.source) {
          a.appendChild(el("br"));
          a.appendChild(el("span", { class: "an-src" }, "from: " + hit.source));
        }
        log.appendChild(a);
        return;
      }
      var msg = el("div", { class: "an-a" });
      msg.appendChild(
        document.createTextNode(
          "I’m resting my free quota right now — try one of the suggested questions above, or email me at ",
        ),
      );
      var link = el("a", { href: "mailto:" + EMAIL }, EMAIL);
      msg.appendChild(link);
      msg.appendChild(document.createTextNode("."));
      log.appendChild(msg);
    });
  }

  function normalise(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  function loadPrepared() {
    if (prepared) return Promise.resolve(prepared);
    return fetch("fallback-answers.json")
      .then(function (r) { return r.json(); })
      .then(function (list) {
        prepared = {};
        list.forEach(function (item) { prepared[normalise(item.question)] = item; });
        return prepared;
      })
      .catch(function () {
        prepared = {};
        return prepared;
      });
  }

  // ── boot ───────────────────────────────────────────────────────────────────

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
