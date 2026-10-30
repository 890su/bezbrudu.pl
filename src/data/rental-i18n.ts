import { rental as R, type Lang } from './site';
import { tidyDeep } from './i18n';

type Pair = [string, string];
type Faq = { q: string; a: string };

export interface RentalDict {
  metaTitle: string;
  metaDesc: string;
  title: string;
  lead: string;
  kitLabel: string;
  kit: Pair[];
  book: {
    title: string;
    sub: string;
    pkgLabel: string;
    day: string;
    dayNote: string;
    weekend: string;
    weekendNote: string;
    date: string;
    slot: string;
    slots: { evening: string; morning: string; friEvening: string; satDay: string };
    addonsLabel: string;
    addons: { dryer: string; pets: string };
    travel: string;
    address: string;
    total: string;
    deposit: string;
    submit: string;
    fine: string;
    successTitle: string;
    success: string;
    errDate: string;
  };
  stepsTitle: string;
  steps: Pair[];
  usesTitle: string;
  uses: Pair[];
  guaranteeTitle: string;
  guaranteeText: string;
  specTitle: string;
  spec: Pair[];
  faqTitle: string;
  faq: Faq[];
  serviceTitle: string;
  serviceText: string;
  serviceCta: string;
  areaTitle: string;
  areaText: string;
  contactTitle: string;
}

