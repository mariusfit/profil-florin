// BusinessPartnerProfile — Aurora Glass Sobru
// Single React component, default export via window assignment.

const useReveal = () => {
  React.useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// Curated executive portrait presets — first slot is the user's own portrait.
const PORTRAIT_PRESETS = [
"assets/portrait.jpeg",
"https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85"];


const PORTRAIT_TONES = {
  cool: "saturate(0.92) contrast(1.02) brightness(0.96)",
  warm: "saturate(1.05) contrast(1.05) brightness(1.02) hue-rotate(-4deg)",
  neutral: "saturate(1.00) contrast(1.00) brightness(1.00)",
  noir: "grayscale(1) contrast(1.08) brightness(0.95)"
};

const SERVICES = [
{
  n: "01",
  title: "Cross-border M&A Advisory",
  body:
  "Sell-side and buy-side mandates between Romanian operating businesses and Benelux-based strategic acquirers. Structuring, valuation, regulatory liaison with the Belgian FSMA and the Romanian ASF, and post-close integration support.",
  Icon: IconHandshake
},
{
  n: "02",
  title: "Romanian–Benelux Market Entry",
  body:
  "Operational playbooks for Belgian and Dutch SMEs entering Romania, and for Romanian founders establishing legal seat in Brussels or Antwerp. Includes governance design, talent corridor, and EU funding alignment (Horizon, EIC).",
  Icon: IconCompass
},
{
  n: "03",
  title: "Family Office Strategy",
  body:
  "Discreet advisory for first-generation Romanian families capitalising European holdings. Wealth structuring through Luxembourg SOPARFIs, governance charters, intergenerational succession, and impact-aligned allocation.",
  Icon: IconShieldCheck
}];


const PORTFOLIO = [
{ year: "2025", client: "Verita Therapeutics SA", outcome: "Sell-side mandate to a Brussels-listed strategic acquirer.", metric: "€118M" },
{ year: "2024", client: "Carpathia Logistics", outcome: "Series C structuring with KBC, ING and a Bucharest-based co-investor.", metric: "€42M ARR" },
{ year: "2023", client: "Banque privée — undisclosed", outcome: "Cross-border family office reorganisation across BE / LU / RO.", metric: "€210M AUM" },
{ year: "2022", client: "Atelier Mobil Group", outcome: "Take-private and Benelux roll-up advisory in mid-market manufacturing.", metric: "9 add-ons" },
{ year: "2021", client: "EU institutional client", outcome: "Confidential strategic review on Eastern European venture allocation.", metric: "Confidential" }];


const STATS = [
{ num: "18", suffix: "yrs", label: "Advisory experience" },
{ num: "€340M", suffix: "", label: "Cross-border deals advised" },
{ num: "47", suffix: "", label: "Founders coached" },
{ num: "14", suffix: "", label: "Countries engaged" }];


const TESTIMONIALS = [
{
  quote:
  "Andrei-Mihai brought the discretion and structural rigor we expect of our Geneva counterparts — but with a genuine fluency in the Bucharest ecosystem that none of them possessed.",
  name: "Sophie Vandenbroucke",
  role: "Managing Director",
  company: "Argentum Famille Office",
  country: "Antwerp"
},
{
  quote:
  "He negotiated terms in three languages over a single afternoon and never once raised his voice. Our board left the room having signed.",
  name: "Jean-Marc Lefèvre",
  role: "Chief Executive",
  company: "Lefèvre Industries",
  country: "Brussels"
},
{
  quote:
  "An adviser of remarkable measure. He understands what Romanian founders cannot say in a Brussels boardroom — and translates it without losing the original meaning.",
  name: "Cristina Iordache",
  role: "Founder & Chair",
  company: "Iordache Holdings",
  country: "Bucharest"
}];


const Eyebrow = ({ children, className = "" }) =>
<div className={"label-mono text-[color:var(--accent-primary)] " + className}>{children}</div>;


// --- LANGUAGE SWITCHER --------------------------------------------------
// Visual-only. Translations to be wired in separately by the user.
const LANGUAGES = [
  { code: "ro", label: "RO", full: "Rom\u00E2n\u0103" },
  { code: "fr", label: "FR", full: "Fran\u00E7ais" },
  { code: "nl", label: "NL", full: "Nederlands" },
  { code: "en", label: "EN", full: "English" }
];

const LanguageSwitcher = ({ value, onChange, variant = "inline", dropDirection = "down" }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === value) || LANGUAGES[3];

  if (variant === "inline") {
    // Segmented inline: RO · FR · NL · EN — used on desktop in header
    return (
      <div className="hidden md:flex items-center gap-2 label-mono" role="group" aria-label="Language">
        <IconGlobe size={13} stroke={1.6} className="text-[color:var(--text-muted)] mr-1" />
        {LANGUAGES.map((l, i) => (
          <React.Fragment key={l.code}>
            <button
              type="button"
              onClick={() => onChange(l.code)}
              aria-pressed={l.code === value}
              title={l.full}
              className={
                "transition-colors px-1 py-0.5 " +
                (l.code === value
                  ? "text-[color:var(--accent-primary)]"
                  : "text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]")
              }
              style={l.code === value ? { textShadow: "0 0 18px rgba(232,199,122,0.35)" } : null}
            >
              {l.label}
            </button>
            {i < LANGUAGES.length - 1 && (
              <span className="text-[color:var(--text-muted)] opacity-50">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  // Compact dropdown — used on mobile
  return (
    <div ref={ref} className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 label-mono px-2.5 py-1.5 rounded-[4px] border border-[color:var(--glass-border)] text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] transition-colors"
      >
        <IconGlobe size={13} stroke={1.6} />
        {current.label}
        <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden="true" style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms ease" }}>
          <path d="M1 3 L4.5 6 L8 3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className={"absolute right-0 z-50 min-w-[160px] glass rounded-[4px] py-1.5 " + (dropDirection === "up" ? "bottom-[calc(100%+6px)]" : "top-[calc(100%+6px)]")}
          style={{ boxShadow: "var(--shadow-glass)" }}
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === value}
                onClick={() => { onChange(l.code); setOpen(false); }}
                className={
                  "w-full text-left px-3 py-2 flex items-center justify-between gap-4 label-mono transition-colors " +
                  (l.code === value
                    ? "text-[color:var(--accent-primary)]"
                    : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]")
                }
              >
                <span>{l.label}</span>
                <span className="opacity-60 normal-case tracking-normal" style={{ fontFamily: "var(--font-body)", fontSize: 11, textTransform: "none", letterSpacing: 0 }}>{l.full}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


const SectionLabel = ({ index, name }) =>
<div className="flex items-center gap-3 label-mono text-[color:var(--text-muted)]">
    <span className="text-[color:var(--accent-primary)]">{index}</span>
    <span className="h-px w-8 bg-[color:var(--divider)]"></span>
    <span>{name}</span>
  </div>;


// --- HERO ---------------------------------------------------------------
const Hero = ({ portraitUrl, portraitTone }) =>
<section className="relative overflow-hidden">
    {/* Aurora blobs */}
    <div className="aurora drift-a" style={{ width: 520, height: 520, right: -120, top: -80, background: "var(--aurora-1)" }} />
    <div className="aurora drift-b" style={{ width: 460, height: 460, right: 120, top: 220, background: "var(--aurora-2)" }} />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      {/* Portrait */}
      <div className="lg:col-span-5 rise rise-0">
        <div className="relative">
          <div className="portrait-frame max-w-[280px] sm:max-w-[360px] lg:max-w-[480px]">
            <img
            key={portraitUrl}
            src={portraitUrl}
            alt="Andrei-Mihai Popescu, Founding Partner, Lumen Advisory"
            className="w-full h-full object-cover"
            style={{ filter: PORTRAIT_TONES[portraitTone] || PORTRAIT_TONES.cool, transition: "filter 400ms ease" }}
            onError={(e) => {e.currentTarget.style.display = "none";}} />
          
          </div>
          {/* Frame metadata, like a museum plaque */}
          <div className="mt-4 flex items-center gap-3 max-w-[480px]">
            <div className="meta-mono text-[color:var(--text-muted)]">Plate I</div>
            <div className="h-px flex-1 bg-[color:var(--divider)]"></div>
            <div className="meta-mono text-[color:var(--text-muted)]">Brussels · MMXXVI</div>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="rise rise-1">
          <Eyebrow>Partner · Brussels · 2026</Eyebrow>
        </div>

        <h1 className="rise rise-2 font-display h-display mt-5 text-[44px] sm:text-[60px] lg:text-[80px]">
          Florin Pop<br />
          <span className="text-[color:var(--text-secondary)]"></span>
        </h1>

        <div className="rise rise-3 mt-5 font-display text-[22px] sm:text-[26px] lg:text-[28px] leading-snug text-[color:var(--text-secondary)]">
          Founding Partner, Lumen Advisory.
        </div>

        <p className="rise rise-4 mt-6 max-w-[560px] text-[18px] lg:text-[19px] leading-[1.55] text-[color:var(--text-secondary)]">
          Advising Romanian founders and Benelux family offices on
          cross-border capital, governance and the quiet mechanics of European
          succession. Eighteen years between Brussels, Bucharest and Paris.
        </p>

        <div className="rise rise-5 mt-9 flex flex-wrap items-center gap-4">
          <button className="btn-gold">
            <IconCalendar size={16} stroke={1.6} />
            Book a 30-minute consultation
          </button>
          <button className="btn-ghost">
            <IconDownload size={16} stroke={1.6} />
            Download bio (PDF)
          </button>
        </div>

        <div className="rise rise-5 mt-10 flex flex-wrap gap-x-8 gap-y-3 meta-mono text-[color:var(--text-muted)]">
          <div className="flex items-center gap-2"><IconMapPin size={14} stroke={1.6} /> Avenue Louise 222 · 1050 Ixelles</div>
          <div className="flex items-center gap-2"><IconGlobe size={14} stroke={1.6} /> RO · FR · NL · EN</div>
          <div className="flex items-center gap-2"><IconShieldCheck size={14} stroke={1.6} /> FSMA Registered</div>
        </div>
      </div>
    </div>
  </section>;


// --- BIO ----------------------------------------------------------------
const Bio = () =>
<section id="bio" className="relative">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-12 gap-8">
      <aside className="hidden lg:block col-span-3 reveal">
        <SectionLabel index="01" name="Profile" />
        <div className="mt-8 space-y-6">
          <div>
            <div className="meta-mono text-[color:var(--text-muted)]">Born</div>
            <div className="mt-1 text-[color:var(--text-secondary)] text-[15px]">Cluj-Napoca, 1982</div>
          </div>
          <div>
            <div className="meta-mono text-[color:var(--text-muted)]">Resident</div>
            <div className="mt-1 text-[color:var(--text-secondary)] text-[15px]">Brussels, since 2014</div>
          </div>
          <div>
            <div className="meta-mono text-[color:var(--text-muted)]">Practice since</div>
            <div className="mt-1 text-[color:var(--text-secondary)] text-[15px]">MMVIII</div>
          </div>
        </div>
      </aside>

      <div className="col-span-12 lg:col-span-7 lg:col-start-5 bio-rule pl-0 lg:pl-8">
        <div className="lg:hidden mb-8">
          <SectionLabel index="01" name="Profile" />
        </div>
        <h2 className="reveal font-display h-section text-[36px] lg:text-[56px] max-w-[640px]">
          Eighteen years of measured counsel between Brussels and Bucharest.
        </h2>

        <div className="reveal delay-1 mt-12 max-w-[640px] text-[17px] leading-[1.7] text-[color:var(--text-secondary)] space-y-6">
          <p className="dropcap">
            Andrei-Mihai Popescu founded Lumen Advisory in 2019 after a decade
            with McKinsey &amp; Company in Brussels and Paris, where he led
            cross-border advisory for European family-controlled businesses
            entering Central and Eastern European markets. He holds an MBA from
            HEC Paris (2008) and a Licență in finance from the Academy of
            Economic Studies, Bucharest.
          </p>

          <p>
            His practice is small by intention. Lumen retains no more than
            twelve mandates per year and accepts new clients principally on
            referral from European banking counsel. Recent work has structured
            <em> cinq sorties stratégiques</em> for Romanian operators selling
            into Benelux strategic acquirers, and quietly reorganised three
            multi-jurisdictional family offices across Belgium, Luxembourg and
            Romania.
          </p>

          <p>
            He sits on the supervisory boards of two Brussels-headquartered
            companies, lectures occasionally at <em>Solvay Brussels School</em>,
            and contributes to <em>L'Echo</em> on matters of cross-border
            succession. He divides his time between the rue de la Loi and a
            small estate near Sibiu.
          </p>
        </div>

        <blockquote className="reveal delay-2 mt-14 quote-rule max-w-[600px]">
          <p className="font-display italic text-[28px] lg:text-[32px] leading-[1.25] text-[color:var(--text-primary)]">
            "Cross-border work is the slow craft of translating not just
            language, but expectation. The deal is the easy part."
          </p>
          <div className="mt-4 meta-mono text-[color:var(--text-muted)]">— Interview, L'Echo, March 2025</div>
        </blockquote>

        <div className="reveal delay-3 mt-16">
          <div className="meta-mono text-[color:var(--accent-primary)]">Credentials</div>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 meta-mono text-[color:var(--text-secondary)]">
            <li>HEC Paris — MBA, 2008</li>
            <li>ASE Bucharest — Licență Finance</li>
            <li>INSEAD — Family Enterprise Programme</li>
            <li>Solvay Brussels — Visiting Lecturer</li>
            <li>FSMA Registered Adviser</li>
            <li>Languages — RO · FR · NL · EN</li>
            <li>Board — Verita Therapeutics SA</li>
            <li>Board — Carpathia Logistics NV</li>
          </ul>
        </div>
      </div>
    </div>
  </section>;


// --- SERVICES -----------------------------------------------------------
const Services = () =>
<section id="services" className="relative">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <SectionLabel index="02" name="Practice" />
          <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
            Three mandates. Pursued slowly, finished completely.
          </h2>
        </div>
        <div className="meta-mono text-[color:var(--text-muted)] max-w-xs">
          Twelve engagements per annum. Acceptance by referral.
        </div>
      </div>

      <div className="space-y-6">
        {SERVICES.map((s, i) =>
      <div
        key={s.n}
        className={"reveal delay-" + Math.min(i + 1, 5) + " glass svc rounded-[8px] p-6 lg:p-10 grid grid-cols-12 gap-6 items-start relative"}>
        
            <div className="col-span-12 lg:col-span-2">
              <div className="font-display text-[60px] lg:text-[72px] leading-none text-[color:var(--accent-primary)]">{s.n}</div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h3 className="font-display text-[24px] lg:text-[28px] leading-tight">{s.title}</h3>
              <p className="mt-4 text-[16px] lg:text-[17px] leading-[1.65] text-[color:var(--text-secondary)] max-w-[640px]">
                {s.body}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-2 lg:flex lg:justify-end">
              <div className="text-[color:var(--accent-primary)]">
                <s.Icon size={28} stroke={1.5} />
              </div>
            </div>
          </div>
      )}
      </div>
    </div>
  </section>;


// --- PORTFOLIO ----------------------------------------------------------
const Portfolio = () =>
<section id="portfolio" className="relative">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="reveal mb-14">
        <SectionLabel index="03" name="Selected Engagements" />
        <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
          A short ledger of recent work, where disclosure permits.
        </h2>
      </div>

      <div className="reveal delay-1">
        <div className="hidden lg:grid grid-cols-12 gap-6 meta-mono text-[color:var(--text-muted)] pb-4 border-b border-[color:var(--divider)]">
          <div className="col-span-1">Year</div>
          <div className="col-span-4">Engagement</div>
          <div className="col-span-5">Outcome</div>
          <div className="col-span-2 text-right">Scale</div>
        </div>

        {PORTFOLIO.map((p, i) =>
      <div key={i} className="pf-row grid grid-cols-12 gap-6 py-7 border-b border-[color:var(--divider)] pl-4">
            <div className="col-span-12 lg:col-span-1 meta-mono text-[color:var(--text-muted)] pt-2">{p.year}</div>
            <div className="col-span-12 lg:col-span-4">
              <div className="font-display text-[24px] lg:text-[28px] leading-tight">{p.client}</div>
            </div>
            <div className="col-span-12 lg:col-span-5 text-[16px] leading-[1.6] text-[color:var(--text-secondary)] pt-1">
              {p.outcome}
            </div>
            <div className="col-span-12 lg:col-span-2 lg:text-right">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[color:var(--glass-border-hi)] rounded-[2px] meta-mono text-[color:var(--accent-primary)]">
                {p.metric}
              </span>
            </div>
          </div>
      )}
      </div>

      <div className="reveal delay-2 mt-10 meta-mono text-[color:var(--text-muted)]">
        Further engagements available <span className="text-[color:var(--accent-primary)]">sub embargo</span> upon written request.
      </div>
    </div>
  </section>;


// --- STATS --------------------------------------------------------------
const Stats = () =>
<section className="relative">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="reveal mb-12">
        <SectionLabel index="04" name="By the Numbers" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--divider)] rounded-[8px] overflow-hidden border border-[color:var(--divider)]">
        {STATS.map((s, i) =>
      <div key={i} className={"reveal delay-" + Math.min(i + 1, 5) + " glass rounded-none p-8 lg:p-10 flex flex-col gap-4 min-h-[200px] lg:min-h-[260px] justify-between"}>
            <div className="flex items-baseline gap-2">
              <span className="stat-num text-[44px] lg:text-[60px]">{s.num}</span>
              {s.suffix && <span className="font-mono text-[14px] text-[color:var(--text-muted)]">{s.suffix}</span>}
            </div>
            <div className="meta-mono text-[color:var(--text-muted)]">{s.label}</div>
          </div>
      )}
      </div>
    </div>
  </section>;


// --- TESTIMONIALS -------------------------------------------------------
const Testimonials = () =>
<section className="relative">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="reveal mb-14">
        <SectionLabel index="05" name="On the Record" />
        <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
          Three voices, three jurisdictions.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) =>
      <figure key={i} className={"reveal delay-" + Math.min(i + 1, 5) + " glass svc relative rounded-[8px] p-8 lg:p-10 overflow-hidden"}>
            <div className="absolute top-4 right-4 text-[color:var(--accent-primary)] opacity-[0.08]">
              <IconQuote size={80} stroke={1.2} />
            </div>
            <blockquote className="relative font-display italic text-[19px] lg:text-[20px] leading-[1.5] text-[color:var(--text-primary)]">
              "{t.quote}"
            </blockquote>
            <figcaption className="relative mt-8 pt-6 border-t border-[color:var(--divider)] meta-mono text-[color:var(--text-muted)]">
              <div className="text-[color:var(--text-primary)]">{t.name}</div>
              <div className="mt-1">{t.role} · {t.company}</div>
              <div className="mt-1 text-[color:var(--accent-primary)]">{t.country}</div>
            </figcaption>
          </figure>
      )}
      </div>
    </div>
  </section>;


// --- CONTACT ------------------------------------------------------------
const Contact = () => {
  const [form, setForm] = React.useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };
  return (
    <section id="contact" className="relative">
      <div className="hairline max-w-[1200px] mx-auto"></div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="reveal mb-14">
          <SectionLabel index="06" name="Correspondence" />
          <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
            A first conversation, in writing or in person.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <form onSubmit={submit} className="reveal delay-1 lg:col-span-7 glass rounded-[8px] p-8 lg:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block">
                <div className="meta-mono text-[color:var(--text-muted)] mb-2">Name</div>
                <input className="field" placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>
              <label className="block">
                <div className="meta-mono text-[color:var(--text-muted)] mb-2">Email</div>
                <input className="field" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </label>
            </div>
            <label className="block">
              <div className="meta-mono text-[color:var(--text-muted)] mb-2">Company / Family Office</div>
              <input className="field" placeholder="Optional" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            </label>
            <label className="block">
              <div className="meta-mono text-[color:var(--text-muted)] mb-2">Brief context</div>
              <textarea className="field" rows="5" placeholder="A short note. Confidentiality is observed by default." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 meta-mono text-[color:var(--text-muted)]">
                <IconLock size={14} stroke={1.6} /> Encrypted in transit. Held under NDA on receipt.
              </div>
              {sent ?
              <div className="meta-mono text-[color:var(--accent-primary)]">Message received — reply within 48 hours.</div> :

              <button type="submit" className="btn-gold">Send message <IconArrowRight size={16} stroke={1.6} /></button>
              }
            </div>
          </form>

          {/* Meta block */}
          <aside className="reveal delay-2 lg:col-span-5 space-y-8">
            <div className="glass rounded-[8px] p-8">
              <div className="meta-mono text-[color:var(--accent-primary)] mb-4">Cabinet</div>
              <div className="font-display text-[22px] leading-snug">Lumen Advisory SRL</div>
              <div className="mt-2 font-mono text-[13px] leading-[1.7] text-[color:var(--text-secondary)]">
                Avenue Louise 222<br />
                1050 Ixelles, Bruxelles<br />
                BE 0743.512.901
              </div>
            </div>

            <div className="glass rounded-[8px] p-8 space-y-4">
              <div className="meta-mono text-[color:var(--accent-primary)] mb-2">Direct</div>
              <a href="mailto:a.popescu@lumen-advisory.be" className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconMail size={16} stroke={1.6} /> a.popescu@lumen-advisory.be
              </a>
              <a href="tel:+3225112201" className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconPhone size={16} stroke={1.6} /> +32 (0)2 511 22 01
              </a>
              <a href="#" className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconWhatsapp size={16} stroke={1.6} /> WhatsApp · on request
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconFacebook size={16} stroke={1.6} /> facebook.com/florinpop
              </a>
            </div>

            <div className="glass rounded-[8px] p-8">
              <div className="meta-mono text-[color:var(--accent-primary)] mb-3">Service Standard</div>
              <ul className="space-y-2 meta-mono text-[color:var(--text-secondary)]">
                <li className="flex justify-between gap-4"><span>Initial reply</span><span className="text-[color:var(--text-muted)]">≤ 48h</span></li>
                <li className="flex justify-between gap-4"><span>Languages</span><span className="text-[color:var(--text-muted)]">RO · FR · NL · EN</span></li>
                <li className="flex justify-between gap-4"><span>Discretion</span><span className="text-[color:var(--text-muted)]">NDA on receipt</span></li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn-ghost !py-2.5 !px-4 text-[13px]"><IconFileText size={14} stroke={1.6} /> vCard</button>
                <button className="btn-ghost !py-2.5 !px-4 text-[13px]"><IconCalendar size={14} stroke={1.6} /> Calendar</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>);

};

// --- FINAL CTA ----------------------------------------------------------
const FinalCTA = () =>
<section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, var(--bg-primary) 0%, #07101F 100%)" }} />
    <div className="aurora drift-a" style={{ width: 520, height: 520, left: -80, bottom: -180, background: "var(--aurora-2)" }} />
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28 lg:py-40 grid grid-cols-12 gap-10 items-end">
      <div className="col-span-12 lg:col-span-8 reveal">
        <SectionLabel index="07" name="Conclusion" />
        <h2 className="font-display h-display mt-6 text-[44px] sm:text-[60px] lg:text-[80px] max-w-[860px]">
          Let us discuss your next move,<br />
          <span className="text-[color:var(--accent-primary)]">à votre heure.</span>
        </h2>
        <p className="mt-8 max-w-[560px] text-[17px] leading-[1.65] text-[color:var(--text-secondary)]">
          A first conversation runs thirty minutes, in Brussels, Bucharest or
          by encrypted line. There is no obligation, and no invoice issued
          for first contact.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="btn-gold"><IconCalendar size={16} stroke={1.6} /> Book a 30-minute consultation</button>
          <button className="btn-ghost"><IconArrowUpRight size={16} stroke={1.6} /> Read the practice memorandum</button>
        </div>
      </div>

      {/* Hand-drawn signature — the deliberate human touch */}
      <div className="col-span-12 lg:col-span-4 reveal delay-2 flex flex-col items-start lg:items-end">
        <svg viewBox="0 0 320 140" width="100%" style={{ maxWidth: 360 }} aria-hidden="true">
          <defs>
            <filter id="ink">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
              <feDisplacementMap in="SourceGraphic" scale="0.6" />
            </filter>
          </defs>
          <g fill="none" stroke="#F5F1E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#ink)" opacity="0.92">
            {/* "A" loop */}
            <path d="M10 95 C 30 35, 55 25, 70 70 C 75 88, 65 100, 50 95 C 38 91, 38 75, 55 70" />
            {/* connector */}
            <path d="M70 70 C 90 75, 95 95, 110 75 C 118 65, 115 55, 105 60 C 96 65, 100 88, 120 90" />
            {/* "M" peaks */}
            <path d="M125 95 C 130 60, 140 60, 145 90 C 150 60, 160 60, 165 95" />
            {/* dash and trailing flourish */}
            <path d="M175 80 C 195 78, 215 80, 235 78" />
            <path d="M170 100 C 200 110, 240 105, 280 95 C 295 92, 305 88, 312 80" />
            {/* underline */}
            <path d="M30 118 C 110 108, 200 108, 290 116" strokeWidth="1" opacity="0.6" />
          </g>
        </svg>
        <div className="meta-mono text-[color:var(--text-muted)] mt-4">A.-M. Popescu · Founding Partner</div>
      </div>
    </div>

    {/* Footer */}
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <footer className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 meta-mono text-[color:var(--text-muted)]">
      <div className="flex items-center gap-3">
        <svg width="18" height="18" viewBox="0 0 22 22" aria-hidden="true">
          <rect x="1" y="1" width="20" height="20" rx="2" fill="none" stroke="#E8C77A" strokeWidth="1" />
          <path d="M6 14 L11 6 L16 14" fill="none" stroke="#E8C77A" strokeWidth="1.2" />
          <line x1="6" y1="14" x2="16" y2="14" stroke="#E8C77A" strokeWidth="1.2" />
        </svg>
        <span>Lumen Advisory SRL · MMXIX–MMXXVI</span>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-2">
        <a href="#" className="hover:text-[color:var(--accent-primary)] transition-colors">Privacy</a>
        <a href="#" className="hover:text-[color:var(--accent-primary)] transition-colors">Mentions Légales</a>
        <a href="#" className="hover:text-[color:var(--accent-primary)] transition-colors">FSMA Disclosure</a>
        <a href="#" className="hover:text-[color:var(--accent-primary)] transition-colors">Imprint</a>
      </div>
    </footer>
  </section>;


// --- TWEAKS UI ----------------------------------------------------------
const PortraitPicker = ({ value, presets, onChange, onCustom }) => {
  const [custom, setCustom] = React.useState("");
  const isCustom = value && !presets.includes(value);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 6
      }}>
        {presets.map((url, i) => {
          const selected = url === value;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onChange(url)}
              title={"Portrait " + (i + 1)}
              style={{
                appearance: "none",
                border: selected ? "1.5px solid #29261b" : "1px solid rgba(0,0,0,0.12)",
                padding: 0,
                margin: 0,
                background: "#0A1628",
                borderRadius: 4,
                overflow: "hidden",
                aspectRatio: "4 / 5",
                cursor: "pointer",
                position: "relative",
                outline: "none",
                boxShadow: selected ? "0 0 0 2px rgba(232,199,122,0.55)" : "none"
              }}>
              
              <img
                src={url}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {e.currentTarget.style.opacity = 0.2;}} />
              
            </button>);

        })}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <input
          type="text"
          placeholder="Paste image URL…"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          style={{
            flex: 1, minWidth: 0,
            font: "11px/1.4 ui-monospace,monospace",
            padding: "6px 8px",
            border: "1px solid rgba(0,0,0,0.14)",
            borderRadius: 4,
            background: "rgba(255,255,255,0.6)",
            color: "#29261b"
          }} />
        
        <button
          type="button"
          disabled={!custom.trim()}
          onClick={() => {onCustom(custom.trim());setCustom("");}}
          style={{
            appearance: "none",
            border: "1px solid rgba(0,0,0,0.14)",
            background: custom.trim() ? "#29261b" : "rgba(0,0,0,0.06)",
            color: custom.trim() ? "#faf9f7" : "rgba(41,38,27,0.4)",
            font: "11px/1 ui-sans-serif,system-ui",
            fontWeight: 500,
            padding: "6px 10px",
            borderRadius: 4,
            cursor: custom.trim() ? "pointer" : "default"
          }}>
          
          Use
        </button>
      </div>
      {isCustom &&
      <div style={{ font: "10px/1.4 ui-monospace,monospace", color: "rgba(41,38,27,0.55)", wordBreak: "break-all" }}>
          Custom: {value.slice(0, 60)}{value.length > 60 ? "…" : ""}
        </div>
      }
    </div>);

};

