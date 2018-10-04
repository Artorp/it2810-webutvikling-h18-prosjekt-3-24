# IT2810 Webutvikling – Prosjekt 2 – gruppe 24

Dette er det tredje prosjektet i emnet IT2810 Webutvikling på NTNU høsten 2018. Gruppen består av Mathias Bynke, Henrik Grønbech og Maria Osen.

<!-- ## Hvordan kjøre

Hvis du vil kjøre prosjektet lokalt, må du først klone dette repoet. Naviger deretter til rotmappen i prosjektet og kjør disse kommandoene

```bash
npm i # kort for `npm install`
npm start
```

Nettsiden kommer til å være tilgjengelig på http://it2810-24.idi.ntnu.no/prosjekt3.
Den er også tilgjengelig på https://it2810-2018-gr28-p2.firebaseapp.com/ (liten skrivefeil i navnet – vi er gruppe 24). -->

## Dokumentasjon

<!-- ### Funksjonalitet

Nettsiden skulle ifølge kravspesifikasjonen la brukeren veksle mellom 3 kategorier av 3 forskjellige medietyper, tekst, lyd og bilde.
Hen skulle også kunne vise 4 ulike konstellasjoner innen hver kategori.
Vi har løst dette ved å ha et valgpanel med radioknapper som lar brukeren velge en kombinasjon av kategorier.
Med faner (implementert med knapper øverst på siden) kan brukeren bytte mellom bildene, tekstene og musikken innen hver kategori.
Når brukeren først laster inn siden, blir hen vist en tilfeldig fane og en tilfeldig kombinasjon av kategorier.

Tittelen reflekterer valgene brukeren har gjort av kategorier og fane. -->

### Teknologi brukt

I tutorial-form slik at andre kan lære av det.

Alle de viktigste valgene vi har gjort og begrunnelse for dem.

<!-- Vi har basert løsningen på React og JSX.
Rotkomponenten heter `App`. Den deler siden grovt inn i deler, hvorav tre er egne komponenter: `OptionPanel`, `ArtDisplay` og `Tabs`.
Disse tar seg av henholdsvis valg av kategorier; visning av bilde, tekst og lydavspiller; og knappene som bytter mellom faner.
Hva som skal vises, er til enhver tid bestemt av oppføringer i tilstanden til `App`-komponenten.
Når brukeren trykker på en fane eller en kategori, er det funksjoner i `App` som oppdaterer disse oppføringene med `setState`.
Disse funksjonene og oppføringene blir sendt ned til barnekomponentene som egenskaper («properties»). -->

<!-- ### Ajax

Vi bruker AJAX kun med den javascript-funksjonen `fetch` – vi bruker ingen tredjepartsbiblioteker til dette.
`fetch` er en noe nyere metode, men nå støttet av de [største nettleserene](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility).
Innlasting av bilder, tekst (og ikke musikk) med Ajax.
Filene ligger lokalt.

Filene blir automatisk cachet av flese nettleserene.
Når man sender en en `GET`-request, og man allerede har lastet ned den daten man spør fra om før, får man 304 som svar.
Dette viser at dataene blir cachet fra i nettleseren.
Man kan se dette ved å se på fanen som tilsvarere _Network_ i Google Chrome i _inspiseringsverktøy_. -->
<!--

### Responsiv design

Vi har gjort flere grep for at siden skal se bra ut uavhengig av vindusstørrelse.
Hele siden er implementert med flexbox.
Innenfor `ArtDisplay` er flexbox satt opp med `wrap` slik at lydavspilleren og teksten blir plassert under bildet når det blir for trangt om plassen.
I `App` er topp-flexbox-konteineren satt opp i `row` for brede vinduer og `column` for smale vinduer.
Vi implementerte dette med media query i CSS for å kunne endre andre ting på siden samtidig som denne endringen.
Spesielt viktig er det at kategoriene med valg blir plassert ved siden av hverandre istedenfor over hverandre (en flexbox blir satt til `row`).
I tillegg har vi implementert enda en media query som slår inn dersom siden blir veldig smal (typisk mobilskjerm i høydeformat) og plasserer kategorivalgene under hverandre igjen.
Vi syntes at det så best ut slik på mobile og andre små skjermer.

Størrelsen på bildet blir også tilpasset bredden på vinduet.
For å unngå at bilder på høykant blir veldig store la vi inn en relativ høydebegrensning på bildene på 70 % av vinduets høyde. Dette har bare en effekt når vinduet er bredt, som på en PC-skjerm.

Slik vi har satt det opp, blir bildene og andre elementer vist i sin fulle bredde slik de skal på en smal mobilskjerm.
Vi har derfor ikke sett at å legge til en `viewport`-`meta`-tag gjør noen positiv forskjell, og vi har derfor valgt å ikke ha det med. -->

### Bruk av Git

Vi har dokumentert prosessen gjennom issuer og pull request-er i GitHub.

Oppgaven spesifiserer at committene skal markeres med hvilken issue de hører til.
Vi har tidligere erfart at det er betraktelig mer oversiktlig å koble en _pull request_ til hver issue og samle commitene på denne måten, og vi har valgt å gjøre det slik i dette prosjektet.
Det lar oss se på endringer og diskutere/justere dem i samarbeid før de blir dyttet til master, og GitHub har god støtte for denne koblingen mellom pull request-er og issuer.
Dessuten er det mye lettere å glemme å tagge en issue i en commitmelding.
Det blir også lettere å tolke commit-treet i ettertid og se hva som skjedde når.

### Kilder

Vi har brukt kodesnutter fra denne siden:
- https://tutorialscapital.com/react-native-adding-items-in-scrollview-using-loop-method-android-ios-tutorial-from-scratch/

<!-- ### Testing

Vi har fulgt denne sjekklisten når vi har testet nettsiden.

- Hele siden skal lastes inn. Dette gjelder startbildet, lydavspiller, knappene på fanen, radioknapper, riktig font
- Alle knappene skal ha korrekt oppførsel
- Lydavspilleren skal fungere
- Layouten på siden skal være slik som spesifisert i avsnittet om responsiv design

#### Oversikt over hvilke plattformer vi har testet på

TODO: Nøyere oversikt over akkurat hva som har blitt testet, kanskje på hver plattform.

- Google chrome/Chromium
  - [x] MacOS
  - [x] Windows 10
  - [x] Android
    - Her er det ikke noe boks rundt knappene til fanen. Funksjonaliteten fungerer ellers fint.
  - [x] Ubuntu
- Firefox
  - [x] MacOS
  - [x] Windows 10
  - [x] Android
  - [x] Ubuntu
- Safari
  - [x] MacOS
  - [x] iOs -->