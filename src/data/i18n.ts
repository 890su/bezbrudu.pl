import { prices, promo, rental, site, type Lang } from './site';

const P = Object.fromEntries(prices.map((p) => [p.id, p.price])) as Record<string, number>;

type Faq = { q: string; a: string };

export interface Dict {
  htmlLang: string;
  ogLocale: string;
  metaTitle: string;
  metaDesc: string;
  skip: string;
  nav: { prices: string; rental: string; how: string; stains: string; faq: string; contact: string };
  diy: { title: string; text: string; cta: string };
  menu: string;
  close: string;
  langLabel: string;
  call: string;
  whatsapp: string;
  hero: {
    title: string;
    lead: string;
    clean: string;
    drawingLabel: string;
    pins: [string, string][];
  };
  game: { start: string; tap: string; going: string; done: string; doneNoCode: string; goal: string; use: string; keyboard: string };
  sheet: {
    title: string;
    sub: string;
    items: Record<string, string>;
    from: string;
    pcs: string;
    m2: string;
    less: string;
    more: string;
    total: string;
    minApplied: string;
    travel: string;
    travelPick: string;
    travelOther: string;
    code: string;
    codeNote: string;
    discount: string;
    note: string;
    name: string;
    phone: string;
    submit: string;
    or: string;
    fine: string;
  };
  form: {
    sending: string;
    success: string;
    successTitle: string;
    error: string;
    errPhone: string;
    errName: string;
    privacy: string;
  };
  steps: { title: string; items: [string, string][] };
  stains: { title: string; lead: string; items: string[]; honestTitle: string; honest: string };
  guarantee: { title: string; text: string; specTitle: string; spec: [string, string][] };
  area: { title: string; lead: string; free: string; outside: string };
  faq: { title: string; items: Faq[] };
  contact: {
    title: string;
    lead: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: string;
    formTitle: string;
    email: string;
    service: string;
    servicePick: string;
    serviceOther: string;
    message: string;
    submit: string;
  };
  footer: { tagline: string; rights: string };
  bar: { call: string; whatsapp: string; price: string; book: string };
}