const pl: RentalDict = {
  metaTitle: `Wynajem odkurzacza piorącego Warszawa – Kärcher od ${R.day} zł`,
  metaDesc: `Wypożyczalnia odkurzaczy piorących z dowozem w Warszawie: Kärcher Puzzi wieczorem, chemia do plam, instrukcja wideo. Od ${R.day} zł za dobę.`,
  title: 'Wynajem odkurzacza piorącego z dowozem',
  lead: 'Wypierz kanapę sam, jak profesjonalista. Przywozimy Kärcher Puzzi wieczorem, z chemią dobraną do plamy i instrukcją wideo. Nie wyjdzie? Przyjedziemy i doczyścimy, a koszt wynajmu odliczymy.',
  kitLabel: 'Rysunek zestawu do wynajęcia: odkurzacz piorący, ssawki, proszek, spryskiwacz i telefon z instrukcją',
  kit: [
    ['Kärcher Puzzi 10/1', 'profesjonalny odkurzacz piorący, zbiornik 10 l'],
    ['Ssawka do tapicerki', 'kanapy, fotele, materace, fotele w aucie'],
    ['Ssawka podłogowa', 'dywany i wykładziny'],
    [`Proszek, ${R.powderDay} g`, 'około 20–30 m² tkaniny'],
    ['Spryskiwacz do plam', 'środek dobrany do Twojej plamy'],
    ['Wideo i wsparcie', 'instrukcja krok po kroku i pytania na WhatsAppie'],
  ],
  book: {
    title: 'Zarezerwuj',
    sub: 'Jeden kurs po mieście: przywozimy i odbieramy o stałej porze.',
    pkgLabel: 'Pakiet',
    day: 'Doba',
    dayNote: 'od przywozu do tej samej pory następnego dnia',
    weekend: 'Weekend',
    weekendNote: 'piątek wieczorem lub sobota, odbiór w niedzielę wieczorem',
    date: 'Dzień dostawy',
    slot: 'Pora dostawy',
    slots: { evening: 'Wieczorem, 18:00–21:00', morning: 'Rano, 8:00–10:00', friEvening: 'Piątek wieczorem, 18:00–21:00', satDay: 'Sobota w dzień, 10:00–16:00' },
    addonsLabel: 'Dodatki',
    addons: { dryer: 'Suszarka do tapicerki', pets: 'Zestaw „Zwierzęta”: neutralizator zapachu moczu' },
    travel: 'Dojazd',
    address: 'Adres dostawy',
    total: 'Razem',
    deposit: `Kaucja ${R.deposit} zł BLIK-iem, zwracamy przy odbiorze.`,
    submit: 'Zarezerwuj, potwierdzimy',
    fine: `Rezerwację potwierdzamy telefonicznie lub na WhatsAppie. Dostawa na dziś: zamów do ${R.cutoff}. Dodatkowy proszek ${R.extraPowder} zł za 100 g.`,
    successTitle: 'Mamy Twoją rezerwację',
    success: 'Potwierdzimy termin i godzinę telefonicznie lub na WhatsAppie.',
    errDate: 'Wybierz dzień dostawy.',
  },
  stepsTitle: 'Jak działa wynajem',
  steps: [
    ['Rezerwujesz', 'Pakiet, dzień i pora. Potwierdzamy na WhatsAppie.'],
    ['Przywozimy', 'O ustalonej porze, dokładną godzinę podamy w dniu dostawy.'],
    ['Pierzesz', 'Wideo pokazuje każdy krok. Pytania? Pisz na WhatsAppie.'],
    ['Odbieramy', 'Następnego dnia o tej samej porze. Kaucja wraca od razu.'],
  ],
  usesTitle: 'Kiedy się przydaje',
  uses: [
    ['Dziecko albo zwierzę zabrudziło kanapę', 'Plamy, mocz, zapach: dobierzemy środek, zanim przywieziemy sprzęt.'],
    ['Oddajesz wynajmowane mieszkanie', 'Kanapa i dywan w jeden weekend, żeby kaucja wróciła w całości.'],
    ['Fotele w samochodzie', 'Ta sama ssawka do tapicerki poradzi sobie z fotelami w aucie.'],
    ['Regularne odświeżanie', 'Raz na pół roku, taniej niż wizyta, jeśli masz czas.'],
  ],
  guaranteeTitle: 'Nie wyszło? Doczyścimy.',
  guaranteeText: `Jeśli efekt Cię nie zadowoli, w ciągu ${R.guaranteeDays} dni przyjedziemy i wypierzemy mebel sami, a koszt wynajmu odliczymy od ceny usługi.`,
  specTitle: 'Specyfikacja wynajmu',
  spec: [
    ['Sprzęt', 'Kärcher Puzzi 10/1, 1250 W, zbiornik 10 l'],
    ['Wydajność', '100 g proszku na 10–15 m² tkaniny'],
    ['Schnięcie', '2–4 godziny, z suszarką szybciej'],
    ['Kaucja', `${R.deposit} zł BLIK-iem, zwrot przy odbiorze`],
    ['Dostawa', 'Wieczorem 18–21 lub rano 8–10, w weekend także w dzień'],
    ['Higiena', 'Zbiorniki i węże myjemy i dezynfekujemy po każdym kliencie'],
    ['Wsparcie', 'Polski, English, русский, українська'],
  ],
  faqTitle: 'Pytania przed wynajmem',
  faq: [
    { q: 'Czy nie taniej kupić własny?', a: `Profesjonalny Kärcher Puzzi kosztuje około 2200 zł. Domowe odkurzacze piorące są tańsze, ale słabiej ssą i zostawiają więcej wody w tkaninie. Jeden wynajem to ${R.day} zł.` },
    { q: 'A jeśli przemoczę albo zniszczę kanapę?', a: 'Wideo pokazuje, ile wody i proszku użyć. Dozujemy proszek za Ciebie, a suszarka skraca schnięcie. Jeśli coś pójdzie nie tak, przyjedziemy i dokończymy.' },
    { q: 'Czy plama na pewno zejdzie?', a: 'Wyślij zdjęcie przed wynajmem. Powiemy uczciwie, czy zejdzie, i dobierzemy środek. Farba, atrament i bardzo stare plamy mogą zostawić ślad.' },
    { q: 'Gdzie indziej jest taniej. Za co płacę?', a: 'Za dowóz o stałej porze, chemię dobraną do plamy, wsparcie w czterech językach i gwarancję efektu. Na Ursynowie dowóz jest za darmo.' },
    { q: 'Czy sprzęt jest czysty po poprzednim kliencie?', a: 'Tak. Zbiorniki i węże myjemy i dezynfekujemy po każdym wynajmie, ssawki dostajesz czyste.' },
    { q: 'Ile to schnie?', a: 'Zwykle 2–4 godziny. Z suszarką i przewietrzonym pokojem szybciej.' },
    { q: 'Jak wygląda kaucja?', a: `${R.deposit} zł BLIK-iem przy dostawie. Oddajemy ją przy odbiorze sprzętu.` },
  ],
  serviceTitle: 'Wolisz, żebyśmy zrobili to za Ciebie?',
  serviceText: 'Pranie kanapy u Ciebie w domu, schnie 2–4 godziny. Cenę sprawdzisz od razu.',
  serviceCta: 'Cennik prania',
  areaTitle: 'Wypożyczalnia odkurzaczy piorących w Warszawie',
  areaText: 'Wypożyczalnię mamy na Ursynowie, a Kärchera dowozimy do domu w całej Warszawie i okolicach: na Mokotów, Wilanów, do Włoch i Piaseczna, na Ochotę, Wolę, Śródmieście, Pragę, Bemowo, Ursus i Wawer, do Pruszkowa, Janek i Konstancina, a także na Białołękę, Bielany, Targówek i Żoliborz. Dowóz i odbiór liczymy raz, według odległości:',
  contactTitle: 'Zadzwoń albo napisz',
};

