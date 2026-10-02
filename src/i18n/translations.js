// All site copy lives here. Finnish (fi) is the default language.
// Both objects must keep the same shape.

const img = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const images = {
  hero: img('1772300164438-f73307d3b645', 2400),
  heroSmall: img('1772300164438-f73307d3b645', 1000),
  home: img('1586023492125-27b2c045efd7'),
  deep: img('1584622650111-993a426fbf0a'),
  move: img('1560448204-e02f11c3d0e2'),
  office: '/images/office-cleaning.jpg',
  windows: '/images/window-cleaning.jpg',
  renovation: img('1772299121503-cd62a57e3a26', 1600),
  interior: img('1616486338812-3dadae4b4ace', 1000),
  kitchen: img('1556911220-bff31c812dba'),
  helsinki: img('1538332576228-eb5b4c4de6f5', 1600),
}

// Opens Gmail's compose window in the browser (mailto: does nothing without a mail app).
export const gmailCompose = (subject = '', body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=rasansiivousoy@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export const company = {
  name: 'Rasan Siivous Oy',
  phone: '+358 44 241 8269',
  // Phone links open a WhatsApp chat with a greeting already typed.
  phoneHref: `https://wa.me/358442418269?text=${encodeURIComponent('Welcome to Rasan Siivous')}`,
  whatsapp: '358442418269',
  email: 'rasansiivousoy@gmail.com',
  emailHref: gmailCompose(),
  address: 'Puotilan Metrokatu 4 as. 19',
  postal: '00910 Helsinki',
  businessId: '3161353-9',
}

// Service ids are shared between languages and used for images, anchors and the booking form.
export const serviceIds = ['renovation', 'home', 'deep', 'move', 'office', 'windows']

export const serviceIcons = {
  home: 'home',
  deep: 'sparkle',
  move: 'box',
  office: 'building',
  windows: 'window',
  renovation: 'hammer',
}

export const districts = [
  'Kamppi', 'Punavuori', 'Kallio', 'Töölö', 'Kruununhaka', 'Katajanokka',
  'Eira', 'Ullanlinna', 'Lauttasaari', 'Munkkiniemi', 'Pasila', 'Vallila',
  'Arabianranta', 'Kalasatama', 'Jätkäsaari', 'Herttoniemi', 'Vuosaari',
  'Itäkeskus', 'Malmi', 'Pakila', 'Espoo', 'Vantaa', 'Kauniainen',
]

const fi = {
  meta: {
    title: 'Rasan Siivous – Ammattimainen siivouspalvelu Helsingissä',
  },
  topbar: {
    hours: 'Ma–Pe 8–18, La 9–15',
    area: 'Helsinki, Espoo, Vantaa ja Kauniainen',
  },
  nav: {
    home: 'Etusivu',
    services: 'Palvelut',
    about: 'Meistä',
    faq: 'UKK',
    contact: 'Yhteystiedot',
    book: 'Varaa siivous',
    menu: 'Valikko',
    language: 'Kieli',
  },
  common: {
    from: 'alk.',
    perHour: '/h',
    quote: 'Pyydä tarjous',
    readMore: 'Lue lisää',
    bookNow: 'Varaa siivous',
    allServices: 'Kaikki palvelut',
    included: 'Palveluun sisältyy',
  },
  home: {
    heroEyebrow: 'Rakennussiivous Helsingissä',
    heroTitle: 'Ammattimainen rakennus- ja remonttisiivous',
    heroText:
      'Luovutusvalmis siivous uudiskohteisiin ja remontteihin sovitussa aikataulussa koko pääkaupunkiseudulla.',
    heroCta: 'Varaa siivous',
    heroCta2: 'Katso palvelut',
    heroPoints: [
      'Kotitalousvähennyskelpoinen',
      'Vastuuvakuutettu toiminta',
      'Tyytyväisyystakuu',
    ],
    stats: [
      { value: '4,9 / 5', label: 'Asiakastyytyväisyys' },
      { value: '3 000+', label: 'Tehtyä siivousta' },
      { value: '24 h', label: 'Vastaamme tarjouspyyntöihin' },
      { value: '10+', label: 'Vuotta kokemusta' },
    ],
    servicesEyebrow: 'Palvelumme',
    servicesTitle: 'Siivouspalvelut jokaiseen tarpeeseen',
    servicesText:
      'Säännöllisestä kotisiivouksesta muutto- ja toimistosiivoukseen. Räätälöimme palvelun juuri sinun tarpeisiisi.',
    stepsEyebrow: 'Näin se toimii',
    stepsTitle: 'Siivous varattuna kolmessa vaiheessa',
    steps: [
      {
        title: 'Varaa verkossa tai soita',
        text: 'Täytä varauslomake tai soita meille. Kerro kohteen koko ja toiveesi.',
      },
      {
        title: 'Saat vahvistuksen',
        text: 'Vahvistamme ajan ja hinnan sähköpostitse, yleensä saman päivän aikana.',
      },
      {
        title: 'Nauti puhtaasta',
        text: 'Ammattitaitoinen siivoojamme saapuu sovittuna aikana omien välineiden kanssa.',
      },
    ],
    whyEyebrow: 'Miksi Rasan Siivous',
    whyTitle: 'Laatua, jonka huomaa',
    whyText:
      'Olemme helsinkiläinen siivousyritys, jolle luotettavuus ja huolellisuus ovat kaiken perusta. Jokainen siivous tehdään tarkistuslistan mukaan.',
    why: [
      {
        title: 'Koulutettu henkilökunta',
        text: 'Siivoojamme ovat perehdytettyjä ammattilaisia, joilla on puhtausalan koulutus.',
      },
      {
        title: 'Vakuutettu ja luotettava',
        text: 'Toimintamme on vastuuvakuutettu, ja hoidamme kaikki työnantajavelvoitteet.',
      },
      {
        title: 'Ympäristöystävällinen',
        text: 'Käytämme ympäristömerkittyjä pesuaineita ja säästämme vettä ja energiaa.',
      },
      {
        title: 'Kotitalousvähennys',
        text: 'Kotisiivouksen työn osuudesta voit hakea kotitalousvähennystä verotuksessa.',
      },
      {
        title: 'Joustavat ajat',
        text: 'Siivoamme arkisin ja lauantaisin – myös aikaisin aamulla ja iltaisin.',
      },
      {
        title: 'Tyytyväisyystakuu',
        text: 'Jos jokin jäi huomaamatta, tulemme korjaamaan sen veloituksetta 48 tunnin sisällä.',
      },
    ],
    areasEyebrow: 'Palvelualue',
    areasTitle: 'Palvelemme koko pääkaupunkiseudulla',
    areasText:
      'Siivoamme koteja ja toimitiloja kaikkialla Helsingissä sekä Espoossa, Vantaalla ja Kauniaisissa. Ei matkakuluja Helsingin alueella.',
    testimonialsEyebrow: 'Asiakaskokemuksia',
    testimonialsTitle: 'Mitä asiakkaamme sanovat',
    testimonials: [
      {
        quote:
          'Olemme käyttäneet Kirkkaan kotisiivousta kahden viikon välein jo kolme vuotta. Aina täsmällinen ja huolellinen palvelu.',
        name: 'Anna K.',
        place: 'Töölö',
      },
      {
        quote:
          'Muuttosiivous hoitui helposti, ja vuokranantaja hyväksyi asunnon heti tarkastuksessa. Suosittelen lämpimästi.',
        name: 'Mikko L.',
        place: 'Kallio',
      },
      {
        quote:
          'Toimistomme on aina siisti maanantaiaamuna. Yhteydenpito on sujuvaa ja laskutus selkeää.',
        name: 'Laura V.',
        place: 'Toimitusjohtaja, Kamppi',
      },
    ],
  },
  cta: {
    title: 'Valmis puhtaampaan arkeen?',
    text: 'Varaa siivous verkossa muutamassa minuutissa tai pyydä maksuton tarjous.',
    button: 'Varaa siivous',
    call: 'Soita meille',
  },
  services: {
    eyebrow: 'Palvelut',
    title: 'Rakennussiivous ja muut siivouspalvelumme',
    text: 'Kaikki palvelumme sisältävät siivousvälineet ja -aineet. Ei piilokuluja eikä pitkiä sopimuksia.',
    items: {
      home: {
        name: 'Kotisiivous',
        short: 'Säännöllinen ylläpitosiivous viikoittain, joka toinen viikko tai kuukausittain.',
        description:
          'Säännöllinen kotisiivous pitää kodin raikkaana ilman, että sinun tarvitsee käyttää vapaa-aikaasi siivoamiseen. Sama tuttu siivooja käy kotonasi aina sovittuna päivänä.',
        features: [
          'Lattioiden imurointi ja moppaus',
          'Pölyjen pyyhintä tasopinnoilta',
          'Keittiön tasot, liesi ja kodinkoneiden pinnat',
          'Kylpyhuoneen ja WC:n pesu',
          'Roskien vienti ja vuodevaatteiden vaihto',
        ],
      },
      deep: {
        name: 'Suursiivous',
        short: 'Perusteellinen siivous lattiasta kattoon, esimerkiksi keväällä tai ennen juhlia.',
        description:
          'Suursiivouksessa puhdistetaan myös ne paikat, jotka jäävät arjessa helposti huomaamatta. Sopii kevät- ja joulusiivoukseen tai kun koti kaipaa kunnon puhdistusta.',
        features: [
          'Kaikki kotisiivouksen työvaiheet',
          'Kaappien ovet ja listat',
          'Uunin, jääkaapin ja liesituulettimen pesu',
          'Kylpyhuoneen kalkinpoisto ja saumojen pesu',
          'Ovien, katkaisijoiden ja patterien pyyhintä',
        ],
      },
      move: {
        name: 'Muuttosiivous',
        short: 'Vuokranantajan ja isännöitsijän vaatimukset täyttävä loppusiivous.',
        description:
          'Muuttosiivous tehdään tarkistuslistan mukaan, joka vastaa vuokranantajien ja isännöitsijöiden vaatimuksia. Jos tarkastuksessa on huomautettavaa, korjaamme sen veloituksetta.',
        features: [
          'Kaappien pesu sisältä ja ulkoa',
          'Uunin, jääkaapin ja pakastimen pesu',
          'Kylpyhuoneen ja saunan perusteellinen pesu',
          'Ikkunalautojen, ovien ja listojen pyyhintä',
          'Hyväksyntätakuu vuokranantajan tarkastuksessa',
        ],
      },
      office: {
        name: 'Toimistosiivous',
        short: 'Säännöllinen siivous toimistoille, liiketiloille ja porraskäytäville.',
        description:
          'Siisti työympäristö lisää viihtyvyyttä ja antaa asiakkaille hyvän ensivaikutelman. Siivoamme toimistot joustavasti työajan ulkopuolella, ja laatimme palvelusta kiinteähintaisen sopimuksen.',
        features: [
          'Työpisteiden ja yhteisten tilojen siivous',
          'Keittiön ja taukotilojen puhdistus',
          'WC-tilojen pesu ja tarvikkeiden täydennys',
          'Jätehuolto ja kierrätys',
          'Nimetty yhteyshenkilö ja laaturaportointi',
        ],
      },
      windows: {
        name: 'Ikkunanpesu',
        short: 'Kirkkaat ikkunat sisältä, ulkoa ja välistä – myös parvekelasit.',
        description:
          'Pesemme ikkunat raidattomiksi ammattivälineillä. Palvelu sisältää ikkunan kaikki puolet sekä karmit ja ikkunalaudat. Pesemme myös parvekelasit.',
        features: [
          'Ikkunoiden pesu sisältä, ulkoa ja välistä',
          'Karmien ja ikkunalautojen pyyhintä',
          'Parvekelasien pesu',
          'Omat välineet ja pesuaineet mukana',
        ],
      },
      renovation: {
        name: 'Rakennussiivous',
        short: 'Pääpalvelumme: rakennus- ja remonttisiivous uudiskohteisiin, saneerauksiin ja remontteihin.',
        description:
          'Rakennussiivous on erikoisalaamme. Siivoamme uudiskohteet, saneeraukset ja remontit valmiiksi luovutusta tai muuttoa varten – karkeasiivouksesta hienosiivoukseen. Poistamme rakennuspölyn ja -jäämät huolellisesti, jotta tilat ovat heti käyttövalmiit.',
        features: [
          'Karkea- ja hienosiivous rakennusvaiheen mukaan',
          'Rakennuspölyn poisto kaikilta pinnoilta, myös kattojen ja seinien',
          'Kaappien, kalusteiden ja kodinkoneiden pesu sisältä ja ulkoa',
          'Ikkunoiden, karmien ja ovien puhdistus',
          'Maali-, laasti- ja silikoniroiskeiden sekä suojateippien poisto',
          'Lattioiden perusteellinen pesu ja luovutusvalmis lopputulos',
        ],
      },
    },
  },
  about: {
    eyebrow: 'Meistä',
    title: 'Helsinkiläinen siivousyritys, johon voit luottaa',
    intro:
      'Rasan Siivous on perustettu Helsingissä vuonna 2014. Olemme kasvaneet pienestä perheyrityksestä yli 30 ammattilaisen tiimiksi, joka palvelee koteja ja yrityksiä koko pääkaupunkiseudulla.',
    storyTitle: 'Tarinamme',
    story: [
      'Aloitimme yksinkertaisella ajatuksella: siivouksen pitää olla helppo tilata, hinnoiltaan selkeä ja laadultaan tasaisen hyvä joka kerta.',
      'Tänään palvelemme satoja kotitalouksia ja kymmeniä yritysasiakkaita. Pidämme huolta henkilökunnastamme, sillä tyytyväiset työntekijät tekevät parasta jälkeä. Kaikki siivoojamme ovat työsuhteessa, ja noudatamme alan työehtosopimusta.',
    ],
    valuesTitle: 'Arvomme',
    values: [
      {
        title: 'Luotettavuus',
        text: 'Saavumme sovittuun aikaan ja pidämme lupauksemme. Avaimesi ja kotisi ovat turvassa.',
      },
      {
        title: 'Laatu',
        text: 'Työskentelemme tarkistuslistojen mukaan ja seuraamme asiakastyytyväisyyttä jatkuvasti.',
      },
      {
        title: 'Vastuullisuus',
        text: 'Valitsemme ympäristömerkittyjä aineita ja kohtelemme työntekijöitämme reilusti.',
      },
    ],
    trustTitle: 'Turvallinen valinta',
    trust: [
      'Merkitty ennakkoperintä- ja työnantajarekisteriin',
      'Vastuuvakuutus kaikille töille',
      'Henkilökunnalla puhtausalan koulutus',
      'Ympäristömerkityt pesuaineet',
      'Avaimet säilytetään lukitussa ja koodatussa kaapissa',
      'Kirjallinen tilausvahvistus ja selkeä lasku',
    ],
    numbers: [
      { value: '2014', label: 'Perustettu' },
      { value: '30+', label: 'Ammattilaista' },
      { value: '500+', label: 'Vakioasiakasta' },
    ],
  },
  faq: {
    eyebrow: 'Usein kysyttyä',
    title: 'Vastauksia yleisimpiin kysymyksiin',
    text: 'Etkö löytänyt vastausta? Ota yhteyttä, niin autamme mielellämme.',
    items: [
      {
        q: 'Tarvitseeko minun olla kotona siivouksen aikana?',
        a: 'Ei tarvitse. Monet asiakkaamme antavat meille avaimen, jota säilytämme lukitussa ja koodatussa avainkaapissa. Avaimia ei koskaan merkitä asiakkaan nimellä tai osoitteella.',
      },
      {
        q: 'Tuovatko siivoojat omat välineet ja aineet?',
        a: 'Kyllä. Tuomme mukanamme kaikki tarvittavat välineet ja ympäristömerkityt pesuaineet. Jos haluat, että käytämme omia aineitasi, kerro siitä varauksen yhteydessä.',
      },
      {
        q: 'Voinko saada kotitalousvähennystä?',
        a: 'Kyllä. Kotona tehdystä siivoustyöstä voi hakea kotitalousvähennystä. Merkitsemme laskuun työn osuuden erikseen. Ajantasaiset vähennyksen määrät löydät osoitteesta vero.fi.',
      },
      {
        q: 'Miten voin perua tai siirtää varauksen?',
        a: 'Voit perua tai siirtää varauksen maksutta viimeistään 24 tuntia ennen sovittua aikaa. Myöhemmin tehdyistä peruutuksista veloitamme 50 % varauksen hinnasta.',
      },
      {
        q: 'Mitä jos en ole tyytyväinen siivouksen laatuun?',
        a: 'Ilmoita meille 48 tunnin kuluessa siivouksesta, niin tulemme korjaamaan puutteet veloituksetta. Asiakastyytyväisyys on meille tärkeintä.',
      },
      {
        q: 'Onko muuttosiivouksella hyväksyntätakuu?',
        a: 'On. Jos vuokranantaja tai isännöitsijä huomauttaa siivouksesta, palaamme korjaamaan puutteet ilman lisämaksua.',
      },
      {
        q: 'Miten laskutus toimii?',
        a: 'Lähetämme laskun sähköpostitse siivouksen jälkeen, maksuaika on 14 päivää. Yritysasiakkaille tarjoamme myös verkkolaskun. Kotisiivouksen laskussa työn osuus on eritelty kotitalousvähennystä varten.',
      },
      {
        q: 'Onko henkilökuntanne vakuutettu?',
        a: 'Kyllä. Kaikki työmme on vastuuvakuutettu. Jos siivouksen aikana jotain vahingossa rikkoutuu, korvaamme vahingon vakuutuksen kautta.',
      },
      {
        q: 'Siivoatteko myös Espoossa ja Vantaalla?',
        a: 'Kyllä. Palvelemme koko pääkaupunkiseutua: Helsinkiä, Espoota, Vantaata ja Kauniaista.',
      },
    ],
  },
  contact: {
    eyebrow: 'Yhteystiedot ja varaus',
    title: 'Varaa siivous tai pyydä tarjous',
    text: 'Täytä lomake, niin vahvistamme varauksesi ja hinnan sähköpostitse yleensä saman arkipäivän aikana.',
    infoTitle: 'Yhteystiedot',
    phone: 'Puhelin',
    email: 'Sähköposti',
    address: 'Toimisto',
    hours: 'Aukioloajat',
    hoursLines: ['Ma–Pe 8.00–18.00', 'La 9.00–15.00', 'Su suljettu'],
    businessId: 'Y-tunnus',
    form: {
      title: 'Varauslomake',
      service: 'Palvelu',
      servicePlaceholder: 'Valitse palvelu',
      size: 'Kohteen koko (m²)',
      frequency: 'Toistuvuus',
      frequencies: ['Kertaluonteinen', 'Viikoittain', 'Joka toinen viikko', 'Kerran kuukaudessa'],
      date: 'Toivottu päivä',
      time: 'Toivottu aika',
      times: ['Aamu (8–12)', 'Iltapäivä (12–16)', 'Ilta (16–20)', 'Ei väliä'],
      name: 'Nimi',
      email: 'Sähköposti',
      phone: 'Puhelinnumero',
      address: 'Siivouskohteen osoite',
      postal: 'Postinumero',
      message: 'Lisätiedot',
      messagePlaceholder: 'Esim. lemmikit, avainten luovutus tai erityistoiveet',
      consent: 'Hyväksyn, että tietojani käsitellään tietosuojaselosteen mukaisesti.',
      privacyLink: 'Tietosuojaseloste',
      submit: 'Lähetä varauspyyntö',
      required: 'Pakollinen kenttä',
      successTitle: 'Kiitos varauspyynnöstäsi!',
      successText: 'WhatsApp avautui ja varauksesi tiedot on kirjoitettu valmiiksi – paina vain Lähetä. Voit myös lähettää tiedot sähköpostilla.',
      sendWhatsapp: 'Lähetä WhatsAppilla',
      sendEmail: 'Lähetä sähköpostilla',
      messageIntro: 'Hei Rasan Siivous! Haluaisin varata siivouksen:',
      emailSubject: 'Varauspyyntö',
      another: 'Tee uusi varaus',
      errors: {
        required: 'Täytä tämä kenttä.',
        email: 'Tarkista sähköpostiosoite.',
        phone: 'Tarkista puhelinnumero.',
        postal: 'Postinumerossa on 5 numeroa.',
        consent: 'Hyväksy tietosuojaseloste jatkaaksesi.',
      },
    },
    mapTitle: 'Toimistomme sijainti',
  },
  privacy: {
    title: 'Tietosuojaseloste',
    updated: 'Päivitetty 30.9.2026',
    sections: [
      {
        h: 'Rekisterinpitäjä',
        p: 'Rasan Siivous Oy (Y-tunnus 3161353-9), Puotilan Metrokatu 4 as. 19, 00910 Helsinki. Yhteyshenkilö tietosuoja-asioissa: rasansiivousoy@gmail.com.',
      },
      {
        h: 'Mitä tietoja keräämme',
        p: 'Keräämme asiakkaan nimen, yhteystiedot, siivouskohteen osoitteen sekä palvelun toteuttamiseen tarvittavat tiedot, kuten kohteen koon ja lisätiedot.',
      },
      {
        h: 'Käsittelyn tarkoitus ja peruste',
        p: 'Käsittelemme tietoja palvelun toteuttamiseksi, laskutukseen ja asiakassuhteen hoitamiseen. Käsittelyn peruste on sopimus ja oikeutettu etu (EU:n yleinen tietosuoja-asetus 2016/679).',
      },
      {
        h: 'Tietojen säilytys',
        p: 'Säilytämme tietoja asiakassuhteen ajan ja sen jälkeen kirjanpitolain edellyttämän ajan. Tiedot säilytetään suojatuissa järjestelmissä, joihin on pääsy vain valtuutetulla henkilöstöllä.',
      },
      {
        h: 'Tietojen luovutus',
        p: 'Emme myy tai luovuta tietoja kolmansille osapuolille markkinointitarkoituksiin. Tietoja voidaan luovuttaa viranomaisille lain niin vaatiessa.',
      },
      {
        h: 'Rekisteröidyn oikeudet',
        p: 'Sinulla on oikeus tarkastaa, oikaista ja poistaa tietosi sekä vastustaa niiden käsittelyä. Voit tehdä valituksen tietosuojavaltuutetun toimistolle (tietosuoja.fi).',
      },
      {
        h: 'Evästeet',
        p: 'Sivustomme tallentaa selaimeesi ainoastaan valitsemasi kielen. Emme käytä seuranta- tai markkinointievästeitä.',
      },
    ],
  },
  notFound: {
    title: 'Sivua ei löytynyt',
    text: 'Etsimääsi sivua ei ole olemassa tai se on siirretty.',
    back: 'Palaa etusivulle',
  },
  footer: {
    tagline: 'Ammattimaista ja luotettavaa siivousta Helsingissä ja pääkaupunkiseudulla.',
    services: 'Palvelut',
    company: 'Yritys',
    contact: 'Yhteystiedot',
    privacy: 'Tietosuojaseloste',
    rights: 'Kaikki oikeudet pidätetään.',
  },
}

const en = {
  meta: {
    title: 'Rasan Siivous – Professional Cleaning Services in Helsinki',
  },
  topbar: {
    hours: 'Mon–Fri 8–18, Sat 9–15',
    area: 'Helsinki, Espoo, Vantaa and Kauniainen',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Book cleaning',
    menu: 'Menu',
    language: 'Language',
  },
  common: {
    from: 'from',
    perHour: '/h',
    quote: 'Request a quote',
    readMore: 'Read more',
    bookNow: 'Book cleaning',
    allServices: 'All services',
    included: 'What’s included',
  },
  home: {
    heroEyebrow: 'Post-construction cleaning in Helsinki',
    heroTitle: 'Professional construction & renovation cleaning',
    heroText:
      'Handover-ready cleaning for new builds and renovations, delivered on schedule across the capital region.',
    heroCta: 'Book cleaning',
    heroCta2: 'View services',
    heroPoints: [
      'Eligible for household tax credit',
      'Fully insured',
      'Satisfaction guarantee',
    ],
    stats: [
      { value: '4.9 / 5', label: 'Customer satisfaction' },
      { value: '3,000+', label: 'Cleanings completed' },
      { value: '24 h', label: 'Quote response time' },
      { value: '10+', label: 'Years of experience' },
    ],
    servicesEyebrow: 'Our services',
    servicesTitle: 'Cleaning services for every need',
    servicesText:
      'From regular home cleaning to move-out and office cleaning. We tailor the service to your exact needs.',
    stepsEyebrow: 'How it works',
    stepsTitle: 'Book your cleaning in three steps',
    steps: [
      {
        title: 'Book online or call',
        text: 'Fill in the booking form or give us a call. Tell us the size of the space and your wishes.',
      },
      {
        title: 'Get a confirmation',
        text: 'We confirm the time and price by email, usually on the same day.',
      },
      {
        title: 'Enjoy the clean',
        text: 'Our professional cleaner arrives at the agreed time with all equipment.',
      },
    ],
    whyEyebrow: 'Why Rasan Siivous',
    whyTitle: 'Quality you can see',
    whyText:
      'We are a Helsinki-based cleaning company built on reliability and attention to detail. Every cleaning follows a checklist.',
    why: [
      {
        title: 'Trained staff',
        text: 'Our cleaners are onboarded professionals with formal cleaning-industry training.',
      },
      {
        title: 'Insured and reliable',
        text: 'All our work is covered by liability insurance and we meet all employer obligations.',
      },
      {
        title: 'Eco-friendly',
        text: 'We use eco-labelled detergents and save water and energy.',
      },
      {
        title: 'Household tax credit',
        text: 'You can claim the Finnish household tax credit for the labour share of home cleaning.',
      },
      {
        title: 'Flexible hours',
        text: 'We clean on weekdays and Saturdays – including early mornings and evenings.',
      },
      {
        title: 'Satisfaction guarantee',
        text: 'If we missed something, we’ll come back and fix it free of charge within 48 hours.',
      },
    ],
    areasEyebrow: 'Service area',
    areasTitle: 'Serving the entire capital region',
    areasText:
      'We clean homes and business premises everywhere in Helsinki as well as in Espoo, Vantaa and Kauniainen. No travel fees within Helsinki.',
    testimonialsEyebrow: 'Testimonials',
    testimonialsTitle: 'What our customers say',
    testimonials: [
      {
        quote:
          'We have used Rasan home cleaning every other week for three years. Always punctual and thorough service.',
        name: 'Anna K.',
        place: 'Töölö',
      },
      {
        quote:
          'The move-out cleaning was effortless and our landlord approved the apartment at the first inspection. Highly recommended.',
        name: 'Mikko L.',
        place: 'Kallio',
      },
      {
        quote:
          'Our office is always spotless on Monday morning. Communication is smooth and invoicing is clear.',
        name: 'Laura V.',
        place: 'CEO, Kamppi',
      },
    ],
  },
  cta: {
    title: 'Ready for a cleaner everyday life?',
    text: 'Book online in a few minutes or request a free quote.',
    button: 'Book cleaning',
    call: 'Call us',
  },
  services: {
    eyebrow: 'Services',
    title: 'Post-construction cleaning and our other services',
    text: 'All services include cleaning equipment and products. No hidden fees and no long contracts.',
    items: {
      home: {
        name: 'Home cleaning',
        short: 'Regular maintenance cleaning weekly, every other week or monthly.',
        description:
          'Regular home cleaning keeps your home fresh without spending your free time cleaning. The same familiar cleaner visits on the agreed day every time.',
        features: [
          'Vacuuming and mopping floors',
          'Dusting surfaces',
          'Kitchen counters, stove and appliance surfaces',
          'Bathroom and toilet cleaning',
          'Taking out rubbish and changing bed linen',
        ],
      },
      deep: {
        name: 'Deep cleaning',
        short: 'Thorough top-to-bottom cleaning, e.g. in spring or before a celebration.',
        description:
          'Deep cleaning also covers the places that are easily overlooked in everyday life. Ideal for spring or Christmas cleaning, or whenever your home needs a proper refresh.',
        features: [
          'Everything in regular home cleaning',
          'Cabinet doors and skirting boards',
          'Oven, fridge and cooker hood cleaning',
          'Bathroom descaling and grout cleaning',
          'Wiping doors, switches and radiators',
        ],
      },
      move: {
        name: 'Move-out cleaning',
        short: 'Final cleaning that meets landlord and property manager requirements.',
        description:
          'Move-out cleaning follows a checklist that matches the requirements of landlords and property managers. If anything is flagged at inspection, we fix it free of charge.',
        features: [
          'Cabinets cleaned inside and out',
          'Oven, fridge and freezer cleaning',
          'Thorough bathroom and sauna cleaning',
          'Window sills, doors and skirting boards',
          'Approval guarantee at landlord inspection',
        ],
      },
      office: {
        name: 'Office cleaning',
        short: 'Regular cleaning for offices, commercial premises and stairwells.',
        description:
          'A clean workplace improves wellbeing and gives clients a great first impression. We clean flexibly outside office hours and offer a fixed-price service agreement.',
        features: [
          'Workstations and shared spaces',
          'Kitchen and break room cleaning',
          'Restroom cleaning and supply refills',
          'Waste management and recycling',
          'Dedicated contact person and quality reporting',
        ],
      },
      windows: {
        name: 'Window cleaning',
        short: 'Crystal-clear windows inside, outside and between panes – balcony glass too.',
        description:
          'We wash windows streak-free with professional equipment. The service covers all sides of the window as well as frames and sills. Balcony glazing is included too.',
        features: [
          'Inside, outside and between the panes',
          'Frames and window sills',
          'Balcony glazing',
          'Own equipment and detergents',
        ],
      },
      renovation: {
        name: 'Post-construction cleaning',
        short: 'Our main service: construction and renovation cleaning for new builds, refurbishments and renovations.',
        description:
          'Post-construction cleaning is our speciality. We clean new builds, refurbishments and renovations ready for handover or move-in – from rough cleaning to final cleaning. We carefully remove construction dust and residue so the space is ready to use straight away.',
        features: [
          'Rough and final cleaning according to the construction phase',
          'Construction dust removed from every surface, including walls and ceilings',
          'Cabinets, fixtures and appliances cleaned inside and out',
          'Windows, frames and doors cleaned',
          'Paint, mortar and silicone splashes and protective tape removed',
          'Thorough floor washing and a handover-ready result',
        ],
      },
    },
  },
  about: {
    eyebrow: 'About us',
    title: 'A Helsinki cleaning company you can trust',
    intro:
      'Rasan Siivous was founded in Helsinki in 2014. We have grown from a small family business into a team of over 30 professionals serving homes and businesses throughout the capital region.',
    storyTitle: 'Our story',
    story: [
      'We started with a simple idea: cleaning should be easy to book, clearly priced and consistently high quality every time.',
      'Today we serve hundreds of households and dozens of business clients. We take good care of our staff, because happy employees do the best work. All our cleaners are employed directly and we follow the industry collective agreement.',
    ],
    valuesTitle: 'Our values',
    values: [
      {
        title: 'Reliability',
        text: 'We arrive on time and keep our promises. Your keys and your home are safe with us.',
      },
      {
        title: 'Quality',
        text: 'We work from checklists and continuously monitor customer satisfaction.',
      },
      {
        title: 'Responsibility',
        text: 'We choose eco-labelled products and treat our employees fairly.',
      },
    ],
    trustTitle: 'A safe choice',
    trust: [
      'Registered in the Finnish prepayment and employer registers',
      'Liability insurance for all work',
      'Staff trained in professional cleaning',
      'Eco-labelled cleaning products',
      'Keys stored in a locked, coded key cabinet',
      'Written order confirmation and clear invoice',
    ],
    numbers: [
      { value: '2014', label: 'Founded' },
      { value: '30+', label: 'Professionals' },
      { value: '500+', label: 'Regular clients' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Answers to common questions',
    text: 'Didn’t find your answer? Get in touch and we’ll be happy to help.',
    items: [
      {
        q: 'Do I need to be at home during the cleaning?',
        a: 'No. Many of our customers give us a key, which we keep in a locked, coded key cabinet. Keys are never labelled with the customer’s name or address.',
      },
      {
        q: 'Do the cleaners bring their own equipment and products?',
        a: 'Yes. We bring all necessary equipment and eco-labelled detergents. If you prefer us to use your own products, just let us know when booking.',
      },
      {
        q: 'Can I get the household tax credit?',
        a: 'Yes. Cleaning work done in your home qualifies for the Finnish household tax credit. We itemise the labour share on the invoice. See vero.fi for current amounts.',
      },
      {
        q: 'How can I cancel or reschedule a booking?',
        a: 'You can cancel or reschedule free of charge up to 24 hours before the appointment. Later cancellations are charged at 50% of the booking price.',
      },
      {
        q: 'What if I’m not satisfied with the cleaning?',
        a: 'Let us know within 48 hours and we will come back to fix any issues free of charge. Customer satisfaction is our top priority.',
      },
      {
        q: 'Does move-out cleaning come with an approval guarantee?',
        a: 'Yes. If the landlord or property manager has any remarks about the cleaning, we return to fix them at no extra cost.',
      },
      {
        q: 'How does invoicing work?',
        a: 'We send an invoice by email after the cleaning with 14 days payment terms. E-invoicing is available for business clients. Home cleaning invoices itemise the labour share for the tax credit.',
      },
      {
        q: 'Are your staff insured?',
        a: 'Yes. All our work is covered by liability insurance. If something is accidentally damaged during cleaning, we compensate it through our insurance.',
      },
      {
        q: 'Do you also clean in Espoo and Vantaa?',
        a: 'Yes. We serve the entire capital region: Helsinki, Espoo, Vantaa and Kauniainen.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact & booking',
    title: 'Book a cleaning or request a quote',
    text: 'Fill in the form and we will confirm your booking and price by email, usually on the same business day.',
    infoTitle: 'Contact details',
    phone: 'Phone',
    email: 'Email',
    address: 'Office',
    hours: 'Opening hours',
    hoursLines: ['Mon–Fri 8:00–18:00', 'Sat 9:00–15:00', 'Sun closed'],
    businessId: 'Business ID',
    form: {
      title: 'Booking form',
      service: 'Service',
      servicePlaceholder: 'Select a service',
      size: 'Size of the space (m²)',
      frequency: 'Frequency',
      frequencies: ['One-time', 'Weekly', 'Every other week', 'Once a month'],
      date: 'Preferred date',
      time: 'Preferred time',
      times: ['Morning (8–12)', 'Afternoon (12–16)', 'Evening (16–20)', 'No preference'],
      name: 'Name',
      email: 'Email',
      phone: 'Phone number',
      address: 'Address to be cleaned',
      postal: 'Postal code',
      message: 'Additional information',
      messagePlaceholder: 'E.g. pets, key handover or special requests',
      consent: 'I agree that my data is processed in accordance with the privacy policy.',
      privacyLink: 'Privacy policy',
      submit: 'Send booking request',
      required: 'Required field',
      successTitle: 'Thank you for your booking request!',
      successText: 'WhatsApp has opened with your booking details already typed – just press Send. You can also send the details by email.',
      sendWhatsapp: 'Send via WhatsApp',
      sendEmail: 'Send via email',
      messageIntro: 'Hi Rasan Siivous! I would like to book a cleaning:',
      emailSubject: 'Booking request',
      another: 'Make another booking',
      errors: {
        required: 'Please fill in this field.',
        email: 'Please check the email address.',
        phone: 'Please check the phone number.',
        postal: 'Postal code must have 5 digits.',
        consent: 'Please accept the privacy policy to continue.',
      },
    },
    mapTitle: 'Our office location',
  },
  privacy: {
    title: 'Privacy policy',
    updated: 'Updated 30 September 2026',
    sections: [
      {
        h: 'Data controller',
        p: 'Rasan Siivous Oy (Business ID 3161353-9), Puotilan Metrokatu 4 as. 19, 00910 Helsinki. Contact for privacy matters: rasansiivousoy@gmail.com.',
      },
      {
        h: 'What data we collect',
        p: 'We collect the customer’s name, contact details, address of the cleaning location and information needed to deliver the service, such as the size of the space and additional details.',
      },
      {
        h: 'Purpose and legal basis',
        p: 'We process data to deliver the service, for invoicing and to manage the customer relationship. The legal basis is contract and legitimate interest (EU General Data Protection Regulation 2016/679).',
      },
      {
        h: 'Data retention',
        p: 'We retain data for the duration of the customer relationship and thereafter as required by the Finnish Accounting Act. Data is stored in secured systems accessible only to authorised staff.',
      },
      {
        h: 'Data disclosure',
        p: 'We do not sell or disclose data to third parties for marketing purposes. Data may be disclosed to authorities when required by law.',
      },
      {
        h: 'Your rights',
        p: 'You have the right to access, rectify and erase your data and to object to its processing. You may lodge a complaint with the Office of the Data Protection Ombudsman (tietosuoja.fi).',
      },
      {
        h: 'Cookies',
        p: 'Our website only stores your chosen language in your browser. We do not use tracking or marketing cookies.',
      },
    ],
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
  footer: {
    tagline: 'Professional and reliable cleaning in Helsinki and the capital region.',
    services: 'Services',
    company: 'Company',
    contact: 'Contact',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
  },
}

export const translations = { fi, en }