const pl: Dict = {
  htmlLang: 'pl',
  ogLocale: 'pl_PL',
  metaTitle: `Pranie kanap i materacy w Warszawie od ${P.sofa} zł | Bez Brudu`,
  metaDesc: 'Pranie tapicerki, narożników i materacy u Ciebie w domu. Ekstrakcja gorącą wodą, schnięcie 2–4 h, dojazd na Ursynowie gratis. Sprawdź cennik online.',
  skip: 'Przejdź do treści',
  nav: { prices: 'Cennik', rental: 'Wynajem', how: 'Jak to działa', stains: 'Plamy', faq: 'Pytania', contact: 'Kontakt' },
  menu: 'Menu',
  close: 'Zamknij',
  langLabel: 'Język',
  call: 'Zadzwoń',
  whatsapp: 'WhatsApp',
  hero: {
    title: 'Pranie kanap i materacy u Ciebie w domu',
    lead: 'Przyjeżdżamy z ekstraktorem, pierzemy na miejscu, a po 2–4 godzinach siadasz na suchej kanapie. Cenę sprawdzisz obok, bez dzwonienia.',
    clean: 'Czysto',
    drawingLabel: 'Rysunek kanapy z plamami, które można zetrzeć',
    pins: [
      ['Schnie 2–4 godziny', 'wieczorem siadasz na suchej kanapie'],
      ['Ekstrakcja gorącą wodą', 'brud wypłukany z pianki, a nie rozmazany po tkaninie'],
      ['Bez wynoszenia mebli', 'pierzemy tam, gdzie kanapa stoi'],
    ],
  },
  game: {
    start: `Wyczyść kanapę do 100% i odbierz −${promo.percent}% na pierwsze zamówienie`,
    tap: 'Dotknij kanapy i czyść palcem',
    going: 'Jeszcze trochę, zostały plamy',
    done: 'Gotowe! Twój kod {code} jest już w formularzu',
    doneNoCode: `Gotowe! Napisz lub powiedz, że kanapa wyczyszczona, a doliczymy −${promo.percent}%`,
    goal: `100% = −${promo.percent}%`,
    use: 'Do wyceny',
    keyboard: 'Wyczyść kanapę',
  },
  sheet: {
    title: 'Policz cenę',
    sub: 'Zaznacz, co mamy wyprać',
    items: {
      sofa: 'Kanapa, sofa 2–3 os.',
      corner: 'Narożnik',
      armchair: 'Fotel',
      chair: 'Krzesło tapicerowane',
      mattress1: 'Materac 1-os., 1 strona',
      mattress2: 'Materac 2-os., 1 strona',
      carpet: 'Dywan, wykładzina',
    },
    from: 'od',
    pcs: 'szt.',
    m2: 'm²',
    less: 'Mniej',
    more: 'Więcej',
    total: 'Razem od',
    minApplied: 'minimalne zamówienie',
    travel: 'Dojazd',
    travelPick: 'Wybierz dzielnicę',
    travelOther: 'Inna miejscowość (zapytamy)',
    code: 'Kod rabatowy',
    codeNote: 'Kod jest jednorazowy i działa tylko przy wysłaniu formularza. Rabat na usługę, bez dojazdu.',
    discount: 'Rabat',
    note: `Minimum ${site.minOrder} zł za usługę, plus dojazd.`,
    name: 'Imię',
    phone: 'Telefon',
    submit: 'Wyślij listę, oddzwonimy',
    or: 'albo',
    fine: 'Ceny orientacyjne. Dokładną cenę podamy po zdjęciu, zawsze przed rozpoczęciem pracy.',
  },
  form: {
    sending: 'Wysyłamy…',
    successTitle: 'Mamy Twoją listę',
    success: 'Oddzwonimy w godzinach pracy: pn–pt 8:00–20:00, sb 9:00–18:00.',
    error: 'Nie udało się wysłać. Zadzwoń albo napisz na WhatsAppie, odbierzemy.',
    errPhone: 'Podaj numer telefonu, żebyśmy mogli oddzwonić.',
    errName: 'Jak mamy się do Ciebie zwracać?',
    privacy: 'Użyjemy danych tylko do kontaktu w sprawie tej wyceny.',
  },
  steps: {
    title: 'Jak to działa',
    items: [
      ['Wysyłasz listę albo dzwonisz', 'Mówisz, co trzeba wyprać. Zdjęcie plam możesz wysłać na WhatsAppie.'],
      ['Ustalamy cenę i termin', 'Cenę znasz przed przyjazdem. Termin wybierasz Ty.'],
      ['Przyjeżdżamy i pierzemy', 'Odkurzanie, środek dobrany do tkaniny, ekstrakcja gorącą wodą.'],
      ['Po 2–4 godzinach siadasz', 'Przewietrz pokój, tkanina wyschnie szybciej.'],
    ],
  },
  stains: {
    title: 'Co schodzi z tapicerki',
    lead: 'Najczęstsze powody, dla których do nas dzwonicie.',
    items: ['Kawa i herbata', 'Wino i soki', 'Tłuste plamy', 'Pot i ślady rąk', 'Sierść', 'Zapach moczu zwierząt', 'Roztocza i kurz'],
    honestTitle: 'Uczciwie, przed startem',
    honest: 'Farba, atrament, wybielacz i plamy sprzed lat mogą nie zejść w całości. Powiemy Ci to przed rozpoczęciem, a nie po.',
  },
  guarantee: {
    title: 'Efekt nie taki, jak ustaliliśmy? Wracamy.',
    text: 'Przyjeżdżamy ponownie i pierzemy jeszcze raz bez dopłaty. Efekt ustalamy przed pracą, więc obie strony wiedzą, czego się spodziewać.',
    specTitle: 'Specyfikacja usługi',
    spec: [
      ['Metoda', 'Pranie ekstrakcyjne gorącą wodą'],
      ['Schnięcie', '2–4 godziny'],
      ['Środki', 'Dobrane do tkaniny i rodzaju plamy'],
      ['Gdzie', 'U Ciebie, bez wynoszenia mebli'],
      ['Dojazd', 'Ursynów gratis, dalej 30–70 zł'],
      ['Godziny', 'Pn–pt 8:00–20:00, sb 9:00–18:00'],
      ['Języki', 'Polski, English, русский, українська'],
    ],
  },
  area: {
    title: 'Ile kosztuje dojazd',
    lead: 'Na Ursynowie przyjeżdżamy za darmo. Dalej cena zależy od odległości.',
    free: 'gratis',
    outside: 'Nie ma Twojej miejscowości na liście? Zapytaj, koszt dojazdu podamy z góry.',
  },
  faq: {
    title: 'Pytania przed praniem',
    items: [
      { q: 'Ile kosztuje pranie kanapy?', a: `Kanapa 2–3-osobowa od ${P.sofa} zł, narożnik od ${P.corner} zł. Dokładną cenę podamy po zdjęciu, bo zależy od rozmiaru, tkaniny i zabrudzenia. Minimalne zamówienie to ${site.minOrder} zł.` },
      { q: 'Jak długo schnie tapicerka?', a: 'Zwykle 2–4 godziny. Szybciej, jeśli przewietrzysz pokój albo włączysz ogrzewanie.' },
      { q: 'A co z dziećmi, zwierzętami i alergikami?', a: 'Dobieramy środki do tkaniny i rodzaju plamy, a po wyschnięciu z mebla można normalnie korzystać. Jeśli w domu jest alergik, małe dziecko albo zwierzę, powiedz nam przy wycenie: dobierzemy środki z myślą o tym.' },
      { q: 'Co muszę przygotować?', a: 'Dostęp do mebla, gniazdko elektryczne i kran. Resztę sprzętu przywozimy.' },
      { q: 'Czy każda plama zejdzie?', a: 'Większość tak. Farba, atrament, wybielacz i bardzo stare plamy mogą zostawić ślad. Ocenimy to na zdjęciu albo na miejscu, przed rozpoczęciem.' },
      { q: 'Ile kosztuje dojazd?', a: 'Ursynów bez opłaty. Mokotów, Wilanów, Włochy i Piaseczno: 30 zł. Dalsze dzielnice, Pruszków, Janki i Konstancin: 50 zł. Białołęka, Bielany i inne najdalsze: 70 zł. Koszt dojazdu doliczamy raz, niezależnie od liczby mebli.' },
    ],
  },
  contact: {
    title: 'Zadzwoń, napisz albo wyślij listę',
    lead: 'Odpowiadamy po polsku, angielsku, rosyjsku i ukraińsku.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    hoursLabel: 'Godziny',
    hours: 'Pn–pt 8:00–20:00, sb 9:00–18:00',
    formTitle: 'Zapytanie o wycenę',
    email: 'E-mail (opcjonalnie)',
    service: 'Co pierzemy?',
    servicePick: 'Wybierz z listy',
    serviceOther: 'Coś innego',
    message: 'Wiadomość (opcjonalnie)',
    submit: 'Wyślij zapytanie',
  },
  footer: { tagline: 'Pranie tapicerki, narożników i materacy w Warszawie.', rights: 'Wszelkie prawa zastrzeżone.' },
  bar: { call: 'Zadzwoń', whatsapp: 'WhatsApp', price: 'Cena', book: 'Rezerwuj' },
  diy: {
    title: 'Wolisz sam? Wypożycz Kärchera',
    text: `Przywieziemy Kärcher Puzzi wieczorem, z chemią i instrukcją wideo. Od ${rental.day} zł za dobę. Nie wyjdzie? Doczyścimy, a wynajem odliczymy.`,
    cta: 'Wynajem z dowozem',
  },
};