const en: RentalDict = {
  metaTitle: `Carpet Cleaner Rental Warsaw – Kärcher from ${R.day} zł`,
  metaDesc: `Carpet and upholstery cleaner rental in Warsaw, delivered in the evening: Kärcher Puzzi, stain products, video guide. From ${R.day} zł a day.`,
  title: 'Carpet cleaner rental with delivery',
  lead: 'Clean your sofa yourself, like a pro. We bring a Kärcher Puzzi in the evening, with products matched to your stain and a video guide. Not working out? We come, finish the job and deduct the rental.',
  kitLabel: 'Drawing of the rental kit: extractor, nozzles, powder, spray bottle and a phone with the guide',
  kit: [
    ['Kärcher Puzzi 10/1', 'professional spray extractor, 10 l tank'],
    ['Upholstery nozzle', 'sofas, armchairs, mattresses, car seats'],
    ['Floor nozzle', 'rugs and fitted carpets'],
    [`Powder, ${R.powderDay} g`, 'about 20–30 m² of fabric'],
    ['Stain spray bottle', 'a product matched to your stain'],
    ['Video and support', 'step-by-step guide and questions on WhatsApp'],
  ],
  book: {
    title: 'Book',
    sub: 'One route across the city: we deliver and collect at a fixed time.',
    pkgLabel: 'Package',
    day: 'Day',
    dayNote: 'from delivery to the same time the next day',
    weekend: 'Weekend',
    weekendNote: 'Friday evening or Saturday, collected Sunday evening',
    date: 'Delivery day',
    slot: 'Delivery time',
    slots: { evening: 'Evening, 18:00–21:00', morning: 'Morning, 8:00–10:00', friEvening: 'Friday evening, 18:00–21:00', satDay: 'Saturday daytime, 10:00–16:00' },
    addonsLabel: 'Extras',
    addons: { dryer: 'Upholstery dryer', pets: '“Pets” kit: urine odour neutraliser' },
    travel: 'Travel',
    address: 'Delivery address',
    total: 'Total',
    deposit: `Deposit ${R.deposit} zł by BLIK, returned on collection.`,
    submit: 'Book, we’ll confirm',
    fine: `We confirm by phone or WhatsApp. Same-day delivery: order by ${R.cutoff}. Extra powder ${R.extraPowder} zł per 100 g.`,
    successTitle: 'We have your booking',
    success: 'We’ll confirm the day and time by phone or WhatsApp.',
    errDate: 'Choose a delivery day.',
  },
  stepsTitle: 'How the rental works',
  steps: [
    ['You book', 'Package, day and time. We confirm on WhatsApp.'],
    ['We deliver', 'At the agreed time; we send the exact hour on the day.'],
    ['You clean', 'The video shows every step. Questions? Message us on WhatsApp.'],
    ['We collect', 'Next day at the same time. Your deposit comes back right away.'],
  ],
  usesTitle: 'When it comes in handy',
  uses: [
    ['A child or pet stained the sofa', 'Stains, urine, odour: we pick the product before we bring the machine.'],
    ['Moving out of a rented flat', 'Sofa and rug in one weekend, so the deposit comes back in full.'],
    ['Car seats', 'The same upholstery nozzle handles car seats.'],
    ['Regular refresh', 'Twice a year, cheaper than a visit if you have the time.'],
  ],
  guaranteeTitle: 'Didn’t work out? We finish it.',
  guaranteeText: `If you are not happy with the result, within ${R.guaranteeDays} days we come and clean the item ourselves and deduct the rental from the service price.`,
  specTitle: 'Rental specification',
  spec: [
    ['Machine', 'Kärcher Puzzi 10/1, 1250 W, 10 l tank'],
    ['Coverage', '100 g of powder per 10–15 m² of fabric'],
    ['Drying', '2–4 hours, faster with the dryer'],
    ['Deposit', `${R.deposit} zł by BLIK, returned on collection`],
    ['Delivery', 'Evening 18–21 or morning 8–10, weekends also daytime'],
    ['Hygiene', 'Tanks and hoses washed and disinfected after every customer'],
    ['Support', 'Polski, English, русский, українська'],
  ],
  faqTitle: 'Questions before renting',
  faq: [
    { q: 'Isn’t it cheaper to buy one?', a: `A professional Kärcher Puzzi costs about 2200 zł. Home spray cleaners are cheaper, but they suck weaker and leave more water in the fabric. One rental is ${R.day} zł.` },
    { q: 'What if I soak or ruin the sofa?', a: 'The video shows how much water and powder to use. We portion the powder for you, and the dryer shortens drying. If something goes wrong, we come and finish.' },
    { q: 'Will the stain definitely come out?', a: 'Send a photo before renting. We’ll tell you honestly whether it will come out and pick the product. Paint, ink and very old stains may leave a trace.' },
    { q: 'It’s cheaper elsewhere. What am I paying for?', a: 'Delivery at a fixed time, products matched to your stain, support in four languages and a result guarantee. Delivery in Ursynów is free.' },
    { q: 'Is the machine clean after the last customer?', a: 'Yes. We wash and disinfect the tanks and hoses after every rental, and you get clean nozzles.' },
    { q: 'How long does it take to dry?', a: 'Usually 2–4 hours. Faster with the dryer and an aired room.' },
    { q: 'How does the deposit work?', a: `${R.deposit} zł by BLIK on delivery. We return it when we collect the machine.` },
  ],
  serviceTitle: 'Rather we did it for you?',
  serviceText: 'Sofa cleaning at your home, dry in 2–4 hours. See the price right away.',
  serviceCta: 'Cleaning prices',
  areaTitle: 'Carpet cleaner rental across Warsaw',
  areaText: 'We are based in Ursynów and deliver the Kärcher to your door across Warsaw and nearby towns: Mokotów, Wilanów, Włochy and Piaseczno, Ochota, Wola, Śródmieście, Praga, Bemowo, Ursus and Wawer, Pruszków, Janki and Konstancin, as well as Białołęka, Bielany, Targówek and Żoliborz. Delivery and collection are charged once, by distance:',
  contactTitle: 'Call or message us',
};

