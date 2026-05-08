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
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85"
];

const PORTRAIT_TONES = {
  cool: "saturate(0.92) contrast(1.02) brightness(0.96)",
  warm: "saturate(1.05) contrast(1.05) brightness(1.02) hue-rotate(-4deg)",
  neutral: "saturate(1.00) contrast(1.00) brightness(1.00)",
  noir: "grayscale(1) contrast(1.08) brightness(0.95)"
};

const LANGUAGES = [
  { code: "ro", label: "RO", full: "Română" },
  { code: "fr", label: "FR", full: "Français" },
  { code: "nl", label: "NL", full: "Nederlands" },
  { code: "en", label: "EN", full: "English" }
];

const DEFAULT_LANG = "ro";

const SITE_COPY = {
  ro: {
    htmlTitle: "Florin Pop — Radio Belgia, Pop Media, Roeselare",
    brand: {
      name: "Radio Belgia",
      subtitle: "Pop Media · Roeselare"
    },
    common: {
      languageAria: "Limbă",
      secureCall: "Discuție sigură",
      secure: "Sigur",
      primaryNavAria: "Navigare principală",
      years: "ani",
      messageSent: "Mesaj primit — revin în 24-48h.",
      use: "Use"
    },
    nav: {
      about: "Despre",
      services: "Activitate",
      projects: "Proiecte",
      testimonials: "Voci",
      contact: "Contact"
    },
    taskbar: {
      home: "Acasă",
      about: "Despre",
      projects: "Proiecte",
      radio: "Radio",
      contact: "Contact"
    },
    hero: {
      plateLeft: "Profil public",
      plateRight: "Roeselare · MMXXVI",
      eyebrow: "Antreprenor · Roeselare · 2026",
      name: "Florin Pop",
      role: "Fondator Radio Belgia · Pop Media",
      intro: "Om de legătură între românii din diaspora și instituțiile din Belgia. Construiesc proiecte media, evenimente comunitare și colaborări locale care ajută integrarea românilor în Flandra de Vest.",
      ctaPrimary: "Programează o conversație",
      ctaSecondary: "Descarcă profilul (PDF)",
      location: "Roeselare, Flandra de Vest",
      languages: "RO · FR · NL · EN",
      trust: "Dialog instituțional activ"
    },
    bio: {
      sectionName: "Profil",
      heading: "Din august 2011, o muncă constantă pentru comunitatea românească din Belgia.",
      aside: [
        { label: "Stabilit", value: "Belgia, din august 2011" },
        { label: "Oraș", value: "Roeselare" },
        { label: "Rol", value: "Antreprenor · Organizator" }
      ],
      paragraphs: [
        "Sunt Florin Pop, producător la Radio Belgia și inițiator al proiectelor Pop Media pentru comunitatea română din Belgia. Timp de șapte ani am fost președinte al asociației Roemenenuit Roeselare vzw, unde am coordonat inițiative culturale și proiecte de conectare între comunitatea română și cea belgiană.",
        "Prin radio, podcasturi și evenimente, misiunea mea este să ofer informație clară, încredere și sprijin practic românilor care se integrează în sistemul belgian. Sunt implicat în relații de lucru cu administrații locale, iar proiectele noastre se dezvoltă în dialog cu instituții românești, inclusiv cu zona diplomatică.",
        "Ultimul eveniment major a fost 1 Mai 2026, la Kerelsplein în Roeselare. În iunie pregătim următoarea ediție, Zile de Vară, ca punct de întâlnire pentru familii, antreprenori și parteneri locali. Direcția următoare este consolidarea ecosistemului info.belgia împreună cu parteneri serioși."
      ],
      quote: "Nu construim doar audiență. Construim punți reale între oameni, instituții și oportunități.",
      quoteMeta: "— Florin Pop, Radio Belgia",
      credentialsTitle: "Repere",
      credentials: [
        "Radio Belgia — Producător",
        "Pop Media — Fondator",
        "Roemenenuit Roeselare vzw — 7 ani președinte",
        "1 Mai 2026 — Kerelsplein, Roeselare",
        "Iunie 2026 — Zile de Vară (în pregătire)",
        "Mediere comunitară — integrare în Belgia",
        "Parteneriate locale — Flandra de Vest",
        "Limbi — RO · FR · NL · EN"
      ]
    },
    services: {
      sectionName: "Activitate",
      heading: "Trei direcții clare, cu impact direct în comunitate.",
      sideNote: "Media · evenimente · integrare",
      cards: [
        {
          n: "01",
          icon: "handshake",
          title: "Mediere pentru românii din diaspora",
          body: "Sprijin în relația cu primării, instituții locale și servicii administrative. Traduc contextul, explic pașii și conectez oamenii cu soluții concrete."
        },
        {
          n: "02",
          icon: "compass",
          title: "Producție media: Radio Belgia & podcast",
          body: "Coordonez conținut radio și digital orientat pe viața reală din Belgia: informație utilă, dialog comunitar, vizibilitate pentru inițiative locale și antreprenori români."
        },
        {
          n: "03",
          icon: "shield",
          title: "Evenimente comunitare & parteneriate",
          body: "Organizez evenimente care apropie comunități și instituții: de la concepție și promovare până la colaborări cu parteneri locali, sponsori și administrații."
        }
      ]
    },
    portfolio: {
      sectionName: "Inițiative",
      heading: "Proiecte vizibile, rezultate construite în timp.",
      columns: {
        year: "An",
        engagement: "Inițiativă",
        outcome: "Rezultat",
        scale: "Status"
      },
      rows: [
        {
          year: "2026",
          client: "1 Mai Muncitoresc · Roeselare",
          outcome: "Eveniment comunitar organizat la Kerelsplein, cu participare din diaspora, parteneri locali și colaboratori instituționali.",
          metric: "Finalizat"
        },
        {
          year: "2026",
          client: "Zile de Vară",
          outcome: "Planificare pentru ediția din iunie: muzică, networking local și activări pentru familii și antreprenori români din Flandra de Vest.",
          metric: "În pregătire"
        },
        {
          year: "2025",
          client: "Radio Belgia · Pop Media",
          outcome: "Consolidarea formatelor radio și podcast, plus colaborări comerciale pentru vizibilitate relevantă în comunitatea românească.",
          metric: "Activ"
        },
        {
          year: "2018–2025",
          client: "Roemenenuit Roeselare vzw",
          outcome: "Coordonare strategică și inițiative culturale în 7 ani de președinție, cu focus pe integrare și coeziune comunitară.",
          metric: "7 ani"
        },
        {
          year: "Viitor",
          client: "Ecosistem info.belgia",
          outcome: "Integrarea direcției de parteneri (Basic/Premium/Partner) în proiecte media și comunitare, cu lansare etapizată și standarde clare.",
          metric: "Roadmap"
        }
      ],
      footnote: "Date detaliate și referințe suplimentare sunt disponibile la cerere, în format profesional."
    },
    stats: {
      sectionName: "Impact",
      items: [
        { num: "2011", suffix: "", label: "În Belgia din august" },
        { num: "7", suffix: "ani", label: "Președinte Roemenenuit Roeselare vzw" },
        { num: "1", suffix: "misiune", label: "Integrare mai ușoară pentru români" },
        { num: "West", suffix: "Flanders", label: "Bază comunitară principală" }
      ]
    },
    testimonials: {
      sectionName: "Voci",
      heading: "Încrederea se câștigă prin consecvență.",
      items: [
        {
          quote: "Florin este omul la care apelezi când ai nevoie de claritate și acțiune. Explică simplu, conectează rapid și rămâne implicat până la capăt.",
          name: "Membru comunitate româno-belgiană",
          role: "Familie stabilită în Roeselare",
          country: "Belgia"
        },
        {
          quote: "În proiectele locale, aduce aceeași disciplină: respect pentru instituții, respect pentru comunitate și rezultate concrete.",
          name: "Partener local",
          role: "Colaborare evenimente",
          country: "Flandra de Vest"
        },
        {
          quote: "Este una dintre cele mai puternice punți de colaborare din lumea românilor din West Flanders.",
          name: "Rețea diaspora",
          role: "Coordonare comunitară",
          country: "BE · RO"
        }
      ]
    },
    contact: {
      sectionName: "Contact",
      heading: "Prima conversație începe simplu, clar și confidențial.",
      form: {
        nameLabel: "Nume",
        namePlaceholder: "Nume complet",
        emailLabel: "Email",
        emailPlaceholder: "tu@exemplu.com",
        companyLabel: "Organizație / proiect",
        companyPlaceholder: "Opțional",
        messageLabel: "Context pe scurt",
        messagePlaceholder: "Spune-mi în 3-5 rânduri cu ce te pot ajuta.",
        secureNote: "Datele sunt protejate. Discuțiile rămân confidențiale.",
        submit: "Trimite mesaj"
      },
      cabinet: {
        label: "Bază",
        name: "Pop Media · Radio Belgia",
        address: "Roeselare\nFlandra de Vest, Belgia\nComunitate · media · evenimente"
      },
      direct: {
        label: "Direct",
        mail: "radiobelgia@gmail.com",
        phone: "+32 469 401 170",
        whatsapp: "WhatsApp · la cerere",
        facebook: "facebook.com/radiobelgia",
        linkedin: "linkedin.com/in/florin-pop"
      },
      serviceStandard: {
        label: "Standard colaborare",
        rows: [
          { key: "Răspuns inițial", value: "≤ 48h" },
          { key: "Limbi", value: "RO · FR · NL · EN" },
          { key: "Abordare", value: "Practică · realistă" }
        ],
        vcard: "vCard",
        calendar: "Calendar"
      }
    },
    finalCta: {
      sectionName: "Perspective",
      title1: "Comunitatea se construiește",
      title2: "împreună.",
      body: "De la radio la evenimente și parteneriate, obiectivul rămâne același: o integrare mai bună pentru români și o colaborare sănătoasă cu instituțiile din Belgia.",
      primary: "Programează o conversație",
      secondary: "Vezi direcția info.belgia",
      signatureLabel: "Florin Pop · Radio Belgia · Roeselare"
    },
    footer: {
      brand: "Pop Media · Radio Belgia · MMXI–MMXXVI",
      links: ["Confidențialitate", "Mențiuni legale", "Disclosure", "Contact media"]
    }
  },

  fr: {
    htmlTitle: "Florin Pop — Radio Belgia, Pop Media, Roulers",
    brand: {
      name: "Radio Belgia",
      subtitle: "Pop Media · Roulers"
    },
    common: {
      languageAria: "Langue",
      secureCall: "Appel sécurisé",
      secure: "Sécurisé",
      primaryNavAria: "Navigation principale",
      years: "ans",
      messageSent: "Message reçu — réponse sous 24-48h.",
      use: "Use"
    },
    nav: {
      about: "À propos",
      services: "Activités",
      projects: "Projets",
      testimonials: "Voix",
      contact: "Contact"
    },
    taskbar: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      radio: "Radio",
      contact: "Contact"
    },
    hero: {
      plateLeft: "Profil public",
      plateRight: "Roulers · MMXXVI",
      eyebrow: "Entrepreneur · Roulers · 2026",
      name: "Florin Pop",
      role: "Fondateur Radio Belgia · Pop Media",
      intro: "Je crée des liens entre la diaspora roumaine et les institutions belges. Je développe des projets médias, des événements communautaires et des partenariats locaux utiles à l'intégration en Flandre-Occidentale.",
      ctaPrimary: "Planifier une discussion",
      ctaSecondary: "Télécharger le profil (PDF)",
      location: "Roulers, Flandre-Occidentale",
      languages: "RO · FR · NL · EN",
      trust: "Dialogue institutionnel actif"
    },
    bio: {
      sectionName: "Profil",
      heading: "Depuis août 2011, un engagement constant pour la communauté roumaine en Belgique.",
      aside: [
        { label: "Installé", value: "Belgique, depuis août 2011" },
        { label: "Ville", value: "Roulers" },
        { label: "Rôle", value: "Entrepreneur · Organisateur" }
      ],
      paragraphs: [
        "Je suis Florin Pop, producteur à Radio Belgia et initiateur des projets Pop Media pour la communauté roumaine en Belgique. Pendant sept ans, j'ai présidé l'association Roemenenuit Roeselare vzw et coordonné des initiatives culturelles rapprochant les communautés roumaine et belge.",
        "À travers la radio, les podcasts et les événements, ma mission est d'apporter une information claire, de la confiance et un soutien pratique aux Roumains qui s'intègrent au système belge. Je collabore avec des administrations locales et nos projets évoluent en dialogue avec des institutions roumaines, y compris diplomatiques.",
        "Le dernier grand événement a eu lieu le 1er mai 2026 à Kerelsplein (Roulers). En juin, nous préparons Zile de Vară, prochaine rencontre majeure pour les familles, les entrepreneurs et les partenaires locaux."
      ],
      quote: "Nous ne construisons pas seulement une audience. Nous construisons des ponts réels entre personnes, institutions et opportunités.",
      quoteMeta: "— Florin Pop, Radio Belgia",
      credentialsTitle: "Repères",
      credentials: [
        "Radio Belgia — Producteur",
        "Pop Media — Fondateur",
        "Roemenenuit Roeselare vzw — 7 ans président",
        "1er mai 2026 — Kerelsplein, Roulers",
        "Juin 2026 — Zile de Vară (en préparation)",
        "Médiation communautaire — intégration en Belgique",
        "Partenariats locaux — Flandre-Occidentale",
        "Langues — RO · FR · NL · EN"
      ]
    },
    services: {
      sectionName: "Activités",
      heading: "Trois axes clairs, avec impact direct.",
      sideNote: "médias · événements · intégration",
      cards: [
        {
          n: "01",
          icon: "handshake",
          title: "Médiation pour la diaspora roumaine",
          body: "Accompagnement dans les relations avec les communes, institutions locales et services administratifs belges."
        },
        {
          n: "02",
          icon: "compass",
          title: "Production média: Radio Belgia & podcast",
          body: "Contenu radio et digital orienté sur la vie réelle en Belgique: information utile et dialogue communautaire."
        },
        {
          n: "03",
          icon: "shield",
          title: "Événements communautaires & partenariats",
          body: "Organisation d'événements qui rapprochent la communauté, les entreprises et les autorités locales."
        }
      ]
    },
    portfolio: {
      sectionName: "Initiatives",
      heading: "Des projets visibles, construits dans la durée.",
      columns: {
        year: "Année",
        engagement: "Initiative",
        outcome: "Résultat",
        scale: "Statut"
      },
      rows: [
        {
          year: "2026",
          client: "1 Mai Muncitoresc · Roulers",
          outcome: "Événement communautaire à Kerelsplein, avec diaspora, partenaires locaux et collaborateurs institutionnels.",
          metric: "Finalisé"
        },
        {
          year: "2026",
          client: "Zile de Vară",
          outcome: "Préparation de l'édition de juin: musique, rencontres et activations pour familles et entrepreneurs roumains.",
          metric: "En préparation"
        },
        {
          year: "2025",
          client: "Radio Belgia · Pop Media",
          outcome: "Consolidation des formats radio/podcast et collaborations commerciales utiles à la communauté.",
          metric: "Actif"
        },
        {
          year: "2018–2025",
          client: "Roemenenuit Roeselare vzw",
          outcome: "Coordination stratégique et initiatives culturelles pendant 7 ans de présidence.",
          metric: "7 ans"
        },
        {
          year: "Futur",
          client: "Écosystème info.belgia",
          outcome: "Intégration de la direction partenaires (Basic/Premium/Partner) dans des projets média et communautaires.",
          metric: "Roadmap"
        }
      ],
      footnote: "Des références détaillées sont disponibles sur demande, en format professionnel."
    },
    stats: {
      sectionName: "Impact",
      items: [
        { num: "2011", suffix: "", label: "En Belgique depuis août" },
        { num: "7", suffix: "ans", label: "Président Roemenenuit Roeselare vzw" },
        { num: "1", suffix: "mission", label: "Intégration facilitée pour les Roumains" },
        { num: "West", suffix: "Flanders", label: "Base communautaire principale" }
      ]
    },
    testimonials: {
      sectionName: "Voix",
      heading: "La confiance se gagne par la constance.",
      items: [
        {
          quote: "Florin est la personne à appeler quand il faut de la clarté et de l'action.",
          name: "Membre de la communauté roumano-belge",
          role: "Famille installée à Roulers",
          country: "Belgique"
        },
        {
          quote: "Dans les projets locaux, il apporte discipline, respect des institutions et résultats concrets.",
          name: "Partenaire local",
          role: "Collaboration événements",
          country: "Flandre-Occidentale"
        },
        {
          quote: "Une des plus fortes passerelles de collaboration parmi les Roumains de West Flanders.",
          name: "Réseau diaspora",
          role: "Coordination communautaire",
          country: "BE · RO"
        }
      ]
    },
    contact: {
      sectionName: "Contact",
      heading: "La première conversation commence simplement.",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Nom complet",
        emailLabel: "Email",
        emailPlaceholder: "vous@exemple.com",
        companyLabel: "Organisation / projet",
        companyPlaceholder: "Optionnel",
        messageLabel: "Contexte bref",
        messagePlaceholder: "Expliquez en 3-5 lignes comment je peux aider.",
        secureNote: "Les données sont protégées. Les échanges restent confidentiels.",
        submit: "Envoyer le message"
      },
      cabinet: {
        label: "Base",
        name: "Pop Media · Radio Belgia",
        address: "Roulers\nFlandre-Occidentale, Belgique\ncommunauté · médias · événements"
      },
      direct: {
        label: "Direct",
        mail: "radiobelgia@gmail.com",
        phone: "+32 469 401 170",
        whatsapp: "WhatsApp · sur demande",
        facebook: "facebook.com/radiobelgia",
        linkedin: "linkedin.com/in/florin-pop"
      },
      serviceStandard: {
        label: "Standard de collaboration",
        rows: [
          { key: "Réponse initiale", value: "≤ 48h" },
          { key: "Langues", value: "RO · FR · NL · EN" },
          { key: "Approche", value: "Pragmatique" }
        ],
        vcard: "vCard",
        calendar: "Calendrier"
      }
    },
    finalCta: {
      sectionName: "Perspectives",
      title1: "La communauté se construit",
      title2: "ensemble.",
      body: "De la radio aux événements et partenariats, l'objectif reste le même: une meilleure intégration et une coopération saine avec les institutions belges.",
      primary: "Planifier une discussion",
      secondary: "Voir la direction info.belgia",
      signatureLabel: "Florin Pop · Radio Belgia · Roulers"
    },
    footer: {
      brand: "Pop Media · Radio Belgia · MMXI–MMXXVI",
      links: ["Confidentialité", "Mentions légales", "Disclosure", "Contact média"]
    }
  },

  nl: {
    htmlTitle: "Florin Pop — Radio Belgia, Pop Media, Roeselare",
    brand: {
      name: "Radio Belgia",
      subtitle: "Pop Media · Roeselare"
    },
    common: {
      languageAria: "Taal",
      secureCall: "Veilige call",
      secure: "Veilig",
      primaryNavAria: "Primaire navigatie",
      years: "jaar",
      messageSent: "Bericht ontvangen — antwoord binnen 24-48u.",
      use: "Use"
    },
    nav: {
      about: "Over",
      services: "Activiteit",
      projects: "Projecten",
      testimonials: "Stemmen",
      contact: "Contact"
    },
    taskbar: {
      home: "Home",
      about: "Over",
      projects: "Projecten",
      radio: "Radio",
      contact: "Contact"
    },
    hero: {
      plateLeft: "Publiek profiel",
      plateRight: "Roeselare · MMXXVI",
      eyebrow: "Ondernemer · Roeselare · 2026",
      name: "Florin Pop",
      role: "Oprichter Radio Belgia · Pop Media",
      intro: "Ik bouw bruggen tussen de Roemeense diaspora en Belgische instellingen. Via media, events en lokale samenwerkingen help ik Roemenen in West-Vlaanderen gemakkelijker integreren.",
      ctaPrimary: "Plan een gesprek",
      ctaSecondary: "Download profiel (PDF)",
      location: "Roeselare, West-Vlaanderen",
      languages: "RO · FR · NL · EN",
      trust: "Actieve institutionele dialoog"
    },
    bio: {
      sectionName: "Profiel",
      heading: "Sinds augustus 2011 een constante inzet voor de Roemeense gemeenschap in België.",
      aside: [
        { label: "Gevestigd", value: "België, sinds augustus 2011" },
        { label: "Stad", value: "Roeselare" },
        { label: "Rol", value: "Ondernemer · Organisator" }
      ],
      paragraphs: [
        "Ik ben Florin Pop, producer bij Radio Belgia en initiatiefnemer van Pop Media-projecten voor de Roemeense gemeenschap in België. Zeven jaar was ik voorzitter van vzw Roemenenuit Roeselare en coördineerde ik culturele initiatieven die Roemeense en Belgische gemeenschappen dichter bij elkaar brengen.",
        "Via radio, podcasts en evenementen wil ik heldere informatie, vertrouwen en praktische ondersteuning bieden aan Roemenen die zich in het Belgische systeem integreren. Ik werk samen met lokale besturen en onderhoud een open dialoog met Roemeense instellingen, inclusief de diplomatieke sfeer.",
        "Het laatste grote evenement was op 1 mei 2026 in Kerelsplein, Roeselare. In juni bereiden we Zile de Vară voor: een volgende ontmoetingsplek voor gezinnen, ondernemers en lokale partners."
      ],
      quote: "We bouwen niet alleen een publiek. We bouwen echte bruggen tussen mensen, instellingen en kansen.",
      quoteMeta: "— Florin Pop, Radio Belgia",
      credentialsTitle: "Kernpunten",
      credentials: [
        "Radio Belgia — Producer",
        "Pop Media — Oprichter",
        "Roemenenuit Roeselare vzw — 7 jaar voorzitter",
        "1 mei 2026 — Kerelsplein, Roeselare",
        "Juni 2026 — Zile de Vară (in voorbereiding)",
        "Gemeenschapsbemiddeling — integratie in België",
        "Lokale partnerschappen — West-Vlaanderen",
        "Talen — RO · FR · NL · EN"
      ]
    },
    services: {
      sectionName: "Activiteit",
      heading: "Drie duidelijke richtingen, met directe impact.",
      sideNote: "media · events · integratie",
      cards: [
        {
          n: "01",
          icon: "handshake",
          title: "Bemiddeling voor de diaspora",
          body: "Ondersteuning in contact met gemeenten, lokale instellingen en administratieve diensten in België."
        },
        {
          n: "02",
          icon: "compass",
          title: "Mediaproductie: Radio Belgia & podcast",
          body: "Radio- en digitale content rond het echte leven in België: bruikbare informatie en gemeenschapsdialoog."
        },
        {
          n: "03",
          icon: "shield",
          title: "Community-events & partnerships",
          body: "Organisatie van evenementen die gemeenschap, ondernemers en lokale overheden samenbrengen."
        }
      ]
    },
    portfolio: {
      sectionName: "Initiatieven",
      heading: "Zichtbare projecten, opgebouwd in de tijd.",
      columns: {
        year: "Jaar",
        engagement: "Initiatief",
        outcome: "Resultaat",
        scale: "Status"
      },
      rows: [
        {
          year: "2026",
          client: "1 Mei Muncitoresc · Roeselare",
          outcome: "Community-event op Kerelsplein met diaspora, lokale partners en institutionele samenwerking.",
          metric: "Afgerond"
        },
        {
          year: "2026",
          client: "Zile de Vară",
          outcome: "Voorbereiding voor juni-editie: muziek, netwerking en activaties voor gezinnen en ondernemers.",
          metric: "In voorbereiding"
        },
        {
          year: "2025",
          client: "Radio Belgia · Pop Media",
          outcome: "Versterking van radio- en podcastformats en commerciële samenwerkingen met relevante zichtbaarheid.",
          metric: "Actief"
        },
        {
          year: "2018–2025",
          client: "Roemenenuit Roeselare vzw",
          outcome: "Strategische coördinatie en culturele initiatieven tijdens 7 jaar voorzitterschap.",
          metric: "7 jaar"
        },
        {
          year: "Toekomst",
          client: "info.belgia ecosysteem",
          outcome: "Integratie van partner-richting (Basic/Premium/Partner) in media- en communityprojecten.",
          metric: "Roadmap"
        }
      ],
      footnote: "Extra referenties en details zijn op aanvraag beschikbaar in professioneel formaat."
    },
    stats: {
      sectionName: "Impact",
      items: [
        { num: "2011", suffix: "", label: "Sinds augustus in België" },
        { num: "7", suffix: "jaar", label: "Voorzitter Roemenenuit Roeselare vzw" },
        { num: "1", suffix: "missie", label: "Makkelijkere integratie voor Roemenen" },
        { num: "West", suffix: "Flanders", label: "Belangrijkste communitybasis" }
      ]
    },
    testimonials: {
      sectionName: "Stemmen",
      heading: "Vertrouwen groeit door consistentie.",
      items: [
        {
          quote: "Florin is de persoon die je belt als je helderheid en actie nodig hebt.",
          name: "Lid Roemeens-Belgische gemeenschap",
          role: "Gezin in Roeselare",
          country: "België"
        },
        {
          quote: "In lokale projecten brengt hij discipline, respect voor instellingen en concrete resultaten.",
          name: "Lokale partner",
          role: "Event samenwerking",
          country: "West-Vlaanderen"
        },
        {
          quote: "Een van de sterkste samenwerkingsbruggen in de Roemeense wereld van West Flanders.",
          name: "Diaspora netwerk",
          role: "Community coördinatie",
          country: "BE · RO"
        }
      ]
    },
    contact: {
      sectionName: "Contact",
      heading: "Een eerste gesprek begint eenvoudig en vertrouwelijk.",
      form: {
        nameLabel: "Naam",
        namePlaceholder: "Volledige naam",
        emailLabel: "E-mail",
        emailPlaceholder: "jij@voorbeeld.com",
        companyLabel: "Organisatie / project",
        companyPlaceholder: "Optioneel",
        messageLabel: "Korte context",
        messagePlaceholder: "Vertel in 3-5 zinnen waarmee ik kan helpen.",
        secureNote: "Gegevens zijn beschermd. Gesprekken blijven vertrouwelijk.",
        submit: "Verstuur bericht"
      },
      cabinet: {
        label: "Basis",
        name: "Pop Media · Radio Belgia",
        address: "Roeselare\nWest-Vlaanderen, België\ncommunity · media · events"
      },
      direct: {
        label: "Direct",
        mail: "radiobelgia@gmail.com",
        phone: "+32 469 401 170",
        whatsapp: "WhatsApp · op aanvraag",
        facebook: "facebook.com/radiobelgia",
        linkedin: "linkedin.com/in/florin-pop"
      },
      serviceStandard: {
        label: "Samenwerkingsstandaard",
        rows: [
          { key: "Eerste antwoord", value: "≤ 48u" },
          { key: "Talen", value: "RO · FR · NL · EN" },
          { key: "Aanpak", value: "Praktisch · realistisch" }
        ],
        vcard: "vCard",
        calendar: "Kalender"
      }
    },
    finalCta: {
      sectionName: "Toekomst",
      title1: "Een gemeenschap bouw je",
      title2: "samen.",
      body: "Van radio tot events en partnerschappen: dezelfde missie blijft centraal staan — betere integratie en gezonde samenwerking met Belgische instellingen.",
      primary: "Plan een gesprek",
      secondary: "Bekijk de richting van info.belgia",
      signatureLabel: "Florin Pop · Radio Belgia · Roeselare"
    },
    footer: {
      brand: "Pop Media · Radio Belgia · MMXI–MMXXVI",
      links: ["Privacy", "Juridische info", "Disclosure", "Media contact"]
    }
  },

  en: {
    htmlTitle: "Florin Pop — Radio Belgia, Pop Media, Roeselare",
    brand: {
      name: "Radio Belgia",
      subtitle: "Pop Media · Roeselare"
    },
    common: {
      languageAria: "Language",
      secureCall: "Secure call",
      secure: "Secure",
      primaryNavAria: "Primary navigation",
      years: "years",
      messageSent: "Message received — reply within 24-48h.",
      use: "Use"
    },
    nav: {
      about: "About",
      services: "Work",
      projects: "Projects",
      testimonials: "Voices",
      contact: "Contact"
    },
    taskbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      radio: "Radio",
      contact: "Contact"
    },
    hero: {
      plateLeft: "Public profile",
      plateRight: "Roeselare · MMXXVI",
      eyebrow: "Entrepreneur · Roeselare · 2026",
      name: "Florin Pop",
      role: "Founder of Radio Belgia · Pop Media",
      intro: "I connect the Romanian diaspora with Belgian institutions. Through media, community events and local partnerships, I help Romanians integrate more easily in West Flanders.",
      ctaPrimary: "Schedule a conversation",
      ctaSecondary: "Download profile (PDF)",
      location: "Roeselare, West Flanders",
      languages: "RO · FR · NL · EN",
      trust: "Active institutional dialogue"
    },
    bio: {
      sectionName: "Profile",
      heading: "Since August 2011, consistent work for the Romanian community in Belgium.",
      aside: [
        { label: "Based", value: "Belgium, since August 2011" },
        { label: "City", value: "Roeselare" },
        { label: "Role", value: "Entrepreneur · Organizer" }
      ],
      paragraphs: [
        "I am Florin Pop, producer at Radio Belgia and initiator of Pop Media projects for the Romanian community in Belgium. For seven years, I served as president of Roemenenuit Roeselare vzw, coordinating cultural initiatives that brought Romanian and Belgian communities closer.",
        "Through radio, podcasts and events, my mission is to provide clear information, practical support and trust for Romanians navigating life in Belgium. I collaborate with local municipalities, and our projects move forward in dialogue with Romanian institutions, including diplomatic channels.",
        "Our latest major event was 1 May 2026 at Kerelsplein in Roeselare. In June, we are preparing Zile de Vară as the next major gathering for families, entrepreneurs and local partners."
      ],
      quote: "We are not only building an audience. We are building real bridges between people, institutions and opportunities.",
      quoteMeta: "— Florin Pop, Radio Belgia",
      credentialsTitle: "Highlights",
      credentials: [
        "Radio Belgia — Producer",
        "Pop Media — Founder",
        "Roemenenuit Roeselare vzw — 7 years president",
        "1 May 2026 — Kerelsplein, Roeselare",
        "June 2026 — Zile de Vară (in progress)",
        "Community mediation — integration in Belgium",
        "Local partnerships — West Flanders",
        "Languages — RO · FR · NL · EN"
      ]
    },
    services: {
      sectionName: "Work",
      heading: "Three clear directions with direct community impact.",
      sideNote: "media · events · integration",
      cards: [
        {
          n: "01",
          icon: "handshake",
          title: "Mediation for the diaspora",
          body: "Support in relations with municipalities, local institutions and Belgian administrative services."
        },
        {
          n: "02",
          icon: "compass",
          title: "Media production: Radio Belgia & podcast",
          body: "Radio and digital content focused on real life in Belgium: useful information, community dialogue and visibility."
        },
        {
          n: "03",
          icon: "shield",
          title: "Community events & partnerships",
          body: "Events that connect communities, local authorities and businesses in a practical, respectful framework."
        }
      ]
    },
    portfolio: {
      sectionName: "Initiatives",
      heading: "Visible projects, built over time.",
      columns: {
        year: "Year",
        engagement: "Initiative",
        outcome: "Outcome",
        scale: "Status"
      },
      rows: [
        {
          year: "2026",
          client: "1 Mai Muncitoresc · Roeselare",
          outcome: "Community event at Kerelsplein with diaspora participation, local partners and institutional collaboration.",
          metric: "Completed"
        },
        {
          year: "2026",
          client: "Zile de Vară",
          outcome: "June edition in preparation: music, networking and community activities for families and entrepreneurs.",
          metric: "In progress"
        },
        {
          year: "2025",
          client: "Radio Belgia · Pop Media",
          outcome: "Consolidation of radio and podcast formats plus commercial collaborations with relevant community value.",
          metric: "Active"
        },
        {
          year: "2018–2025",
          client: "Roemenenuit Roeselare vzw",
          outcome: "Strategic coordination and cultural initiatives during seven years of presidency.",
          metric: "7 years"
        },
        {
          year: "Future",
          client: "info.belgia ecosystem",
          outcome: "Integration of the partner direction (Basic/Premium/Partner) into media and community projects.",
          metric: "Roadmap"
        }
      ],
      footnote: "Detailed references are available on request in a professional format."
    },
    stats: {
      sectionName: "Impact",
      items: [
        { num: "2011", suffix: "", label: "In Belgium since August" },
        { num: "7", suffix: "years", label: "President of Roemenenuit Roeselare vzw" },
        { num: "1", suffix: "mission", label: "Smoother integration for Romanians" },
        { num: "West", suffix: "Flanders", label: "Primary community base" }
      ]
    },
    testimonials: {
      sectionName: "Voices",
      heading: "Trust is built through consistency.",
      items: [
        {
          quote: "Florin is the person you call when you need clarity and action.",
          name: "Romanian-Belgian community member",
          role: "Family based in Roeselare",
          country: "Belgium"
        },
        {
          quote: "In local projects, he brings discipline, institutional respect and concrete outcomes.",
          name: "Local partner",
          role: "Event collaboration",
          country: "West Flanders"
        },
        {
          quote: "One of the strongest collaboration bridges in the Romanian world of West Flanders.",
          name: "Diaspora network",
          role: "Community coordination",
          country: "BE · RO"
        }
      ]
    },
    contact: {
      sectionName: "Contact",
      heading: "A first conversation starts simply, clearly and confidentially.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Full name",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        companyLabel: "Organization / project",
        companyPlaceholder: "Optional",
        messageLabel: "Brief context",
        messagePlaceholder: "Tell me in 3-5 lines how I can help.",
        secureNote: "Data is protected. Conversations remain confidential.",
        submit: "Send message"
      },
      cabinet: {
        label: "Base",
        name: "Pop Media · Radio Belgia",
        address: "Roeselare\nWest Flanders, Belgium\ncommunity · media · events"
      },
      direct: {
        label: "Direct",
        mail: "radiobelgia@gmail.com",
        phone: "+32 469 401 170",
        whatsapp: "WhatsApp · on request",
        facebook: "facebook.com/radiobelgia",
        linkedin: "linkedin.com/in/florin-pop"
      },
      serviceStandard: {
        label: "Collaboration standard",
        rows: [
          { key: "Initial reply", value: "≤ 48h" },
          { key: "Languages", value: "RO · FR · NL · EN" },
          { key: "Approach", value: "Practical · realistic" }
        ],
        vcard: "vCard",
        calendar: "Calendar"
      }
    },
    finalCta: {
      sectionName: "Outlook",
      title1: "Community is built",
      title2: "together.",
      body: "From radio to events and partnerships, the objective stays the same: better integration for Romanians and healthy cooperation with Belgian institutions.",
      primary: "Schedule a conversation",
      secondary: "See info.belgia direction",
      signatureLabel: "Florin Pop · Radio Belgia · Roeselare"
    },
    footer: {
      brand: "Pop Media · Radio Belgia · MMXI–MMXXVI",
      links: ["Privacy", "Legal mentions", "Disclosure", "Media contact"]
    }
  }
};

