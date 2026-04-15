// ─────────────────────────────────────────────────────────────
// V3 · Dark Atelier. Warm dark, cream type, two-column layout
// with sticky-style left rail.
// ─────────────────────────────────────────────────────────────
const AtelierPortfolio = () => {
  const r = window.RESUME;

  const A = {
    bg: "#1a1610",
    panel: "#221d15",
    card: "#2b251c",
    cardWarm: "#332c22",
    ink: "#f4ebd9",
    softInk: "#bdb09a",
    mutedInk: "#7f7461",
    rule: "#3a3328",
    softRule: "#2a251c",
    accent: "#f0a279",
    accentDeep: "#c2671f",
    success: "#9ec1cf",
  };

  const serif = "'Newsreader', 'Source Serif Pro', Georgia, serif";
  const sans = "'DM Sans', system-ui, sans-serif";
  const mono = "'JetBrains Mono', ui-monospace, monospace";

  return (
    <div className="atelier" style={{ width: "100%", background: A.bg, color: A.ink, fontFamily: sans }}>
      {/* Top strip */}
      <div style={{
        padding: "18px 56px",
        borderBottom: `1px solid ${A.rule}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontFamily: mono, fontSize: 11, color: A.softInk,
        letterSpacing: 1.2, textTransform: "uppercase",
      }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <span style={{
            width: 30, height: 30, display: "grid", placeItems: "center",
            background: A.accent, color: A.bg, fontWeight: 700,
            fontFamily: sans, fontSize: 13,
          }}>NS</span>
          <span style={{ color: A.ink, fontWeight: 600 }}>Ninad Parthiv Shah</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["About","Work","Projects","Stack","Contact"].map(k => (
            <a key={k} href={`#${k.toLowerCase()}`} style={{ color: A.softInk, textDecoration: "none" }}>
              <span style={{ color: A.accent }}>$ </span>{k.toLowerCase()}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: A.ink }}>
          <span style={{
            width: 7, height: 7, background: "#7bb98a", borderRadius: "50%",
            boxShadow: "0 0 0 4px rgba(123,185,138,0.15)",
          }}/>
          Open to opportunities
        </div>
      </div>

      {/* HERO — two columns */}
      <section style={{
        display: "grid", gridTemplateColumns: "340px 1fr", gap: 0,
        borderBottom: `1px solid ${A.rule}`,
      }}>
        {/* Left rail: portrait + identity */}
        <aside style={{
          padding: "48px 36px 48px 56px",
          borderRight: `1px solid ${A.rule}`,
          background: A.panel,
        }}>
          <div style={{
            border: `1px solid ${A.rule}`,
            padding: 10, background: A.card,
          }}>
            <div style={{
              width: "100%", height: 280,
              backgroundImage: "url(portrait.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: A.cardWarm,
              display: "grid", placeItems: "center",
              fontFamily: mono, fontSize: 11, color: A.mutedInk,
              textTransform: "uppercase", letterSpacing: 1.4,
            }} aria-label="Portrait of Ninad Parthiv Shah">
            </div>
          </div>

          <div style={{ marginTop: 22 }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: A.mutedInk, letterSpacing: 1.5, textTransform: "uppercase" }}>
              Currently
            </div>
            <div style={{ fontFamily: sans, fontSize: 14, color: A.ink, marginTop: 6, lineHeight: 1.45 }}>
              Security Software Engineer at Armor1.ai
            </div>
          </div>

          <div style={{ marginTop: 22 }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: A.mutedInk, letterSpacing: 1.5, textTransform: "uppercase" }}>
              Based in
            </div>
            <div style={{ fontFamily: sans, fontSize: 14, color: A.ink, marginTop: 6 }}>{r.location}</div>
          </div>

          <div style={{ marginTop: 22 }}>
            <div style={{ fontFamily: mono, fontSize: 10, color: A.mutedInk, letterSpacing: 1.5, textTransform: "uppercase" }}>
              Email
            </div>
            <a href={`mailto:${r.email}`} style={{ fontFamily: mono, fontSize: 13, color: A.accent, marginTop: 6, display: "block", textDecoration: "none" }}>
              {r.email}
            </a>
          </div>

          <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 8 }}>
            <a href={`https://${r.links.linkedin}`} style={railLink(A, mono)}>↗ LinkedIn</a>
            <a href={`https://${r.links.github}`} style={railLink(A, mono)}>↗ GitHub</a>
            <a href={r.resumeUrl} target="_blank" rel="noopener" style={railLink(A, mono)}>↓ Résumé (PDF)</a>
          </div>
        </aside>

        {/* Right column: hero copy */}
        <div style={{ padding: "56px 56px 48px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: mono, fontSize: 11, color: A.softInk,
            border: `1px solid ${A.rule}`, background: A.card,
            padding: "5px 10px",
          }}>
            <span style={{ width: 6, height: 6, background: A.accent, borderRadius: "50%" }}/>
            cat ~/portfolio/about.md
          </div>

          <h1 style={{
            fontFamily: serif, fontWeight: 400, fontSize: 78, lineHeight: 1.02,
            margin: "24px 0 0", color: A.ink, letterSpacing: -1.6, textWrap: "balance",
          }}>
            Building <em style={{ color: A.accent, fontStyle: "italic" }}>agentic systems</em><br/>
            that ship in production.
          </h1>

          <p style={{
            fontFamily: serif, fontSize: 21, lineHeight: 1.55,
            color: A.softInk, maxWidth: 640, marginTop: 24, textWrap: "pretty",
          }}>
            AI Software Engineer with a Master&apos;s in Data Science from Arizona State.
            I work on production LLM systems: multi-pass scanners, agent orchestration with Google ADK,
            RAG pipelines, and the responsible-AI guardrails that go with them.
          </p>

          {/* whoami.sh terminal block */}
          <div className="whoami-frame" style={{
            marginTop: 28, background: "#0f0d09", color: A.softInk,
            fontFamily: mono, fontSize: 12, lineHeight: 1.8,
            padding: "14px 18px", border: `1px solid ${A.rule}`,
            boxShadow: `6px 6px 0 ${A.accent}`,
            maxWidth: 640,
          }}>
            <div style={{ color: A.mutedInk, marginBottom: 6 }}># whoami.sh</div>
            <div><span style={{ color: "#9ec1cf" }}>shipped_pre_llm</span> <span style={{ color: "#d6c9b1" }}>=</span> <span style={{ color: "#a3e635" }}>True</span></div>
            <div><span style={{ color: "#9ec1cf" }}>shipped_post_llm</span> <span style={{ color: "#d6c9b1" }}>=</span> <span style={{ color: "#a3e635" }}>True</span></div>
            <div><span style={{ color: "#9ec1cf" }}>worked_on</span> <span style={{ color: "#d6c9b1" }}>=</span> [</div>
            <div style={{ paddingLeft: 28 }}><span style={{ color: A.accent }}>"agents"</span>, <span style={{ color: A.accent }}>"LLM_evals"</span>, <span style={{ color: A.accent }}>"computer_vision"</span>,</div>
            <div style={{ paddingLeft: 28 }}><span style={{ color: A.accent }}>"deep_learning"</span>, <span style={{ color: A.accent }}>"data_pipelines"</span>,</div>
            <div>]</div>
            <div><span style={{ color: "#9ec1cf" }}>open_to_relocate</span> <span style={{ color: "#d6c9b1" }}>=</span> <span style={{ color: "#a3e635" }}>True</span></div>
          </div>

          <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
            <a href="#contact" style={primaryDark(A, mono)}>$ hire_me</a>
            <a href="#projects" style={ghostDark(A, mono)}>$ ls ./projects</a>
          </div>

          {/* Metric strip removed */}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "64px 56px", borderBottom: `1px solid ${A.rule}`, background: A.panel }}>
        <DkHeader A={A} serif={serif} mono={mono} num="01" title="About" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56, marginTop: 32 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: A.mutedInk, textTransform: "uppercase", letterSpacing: 1.3 }}>
            <div>A short note</div>
            <div style={{ marginTop: 24 }}>
              <div>Focus</div>
              <div style={{ fontFamily: sans, fontSize: 16, color: A.ink, textTransform: "none", letterSpacing: 0, marginTop: 4 }}>
                Agents. MCP. Evals.
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <div>Status</div>
              <div style={{ fontFamily: sans, fontSize: 16, color: A.accent, textTransform: "none", letterSpacing: 0, marginTop: 4 }}>
                {r.available}
              </div>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: serif, fontSize: 22, lineHeight: 1.5, color: A.ink, margin: 0, textWrap: "pretty" }}>
              I have shipped production code on both sides of the AI shift. In 2022 at Spyne.ai I built computer
              vision pipelines behind FastAPI and AWS, back when shipping AI meant training and deploying your own
              models. Today at Armor1.ai and previously at CAPX, I work in startups where AI tools are accelerating
              the production pipeline itself. That bridge across both eras shapes how I think about evals,
              telemetry, and reliability.
            </p>
            <p style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.6, color: A.softInk, marginTop: 18, textWrap: "pretty" }}>
              Recent work includes a five-layer LLM security scanner at Armor1.ai that brought per-scan cost under
              half a cent, and an agent orchestration system at CAPX extracting 20+ metrics from 4,000+ firms using
              Google ADK. Before agents I trained at IIT Gandhinagar in Electrical Engineering and Computer Science
              and completed an M.S. in Data Science at Arizona State.
            </p>
          </div>
        </div>

        {/* What I do, sub-block inside About */}
        <div style={{ marginTop: 56 }}>
          <div style={{
            display: "flex", alignItems: "baseline", gap: 16, marginBottom: 22,
            paddingBottom: 14, borderBottom: `1px solid ${A.rule}`,
          }}>
            <div style={{ fontFamily: mono, fontSize: 11, color: A.accent, letterSpacing: 1.4, textTransform: "uppercase" }}>
              // what i do
            </div>
            <div style={{ fontFamily: serif, fontSize: 28, color: A.ink, letterSpacing: -0.5, lineHeight: 1 }}>
              Capabilities
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ fontFamily: mono, fontSize: 11, color: A.mutedInk, textTransform: "uppercase", letterSpacing: 1.2 }}>
              Primary plus adjacent disciplines
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
            {r.capabilities.map((cap) => (
              <div key={cap.title} style={{
                padding: 18,
                border: `1px solid ${cap.primary ? A.accent : A.rule}`,
                background: cap.primary ? A.card : A.bg,
                display: "flex", flexDirection: "column",
              }}>
                <div style={{
                  fontFamily: mono, fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase",
                  color: cap.primary ? A.accent : A.mutedInk, marginBottom: 10,
                }}>
                  {cap.primary ? "• Primary focus" : "Adjacent"}
                </div>
                <div style={{ fontFamily: serif, fontSize: 20, color: A.ink, letterSpacing: -0.4, marginBottom: 8 }}>
                  {cap.title}
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.5, color: A.softInk, margin: "0 0 12px", flex: 1 }}>
                  {cap.blurb}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {cap.tags.map(t => <span key={t} style={darkTag(A, mono, true)}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="work" style={{ padding: "64px 56px", borderBottom: `1px solid ${A.rule}`, background: A.panel }}>
        <DkHeader A={A} serif={serif} mono={mono} num="02" title="Experience" />
        <div style={{ marginTop: 36, display: "flex", flexDirection: "column" }}>
          {r.experience.map((e, i) => (
            <article key={i} style={{
              padding: "32px 0",
              borderTop: `1px solid ${A.rule}`,
              display: "grid", gridTemplateColumns: "180px 1fr 280px", gap: 32,
            }}>
              <div style={{ fontFamily: mono, fontSize: 11, color: A.mutedInk, textTransform: "uppercase", letterSpacing: 1.2 }}>
                <div>{e.start}</div>
                <div>to {e.end}</div>
                {e.tag && (
                  <div style={{
                    marginTop: 14, color: A.accent, borderTop: `1px solid ${A.accent}`,
                    paddingTop: 6, display: "inline-block",
                  }}>{e.tag}</div>
                )}
              </div>
              <div>
                <div style={{ fontFamily: serif, fontSize: 32, lineHeight: 1.05, color: A.ink, letterSpacing: -0.6 }}>
                  {e.role}
                </div>
                <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: 19, color: A.accent, marginTop: 4 }}>
                  {e.company}.{" "}<span style={{ color: A.softInk, fontStyle: "normal" }}>{e.location}</span>
                </div>
                <p style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.5, color: A.softInk, marginTop: 14, textWrap: "pretty" }}>
                  {e.summary}
                </p>
                <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {e.stack.map(s => <span key={s} style={darkTag(A, mono)}>{s}</span>)}
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {e.bullets.slice(0,3).map((b, j) => (
                  <li key={j} style={{
                    fontSize: 13, lineHeight: 1.5, color: A.softInk,
                    paddingLeft: 14, position: "relative",
                  }}>
                    <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 1, background: A.accent }} />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "64px 56px", borderBottom: `1px solid ${A.rule}` }}>
        <DkHeader A={A} serif={serif} mono={mono} num="03" title="Projects" />
        <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 18 }}>
          {r.projects.map((p, i) => (
            <article key={p.id} style={{
              padding: "28px 28px",
              background: i === 0 ? A.card : A.panel,
              border: `1px solid ${A.rule}`,
              display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 36,
            }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: mono, fontSize: 10, color: A.accent, textTransform: "uppercase", letterSpacing: 1.3 }}>
                  <span>{p.kicker}</span><span>{p.year}</span>
                </div>
                {p.disciplines && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                    {p.disciplines.map(d => (
                      <span key={d} style={{
                        fontFamily: mono, fontSize: 9, padding: "3px 7px",
                        border: `1px solid ${A.softInk}`, color: A.ink,
                        textTransform: "uppercase", letterSpacing: 1,
                      }}>{d}</span>
                    ))}
                  </div>
                )}
                <h3 style={{
                  fontFamily: serif, fontWeight: 400, fontSize: 30,
                  lineHeight: 1.1, letterSpacing: -0.6,
                  margin: "12px 0 12px", color: A.ink,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: serif, fontSize: 16, lineHeight: 1.55, color: A.softInk, margin: 0, textWrap: "pretty" }}>
                  {p.blurb}
                </p>
                <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map(s => <span key={s} style={darkTag(A, mono)}>{s}</span>)}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  {i === 0 && (
                    <div style={{
                      marginBottom: 16,
                      background: "#0f0d09", border: `1px solid ${A.rule}`,
                      padding: "12px 14px",
                      fontFamily: mono, fontSize: 11, lineHeight: 1.85,
                      color: A.softInk,
                    }}>
                      <div style={{ color: A.mutedInk, marginBottom: 4 }}># tools exposed</div>
                      <div><span style={{ color: "#9ec1cf" }}>tool</span> <span style={{ color: A.accent }}>search_filings</span>(query, year_range, ticker)</div>
                      <div><span style={{ color: "#9ec1cf" }}>tool</span> <span style={{ color: A.accent }}>compare_yoy</span>(ticker, sections=[<span style={{ color: "#a3e635" }}>&quot;risk_factors&quot;</span>])</div>
                      <div><span style={{ color: "#9ec1cf" }}>tool</span> <span style={{ color: A.accent }}>score_sentiment</span>(text, lexicon=<span style={{ color: "#a3e635" }}>&quot;LM&quot;</span>)</div>
                    </div>
                  )}
                  <div style={{ fontFamily: mono, fontSize: 10, color: A.mutedInk, textTransform: "uppercase", letterSpacing: 1.2 }}>
                    // contributions
                  </div>
                  <ul style={{ marginTop: 8, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {p.contributions.map((c, j) => (
                      <li key={j} style={{ fontSize: 13, lineHeight: 1.5, color: A.softInk, paddingLeft: 14, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 1, background: A.accent }}/>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section id="stack" style={{ padding: "64px 56px", borderBottom: `1px solid ${A.rule}`, background: A.panel }}>
        <DkHeader A={A} serif={serif} mono={mono} num="04" title="Stack" />
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {Object.entries(r.skills).map(([cat, items]) => (
            <div key={cat} style={{ borderTop: `1px solid ${A.rule}`, paddingTop: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontFamily: serif, fontSize: 22, color: A.ink }}>{cat}</div>
                <div style={{ fontFamily: mono, fontSize: 11, color: A.mutedInk }}>{items.length} items</div>
              </div>
              <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map(s => <span key={s} style={darkTag(A, mono, true)}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section style={{ padding: "64px 56px", borderBottom: `1px solid ${A.rule}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56 }}>
          <div>
            <DkHeader A={A} serif={serif} mono={mono} num="05" title="Education" />
            <div style={{ marginTop: 28 }}>
              {r.education.map((ed, i) => (
                <div key={i} style={{ borderTop: `1px solid ${A.rule}`, padding: "22px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <div style={{ fontFamily: serif, fontSize: 22, color: A.ink, letterSpacing: -0.3 }}>{ed.school}</div>
                    <div style={{ fontFamily: mono, fontSize: 11, color: A.mutedInk, textTransform: "uppercase", letterSpacing: 1 }}>
                      {ed.start} to {ed.end}
                    </div>
                  </div>
                  <div style={{ fontFamily: serif, fontStyle: "italic", color: A.accent, marginTop: 4 }}>{ed.degree}</div>
                  <div style={{ fontSize: 13, color: A.softInk, marginTop: 8, lineHeight: 1.5 }}>{ed.notes}</div>
                  {ed.gpa && <div style={{ fontFamily: mono, fontSize: 11, color: A.softInk, marginTop: 6 }}>GPA. {ed.gpa}</div>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <DkHeader A={A} serif={serif} mono={mono} num="06" title="Certifications" />
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
              {r.certifications.map((c, i) => (
                <div key={i} style={{
                  border: `1px solid ${A.rule}`, background: A.card,
                  padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center",
                }}>
                  <div>
                    <div style={{ fontFamily: serif, fontSize: 16, color: A.ink }}>{c.name}</div>
                    <div style={{ fontFamily: mono, fontSize: 10, color: A.mutedInk, marginTop: 2, textTransform: "uppercase", letterSpacing: 1 }}>{c.issuer}</div>
                  </div>
                  <div style={{
                    fontFamily: mono, fontSize: 10, color: A.accent,
                    border: `1px solid ${A.accent}`, padding: "4px 8px",
                    textTransform: "uppercase", letterSpacing: 1,
                  }}>
                    Verified
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 56, alignItems: "flex-end" }}>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, color: A.accent, letterSpacing: 1.6, textTransform: "uppercase" }}>
              07. Get in touch
            </div>
            <h2 style={{
              fontFamily: serif, fontWeight: 400, fontSize: 64,
              lineHeight: 1, margin: "18px 0 0", color: A.ink, letterSpacing: -1.4,
            }}>
              Let&apos;s talk about what you&apos;re <em style={{ color: A.accent, fontStyle: "italic" }}>building.</em>
            </h2>
            <p style={{ fontFamily: serif, fontSize: 19, color: A.softInk, marginTop: 18, maxWidth: 560 }}>
              I am open to AI and ML engineer roles where I can own agent work from evals to deployment.
              Also open to Data Engineering and Data Science roles. Email is the quickest way to reach me.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, fontFamily: mono, fontSize: 13 }}>
            <ContactRow2 label="Email"    value={r.email}            A={A} />
            <ContactRow2 label="Phone"    value={r.phone}            A={A} />
            <ContactRow2 label="LinkedIn" value={r.links.linkedin}   A={A} />
            <ContactRow2 label="GitHub"   value={r.links.github}     A={A} />
            <a href={r.resumeUrl} target="_blank" rel="noopener" style={{
              marginTop: 12, padding: "14px 18px",
              background: A.accent, color: A.bg, fontFamily: mono, fontSize: 12,
              letterSpacing: 1.4, textTransform: "uppercase",
              textAlign: "center", textDecoration: "none",
            }}>
              Download résumé (PDF)
            </a>
          </div>
        </div>

        <div style={{
          marginTop: 56, paddingTop: 22, borderTop: `1px solid ${A.rule}`,
          display: "flex", justifyContent: "space-between",
          fontFamily: mono, fontSize: 11, color: A.mutedInk, textTransform: "uppercase", letterSpacing: 1.3,
        }}>
          <span>&copy; 2026 Ninad P. Shah. Set in Newsreader, DM Sans, and JetBrains Mono.</span>
          <span>{r.links.github}</span>
        </div>
      </section>
    </div>
  );
};

function DkHeader({ A, serif, mono, num, title }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 22 }}>
      <div style={{ fontFamily: mono, fontSize: 11, color: A.accent, letterSpacing: 1.4, textTransform: "uppercase" }}>
        // §{num}
      </div>
      <h2 style={{
        fontFamily: serif, fontWeight: 400, fontSize: 52, letterSpacing: -1,
        lineHeight: 1, color: A.ink, margin: 0,
      }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: 1, background: A.rule, marginBottom: 12 }} />
    </div>
  );
}

function ContactRow2({ label, value, A }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between",
      borderBottom: `1px solid ${A.rule}`, paddingBottom: 8,
    }}>
      <span style={{ color: A.mutedInk, textTransform: "uppercase", letterSpacing: 1 }}>{label}</span>
      <span style={{ color: A.ink }}>{value}</span>
    </div>
  );
}

function railLink(A, mono) {
  return {
    fontFamily: mono, fontSize: 12, color: A.ink,
    padding: "10px 12px", textDecoration: "none",
    border: `1px solid ${A.rule}`, background: A.card,
    textAlign: "left",
  };
}

function primaryDark(A, mono) {
  return {
    padding: "14px 20px",
    fontFamily: mono, fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase",
    background: A.accent, color: A.bg, textDecoration: "none",
    border: `1px solid ${A.accent}`, display: "inline-block",
  };
}
function ghostDark(A, mono) {
  return {
    padding: "14px 20px",
    fontFamily: mono, fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase",
    background: "transparent", color: A.ink, textDecoration: "none",
    border: `1px solid ${A.rule}`, display: "inline-block",
  };
}

function darkTag(A, mono, soft) {
  return {
    fontFamily: mono, fontSize: 10, padding: "4px 9px",
    border: `1px solid ${soft ? A.rule : A.softInk}`,
    background: "transparent",
    color: soft ? A.softInk : A.ink,
    textTransform: "uppercase", letterSpacing: 1,
  };
}

window.AtelierPortfolio = AtelierPortfolio;