const ru: RentalDict = {
  metaTitle: `Прокат моющего пылесоса в Варшаве – Kärcher от ${R.day} zł`,
  metaDesc: `Прокат моющего пылесоса с доставкой по Варшаве: Kärcher Puzzi 10/1 вечером, химия под ваше пятно, видеоинструкция. От ${R.day} zł в сутки. Не получится? Дочистим.`,
  title: 'Прокат моющего пылесоса с доставкой',
  lead: 'Почистите диван сами, как профессионал. Привозим Kärcher Puzzi вечером, с химией под ваше пятно и видеоинструкцией. Не получится? Приедем, дочистим и вычтем стоимость проката.',
  kitLabel: 'Рисунок набора для проката: моющий пылесос, насадки, порошок, распылитель и телефон с инструкцией',
  kit: [
    ['Kärcher Puzzi 10/1', 'профессиональный моющий пылесос, бак 10 л'],
    ['Насадка для обивки', 'диваны, кресла, матрасы, автокресла'],
    ['Насадка для пола', 'ковры и ковролин'],
    [`Порошок, ${R.powderDay} г`, 'примерно 20–30 м² ткани'],
    ['Распылитель для пятен', 'средство под ваше пятно'],
    ['Видео и поддержка', 'пошаговая инструкция и вопросы в WhatsApp'],
  ],
  book: {
    title: 'Забронировать',
    sub: 'Один маршрут по городу: привозим и забираем в фиксированное время.',
    pkgLabel: 'Пакет',
    day: 'Сутки',
    dayNote: 'от доставки до того же времени следующего дня',
    weekend: 'Выходные',
    weekendNote: 'пятница вечером или суббота, забираем в воскресенье вечером',
    date: 'День доставки',
    slot: 'Время доставки',
    slots: { evening: 'Вечером, 18:00–21:00', morning: 'Утром, 8:00–10:00', friEvening: 'Пятница вечером, 18:00–21:00', satDay: 'Суббота днём, 10:00–16:00' },
    addonsLabel: 'Дополнительно',
    addons: { dryer: 'Сушилка для обивки', pets: 'Набор «Животные»: нейтрализатор запаха мочи' },
    travel: 'Выезд',
    address: 'Адрес доставки',
    total: 'Итого',
    deposit: `Залог ${R.deposit} zł через BLIK, возвращаем при заборе.`,
    submit: 'Забронировать, подтвердим',
    fine: `Подтверждаем по телефону или в WhatsApp. Доставка сегодня: закажите до ${R.cutoff}. Дополнительный порошок ${R.extraPowder} zł за 100 г.`,
    successTitle: 'Бронь получили',
    success: 'Подтвердим день и время по телефону или в WhatsApp.',
    errDate: 'Выберите день доставки.',
  },
  stepsTitle: 'Как работает прокат',
  steps: [
    ['Бронируете', 'Пакет, день и время. Подтверждаем в WhatsApp.'],
    ['Привозим', 'В согласованное время, точный час сообщим в день доставки.'],
    ['Чистите', 'Видео показывает каждый шаг. Вопросы? Пишите в WhatsApp.'],
    ['Забираем', 'На следующий день в то же время. Залог возвращаем сразу.'],
  ],
  usesTitle: 'Когда пригодится',
  uses: [
    ['Ребёнок или питомец испачкал диван', 'Пятна, моча, запах: подберём средство до того, как привезём технику.'],
    ['Съезжаете со съёмной квартиры', 'Диван и ковёр за одни выходные, чтобы вернуть залог полностью.'],
    ['Сиденья в машине', 'Та же насадка для обивки справится с автокреслами.'],
    ['Регулярное освежение', 'Раз в полгода, дешевле выезда, если есть время.'],
  ],
  guaranteeTitle: 'Не получилось? Дочистим.',
  guaranteeText: `Если результат не устроит, в течение ${R.guaranteeDays} дней приедем и почистим мебель сами, а стоимость проката вычтем из цены услуги.`,
  specTitle: 'Характеристики проката',
  spec: [
    ['Техника', 'Kärcher Puzzi 10/1, 1250 Вт, бак 10 л'],
    ['Расход', '100 г порошка на 10–15 м² ткани'],
    ['Высыхание', '2–4 часа, с сушилкой быстрее'],
    ['Залог', `${R.deposit} zł через BLIK, возврат при заборе`],
    ['Доставка', 'Вечером 18–21 или утром 8–10, в выходные и днём'],
    ['Гигиена', 'Баки и шланги моем и дезинфицируем после каждого клиента'],
    ['Поддержка', 'Polski, English, русский, українська'],
  ],
  faqTitle: 'Вопросы перед прокатом',
  faq: [
    { q: 'Не проще купить свой?', a: `Профессиональный Kärcher Puzzi стоит около 2200 zł. Бытовые моющие пылесосы дешевле, но слабее всасывают и оставляют больше воды в ткани. Один прокат стоит ${R.day} zł.` },
    { q: 'А если я перемочу или испорчу диван?', a: 'Видео показывает, сколько воды и порошка брать. Порошок мы отмеряем за вас, а сушилка ускоряет высыхание. Если что-то пойдёт не так, приедем и доделаем.' },
    { q: 'Пятно точно уйдёт?', a: 'Пришлите фото до проката. Честно скажем, уйдёт ли, и подберём средство. Краска, чернила и очень старые пятна могут оставить след.' },
    { q: 'В другом месте дешевле. За что я плачу?', a: 'За доставку в фиксированное время, химию под ваше пятно, поддержку на четырёх языках и гарантию результата. По Урсынуву доставка бесплатная.' },
    { q: 'Техника чистая после предыдущего клиента?', a: 'Да. Баки и шланги моем и дезинфицируем после каждого проката, насадки получаете чистыми.' },
    { q: 'Сколько сохнет?', a: 'Обычно 2–4 часа. С сушилкой и проветриванием быстрее.' },
    { q: 'Как работает залог?', a: `${R.deposit} zł через BLIK при доставке. Возвращаем, когда забираем технику.` },
  ],
  serviceTitle: 'Хотите, чтобы мы сделали это за вас?',
  serviceText: 'Химчистка дивана у вас дома, сохнет 2–4 часа. Цену увидите сразу.',
  serviceCta: 'Цены на химчистку',
  areaTitle: 'Прокат моющего пылесоса по всей Варшаве',
  areaText: 'Мы на Урсынуве и привозим Kärcher домой по всей Варшаве и окрестностям: на Мокотув, Вилянув, во Влохи и Пясечно, на Охоту, Волю, Средместье, Прагу, Бемово, Урсус и Вавер, в Прушкув, Янки и Констанцин, а также на Бялоленку, Беляны, Таргувек и Жолибож. Доставку и забор считаем один раз, по расстоянию:',
  contactTitle: 'Позвоните или напишите',
};

