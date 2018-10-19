# IT2810 Webutvikling – Prosjekt 3 – gruppe 24

Dette er det tredje prosjektet i emnet IT2810 Webutvikling på NTNU høsten 2018. Gruppen består av Mathias Bynke, Henrik Grønbech og Maria Osen.

**TODO: Pass på bug ved relasting pga. skritteller.**

## Dokumentasjon

### Innhold og funksjonalitet

#### Design

Vi bestemte oss for å lage en todo-app. En bruker skal kunne legge til nye gjøremål og fjerne de når de er gjort. Når man legger til skal man også velge dato for deadline på todoen. I tillegg ville vi at appen skulle være motiverende ved å lage en skritteller, som viser skrittene du har gått akkurat i dag helt øverst.

#### Detaljer

Appen er en prototyp av en såkalt «Personal information and motivation manager» og illustrerer hvordan teknologiene nevnt under kan brukes til å lage funksjonalitet for å organisere en dag.
Vi har demonstrert dette med to funksjoner: gjøremål og skrittelling, men ytterligere funksjonalitet som dette er mulig.

Man kan legge til gjøremål ved hjelp av knappen «Nytt gjøremål» i hovedvisningen.
Der velger man et navn på gjøremålet og en dato og trykker på «Lagre».
Gjøremålet dukker nå opp på listen i hovedvisningen.
For å fjerne et gjøremål kan man bruke «fjern»-knappen til høyre for hvert gjøremål i listen.
Gjøremålene blir lagret og er fortsatt der selv om man lukker og åpner appen.

Brukeren kan se antall skritt hen har gått, øverst på hovedskjermen.
Dette sammenlignes mot 10000 skritt ved hjelp av en framgangsviser som blir gradvis fylt opp og skifter farge fra rød til grønn.
Skrittelleren går utover grunnleggende React Native-teknologi og bruker isteden Expo-rammeverket.
**Obs!** Merk at det kan være nødvendig å godkjenne tilgang til og sette opp skritteller på telefonen for å se skrittantallet øke.
På Android kan man installere appen Google Fit og aktivere denne.

### Teknologi brukt

