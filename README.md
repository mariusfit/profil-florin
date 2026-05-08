# profil-florin

Pagina de profil pentru Florin Pop — direcție vizuală **Aurora Glass Sobru**: midnight navy, accent gold șampanie, glass + grain, tipografie editorială (PP Editorial New + Manrope + JetBrains Mono).

## Structură

```
index.html         — shell (fonturi, Tailwind CDN, React + Babel, tokens CSS)
profile.jsx        — componentă unică BusinessPartnerProfile (8 secțiuni)
icons.jsx          — iconițe inline tip lucide
tweaks-panel.jsx   — panou Tweaks (selector poză + ton)
assets/portrait.jpeg
```

## Rulare locală

E un site static — nu necesită build. Servește folderul cu orice server static:

```bash
npx serve .
# sau
python3 -m http.server 8000
```

Apoi deschide `http://localhost:8000`.

## Push pe GitHub

```bash
git init
git add .
git commit -m "Initial commit — Aurora Glass Sobru profile"
git branch -M main
git remote add origin git@github.com:<user>/profil-florin.git
git push -u origin main
```

## Tweaks

Toggle din toolbar (în mediul de design) — permite alegerea pozei dintr-o galerie sau prin URL custom, plus tonul portretului (cool / warm / neutral / noir).

## Limbi

Selectorul RO / FR / NL / EN e prezent vizual (header desktop + bottom taskbar mobil). Traducerile urmează a fi conectate separat.