// --- SITE HEADER (fixed top desktop / fixed bottom mobile taskbar) ------
const LumenMark = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true">
    <rect x="1" y="1" width="20" height="20" rx="2" fill="none" stroke="#E8C77A" strokeWidth="1" />
    <path d="M6 14 L11 6 L16 14" fill="none" stroke="#E8C77A" strokeWidth="1.2" />
    <line x1="6" y1="14" x2="16" y2="14" stroke="#E8C77A" strokeWidth="1.2" />
  </svg>
);

const TaskItem = ({ href, Icon, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[color:var(--text-muted)] hover:text-[color:var(--accent-primary)] active:text-[color:var(--accent-primary)] transition-colors"
  >
    <Icon size={18} stroke={1.6} />
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
  </a>
);

const SiteHeader = ({ lang, onLangChange }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopBg = {
    background: scrolled ? "rgba(10,22,40,0.72)" : "rgba(10,22,40,0.0)",
    WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
    backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
    borderBottom: "1px solid " + (scrolled ? "var(--divider)" : "transparent"),
    transition: "background 280ms ease, border-color 280ms ease, backdrop-filter 280ms ease"
  };

  const mobileTopBg = {
    background: scrolled ? "rgba(10,22,40,0.78)" : "rgba(10,22,40,0.40)",
    WebkitBackdropFilter: "blur(16px) saturate(140%)",
    backdropFilter: "blur(16px) saturate(140%)",
    borderBottom: "1px solid " + (scrolled ? "var(--divider)" : "transparent"),
    transition: "background 280ms ease, border-color 280ms ease"
  };

  const mobileBottomBg = {
    background: "rgba(10,22,40,0.86)",
    WebkitBackdropFilter: "blur(20px) saturate(140%)",
    backdropFilter: "blur(20px) saturate(140%)",
    borderTop: "1px solid var(--divider)",
    paddingBottom: "env(safe-area-inset-bottom, 0px)"
  };

  return (
    <React.Fragment>
      {/* Desktop top header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40" style={desktopBg}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LumenMark />
            <div className="font-display text-[18px] tracking-tight">Lumen Advisory</div>
            <div className="hidden md:block w-px h-4 bg-[color:var(--divider)] mx-2"></div>
            <div className="hidden lg:block label-mono text-[color:var(--text-muted)]">Brussels · Bucharest</div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 label-mono text-[color:var(--text-muted)]">
            <a href="#bio" className="hover:text-[color:var(--accent-primary)] transition-colors">Profile</a>
            <a href="#services" className="hover:text-[color:var(--accent-primary)] transition-colors">Practice</a>
            <a href="#portfolio" className="hover:text-[color:var(--accent-primary)] transition-colors">Engagements</a>
            <a href="#contact" className="hover:text-[color:var(--accent-primary)] transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher value={lang} onChange={onLangChange} variant="inline" />
            <span className="hidden md:block w-px h-4 bg-[color:var(--divider)]"></span>
            <button className="btn-ghost !py-2 !px-4 text-[13px]">
              <IconLock size={14} stroke={1.6} /> Secure Call
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slim top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 px-5 h-[52px] flex items-center justify-between" style={mobileTopBg}>
        <div className="flex items-center gap-2.5">
          <LumenMark size={18} />
          <span className="font-display text-[15px]">Lumen Advisory</span>
        </div>
        <button className="flex items-center gap-1.5 label-mono px-2.5 py-1 rounded-[4px] border border-[color:var(--glass-border)] text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] transition-colors">
          <IconLock size={12} stroke={1.6} /> Secure
        </button>
      </div>

      {/* Mobile bottom taskbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40" style={mobileBottomBg} aria-label="Primary">
        <ul className="grid grid-cols-5 items-stretch">
          <li className="flex"><TaskItem href="#bio" Icon={IconContact} label="Profil" /></li>
          <li className="flex"><TaskItem href="#services" Icon={IconCompass} label="Practice" /></li>
          <li className="flex"><TaskItem href="#portfolio" Icon={IconFileText} label="Lucr\u0103ri" /></li>
          <li className="flex"><TaskItem href="#contact" Icon={IconMail} label="Contact" /></li>
          <li className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1 py-1.5">
              <LanguageSwitcher value={lang} onChange={onLangChange} variant="compact" dropDirection="up" />
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

// --- ROOT ---------------------------------------------------------------
const BusinessPartnerProfile = () => {
  useReveal();
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || {
    portraitUrl: PORTRAIT_PRESETS[0],
    portraitTone: "cool"
  });
  // Language state — selector UI only; translations wired in separately.
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem("site-lang") || "en"; } catch (e) { return "en"; }
  });
  React.useEffect(() => {
    try { localStorage.setItem("site-lang", lang); } catch (e) {}
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return (
    <main className="relative pt-[52px] md:pt-[68px] pb-[72px] md:pb-0">
      <SiteHeader lang={lang} onLangChange={setLang} />
      <Hero portraitUrl={t.portraitUrl} portraitTone={t.portraitTone} />
      <Bio />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
      <FinalCTA />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Portret" />
        <div className="twk-row">
          <div className="twk-lbl"><span>Alege poza</span></div>
          <PortraitPicker
            value={t.portraitUrl}
            presets={PORTRAIT_PRESETS}
            onChange={(v) => setTweak("portraitUrl", v)}
            onCustom={(v) => setTweak("portraitUrl", v)} />
          
        </div>
        <TweakRadio
          label="Ton"
          value={t.portraitTone}
          options={["cool", "warm", "neutral", "noir"]}
          onChange={(v) => setTweak("portraitTone", v)} />
        
      </TweaksPanel>
    </main>);

};

window.BusinessPartnerProfile = BusinessPartnerProfile;