const uk: RentalDict = {
  metaTitle: `Прокат мийного пилососа у Варшаві – Kärcher від ${R.day} zł`,
  metaDesc: `Прокат мийного пилососа з доставкою по Варшаві: Kärcher Puzzi 10/1 ввечері, хімія під вашу пляму, відеоінструкція. Від ${R.day} zł за добу. Не вийде? Дочистимо.`,
  title: 'Прокат мийного пилососа з доставкою',
  lead: 'Почистіть диван самі, як професіонал. Привозимо Kärcher Puzzi ввечері, з хімією під вашу пляму та відеоінструкцією. Не вийде? Приїдемо, дочистимо й віднімемо вартість прокату.',
  kitLabel: 'Малюнок набору для прокату: мийний пилосос, насадки, порошок, розпилювач і телефон з інструкцією',
  kit: [
    ['Kärcher Puzzi 10/1', 'професійний мийний пилосос, бак 10 л'],
    ['Насадка для оббивки', 'дивани, крісла, матраци, автокрісла'],
    ['Насадка для підлоги', 'килими та ковролін'],
    [`Порошок, ${R.powderDay} г`, 'приблизно 20–30 м² тканини'],
    ['Розпилювач для плям', 'засіб під вашу пляму'],
    ['Відео та підтримка', 'покрокова інструкція й питання у WhatsApp'],
  ],
  book: {
    title: 'Забронювати',
    sub: 'Один маршрут містом: привозимо й забираємо у фіксований час.',
    pkgLabel: 'Пакет',
    day: 'Доба',
    dayNote: 'від доставки до того ж часу наступного дня',
    weekend: 'Вихідні',
    weekendNote: 'пʼятниця ввечері або субота, забираємо в неділю ввечері',
    date: 'День доставки',
    slot: 'Час доставки',
    slots: { evening: 'Ввечері, 18:00–21:00', morning: 'Вранці, 8:00–10:00', friEvening: 'Пʼятниця ввечері, 18:00–21:00', satDay: 'Субота вдень, 10:00–16:00' },
    addonsLabel: 'Додатково',
    addons: { dryer: 'Сушарка для оббивки', pets: 'Набір «Тварини»: нейтралізатор запаху сечі' },
    travel: 'Виїзд',
    address: 'Адреса доставки',
    total: 'Разом',
    deposit: `Застава ${R.deposit} zł через BLIK, повертаємо під час забору.`,
    submit: 'Забронювати, підтвердимо',
    fine: `Підтверджуємо телефоном або у WhatsApp. Доставка сьогодні: замовте до ${R.cutoff}. Додатковий порошок ${R.extraPowder} zł за 100 г.`,
    successTitle: 'Бронь отримали',
    success: 'Підтвердимо день і час телефоном або у WhatsApp.',
    errDate: 'Оберіть день доставки.',
  },
  stepsTitle: 'Як працює прокат',
  steps: [
    ['Бронюєте', 'Пакет, день і час. Підтверджуємо у WhatsApp.'],
    ['Привозимо', 'У погоджений час, точну годину повідомимо в день доставки.'],
    ['Чистите', 'Відео показує кожен крок. Питання? Пишіть у WhatsApp.'],
    ['Забираємо', 'Наступного дня в той самий час. Заставу повертаємо одразу.'],
  ],
  usesTitle: 'Коли знадобиться',
  uses: [
    ['Дитина чи тварина забруднили диван', 'Плями, сеча, запах: підберемо засіб ще до того, як привеземо техніку.'],
    ['Зʼїжджаєте зі знімної квартири', 'Диван і килим за одні вихідні, щоб повернути заставу повністю.'],
    ['Сидіння в автомобілі', 'Та сама насадка для оббивки впорається з автокріслами.'],
    ['Регулярне освіження', 'Раз на пів року, дешевше за виїзд, якщо маєте час.'],
  ],
  guaranteeTitle: 'Не вийшло? Дочистимо.',
  guaranteeText: `Якщо результат не влаштує, протягом ${R.guaranteeDays} днів приїдемо й почистимо меблі самі, а вартість прокату віднімемо від ціни послуги.`,
  specTitle: 'Характеристики прокату',
  spec: [
    ['Техніка', 'Kärcher Puzzi 10/1, 1250 Вт, бак 10 л'],
    ['Витрата', '100 г порошку на 10–15 м² тканини'],
    ['Висихання', '2–4 години, із сушаркою швидше'],
    ['Застава', `${R.deposit} zł через BLIK, повернення під час забору`],
    ['Доставка', 'Ввечері 18–21 або вранці 8–10, у вихідні й удень'],
    ['Гігієна', 'Баки й шланги миємо та дезінфікуємо після кожного клієнта'],
    ['Підтримка', 'Polski, English, русский, українська'],
  ],
  faqTitle: 'Питання перед прокатом',
  faq: [
    { q: 'Чи не простіше купити свій?', a: `Професійний Kärcher Puzzi коштує близько 2200 zł. Побутові мийні пилососи дешевші, але слабше всмоктують і залишають більше води в тканині. Один прокат коштує ${R.day} zł.` },
    { q: 'А якщо я перемочу чи зіпсую диван?', a: 'Відео показує, скільки води й порошку брати. Порошок ми відміряємо за вас, а сушарка пришвидшує висихання. Якщо щось піде не так, приїдемо й доробимо.' },
    { q: 'Пляма точно зійде?', a: 'Надішліть фото до прокату. Чесно скажемо, чи зійде, і підберемо засіб. Фарба, чорнило й дуже старі плями можуть залишити слід.' },
    { q: 'Деінде дешевше. За що я плачу?', a: 'За доставку у фіксований час, хімію під вашу пляму, підтримку чотирма мовами й гарантію результату. По Урсинову доставка безкоштовна.' },
    { q: 'Техніка чиста після попереднього клієнта?', a: 'Так. Баки й шланги миємо та дезінфікуємо після кожного прокату, насадки отримуєте чистими.' },
    { q: 'Скільки сохне?', a: 'Зазвичай 2–4 години. Із сушаркою й провітрюванням швидше.' },
    { q: 'Як працює застава?', a: `${R.deposit} zł через BLIK під час доставки. Повертаємо, коли забираємо техніку.` },
  ],
  serviceTitle: 'Хочете, щоб ми зробили це за вас?',
  serviceText: 'Хімчистка дивана у вас удома, сохне 2–4 години. Ціну побачите одразу.',
  serviceCta: 'Ціни на хімчистку',
  areaTitle: 'Прокат мийного пилососа по всій Варшаві',
  areaText: 'Ми на Урсинові й привозимо Kärcher додому по всій Варшаві та околицях: на Мокотув, Віланув, у Влохи й Пясечно, на Охоту, Волю, Середмістя, Прагу, Бемово, Урсус і Вавер, у Прушкув, Янки й Констанцин, а також на Бялоленку, Беляни, Таргувек і Жолібож. Доставку й забір рахуємо один раз, за відстанню:',
  contactTitle: 'Зателефонуйте або напишіть',
};

export const rentalDicts: Record<Lang, RentalDict> = { pl: tidyDeep(pl), en: tidyDeep(en), ru: tidyDeep(ru), uk: tidyDeep(uk) };