- [Nativebase](https://nativebase.io/)
- [react-native-router-flux](https://www.npmjs.com/package/react-native-router-flux)
- [react-native-progress](https://github.com/oblador/react-native-progress)
- [Expo pedometer](https://docs.expo.io/versions/latest/sdk/pedometer)
- [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage)
- [VSCode](https://code.visualstudio.com/)
- [ESlint](https://eslint.org/) / [Prettier](https://github.com/prettier/prettier)

#### Nativebase

Vi har brukt et UI komponent bibliotek som heter nativebase. Dette biblioteket gjør det lett å bygge en app som fungerer både på IOS og på Android. Måten man kommer i gang med å bruke dette på er å kjøre kommandoene:

```bash
npm install native-base --save
react-native link
```

Mange basic komponenter som brukes i react native, som for eksempel `<View>` og `<Text>` finnes også i nativebase. Vi valgte å bruke disse, så istedenfor å skrive

```javascript
import { View, Text } from "react-native";
```

skriver vi:

```javascript
import { View, Text } from "native-base";
```

#### react-native-router-flux

Vi brukte react-native-router-flux (RNRF) for å håndtere navigasjon mellom komponenter, slik at vi kunne ha forskjellige sider i appen. For å bruke RNRF, er det to viktige komponenter man må bruke i App.js. `Router Component` og `Scene` Component. Her er eksempel fra koden vår:

```javascript
import { Router, Scene } from 'react-native-router-flux';

    return (
      <Router hideNavBar="true">
        <Scene key="root">
          <Scene key="todoList" component={TodoList} title="TodoList" initial hideNavBar />
          <Scene key="editTodo" component={EditTodo} title="EditTodo" />
        </Scene>
      </Router>
```

Vi har altså en Scene for hver skjerm vi vil vise. I vårt tilfelle, selve TodoList på en skjerm, og EditTodo (som kan legge til ett nytt gjøremål) på en annen skjerm. For å navigere fra TodoList til EditTodo bruker man `key` til rett side, i dette tilfelle editTodo, og bruker `Actions.editTodo();`
Da må man også bruke importere den først ved `import { Actions } from 'react-native-router-flux';`
Når vi går andre veien, vil vi ikke fyre opp siden på nytt, men heller gå tilbake. Da bruker vi `Actions.pop();`

#### react-native-progress

Nativebase mangler en komponent for å vise framgang – en «progress bar».
Det fantes en slik tidligere, men ifølge en [issue på GitHub-siden til Nativebase](https://github.com/GeekyAnts/NativeBase/issues/1128) ble den droppet til fordel for en innebygd React Native-komponent som ikke dekker vårt behov.
Vi fant og bruker den som følger med pakken react-native-progress.
Å sette opp dette var rett fram, vi fulgte bare den [enkle dokumentasjonen](https://www.npmjs.com/package/react-native-progress).

#### Expo pedometer

Vi har fulgt [tutorialen/dokumentasjonen til expo sitt pedometer](https://docs.expo.io/versions/latest/sdk/pedometer) for sanntidsoppdatering av skrittelling i appen. Avhengig av om appen kjøres på iOS elles android, brukes henholdsvis Core Motion eller Google Fit som backend.

#### AsyncStorage

AsyncStorage brukes for at appen skal ha hukommelse av gjøremålene fra gang til gang. I følge [den offisielle dokumentasjonen](https://facebook.github.io/react-native/docs/asyncstorage), anbefales det å bruke et abstraksjonnivå over AsyncStorage. Mye grunnet at AsyncStorage ikke har noen form for kryptering. Siden oppgaven ikke spesifiserte noe om dette, og fordi vi ikke lager noen sensitiv informasjon, er ikke dette gjort. Nå lagrer vi alle gjøremålene som en stringifisert liste (`JSON.stringify(...)`) med `todoList` som nøkkel. Når vi legger til et gjøremål, overskriver vi denne listen med det nye gjøremålet på enden av listen. Når vi sletter et gjøremål, fjerner vi alle gjøremål som har likt navn som det gjøremålet som slettes (ikke helt optimalt!).

#### VSCode

Også kjent som Visual Studio Code. Tektredigeringsprogram utviklet av Microsoft. Gratis og åpen kildekode. Bygget på [Electron](https://electronjs.org/) (som også er webteknologi!). Dette programmet har god støtte for utvidelser (eng. extensions) og er rask.

#### ESlint / Prettier

Vi har brukt ESlint for at man skal få gode tilbakemeldinger om feil og andre mangler i koden når man utvikler. Etter litt frem og tilbake endte vi opp med å bruke malen `universe/react` etter å ha gått bort fra `react-native`. Vi har brukt Prettier som å autoformattere koden etter malen vi brukte. Dette sørger for at koden blir mer konsistent, at det blir færre mergekonflikter med git og at man ikke trenger å bruket like myd tid å krefter på at koden skal holde god kvalitet. Eksempler på nyttige funksjonalitet disse verktøyene gir er å

- sortere `import`-utrykk automatisk
- dele opp for lange linjer
- sørge for at kodebase er kosekvent på `'` og `"`

Dette er en [god video](https://www.youtube.com/watch?v=YIvjKId9m2c) som forklarer hvordan man setter opp ESLint og Prettier i VSCode.

### Plattformuavhengighet

Appen har blitt testet på både IOS og Android og fungerer på begge plattformene – med følgende forbehold:
Den ene personen på gruppen vår som har en Iphone, var opptatt på slutten av utviklingsperioden, og vi har dermed ikke fått prøvd det i sluttfasen på en ordentlig Iphone.
Vi kan dermed ikke garantere at alt fungerer som det skal der.
En IOS-simulator har imidlertid gitt lovende resultater.

### Bruk av Git

Vi har dokumentert prosessen gjennom issuer og pull request-er i GitHub.

Oppgaven spesifiserer at committene skal markeres med hvilken issue de hører til.
Vi har tidligere erfart at det er betraktelig mer oversiktlig å koble en _pull request_ til hver issue og samle commitene på denne måten, og vi har valgt å gjøre det slik i dette prosjektet.
Det lar oss se på endringer og diskutere/justere dem i samarbeid før de blir dyttet til master, og GitHub har god støtte for denne koblingen mellom pull request-er og issuer.
Dessuten er det mye lettere å glemme å tagge en issue i en commitmelding.
Det blir også lettere å tolke commit-treet i ettertid og se hva som skjedde når.

### Testing

Vi tester appen med Jest.
Vi bruker flere «snapshot»-tester som sjekker at komponentene ikke forandrer seg utilsiktet.
I tillegg tester vi den grunnleggende gjøremål-funksjonaliteten.
En del brukergrensesnitt-funksjonalitet har det vært vanskelig å teste uten å bruke Enzyme-rammeverket.

Obs: Vi hadde store problemer med å få testing av komponenten `App` til å virke.
Etter å har brukt mye tid på å få til en «snapshot»-test, valgte vi til slutt å bruke tid på andre ting, og den er derfor fjernet.
Den er erstattet med en enkel test som kun tester konstruktøren til `App`.
`App` er rotkomponenten, og en feil her er heldigvis fort synlig når vi prøver appen manuelt.