const en: Dict = {
  htmlLang: 'en',
  ogLocale: 'en_GB',
  metaTitle: `Sofa & Mattress Cleaning in Warsaw from ${P.sofa} zł | Bez Brudu`,
  metaDesc: 'Upholstery, corner sofa and mattress cleaning at your home in Warsaw. Hot-water extraction, dry in 2–4 h, free travel in Ursynów. See prices online.',
  skip: 'Skip to content',
  nav: { prices: 'Prices', rental: 'Rental', how: 'How it works', stains: 'Stains', faq: 'FAQ', contact: 'Contact' },
  menu: 'Menu',
  close: 'Close',
  langLabel: 'Language',
  call: 'Call',
  whatsapp: 'WhatsApp',
  hero: {
    title: 'Sofa and mattress cleaning at your home',
    lead: 'We come with an extractor, clean on the spot, and 2–4 hours later you sit on a dry sofa. Check the price right here, no phone call needed.',
    clean: 'Clean',
    drawingLabel: 'Drawing of a stained sofa you can wipe clean',
    pins: [
      ['Dry in 2–4 hours', 'sit on a dry sofa the same evening'],
      ['Hot-water extraction', 'dirt is rinsed out of the foam, not smeared across the fabric'],
      ['Nothing to carry out', 'we clean the sofa where it stands'],
    ],
  },
  game: {
    start: `Clean the sofa to 100% and get ${promo.percent}% off your first order`,
    tap: 'Tap the sofa and scrub with your finger',
    going: 'Keep going, a few stains left',
    done: 'Done! Your code {code} is already in the form',
    doneNoCode: `Done! Mention the clean sofa when you contact us and we’ll take ${promo.percent}% off`,
    goal: `100% = −${promo.percent}%`,
    use: 'To the quote',
    keyboard: 'Clean the sofa',
  },
  sheet: {
    title: 'Get a price',
    sub: 'Pick what needs cleaning',
    items: {
      sofa: 'Sofa, 2–3 seats',
      corner: 'Corner sofa',
      armchair: 'Armchair',
      chair: 'Upholstered chair',
      mattress1: 'Single mattress, 1 side',
      mattress2: 'Double mattress, 1 side',
      carpet: 'Rug, fitted carpet',
    },
    from: 'from',
    pcs: 'pcs',
    m2: 'm²',
    less: 'Fewer',
    more: 'More',
    total: 'Total from',
    minApplied: 'minimum order',
    travel: 'Travel',
    travelPick: 'Choose your district',
    travelOther: 'Another town (we’ll quote)',
    code: 'Discount code',
    codeNote: 'The code is single-use and only works when you send the form. Discount on the service, not travel.',
    discount: 'Discount',
    note: `Minimum ${site.minOrder} zł for the service, plus travel.`,
    name: 'Name',
    phone: 'Phone',
    submit: 'Send the list, we’ll call back',
    or: 'or',
    fine: 'Prices are indicative. We confirm the exact price from a photo, always before we start.',
  },
  form: {
    sending: 'Sending…',
    successTitle: 'We have your list',
    success: 'We’ll call you back during working hours: Mon–Fri 8:00–20:00, Sat 9:00–18:00.',
    error: 'Couldn’t send. Please call or message us on WhatsApp, we’ll answer.',
    errPhone: 'Add a phone number so we can call you back.',
    errName: 'What should we call you?',
    privacy: 'We use your details only to contact you about this quote.',
  },
  steps: {
    title: 'How it works',
    items: [
      ['Send the list or call', 'Tell us what needs cleaning. You can send a photo of the stains on WhatsApp.'],
      ['We agree price and time', 'You know the price before we arrive. You choose the date.'],
      ['We come and clean', 'Vacuuming, a product matched to the fabric, hot-water extraction.'],
      ['Sit down after 2–4 hours', 'Air the room and the fabric dries faster.'],
    ],
  },
  stains: {
    title: 'What comes out of upholstery',
    lead: 'The most common reasons people call us.',
    items: ['Coffee and tea', 'Wine and juice', 'Grease', 'Sweat and hand marks', 'Pet hair', 'Pet urine odour', 'Dust mites and dust'],
    honestTitle: 'Honestly, before we start',
    honest: 'Paint, ink, bleach and years-old stains may not come out completely. We’ll tell you before we start, not after.',
  },
  guarantee: {
    title: 'Not the result we agreed? We come back.',
    text: 'We return and clean again at no extra cost. We agree the expected result before the work, so both sides know what to expect.',
    specTitle: 'Service specification',
    spec: [
      ['Method', 'Hot-water extraction cleaning'],
      ['Drying', '2–4 hours'],
      ['Products', 'Matched to the fabric and the stain'],
      ['Where', 'At your place, nothing to carry out'],
      ['Travel', 'Free in Ursynów, 30–70 zł elsewhere'],
      ['Hours', 'Mon–Fri 8:00–20:00, Sat 9:00–18:00'],
      ['Languages', 'Polski, English, русский, українська'],
    ],
  },
  area: {
    title: 'What travel costs',
    lead: 'Travel in Ursynów is free. Further out, the price depends on the distance.',
    free: 'free',
    outside: 'Your town isn’t listed? Ask us and we’ll quote travel upfront.',
  },
  faq: {
    title: 'Questions before cleaning',
    items: [
      { q: 'How much does sofa cleaning cost?', a: `A 2–3 seat sofa from ${P.sofa} zł, a corner sofa from ${P.corner} zł. We confirm the exact price from a photo, as it depends on size, fabric and how dirty it is. Minimum order is ${site.minOrder} zł.` },
      { q: 'How long does upholstery take to dry?', a: 'Usually 2–4 hours. Faster if you air the room or turn on the heating.' },
      { q: 'What about children, pets and allergies?', a: 'We match products to the fabric and the stain, and once dry the furniture can be used as usual. If someone at home has allergies, or you have a small child or a pet, tell us when you ask for a quote and we’ll choose products with that in mind.' },
      { q: 'What do I need to prepare?', a: 'Access to the furniture, a power socket and a tap. We bring everything else.' },
      { q: 'Will every stain come out?', a: 'Most will. Paint, ink, bleach and very old stains may leave a trace. We assess it from a photo or on site, before we start.' },
      { q: 'How much is travel?', a: 'Free in Ursynów. Mokotów, Wilanów, Włochy and Piaseczno: 30 zł. Further districts, Pruszków, Janki and Konstancin: 50 zł. Białołęka, Bielany and the farthest areas: 70 zł. Travel is charged once, however many items we clean.' },
    ],
  },
  contact: {
    title: 'Call, message or send your list',
    lead: 'We answer in Polish, English, Russian and Ukrainian.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    hoursLabel: 'Hours',
    hours: 'Mon–Fri 8:00–20:00, Sat 9:00–18:00',
    formTitle: 'Quote request',
    email: 'Email (optional)',
    service: 'What are we cleaning?',
    servicePick: 'Choose from the list',
    serviceOther: 'Something else',
    message: 'Message (optional)',
    submit: 'Send request',
  },
  footer: { tagline: 'Upholstery, corner sofa and mattress cleaning in Warsaw.', rights: 'All rights reserved.' },
  bar: { call: 'Call', whatsapp: 'WhatsApp', price: 'Price', book: 'Book' },
  diy: {
    title: 'Rather do it yourself? Rent a Kärcher',
    text: `We bring a Kärcher Puzzi in the evening, with cleaning products and a video guide. From ${rental.day} zł a day. Not working out? We finish the job and deduct the rental.`,
    cta: 'Rental with delivery',
  },
};

