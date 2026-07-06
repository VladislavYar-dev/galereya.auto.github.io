/**
 * КАТАЛОГ АВТОМОБИЛЕЙ — Галерея Авто
 *
 * Как добавить автомобиль:
 * 1. Создайте папку: catalog/<id>/
 * 2. Положите фотографии: catalog/<id>/1.jpg, 2.jpg, 3.jpg ...
 * 3. Добавьте объект в массив CATALOG ниже.
 *
 * Поля:
 *   id          — уникальный идентификатор (slug, без пробелов)
 *   name        — название автомобиля
 *   year        — год выпуска
 *   origin      — страна/источник (например "из Германии")
 *   engine      — двигатель (например "2.0 · 190 л.с.")
 *   mileage     — пробег
 *   transmission— коробка передач
 *   price       — цена (строка, например "89 900 BYN")
 *   priceNote   — примечание к цене (например "или в кредит от 1 200 BYN/мес.")
 *   badge       — ярлык на фото (null = без ярлыка)
 *   badgeColor  — цвет ярлыка (null = золотой по умолчанию)
 *   description — подробное описание автомобиля
 *   photos      — массив путей к фотографиям (относительно index.html)
 */

const CATALOG = [
  {
    id: "bmw-5-2021",
    name: "BMW 5 Series",
    year: 2021,
    origin: "из Германии",
    engine: "2.0 · 190 л.с.",
    mileage: "48 000 км",
    transmission: "Автомат",
    price: "89 900 BYN",
    priceNote: "или в кредит от 1 150 BYN/мес.",
    badge: "Хит продаж",
    badgeColor: null,
    description: "Один владелец, полное обслуживание у официального дилера. Электрорегулировка и подогрев сидений, адаптивный круиз-контроль, система помощи при парковке, 19\" диски.",
    photos: [
      "catalog/bmw-5-2021/1.jpg",
      "catalog/bmw-5-2021/2.jpg",
      "catalog/bmw-5-2021/3.jpg"
    ]
  },
  {
    id: "mercedes-e-2022",
    name: "Mercedes-Benz E-Class",
    year: 2022,
    origin: "из Японии",
    engine: "2.0 · 211 л.с.",
    mileage: "31 000 км",
    transmission: "Автомат",
    price: "119 900 BYN",
    priceNote: "или в лизинг",
    badge: "Новое",
    badgeColor: "#e8c96a",
    description: "Панорамная крыша, система MBUX, подогрев и вентиляция сидений, мониторинг слепых зон, Burmester аудиосистема. Идеальное состояние.",
    photos: [
      "catalog/mercedes-e-2022/1.jpg",
      "catalog/mercedes-e-2022/2.jpg",
      "catalog/mercedes-e-2022/3.jpg"
    ]
  },
  {
    id: "audi-a6-2020",
    name: "Audi A6",
    year: 2020,
    origin: "из Кореи",
    engine: "3.0 · 249 л.с.",
    mileage: "62 000 км",
    transmission: "Автомат",
    price: "94 500 BYN",
    priceNote: "или в кредит от 1 250 BYN/мес.",
    badge: null,
    badgeColor: null,
    description: "Quattro полный привод, матричные LED-фары, виртуальная приборная панель Audi Virtual Cockpit, два комплекта колёс. Полная история ТО.",
    photos: [
      "catalog/audi-a6-2020/1.jpg",
      "catalog/audi-a6-2020/2.jpg",
      "catalog/audi-a6-2020/3.jpg"
    ]
  },
  {
    id: "porsche-cayenne-2021",
    name: "Porsche Cayenne",
    year: 2021,
    origin: "из США",
    engine: "3.0 · 340 л.с.",
    mileage: "40 000 км",
    transmission: "Автомат",
    price: "199 900 BYN",
    priceNote: "или в лизинг",
    badge: "Эксклюзив",
    badgeColor: null,
    description: "Sport Chrono пакет, PDCC система стабилизации, Bose аудиосистема, 21\" кованые диски, пневмоподвеска. Один владелец, не бита, не крашена.",
    photos: [
      "catalog/porsche-cayenne-2021/1.jpg",
      "catalog/porsche-cayenne-2021/2.jpg",
      "catalog/porsche-cayenne-2021/3.jpg"
    ]
  },
  {
    id: "toyota-lc-2022",
    name: "Toyota Land Cruiser",
    year: 2022,
    origin: "из ОАЭ",
    engine: "3.5 · 415 л.с.",
    mileage: "25 000 км",
    transmission: "Автомат",
    price: "219 000 BYN",
    priceNote: "или в кредит",
    badge: null,
    badgeColor: null,
    description: "Турбированный V6 Twin-Turbo, система Multi-Terrain Select, 9 подушек безопасности, цифровые зеркала-камеры, полный пакет помощи водителю Toyota Safety Sense.",
    photos: [
      "catalog/toyota-lc-2022/1.jpg",
      "catalog/toyota-lc-2022/2.jpg",
      "catalog/toyota-lc-2022/3.jpg"
    ]
  },
  {
    id: "lexus-rx-2021",
    name: "Lexus RX 350",
    year: 2021,
    origin: "из Японии",
    engine: "2.0 · 238 л.с.",
    mileage: "55 000 км",
    transmission: "Автомат",
    price: "134 900 BYN",
    priceNote: "или в лизинг",
    badge: "Trade-in",
    badgeColor: "#b0b0b0",
    description: "Mark Levinson аудиосистема, панорамный люк, вентиляция передних сидений, камера 360°, слепые зоны. Полная история обслуживания у официального дилера Lexus.",
    photos: [
      "catalog/lexus-rx-2021/1.jpg",
      "catalog/lexus-rx-2021/2.jpg",
      "catalog/lexus-rx-2021/3.jpg"
    ]
  }
];