const getCopy = (lang) => SITE_COPY[lang] || SITE_COPY[DEFAULT_LANG];

const Eyebrow = ({ children, className = "" }) =>
  <div className={"label-mono text-[color:var(--accent-primary)] " + className}>{children}</div>;

const LanguageSwitcher = ({ value, onChange, variant = "inline", dropDirection = "down", ariaLabel = "Language" }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === value) || LANGUAGES[0];

  if (variant === "inline") {
    return (
      <div className="hidden md:flex items-center gap-2 label-mono" role="group" aria-label={ariaLabel}>
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

  return (
    <div ref={ref} className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={
          "flex items-center gap-1.5 label-mono px-2.5 py-1.5 rounded-[4px] border text-[color:var(--text-primary)] transition-colors " +
          (open
            ? "border-[color:var(--accent-primary)] bg-[rgba(10,22,40,0.92)]"
            : "border-[color:var(--glass-border)] bg-[rgba(10,22,40,0.74)] hover:border-[color:var(--accent-primary)]")
        }
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
          className={"absolute right-0 z-[80] min-w-[188px] rounded-[6px] py-1.5 border " + (dropDirection === "up" ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]")}
          style={{
            background: "rgba(8,18,34,0.96)",
            borderColor: "rgba(232,199,122,0.34)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.48), 0 0 0 1px rgba(255,255,255,0.04) inset",
            backdropFilter: "blur(20px) saturate(140%)",
            WebkitBackdropFilter: "blur(20px) saturate(140%)"
          }}
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === value}
                onClick={() => { onChange(l.code); setOpen(false); }}
                className={
                  "w-full text-left px-3 py-2.5 flex items-center justify-between gap-4 label-mono transition-colors " +
                  (l.code === value
                    ? "text-[color:var(--accent-primary)] bg-[rgba(232,199,122,0.14)]"
                    : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[rgba(255,255,255,0.06)]")
                }
              >
                <span>{l.label}</span>
                <span
                  className="normal-case tracking-normal"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    textTransform: "none",
                    letterSpacing: 0,
                    opacity: l.code === value ? 0.95 : 0.82,
                    color: l.code === value ? "var(--text-primary)" : "var(--text-secondary)"
                  }}
                >
                  {l.full}
                </span>
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

const Hero = ({ portraitUrl, portraitTone, copy }) =>
  <section id="home" className="relative overflow-hidden scroll-mt-[78px] md:scroll-mt-[92px] scroll-mb-[96px]">
    <div className="aurora drift-a" style={{ width: 520, height: 520, right: -120, top: -80, background: "var(--aurora-1)" }} />
    <div className="aurora drift-b" style={{ width: 460, height: 460, right: 120, top: 220, background: "var(--aurora-2)" }} />

    <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 pt-12 lg:pt-20 pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
      <div className="lg:col-span-5 rise rise-0">
        <div className="relative">
          <div className="portrait-frame max-w-[280px] sm:max-w-[360px] lg:max-w-[480px]">
            <img
              key={portraitUrl}
              src={portraitUrl}
              alt={copy.hero.name + ", " + copy.hero.role}
              className="w-full h-full object-cover"
              style={{ filter: PORTRAIT_TONES[portraitTone] || PORTRAIT_TONES.cool, transition: "filter 400ms ease" }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
          <div className="mt-4 flex items-center gap-3 max-w-[480px]">
            <div className="meta-mono text-[color:var(--text-muted)]">{copy.hero.plateLeft}</div>
            <div className="h-px flex-1 bg-[color:var(--divider)]"></div>
            <div className="meta-mono text-[color:var(--text-muted)]">{copy.hero.plateRight}</div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col justify-center">
        <div className="rise rise-1">
          <Eyebrow>{copy.hero.eyebrow}</Eyebrow>
        </div>

        <h1 className="rise rise-2 font-display h-display mt-5 text-[44px] sm:text-[60px] lg:text-[80px]">
          {copy.hero.name}
        </h1>

        <div className="rise rise-3 mt-5 font-display text-[22px] sm:text-[26px] lg:text-[28px] leading-snug text-[color:var(--text-secondary)]">
          {copy.hero.role}
        </div>

        <p className="rise rise-4 mt-6 max-w-[560px] text-[18px] lg:text-[19px] leading-[1.55] text-[color:var(--text-secondary)]">
          {copy.hero.intro}
        </p>

        <div className="rise rise-5 mt-9 flex flex-wrap items-center gap-4">
          <button className="btn-gold">
            <IconCalendar size={16} stroke={1.6} />
            {copy.hero.ctaPrimary}
          </button>
          <button className="btn-ghost">
            <IconDownload size={16} stroke={1.6} />
            {copy.hero.ctaSecondary}
          </button>
        </div>

        <div className="rise rise-5 mt-10 flex flex-wrap gap-x-8 gap-y-3 meta-mono text-[color:var(--text-muted)]">
          <div className="flex items-center gap-2"><IconMapPin size={14} stroke={1.6} /> {copy.hero.location}</div>
          <div className="flex items-center gap-2"><IconGlobe size={14} stroke={1.6} /> {copy.hero.languages}</div>
          <div className="flex items-center gap-2"><IconShieldCheck size={14} stroke={1.6} /> {copy.hero.trust}</div>
        </div>
      </div>
    </div>
  </section>;

const Bio = ({ copy }) =>
  <section id="bio" className="relative scroll-mt-[78px] md:scroll-mt-[92px] scroll-mb-[96px]">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-12 gap-8">
      <aside className="hidden lg:block col-span-3 reveal">
        <SectionLabel index="01" name={copy.bio.sectionName} />
        <div className="mt-8 space-y-6">
          {copy.bio.aside.map((item) => (
            <div key={item.label}>
              <div className="meta-mono text-[color:var(--text-muted)]">{item.label}</div>
              <div className="mt-1 text-[color:var(--text-secondary)] text-[15px]">{item.value}</div>
            </div>
          ))}
        </div>
      </aside>

      <div className="col-span-12 lg:col-span-7 lg:col-start-5 bio-rule pl-0 lg:pl-8">
        <div className="lg:hidden mb-8">
          <SectionLabel index="01" name={copy.bio.sectionName} />
        </div>
        <h2 className="reveal font-display h-section text-[36px] lg:text-[56px] max-w-[640px]">
          {copy.bio.heading}
        </h2>

        <div className="reveal delay-1 mt-12 max-w-[640px] text-[17px] leading-[1.7] text-[color:var(--text-secondary)] space-y-6">
          <p className="dropcap">{copy.bio.paragraphs[0]}</p>
          <p>{copy.bio.paragraphs[1]}</p>
          <p>{copy.bio.paragraphs[2]}</p>
        </div>

        <blockquote className="reveal delay-2 mt-14 quote-rule max-w-[600px]">
          <p className="font-display italic text-[28px] lg:text-[32px] leading-[1.25] text-[color:var(--text-primary)]">
            "{copy.bio.quote}"
          </p>
          <div className="mt-4 meta-mono text-[color:var(--text-muted)]">{copy.bio.quoteMeta}</div>
        </blockquote>

        <div className="reveal delay-3 mt-16">
          <div className="meta-mono text-[color:var(--accent-primary)]">{copy.bio.credentialsTitle}</div>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 meta-mono text-[color:var(--text-secondary)]">
            {copy.bio.credentials.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>;

const Services = ({ copy }) => {
  const iconMap = {
    handshake: IconHandshake,
    compass: IconCompass,
    shield: IconShieldCheck
  };

  return (
    <section id="services" className="relative scroll-mt-[78px] md:scroll-mt-[92px] scroll-mb-[96px]">
      <div className="hairline max-w-[1200px] mx-auto"></div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="02" name={copy.services.sectionName} />
            <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
              {copy.services.heading}
            </h2>
          </div>
          <div className="meta-mono text-[color:var(--text-muted)] max-w-xs">
            {copy.services.sideNote}
          </div>
        </div>

        <div className="space-y-6">
          {copy.services.cards.map((s, i) => {
            const IconComp = iconMap[s.icon] || IconCompass;
            return (
              <div
                key={s.n + s.title}
                className={"reveal delay-" + Math.min(i + 1, 5) + " glass svc rounded-[8px] p-6 lg:p-10 grid grid-cols-12 gap-6 items-start relative"}
              >
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
                    <IconComp size={28} stroke={1.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ copy }) =>
  <section id="portfolio" className="relative scroll-mt-[78px] md:scroll-mt-[92px] scroll-mb-[96px]">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="reveal mb-14">
        <SectionLabel index="03" name={copy.portfolio.sectionName} />
        <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
          {copy.portfolio.heading}
        </h2>
      </div>

      <div className="reveal delay-1">
        <div className="hidden lg:grid grid-cols-12 gap-6 meta-mono text-[color:var(--text-muted)] pb-4 border-b border-[color:var(--divider)]">
          <div className="col-span-1">{copy.portfolio.columns.year}</div>
          <div className="col-span-4">{copy.portfolio.columns.engagement}</div>
          <div className="col-span-5">{copy.portfolio.columns.outcome}</div>
          <div className="col-span-2 text-right">{copy.portfolio.columns.scale}</div>
        </div>

        {copy.portfolio.rows.map((p, i) =>
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
        {copy.portfolio.footnote}
      </div>
    </div>
  </section>;

const Stats = ({ copy }) =>
  <section className="relative">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="reveal mb-12">
        <SectionLabel index="04" name={copy.stats.sectionName} />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--divider)] rounded-[8px] overflow-hidden border border-[color:var(--divider)]">
        {copy.stats.items.map((s, i) =>
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

const Testimonials = ({ copy }) =>
  <section id="testimonials" className="relative scroll-mt-[78px] md:scroll-mt-[92px] scroll-mb-[96px]">
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
      <div className="reveal mb-14">
        <SectionLabel index="05" name={copy.testimonials.sectionName} />
        <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
          {copy.testimonials.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {copy.testimonials.items.map((t, i) =>
          <figure key={i} className={"reveal delay-" + Math.min(i + 1, 5) + " glass svc relative rounded-[8px] p-8 lg:p-10 overflow-hidden"}>
            <div className="absolute top-4 right-4 text-[color:var(--accent-primary)] opacity-[0.08]">
              <IconQuote size={80} stroke={1.2} />
            </div>
            <blockquote className="relative font-display italic text-[19px] lg:text-[20px] leading-[1.5] text-[color:var(--text-primary)]">
              "{t.quote}"
            </blockquote>
            <figcaption className="relative mt-8 pt-6 border-t border-[color:var(--divider)] meta-mono text-[color:var(--text-muted)]">
              <div className="text-[color:var(--text-primary)]">{t.name}</div>
              <div className="mt-1">{t.role}</div>
              <div className="mt-1 text-[color:var(--accent-primary)]">{t.country}</div>
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  </section>;

const Contact = ({ copy }) => {
  const [form, setForm] = React.useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-[78px] md:scroll-mt-[92px] scroll-mb-[96px]">
      <div className="hairline max-w-[1200px] mx-auto"></div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="reveal mb-14">
          <SectionLabel index="06" name={copy.contact.sectionName} />
          <h2 className="font-display h-section mt-5 text-[36px] lg:text-[56px] max-w-[760px]">
            {copy.contact.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <form onSubmit={submit} className="reveal delay-1 lg:col-span-7 glass rounded-[8px] p-8 lg:p-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="block">
                <div className="meta-mono text-[color:var(--text-muted)] mb-2">{copy.contact.form.nameLabel}</div>
                <input className="field" placeholder={copy.contact.form.namePlaceholder} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>
              <label className="block">
                <div className="meta-mono text-[color:var(--text-muted)] mb-2">{copy.contact.form.emailLabel}</div>
                <input className="field" type="email" placeholder={copy.contact.form.emailPlaceholder} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </label>
            </div>
            <label className="block">
              <div className="meta-mono text-[color:var(--text-muted)] mb-2">{copy.contact.form.companyLabel}</div>
              <input className="field" placeholder={copy.contact.form.companyPlaceholder} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            </label>
            <label className="block">
              <div className="meta-mono text-[color:var(--text-muted)] mb-2">{copy.contact.form.messageLabel}</div>
              <textarea className="field" rows="5" placeholder={copy.contact.form.messagePlaceholder} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 meta-mono text-[color:var(--text-muted)]">
                <IconLock size={14} stroke={1.6} /> {copy.contact.form.secureNote}
              </div>
              {sent ?
                <div className="meta-mono text-[color:var(--accent-primary)]">{copy.common.messageSent}</div> :
                <button type="submit" className="btn-gold">{copy.contact.form.submit} <IconArrowRight size={16} stroke={1.6} /></button>
              }
            </div>
          </form>

          <aside className="reveal delay-2 lg:col-span-5 space-y-8">
            <div className="glass rounded-[8px] p-8">
              <div className="meta-mono text-[color:var(--accent-primary)] mb-4">{copy.contact.cabinet.label}</div>
              <div className="font-display text-[22px] leading-snug">{copy.contact.cabinet.name}</div>
              <div className="mt-2 font-mono text-[13px] leading-[1.7] text-[color:var(--text-secondary)]" style={{ whiteSpace: "pre-line" }}>
                {copy.contact.cabinet.address}
              </div>
            </div>

            <div className="glass rounded-[8px] p-8 space-y-4">
              <div className="meta-mono text-[color:var(--accent-primary)] mb-2">{copy.contact.direct.label}</div>
              <a href={"mailto:" + copy.contact.direct.mail} className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconMail size={16} stroke={1.6} /> {copy.contact.direct.mail}
              </a>
              <a href={"tel:" + copy.contact.direct.phone.replace(/\s+/g, "")} className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconPhone size={16} stroke={1.6} /> {copy.contact.direct.phone}
              </a>
              <a href="#" className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconWhatsapp size={16} stroke={1.6} /> {copy.contact.direct.whatsapp}
              </a>
              <a href={"https://" + copy.contact.direct.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconFacebook size={16} stroke={1.6} /> {copy.contact.direct.facebook}
              </a>
              <a href={"https://" + copy.contact.direct.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-mono text-[14px] hover:text-[color:var(--accent-primary)] transition-colors">
                <IconLinkedin size={16} stroke={1.6} /> {copy.contact.direct.linkedin}
              </a>
            </div>

            <div className="glass rounded-[8px] p-8">
              <div className="meta-mono text-[color:var(--accent-primary)] mb-3">{copy.contact.serviceStandard.label}</div>
              <ul className="space-y-2 meta-mono text-[color:var(--text-secondary)]">
                {copy.contact.serviceStandard.rows.map((r) => (
                  <li key={r.key} className="flex justify-between gap-4"><span>{r.key}</span><span className="text-[color:var(--text-muted)]">{r.value}</span></li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn-ghost !py-2.5 !px-4 text-[13px]"><IconFileText size={14} stroke={1.6} /> {copy.contact.serviceStandard.vcard}</button>
                <button className="btn-ghost !py-2.5 !px-4 text-[13px]"><IconCalendar size={14} stroke={1.6} /> {copy.contact.serviceStandard.calendar}</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ copy }) =>
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, var(--bg-primary) 0%, #07101F 100%)" }} />
    <div className="aurora drift-a" style={{ width: 520, height: 520, left: -80, bottom: -180, background: "var(--aurora-2)" }} />
    <div className="hairline max-w-[1200px] mx-auto"></div>
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28 lg:py-40 grid grid-cols-12 gap-10 items-end">
      <div className="col-span-12 lg:col-span-8 reveal">
        <SectionLabel index="07" name={copy.finalCta.sectionName} />
        <h2 className="font-display h-display mt-6 text-[44px] sm:text-[60px] lg:text-[80px] max-w-[860px]">
          {copy.finalCta.title1}<br />
          <span className="text-[color:var(--accent-primary)]">{copy.finalCta.title2}</span>
        </h2>
        <p className="mt-8 max-w-[560px] text-[17px] leading-[1.65] text-[color:var(--text-secondary)]">
          {copy.finalCta.body}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="btn-gold"><IconCalendar size={16} stroke={1.6} /> {copy.finalCta.primary}</button>
          <button className="btn-ghost"><IconArrowUpRight size={16} stroke={1.6} /> {copy.finalCta.secondary}</button>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-4 reveal delay-2 flex flex-col items-start lg:items-end">
        <svg viewBox="0 0 320 140" width="100%" style={{ maxWidth: 360 }} aria-hidden="true">
          <defs>
            <filter id="ink">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
              <feDisplacementMap in="SourceGraphic" scale="0.6" />
            </filter>
          </defs>
          <g fill="none" stroke="#F5F1E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" filter="url(#ink)" opacity="0.92">
            <path d="M16 96 C 28 48, 52 40, 76 56 C 93 66, 84 82, 62 84 L 46 84" />
            <path d="M96 88 C 104 62, 120 62, 124 88" />
            <path d="M124 88 C 130 66, 146 66, 150 88" />
            <path d="M168 80 C 196 78, 220 84, 246 80" />
            <path d="M152 104 C 188 114, 232 109, 302 92" />
            <path d="M24 118 C 106 108, 194 110, 296 116" strokeWidth="1" opacity="0.6" />
          </g>
        </svg>
        <div className="meta-mono text-[color:var(--text-muted)] mt-4">{copy.finalCta.signatureLabel}</div>
      </div>
    </div>

    <div className="hairline max-w-[1200px] mx-auto"></div>
    <footer className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 meta-mono text-[color:var(--text-muted)]">
      <div className="flex items-center gap-3">
        <svg width="18" height="18" viewBox="0 0 22 22" aria-hidden="true">
          <rect x="1" y="1" width="20" height="20" rx="2" fill="none" stroke="#E8C77A" strokeWidth="1" />
          <path d="M6 14 L11 6 L16 14" fill="none" stroke="#E8C77A" strokeWidth="1.2" />
          <line x1="6" y1="14" x2="16" y2="14" stroke="#E8C77A" strokeWidth="1.2" />
        </svg>
        <span>{copy.footer.brand}</span>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-2">
        {copy.footer.links.map((l) => <a key={l} href="#" className="hover:text-[color:var(--accent-primary)] transition-colors">{l}</a>)}
      </div>
    </footer>
  </section>;

const PortraitPicker = ({ value, presets, onChange, onCustom, useLabel }) => {
  const [custom, setCustom] = React.useState("");
  const isCustom = value && !presets.includes(value);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
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
              }}
            >
              <img
                src={url}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => { e.currentTarget.style.opacity = 0.2; }}
              />
            </button>
          );
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
          }}
        />
        <button
          type="button"
          disabled={!custom.trim()}
          onClick={() => { onCustom(custom.trim()); setCustom(""); }}
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
          }}
        >
          {useLabel || "Use"}
        </button>
      </div>
      {isCustom &&
        <div style={{ font: "10px/1.4 ui-monospace,monospace", color: "rgba(41,38,27,0.55)", wordBreak: "break-all" }}>
          Custom: {value.slice(0, 60)}{value.length > 60 ? "…" : ""}
        </div>
      }
    </div>
  );
};

const LumenMark = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 22 22" aria-hidden="true">
    <rect x="1" y="1" width="20" height="20" rx="2" fill="none" stroke="#E8C77A" strokeWidth="1" />
    <path d="M6 14 L11 6 L16 14" fill="none" stroke="#E8C77A" strokeWidth="1.2" />
    <line x1="6" y1="14" x2="16" y2="14" stroke="#E8C77A" strokeWidth="1.2" />
  </svg>
);

const TaskItem = ({ href, sectionId, Icon, label, onNavigate }) => (
  <a
    href={href}
    onClick={(e) => {
      if (!onNavigate || !sectionId) return;
      e.preventDefault();
      onNavigate(sectionId);
    }}
    className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[color:var(--text-muted)] hover:text-[color:var(--accent-primary)] active:text-[color:var(--accent-primary)] transition-colors"
    style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
  >
    <Icon size={18} stroke={1.6} />
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
  </a>
);

const SiteHeader = ({ lang, onLangChange, copy, onNavigate }) => {
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
    background: "rgba(10,22,40,0.90)",
    WebkitBackdropFilter: "blur(20px) saturate(140%)",
    backdropFilter: "blur(20px) saturate(140%)",
    borderTop: "1px solid var(--divider)",
    paddingBottom: "env(safe-area-inset-bottom, 0px)",
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden"
  };

  const navigate = (id) => {
    if (onNavigate) onNavigate(id);
  };

  return (
    <React.Fragment>
      <header className="hidden md:block fixed top-0 left-0 right-0 z-40" style={desktopBg}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LumenMark />
            <div className="font-display text-[18px] tracking-tight">{copy.brand.name}</div>
            <div className="hidden md:block w-px h-4 bg-[color:var(--divider)] mx-2"></div>
            <div className="hidden lg:block label-mono text-[color:var(--text-muted)]">{copy.brand.subtitle}</div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 label-mono text-[color:var(--text-muted)]" aria-label={copy.common.primaryNavAria}>
            <a href="#bio" onClick={(e) => { e.preventDefault(); navigate("bio"); }} className="hover:text-[color:var(--accent-primary)] transition-colors">{copy.nav.about}</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); navigate("services"); }} className="hover:text-[color:var(--accent-primary)] transition-colors">{copy.nav.services}</a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); navigate("portfolio"); }} className="hover:text-[color:var(--accent-primary)] transition-colors">{copy.nav.projects}</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); navigate("testimonials"); }} className="hover:text-[color:var(--accent-primary)] transition-colors">{copy.nav.testimonials}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); navigate("contact"); }} className="hover:text-[color:var(--accent-primary)] transition-colors">{copy.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher value={lang} onChange={onLangChange} variant="inline" ariaLabel={copy.common.languageAria} />
            <span className="hidden md:block w-px h-4 bg-[color:var(--divider)]"></span>
            <button className="btn-ghost !py-2 !px-4 text-[13px]">
              <IconLock size={14} stroke={1.6} /> {copy.common.secureCall}
            </button>
          </div>
        </div>
      </header>

      <div className="md:hidden fixed top-0 left-0 right-0 z-40 px-5 h-[52px] flex items-center justify-between" style={mobileTopBg}>
        <div className="flex items-center gap-2.5">
          <LumenMark size={18} />
          <span className="font-display text-[15px]">{copy.brand.name}</span>
        </div>
        <button className="flex items-center gap-1.5 label-mono px-2.5 py-1 rounded-[4px] border border-[color:var(--glass-border)] text-[color:var(--text-primary)] hover:border-[color:var(--accent-primary)] transition-colors">
          <IconLock size={12} stroke={1.6} /> {copy.common.secure}
        </button>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40" style={mobileBottomBg} aria-label={copy.common.primaryNavAria}>
        <ul className="grid grid-cols-5 items-stretch">
          <li className="flex"><TaskItem href="#home" sectionId="home" Icon={IconContact} label={copy.taskbar.home} onNavigate={navigate} /></li>
          <li className="flex"><TaskItem href="#bio" sectionId="bio" Icon={IconCompass} label={copy.taskbar.about} onNavigate={navigate} /></li>
          <li className="flex"><TaskItem href="#portfolio" sectionId="portfolio" Icon={IconFileText} label={copy.taskbar.projects} onNavigate={navigate} /></li>
          <li className="flex"><TaskItem href="#contact" sectionId="contact" Icon={IconMail} label={copy.taskbar.contact} onNavigate={navigate} /></li>
          <li className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1 py-1.5">
              <LanguageSwitcher value={lang} onChange={onLangChange} variant="compact" dropDirection="up" ariaLabel={copy.common.languageAria} />
            </div>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

const BusinessPartnerProfile = () => {
  useReveal();
  const SCROLL_OFFSET = React.useMemo(() => ({ mobile: 78, desktop: 92 }), []);

  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || {
    portraitUrl: PORTRAIT_PRESETS[0],
    portraitTone: "cool"
  });

  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem("site-lang") || DEFAULT_LANG; } catch (e) { return DEFAULT_LANG; }
  });

  const copy = React.useMemo(() => getCopy(lang), [lang]);

  React.useEffect(() => {
    try { localStorage.setItem("site-lang", lang); } catch (e) {}
    document.documentElement.setAttribute("lang", lang);
    document.title = copy.htmlTitle;
  }, [lang, copy.htmlTitle]);

  React.useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - (window.innerWidth < 768 ? SCROLL_OFFSET.mobile : SCROLL_OFFSET.desktop);
    window.scrollTo({ top: Math.max(0, y), behavior: "auto" });
  }, [SCROLL_OFFSET.desktop, SCROLL_OFFSET.mobile]);

  const scrollToSection = React.useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const topOffset = window.innerWidth < 768 ? SCROLL_OFFSET.mobile : SCROLL_OFFSET.desktop;
    const y = target.getBoundingClientRect().top + window.scrollY - topOffset;

    if (history.replaceState) {
      history.replaceState(null, "", "#" + id);
    } else {
      window.location.hash = id;
    }

    window.scrollTo({
      top: Math.max(0, y),
      behavior: reduceMotion ? "auto" : "smooth"
    });
  }, [SCROLL_OFFSET.desktop, SCROLL_OFFSET.mobile]);

  return (
    <main className="relative pt-[52px] md:pt-[68px] pb-[96px] md:pb-0" style={{ WebkitOverflowScrolling: "touch" }}>
      <SiteHeader lang={lang} onLangChange={setLang} copy={copy} onNavigate={scrollToSection} />
      <Hero portraitUrl={t.portraitUrl} portraitTone={t.portraitTone} copy={copy} />
      <Bio copy={copy} />
      <Services copy={copy} />
      <Portfolio copy={copy} />
      <Stats copy={copy} />
      <Testimonials copy={copy} />
      <Contact copy={copy} />
      <FinalCTA copy={copy} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Portret" />
        <div className="twk-row">
          <div className="twk-lbl"><span>Alege poza</span></div>
          <PortraitPicker
            value={t.portraitUrl}
            presets={PORTRAIT_PRESETS}
            onChange={(v) => setTweak("portraitUrl", v)}
            onCustom={(v) => setTweak("portraitUrl", v)}
            useLabel={copy.common.use}
          />
        </div>
        <TweakRadio
          label="Ton"
          value={t.portraitTone}
          options={["cool", "warm", "neutral", "noir"]}
          onChange={(v) => setTweak("portraitTone", v)}
        />
      </TweaksPanel>
    </main>
  );
};

window.BusinessPartnerProfile = BusinessPartnerProfile;