const ru: Dict = {
  htmlLang: 'ru',
  ogLocale: 'ru_RU',
  metaTitle: `Химчистка диванов и матрасов в Варшаве от ${P.sofa} zł | Bez Brudu`,
  metaDesc: 'Химчистка мягкой мебели, угловых диванов и матрасов у вас дома в Варшаве. Экстракция горячей водой, сохнет 2–4 ч, выезд на Урсынув бесплатно. Цены на сайте.',
  skip: 'Перейти к содержанию',
  nav: { prices: 'Цены', rental: 'Прокат', how: 'Как это работает', stains: 'Пятна', faq: 'Вопросы', contact: 'Контакты' },
  menu: 'Меню',
  close: 'Закрыть',
  langLabel: 'Язык',
  call: 'Позвонить',
  whatsapp: 'WhatsApp',
  hero: {
    title: 'Химчистка диванов и матрасов у вас дома',
    lead: 'Приезжаем с экстрактором, чистим на месте, а через 2–4 часа вы садитесь на сухой диван. Цену можно посчитать прямо здесь, без звонка.',
    clean: 'Чисто',
    drawingLabel: 'Рисунок дивана с пятнами, которые можно стереть',
    pins: [
      ['Сохнет 2–4 часа', 'вечером садитесь на сухой диван'],
      ['Экстракция горячей водой', 'грязь вымывается из поролона, а не размазывается по ткани'],
      ['Ничего не выносим', 'чистим там, где диван стоит'],
    ],
  },
  game: {
    start: `Очистите диван до 100% и получите −${promo.percent}% на первый заказ`,
    tap: 'Коснитесь дивана и чистите пальцем',
    going: 'Ещё немного, остались пятна',
    done: 'Готово! Ваш код {code} уже в форме',
    doneNoCode: `Готово! Напишите или скажите, что почистили диван, и мы сделаем −${promo.percent}%`,
    goal: `100% = −${promo.percent}%`,
    use: 'К расчёту',
    keyboard: 'Почистить диван',
  },
  sheet: {
    title: 'Посчитать цену',
    sub: 'Отметьте, что нужно почистить',
    items: {
      sofa: 'Диван, 2–3 места',
      corner: 'Угловой диван',
      armchair: 'Кресло',
      chair: 'Мягкий стул',
      mattress1: 'Матрас 1-сп., 1 сторона',
      mattress2: 'Матрас 2-сп., 1 сторона',
      carpet: 'Ковёр, ковролин',
    },
    from: 'от',
    pcs: 'шт.',
    m2: 'м²',
    less: 'Меньше',
    more: 'Больше',
    total: 'Итого от',
    minApplied: 'минимальный заказ',
    travel: 'Выезд',
    travelPick: 'Выберите район',
    travelOther: 'Другой город (уточним)',
    code: 'Промокод',
    codeNote: 'Код одноразовый и действует только при отправке формы. Скидка на услугу, без выезда.',
    discount: 'Скидка',
    note: `Минимум ${site.minOrder} zł за услугу, плюс выезд.`,
    name: 'Имя',
    phone: 'Телефон',
    submit: 'Отправить список, перезвоним',
    or: 'или',
    fine: 'Цены ориентировочные. Точную цену назовём по фото, всегда до начала работы.',
  },
  form: {
    sending: 'Отправляем…',
    successTitle: 'Список получили',
    success: 'Перезвоним в рабочее время: пн–пт 8:00–20:00, сб 9:00–18:00.',
    error: 'Не удалось отправить. Позвоните или напишите в WhatsApp, мы ответим.',
    errPhone: 'Укажите телефон, чтобы мы могли перезвонить.',
    errName: 'Как к вам обращаться?',
    privacy: 'Используем данные только для связи по этой оценке.',
  },
  steps: {
    title: 'Как это работает',
    items: [
      ['Отправляете список или звоните', 'Говорите, что нужно почистить. Фото пятен можно прислать в WhatsApp.'],
      ['Согласуем цену и время', 'Цену вы знаете до приезда. Дату выбираете вы.'],
      ['Приезжаем и чистим', 'Пылесосим, подбираем средство под ткань, экстракция горячей водой.'],
      ['Через 2–4 часа садитесь', 'Проветрите комнату, и ткань высохнет быстрее.'],
    ],
  },
  stains: {
    title: 'Что выводим с обивки',
    lead: 'Самые частые причины, по которым нам звонят.',
    items: ['Кофе и чай', 'Вино и соки', 'Жирные пятна', 'Пот и следы рук', 'Шерсть животных', 'Запах мочи животных', 'Клещи и пыль'],
    honestTitle: 'Честно, до начала работы',
    honest: 'Краска, чернила, отбеливатель и пятна многолетней давности могут не уйти полностью. Скажем об этом до начала, а не после.',
  },
  guarantee: {
    title: 'Результат не такой, как договорились? Вернёмся.',
    text: 'Приедем снова и почистим ещё раз без доплаты. Результат согласуем до работы, чтобы обе стороны знали, чего ждать.',
    specTitle: 'Характеристики услуги',
    spec: [
      ['Метод', 'Экстракционная чистка горячей водой'],
      ['Высыхание', '2–4 часа'],
      ['Средства', 'Подбираем под ткань и тип пятна'],
      ['Где', 'У вас дома, мебель не выносим'],
      ['Выезд', 'Урсынув бесплатно, дальше 30–70 zł'],
      ['Часы', 'Пн–пт 8:00–20:00, сб 9:00–18:00'],
      ['Языки', 'Polski, English, русский, українська'],
    ],
  },
  area: {
    title: 'Сколько стоит выезд',
    lead: 'На Урсынув приезжаем бесплатно. Дальше цена зависит от расстояния.',
    free: 'бесплатно',
    outside: 'Вашего города нет в списке? Спросите, стоимость выезда назовём заранее.',
  },
  faq: {
    title: 'Вопросы перед чисткой',
    items: [
      { q: 'Сколько стоит химчистка дивана?', a: `Диван на 2–3 места от ${P.sofa} zł, угловой от ${P.corner} zł. Точную цену назовём по фото: она зависит от размера, ткани и загрязнения. Минимальный заказ ${site.minOrder} zł.` },
      { q: 'Сколько сохнет обивка?', a: 'Обычно 2–4 часа. Быстрее, если проветрить комнату или включить отопление.' },
      { q: 'А если дома дети, животные или аллергики?', a: 'Подбираем средства под ткань и тип пятна, после высыхания мебелью можно пользоваться как обычно. Если дома аллергик, маленький ребёнок или животное, скажите при оценке: подберём средства с учётом этого.' },
      { q: 'Что нужно подготовить?', a: 'Доступ к мебели, розетку и кран. Всё остальное привезём.' },
      { q: 'Все пятна уйдут?', a: 'Большинство да. Краска, чернила, отбеливатель и очень старые пятна могут оставить след. Оценим по фото или на месте, до начала работы.' },
      { q: 'Сколько стоит выезд?', a: 'Урсынув бесплатно. Мокотув, Вилянув, Влохи и Пясечно: 30 zł. Более дальние районы, Прушкув, Янки и Констанцин: 50 zł. Бялоленка, Беляны и самые дальние районы: 70 zł. Выезд оплачивается один раз, сколько бы мебели мы ни чистили.' },
    ],
  },
  contact: {
    title: 'Позвоните, напишите или отправьте список',
    lead: 'Отвечаем на польском, английском, русском и украинском.',
    phoneLabel: 'Телефон',
    emailLabel: 'E-mail',
    hoursLabel: 'Часы работы',
    hours: 'Пн–пт 8:00–20:00, сб 9:00–18:00',
    formTitle: 'Запрос на оценку',
    email: 'E-mail (необязательно)',
    service: 'Что чистим?',
    servicePick: 'Выберите из списка',
    serviceOther: 'Другое',
    message: 'Сообщение (необязательно)',
    submit: 'Отправить запрос',
  },
  footer: { tagline: 'Химчистка мягкой мебели, угловых диванов и матрасов в Варшаве.', rights: 'Все права защищены.' },
  bar: { call: 'Звонок', whatsapp: 'WhatsApp', price: 'Цена', book: 'Бронь' },
  diy: {
    title: 'Хотите сами? Возьмите Kärcher',
    text: `Привезём Kärcher Puzzi вечером, с химией и видеоинструкцией. От ${rental.day} zł в сутки. Не получится? Дочистим сами и вычтем стоимость проката.`,
    cta: 'Прокат с доставкой',
  },
};

const uk: Dict = {
  htmlLang: 'uk',
  ogLocale: 'uk_UA',
  metaTitle: `Хімчистка диванів і матраців у Варшаві від ${P.sofa} zł | Bez Brudu`,
  metaDesc: 'Хімчистка м’яких меблів, кутових диванів і матраців у вас удома у Варшаві. Екстракція гарячою водою, сохне 2–4 год, виїзд на Урсинів безкоштовно. Ціни на сайті.',
  skip: 'Перейти до змісту',
  nav: { prices: 'Ціни', rental: 'Прокат', how: 'Як це працює', stains: 'Плями', faq: 'Питання', contact: 'Контакти' },
  menu: 'Меню',
  close: 'Закрити',
  langLabel: 'Мова',
  call: 'Зателефонувати',
  whatsapp: 'WhatsApp',
  hero: {
    title: 'Хімчистка диванів і матраців у вас удома',
    lead: 'Приїжджаємо з екстрактором, чистимо на місці, а за 2–4 години ви сідаєте на сухий диван. Ціну можна порахувати просто тут, без дзвінка.',
    clean: 'Чисто',
    drawingLabel: 'Малюнок дивана з плямами, які можна стерти',
    pins: [
      ['Сохне 2–4 години', 'увечері сідаєте на сухий диван'],
      ['Екстракція гарячою водою', 'бруд вимивається з поролону, а не розмазується тканиною'],
      ['Нічого не виносимо', 'чистимо там, де диван стоїть'],
    ],
  },
  game: {
    start: `Очистіть диван до 100% і отримайте −${promo.percent}% на перше замовлення`,
    tap: 'Торкніться дивана й чистіть пальцем',
    going: 'Ще трохи, залишилися плями',
    done: 'Готово! Ваш код {code} вже у формі',
    doneNoCode: `Готово! Напишіть або скажіть, що почистили диван, і ми зробимо −${promo.percent}%`,
    goal: `100% = −${promo.percent}%`,
    use: 'До розрахунку',
    keyboard: 'Почистити диван',
  },
  sheet: {
    title: 'Порахувати ціну',
    sub: 'Позначте, що потрібно почистити',
    items: {
      sofa: 'Диван, 2–3 місця',
      corner: 'Кутовий диван',
      armchair: 'Крісло',
      chair: 'М’який стілець',
      mattress1: 'Матрац 1-сп., 1 сторона',
      mattress2: 'Матрац 2-сп., 1 сторона',
      carpet: 'Килим, ковролін',
    },
    from: 'від',
    pcs: 'шт.',
    m2: 'м²',
    less: 'Менше',
    more: 'Більше',
    total: 'Разом від',
    minApplied: 'мінімальне замовлення',
    travel: 'Виїзд',
    travelPick: 'Оберіть район',
    travelOther: 'Інше місто (уточнимо)',
    code: 'Промокод',
    codeNote: 'Код одноразовий і діє лише під час надсилання форми. Знижка на послугу, без виїзду.',
    discount: 'Знижка',
    note: `Мінімум ${site.minOrder} zł за послугу, плюс виїзд.`,
    name: 'Ім’я',
    phone: 'Телефон',
    submit: 'Надіслати список, передзвонимо',
    or: 'або',
    fine: 'Ціни орієнтовні. Точну ціну назвемо за фото, завжди до початку роботи.',
  },
  form: {
    sending: 'Надсилаємо…',
    successTitle: 'Список отримали',
    success: 'Передзвонимо в робочий час: пн–пт 8:00–20:00, сб 9:00–18:00.',
    error: 'Не вдалося надіслати. Зателефонуйте або напишіть у WhatsApp, ми відповімо.',
    errPhone: 'Вкажіть телефон, щоб ми могли передзвонити.',
    errName: 'Як до вас звертатися?',
    privacy: 'Використовуємо дані лише для зв’язку щодо цієї оцінки.',
  },
  steps: {
    title: 'Як це працює',
    items: [
      ['Надсилаєте список або дзвоните', 'Кажете, що потрібно почистити. Фото плям можна надіслати у WhatsApp.'],
      ['Погоджуємо ціну й час', 'Ціну ви знаєте до приїзду. Дату обираєте ви.'],
      ['Приїжджаємо й чистимо', 'Пилососимо, підбираємо засіб під тканину, екстракція гарячою водою.'],
      ['За 2–4 години сідаєте', 'Провітріть кімнату, і тканина висохне швидше.'],
    ],
  },
  stains: {
    title: 'Що виводимо з оббивки',
    lead: 'Найчастіші причини, з яких нам телефонують.',
    items: ['Кава й чай', 'Вино й соки', 'Жирні плями', 'Піт і сліди рук', 'Шерсть тварин', 'Запах сечі тварин', 'Кліщі й пил'],
    honestTitle: 'Чесно, до початку роботи',
    honest: 'Фарба, чорнило, відбілювач і плями багаторічної давності можуть не зійти повністю. Скажемо про це до початку, а не після.',
  },
  guarantee: {
    title: 'Результат не такий, як домовилися? Повернемося.',
    text: 'Приїдемо знову й почистимо ще раз без доплати. Результат погоджуємо до роботи, щоб обидві сторони знали, чого чекати.',
    specTitle: 'Характеристики послуги',
    spec: [
      ['Метод', 'Екстракційне чищення гарячою водою'],
      ['Висихання', '2–4 години'],
      ['Засоби', 'Підбираємо під тканину й тип плями'],
      ['Де', 'У вас удома, меблі не виносимо'],
      ['Виїзд', 'Урсинів безкоштовно, далі 30–70 zł'],
      ['Години', 'Пн–пт 8:00–20:00, сб 9:00–18:00'],
      ['Мови', 'Polski, English, русский, українська'],
    ],
  },
  area: {
    title: 'Скільки коштує виїзд',
    lead: 'На Урсинів приїжджаємо безкоштовно. Далі ціна залежить від відстані.',
    free: 'безкоштовно',
    outside: 'Вашого міста немає у списку? Запитайте, вартість виїзду назвемо заздалегідь.',
  },
  faq: {
    title: 'Питання перед чищенням',
    items: [
      { q: 'Скільки коштує хімчистка дивана?', a: `Диван на 2–3 місця від ${P.sofa} zł, кутовий від ${P.corner} zł. Точну ціну назвемо за фото: вона залежить від розміру, тканини й забруднення. Мінімальне замовлення ${site.minOrder} zł.` },
      { q: 'Скільки сохне оббивка?', a: 'Зазвичай 2–4 години. Швидше, якщо провітрити кімнату або увімкнути опалення.' },
      { q: 'А якщо вдома діти, тварини чи алергіки?', a: 'Підбираємо засоби під тканину й тип плями, після висихання меблями можна користуватися як зазвичай. Якщо вдома алергік, маленька дитина чи тварина, скажіть під час оцінки: підберемо засоби з урахуванням цього.' },
      { q: 'Що потрібно підготувати?', a: 'Доступ до меблів, розетку й кран. Усе інше привеземо.' },
      { q: 'Усі плями зійдуть?', a: 'Більшість так. Фарба, чорнило, відбілювач і дуже старі плями можуть залишити слід. Оцінимо за фото або на місці, до початку роботи.' },
      { q: 'Скільки коштує виїзд?', a: 'Урсинів безкоштовно. Мокотув, Віланув, Влохи й Пясечно: 30 zł. Дальші райони, Прушкув, Янки й Констанцин: 50 zł. Бялоленка, Беляни й найвіддаленіші райони: 70 zł. Виїзд оплачується один раз, скільки б меблів ми не чистили.' },
    ],
  },
  contact: {
    title: 'Зателефонуйте, напишіть або надішліть список',
    lead: 'Відповідаємо польською, англійською, російською та українською.',
    phoneLabel: 'Телефон',
    emailLabel: 'E-mail',
    hoursLabel: 'Години роботи',
    hours: 'Пн–пт 8:00–20:00, сб 9:00–18:00',
    formTitle: 'Запит на оцінку',
    email: 'E-mail (необов’язково)',
    service: 'Що чистимо?',
    servicePick: 'Оберіть зі списку',
    serviceOther: 'Інше',
    message: 'Повідомлення (необов’язково)',
    submit: 'Надіслати запит',
  },
  footer: { tagline: 'Хімчистка м’яких меблів, кутових диванів і матраців у Варшаві.', rights: 'Усі права захищені.' },
  bar: { call: 'Дзвінок', whatsapp: 'WhatsApp', price: 'Ціна', book: 'Бронь' },
  diy: {
    title: 'Хочете самі? Візьміть Kärcher',
    text: `Привеземо Kärcher Puzzi ввечері, з хімією та відеоінструкцією. Від ${rental.day} zł за добу. Не вийде? Дочистимо самі й віднімемо вартість прокату.`,
    cta: 'Прокат з доставкою',
  },
};

// Typographic tidy-up: no one-letter word at a line end (PL/RU/UK rule), no break inside "2–4".
const tidy = (s: string) =>
  s
    .replace(/(^|[\s(])([\p{L}])\s/gu, '$1$2 ')
    .replace(/(\d)–(\d)/g, '$1⁠–⁠$2')
    .replace(/(\d) (zł|km|км)/g, '$1 $2');

function deep<T>(v: T): T {
  if (typeof v === 'string') return tidy(v) as T;
  if (Array.isArray(v)) return v.map(deep) as T;
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deep(x)])) as T;
  return v;
}

export const dicts: Record<Lang, Dict> = { pl: deep(pl), en: deep(en), ru: deep(ru), uk: deep(uk) };
export { deep as tidyDeep };
