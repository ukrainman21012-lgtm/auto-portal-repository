const brandNames = {
  audi: "Audi",
  bmw: "BMW",
  porsche: "Porsche",
  mercedes: "Mercedes-Benz",
  nissan: "Nissan",
  toyota: "Toyota",
  honda: "Honda",
  lexus: "Lexus",
  volkswagen: "Volkswagen",
  ford: "Ford"
};

const ratingLists = {
  reliability: {
    description: "Редакционная подборка моделей с репутацией долговечных и выносливых автомобилей.",
    cars: [
      ["Toyota Land Cruiser", "Toyota", "Рамная конструкция и репутация выносливого внедорожника."],
      ["Lexus LS", "Lexus", "Комфортный флагман, известный качеством сборки."],
      ["Toyota Corolla", "Toyota", "Массовая модель с простой эксплуатацией и широкой сервисной базой."],
      ["Honda Civic", "Honda", "Практичный автомобиль с долговечными силовыми агрегатами."],
      ["Mercedes-Benz W124", "Mercedes-Benz", "Классический седан, прославившийся ресурсом конструкции."],
      ["Volvo 240", "Volvo", "Прочная конструкция и легендарная репутация долгожителя."],
      ["Honda Accord", "Honda", "Сбалансированный седан с проверенными поколениями двигателей."],
      ["Mazda MX-5", "Mazda", "Лёгкий родстер с относительно простой механикой."],
      ["Subaru Outback", "Subaru", "Универсал для дальних поездок и сложных дорог."],
      ["Toyota Prius", "Toyota", "Гибридная модель с большим опытом эксплуатации." ]
    ]
  },
  comfort: {
    description: "Модели, особенно известные плавностью хода, тишиной и оснащением салона.",
    cars: [
      ["Rolls-Royce Phantom", "Rolls-Royce", "Флагманский лимузин с акцентом на тишину и плавность хода."],
      ["Mercedes-Benz S-Class", "Mercedes-Benz", "Представительский седан с передовыми системами комфорта."],
      ["Lexus LS", "Lexus", "Тихий салон и мягкая настройка подвески."],
      ["Bentley Flying Spur", "Bentley", "Роскошный седан с отделкой ручной работы."],
      ["BMW 7 Series", "BMW", "Флагманский седан с просторным задним рядом и технологиями."],
      ["Audi A8", "Audi", "Комфортный представительский автомобиль с полным приводом quattro."],
      ["Range Rover", "Land Rover", "Высокая посадка, простор и адаптивная подвеска."],
      ["Volvo S90", "Volvo", "Скандинавский дизайн и удобные кресла для дальних поездок."],
      ["Genesis G90", "Genesis", "Богатое оснащение и просторный салон бизнес-класса."],
      ["Cadillac Escalade", "Cadillac", "Большой салон и комфортная посадка для всей семьи."]
    ]
  },
  speed: {
    description: "Серийные дорожные автомобили, отобранные по выдающейся динамике и максимальной скорости.",
    cars: [
      ["Bugatti Chiron Super Sport 300+", "Bugatti", "Специальная версия, преодолевшая рубеж 300 миль/ч в заезде."],
      ["Koenigsegg Jesko Absolut", "Koenigsegg", "Сконструирован как гиперкар с экстремальным скоростным потенциалом."],
      ["Hennessey Venom F5", "Hennessey", "Американский гиперкар с заявленной максимальной скоростью свыше 480 км/ч."],
      ["SSC Tuatara", "SSC", "Американский гиперкар, созданный для рекордных скоростей."],
      ["Rimac Nevera", "Rimac", "Электрический гиперкар с рекордным ускорением."],
      ["McLaren Speedtail", "McLaren", "Самый быстрый дорожный McLaren своего времени."],
      ["Bugatti Veyron Super Sport", "Bugatti", "Один из первых серийных гиперкаров, преодолевших 400 км/ч."],
      ["Porsche 911 Turbo S", "Porsche", "Сверхбыстрый разгон и полный привод."],
      ["Ferrari SF90 Stradale", "Ferrari", "Гибридный суперкар с мощной электрической поддержкой."],
      ["Mercedes-AMG One", "Mercedes-AMG", "Дорожный гиперкар с технологиями Формулы-1."]
    ]
  }
};

const carsDatabase = [
  { id: 1, brand: "audi", title: "Audi RS Q8", engine: "4.0L V8 turbo", hp: "600 л.с.", speed: "305 км/ч", time: "3.8 сек", history: "Флагман линейки кроссоверов Audi Sport.", desc: "Спортивный кроссовер со скоростью суперкара.", price: "135 000 €" },
  { id: 2, brand: "audi", title: "Audi RS6 Avant", engine: "4.0L V8 turbo", hp: "600 л.с.", speed: "305 км/ч", time: "3.6 сек", history: "Самый быстрый семейный универсал.", desc: "Заряженный универсал с расширенным кузовом.", price: "128 000 €" },
  { id: 3, brand: "audi", title: "Audi R8 V10", engine: "5.2L V10 атмо", hp: "620 л.с.", speed: "331 км/ч", time: "3.1 сек", history: "Культовый среднемоторный суперкар.", desc: "Чистокровный суперкар с гоночным звуком.", price: "185 000 €" },
  { id: 7, brand: "bmw", title: "BMW M5 Competition", engine: "4.4L V8 Turbo", hp: "625 л.с.", speed: "305 км/ч", time: "3.3 сек", history: "Эталон скоростных бизнес-седанов.", desc: "Комфортный седан с возможностями трекового авто.", price: "125 000 €" },
  { id: 8, brand: "bmw", title: "BMW M4 CSL", engine: "3.0L L6 битурбо", hp: "550 л.с.", speed: "307 км/ч", time: "3.7 сек", history: "Эксклюзивная облегченная версия.", desc: "Трековое облегченное карбоновое купе.", price: "145 000 €" },
  { id: 9, brand: "bmw", title: "BMW M8 Gran Coupe", engine: "4.4L V8 Turbo", hp: "625 л.с.", speed: "305 км/ч", time: "3.2 сек", history: "Флагманское купе для автобанов.", desc: "Большое четырехдверное люксовое суперкупе.", price: "155 000 €" },
  { id: 13, brand: "porsche", title: "Porsche 911 Turbo S", engine: "3.8L Flat-6 Turbo", hp: "650 л.с.", speed: "330 км/ч", time: "2.7 сек", history: "Король заездов на ускорение с места.", desc: "Технологичный полноприводный суперкар.", price: "220 000 €" },
  { id: 14, brand: "porsche", title: "Porsche 911 GT3 RS", engine: "4.0L атмосферный", hp: "525 л.с.", speed: "296 км/ч", time: "3.2 сек", history: "Гражданский болид с активным крылом DRS.", desc: "Атмосферный инструмент для гоночных треков.", price: "245 000 €" },
  { id: 15, brand: "porsche", title: "Porsche Taycan Turbo GT", engine: "Электромоторы EV", hp: "1108 л.с.", speed: "305 км/ч", time: "2.2 сек", history: "Самый мощный серийный электромобиль бренда.", desc: "Электрический монстр с ураганной тягой.", price: "250 000 €" },
  { id: 19, brand: "mercedes", title: "Mercedes-AMG E63 S", engine: "4.0L V8 битурбо", hp: "612 л.с.", speed: "300 км/ч", time: "3.4 сек", history: "Сборка по принципу «Один человек — один мотор».", desc: "Заряженный бизнес-седан с басовитым выхлопом.", price: "122 000 €" },
  { id: 20, brand: "mercedes", title: "Mercedes-AMG GT Black Series", engine: "4.0L V8 плоский вал", hp: "730 л.с.", speed: "325 км/ч", time: "3.2 сек", history: "Венец гоночных технологий AMG для дорог.", desc: "Экстремальный трековый снаряд в карбоне.", price: "340 000 €" },
  { id: 21, brand: "mercedes", title: "Mercedes-AMG G63", engine: "4.0L V8 Twin-Turbo", hp: "585 л.с.", speed: "220 км/ч", time: "4.5 сек", history: "Легендарный брутальный внедорожник «Гелик».", desc: "Культовый внедорожник с боковым выхлопом.", price: "185 000 €" },
  { id: 25, brand: "nissan", title: "Nissan GT-R Nismo", engine: "3.8L V6 твин-турбо", hp: "600 л.с.", speed: "315 км/ч", time: "2.8 сек", history: "Японская «Годзилла» в экстремальной версии.", desc: "Японский суперкар с феноменальным стартом.", price: "185 000 €" },
  { id: 26, brand: "nissan", title: "Nissan Z Performance", engine: "3.0L V6 Twin-Turbo", hp: "400 л.с.", speed: "250 км/ч", time: "4.3 сек", history: "Современное поколение линейки Fairlady Z.", desc: "Заднеприводное купе традиционной школы JDM.", price: "52 000 €" },
  { id: 27, brand: "nissan", title: "Nissan Skyline R34", engine: "2.6L L6 RB26DETT", hp: "280 л.с.", speed: "250 км/ч", time: "4.9 сек", history: "Абсолютный символ уличных гонок и кино.", desc: "Легендарный коллекционный японский спорткар.", price: "95 000 €" },
  { id: 31, brand: "toyota", title: "Toyota GR Supra", engine: "3.0L L6 турбомотор", hp: "340 л.с.", speed: "250 км/ч", time: "4.3 сек", history: "Возрождение легенды совместно с инженерами BMW.", desc: "Маневренное спорткупе с развесовкой 50/50.", price: "55 000 €" },
  { id: 32, brand: "toyota", title: "Toyota Supra MK4", engine: "3.0L L6 2JZ-GTE", hp: "320 л.с.", speed: "250 км/ч", time: "5.1 сек", history: "Неубиваемый чугунный мотор, ставший мифом.", desc: "Икона японского тюнинга и мирового автопрома.", price: "75 000 €" },
  { id: 33, brand: "toyota", title: "Toyota GR Yaris", engine: "1.6L L3 турбо", hp: "261 л.с.", speed: "230 км/ч", time: "5.5 сек", history: "Гражданский болид раллийного чемпионата WRC.", desc: "Полноприводный злой городской хот-хэтч.", price: "38 000 €" }
];

const additionalCars = [
  ["audi", "A3 35 TFSI", "1.5L L4 turbo", 150, 224, 8.4, 37000],
  ["audi", "A4 45 TFSI quattro", "2.0L L4 turbo", 265, 250, 5.5, 52000],
  ["audi", "A5 Sportback 45 TFSI", "2.0L L4 turbo", 265, 250, 5.6, 57000],
  ["audi", "A6 55 TFSI quattro", "3.0L V6 turbo", 340, 250, 5.1, 72000],
  ["audi", "A7 Sportback 55 TFSI", "3.0L V6 turbo", 340, 250, 5.3, 78000],
  ["audi", "Q3 45 TFSI quattro", "2.0L L4 turbo", 245, 233, 5.8, 48000],
  ["audi", "Q5 45 TFSI quattro", "2.0L L4 turbo", 265, 237, 6.1, 59000],
  ["audi", "Q7 55 TFSI quattro", "3.0L V6 turbo", 340, 250, 5.6, 82000],
  ["audi", "S3 Sedan", "2.0L L4 turbo", 333, 250, 4.7, 55000],
  ["audi", "SQ5 Sportback", "3.0L V6 turbo", 367, 250, 4.5, 76000],
  ["bmw", "330i Sedan", "2.0L L4 turbo", 258, 250, 5.8, 52000],
  ["bmw", "430i Coupe", "2.0L L4 turbo", 245, 250, 5.8, 57000],
  ["bmw", "540i xDrive", "3.0L L6 turbo", 381, 250, 4.7, 72000],
  ["bmw", "X1 xDrive28i", "2.0L L4 turbo", 241, 230, 6.2, 49000],
  ["bmw", "X3 xDrive30i", "2.0L L4 turbo", 255, 240, 6.3, 61000],
  ["bmw", "X5 xDrive40i", "3.0L L6 turbo", 381, 250, 5.4, 85000],
  ["bmw", "X6 xDrive40i", "3.0L L6 turbo", 381, 250, 5.5, 92000],
  ["bmw", "M340i xDrive", "3.0L L6 turbo", 374, 250, 4.4, 69000],
  ["bmw", "M2 Coupe", "3.0L L6 biturbo", 460, 285, 4.1, 78000],
  ["bmw", "Z4 M40i", "3.0L L6 turbo", 340, 250, 4.5, 72000],
  ["porsche", "718 Cayman", "2.0L Flat-4 turbo", 300, 275, 4.9, 72000],
  ["porsche", "718 Boxster", "2.0L Flat-4 turbo", 300, 275, 4.9, 75000],
  ["porsche", "Macan", "2.0L L4 turbo", 265, 232, 6.4, 68000],
  ["porsche", "Macan S", "2.9L V6 biturbo", 380, 259, 4.6, 85000],
  ["porsche", "Cayenne", "3.0L V6 turbo", 353, 248, 6.0, 98000],
  ["porsche", "Cayenne S", "4.0L V8 turbo", 474, 273, 5.0, 122000],
  ["porsche", "Panamera GTS", "4.0L V8 turbo", 500, 302, 3.8, 155000],
  ["porsche", "911 Carrera", "3.0L Flat-6 biturbo", 388, 293, 4.1, 125000],
  ["porsche", "911 Carrera GTS", "3.0L Flat-6 hybrid turbo", 541, 312, 2.9, 165000],
  ["porsche", "718 Spyder RS", "4.0L Flat-6 naturally aspirated", 500, 308, 3.4, 155000],
  ["mercedes", "A 200 Hatchback", "1.3L L4 turbo", 163, 225, 8.2, 38000],
  ["mercedes", "CLA 250 Coupe", "2.0L L4 turbo", 224, 250, 6.3, 52000],
  ["mercedes", "C 300 Sedan", "2.0L L4 turbo hybrid", 258, 250, 6.0, 58000],
  ["mercedes", "CLE 300 Coupe", "2.0L L4 turbo mild-hybrid", 258, 250, 6.2, 67000],
  ["mercedes", "E 200 Sedan", "2.0L L4 turbo mild-hybrid", 204, 240, 7.5, 69000],
  ["mercedes", "S 500 4MATIC", "3.0L L6 turbo hybrid", 449, 250, 4.9, 125000],
  ["mercedes", "GLA 250", "2.0L L4 turbo", 224, 240, 6.9, 49000],
  ["mercedes", "GLC 300 4MATIC", "2.0L L4 turbo mild-hybrid", 258, 240, 6.2, 65000],
  ["mercedes", "GLE 450 4MATIC", "3.0L L6 turbo mild-hybrid", 381, 250, 5.6, 92000],
  ["mercedes", "EQE 350+", "Электромотор", 292, 210, 6.4, 78000],
  ["nissan", "Altima 2.5", "2.5L L4", 188, 220, 8.0, 28000],
  ["nissan", "Maxima 3.5", "3.5L V6", 300, 220, 6.0, 36000],
  ["nissan", "Versa", "1.6L L4", 122, 190, 9.5, 19000],
  ["nissan", "Leaf e+", "Электромотор", 214, 157, 7.0, 34000],
  ["nissan", "Ariya e-4ORCE", "Электромоторы", 394, 200, 5.1, 54000],
  ["nissan", "Rogue", "1.5L L3 turbo", 201, 200, 8.0, 32000],
  ["nissan", "Pathfinder", "3.5L V6", 284, 190, 7.0, 41000],
  ["nissan", "Frontier PRO-4X", "3.8L V6", 310, 180, 7.0, 39000],
  ["nissan", "Kicks", "2.0L L4", 141, 180, 9.5, 23000],
  ["nissan", "Juke DIG-T", "1.0L L3 turbo", 117, 180, 10.4, 25000],
  ["toyota", "Corolla Hybrid", "1.8L hybrid", 140, 180, 9.3, 29000],
  ["toyota", "Camry Hybrid", "2.5L hybrid", 232, 180, 7.2, 39000],
  ["toyota", "RAV4 Hybrid", "2.5L hybrid", 222, 180, 8.1, 39000],
  ["toyota", "RAV4 Plug-in Hybrid", "2.5L plug-in hybrid", 306, 180, 6.0, 51000],
  ["toyota", "Highlander Hybrid", "2.5L hybrid", 248, 180, 8.3, 52000],
  ["toyota", "Prius Plug-in Hybrid", "2.0L plug-in hybrid", 223, 177, 6.8, 39000],
  ["toyota", "Crown", "2.5L hybrid", 236, 180, 7.6, 44000],
  ["toyota", "GR86", "2.4L Flat-4", 234, 226, 6.3, 34000],
  ["toyota", "Tacoma TRD Off-Road", "2.4L L4 turbo", 278, 180, 7.5, 42000],
  ["toyota", "4Runner", "2.4L L4 turbo", 278, 180, 7.5, 48000],
  ["honda", "Civic e:HEV", "2.0L hybrid", 184, 180, 7.8, 35000],
  ["honda", "Civic Type R", "2.0L L4 turbo", 329, 275, 5.4, 52000],
  ["honda", "Accord Hybrid", "2.0L hybrid", 204, 180, 7.3, 39000],
  ["honda", "CR-V Hybrid", "2.0L hybrid", 204, 180, 8.0, 42000],
  ["honda", "HR-V e:HEV", "1.5L hybrid", 131, 170, 10.6, 32000],
  ["honda", "ZR-V e:HEV", "2.0L hybrid", 184, 180, 7.8, 39000],
  ["honda", "Jazz e:HEV", "1.5L hybrid", 122, 175, 9.4, 27000],
  ["honda", "Pilot", "3.5L V6", 285, 180, 7.5, 48000],
  ["honda", "Odyssey", "3.5L V6", 280, 180, 7.6, 43000],
  ["honda", "Ridgeline", "3.5L V6", 280, 180, 7.0, 41000],
  ["lexus", "IS 350", "3.5L V6", 311, 230, 5.9, 52000],
  ["lexus", "ES 350", "3.5L V6", 302, 210, 6.6, 56000],
  ["lexus", "NX 350", "2.4L L4 turbo", 275, 210, 6.8, 59000],
  ["lexus", "RX 350", "2.4L L4 turbo", 275, 210, 7.2, 67000],
  ["lexus", "UX 250h", "2.0L hybrid", 181, 177, 8.5, 42000],
  ["lexus", "GX 550", "3.4L V6 twin-turbo", 349, 175, 6.5, 85000],
  ["lexus", "LX 600", "3.4L V6 twin-turbo", 409, 210, 6.9, 112000],
  ["lexus", "RZ 450e", "Электромоторы", 313, 160, 5.6, 63000],
  ["lexus", "RC 350", "3.5L V6", 311, 230, 6.0, 57000],
  ["lexus", "LC 500", "5.0L V8", 471, 270, 4.7, 105000],
  ["volkswagen", "Polo 1.0 TSI", "1.0L L3 turbo", 110, 195, 10.4, 23000],
  ["volkswagen", "Golf 1.5 eTSI", "1.5L L4 mild-hybrid", 150, 224, 8.5, 31000],
  ["volkswagen", "Golf GTI", "2.0L L4 turbo", 265, 250, 5.9, 43000],
  ["volkswagen", "Golf R", "2.0L L4 turbo", 333, 270, 4.6, 55000],
  ["volkswagen", "Jetta 1.5 TSI", "1.5L L4 turbo", 158, 210, 8.5, 28000],
  ["volkswagen", "Passat 2.0 TDI", "2.0L L4 diesel", 150, 220, 9.3, 39000],
  ["volkswagen", "T-Roc 1.5 TSI", "1.5L L4 turbo", 150, 205, 8.4, 33000],
  ["volkswagen", "Tiguan 2.0 TSI", "2.0L L4 turbo", 204, 220, 7.1, 43000],
  ["volkswagen", "Touareg 3.0 TDI", "3.0L V6 diesel", 286, 238, 6.1, 72000],
  ["volkswagen", "ID.4 Pro", "Электромотор", 286, 180, 6.7, 45000],
  ["ford", "Mustang EcoBoost", "2.3L L4 turbo", 315, 250, 4.9, 42000],
  ["ford", "Mustang GT", "5.0L V8", 446, 250, 4.4, 55000],
  ["ford", "Focus ST", "2.3L L4 turbo", 280, 250, 5.7, 39000],
  ["ford", "Puma ST", "1.5L L3 turbo", 200, 220, 6.7, 32000],
  ["ford", "Kuga 2.5 Hybrid", "2.5L hybrid", 190, 196, 9.1, 38000],
  ["ford", "Explorer 2.3 EcoBoost", "2.3L L4 turbo", 300, 230, 6.0, 52000],
  ["ford", "Bronco 2.7 V6", "2.7L V6 turbo", 330, 200, 6.7, 57000],
  ["ford", "Ranger Wildtrak", "2.0L L4 bi-turbo", 205, 180, 9.0, 46000],
  ["ford", "F-150 XLT", "3.5L V6 EcoBoost", 400, 180, 6.0, 62000],
  ["ford", "Mustang Mach-E", "Электромотор", 294, 180, 6.3, 52000]
];

additionalCars.forEach((car, index) => {
  const [brand, model, engine, hp, speed, time, price] = car;
  const title = `${brandNames[brand]} ${model}`;
  carsDatabase.push({
    id: 100 + index,
    brand,
    title,
    engine,
    hp: `${hp} л.с.`,
    speed: `${speed} км/ч`,
    time: `${time} сек`,
    history: `${title} — представитель модельного ряда ${brandNames[brand]}, созданный с акцентом на современные технологии и фирменный характер марки.`,
    desc: time < 5
      ? `Динамичная дорожная версия ${title} с выразительным характером и точной управляемостью.`
      : `Практичный ${title} для повседневных поездок, сочетающий комфорт и универсальность.`,
    price: `${price.toLocaleString("ru-RU")} €`
  });
});

const cityBases = [
  { b: "audi", t: "A6 (C8)", hp: 245, p: 61000 }, { b: "audi", t: "A4 (B9)", hp: 150, p: 43000 }, { b: "audi", t: "A8 L (D5)", hp: 286, p: 105000 },
  { b: "bmw", t: "530i (G30)", hp: 252, p: 58000 }, { b: "bmw", t: "320i (G20)", hp: 184, p: 46000 }, { b: "bmw", t: "740d (G70)", hp: 300, p: 118000 },
  { b: "porsche", t: "Taycan 4S", hp: 530, p: 115000 }, { b: "porsche", t: "Panamera 4", hp: 353, p: 102000 }, { b: "porsche", t: "Taycan Base", hp: 408, p: 93000 },
  { b: "mercedes", t: "E300 (W213)", hp: 249, p: 64000 }, { b: "mercedes", t: "C200 (W206)", hp: 204, p: 49000 }, { b: "mercedes", t: "S450 (W223)", hp: 367, p: 125000 },
  { b: "nissan", t: "Teana (L33)", hp: 173, p: 28000 }, { b: "nissan", t: "Almera (G15)", hp: 102, p: 14000 }, { b: "nissan", t: "Sentra (B18)", hp: 149, p: 24000 },
  { b: "toyota", t: "Camry (XV70)", hp: 181, p: 32000 }, { b: "toyota", t: "Corolla (E210)", hp: 122, p: 23000 }, { b: "toyota", t: "Avalon (XX50)", hp: 301, p: 44000 }
];

cityBases.forEach((car, index) => {
  carsDatabase.push({
    id: 37 + index,
    brand: car.b,
    title: `${brandNames[car.b]} ${car.t}`,
    engine: "2.0L–3.5L гражданский ДВС",
    hp: `${car.hp} л.с.`,
    speed: "220 км/ч",
    time: "7.5 сек",
    history: "Надежный и практичный городской автомобиль бизнес- или комфорт-класса.",
    desc: "Классический автомобиль с комфортной подвеской и умеренным расходом.",
    price: `${car.p.toLocaleString("ru-RU")} €`
  });
});

let currentBrand = "all";
let currentClass = "all";
let nameClicks = 0;
let dragTimer;

window.playClick = function () {
  // Без сетевых аудиофайлов: кнопки работают и офлайн.
};

window.switchRatingTable = function (criterion) {
  const rating = ratingLists[criterion];
  const body = document.getElementById("ratingTableBody");
  const description = document.getElementById("ratingDescription");
  if (!rating || !body || !description) return;

  document.querySelectorAll(".rating-tab").forEach(button => {
    const isActive = button.dataset.rating === criterion;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  description.textContent = rating.description;
  body.innerHTML = rating.cars.map((car, index) => `
    <tr><td>${index + 1}</td><td><strong>${car[0]}</strong></td><td>${car[1]}</td><td>${car[2]}</td></tr>
  `).join("");
};

window.activateEasterEgg = function () {
  nameClicks += 1;
  if (nameClicks === 5) {
    const container = document.getElementById("mainContainer");
    if (container) container.classList.add("turbo-mode");
    window.alert("Гоночный режим активирован!");
  }
};

window.switchSection = function (section) {
  const sections = {
    about: "sectionAbout",
    guide: "sectionGuide",
    catalog: "sectionCatalog",
    ratings: "sectionRatings"
  };
  if (!sections[section]) return;

  Object.values(sections).forEach(id => {
    const element = document.getElementById(id);
    if (element) element.style.display = "none";
  });
  document.querySelectorAll(".nav-btn").forEach(button => button.classList.remove("active"));

  const selectedSection = document.getElementById(sections[section]);
  const activeButton = document.getElementById(`btn-${section}`);
  if (selectedSection) selectedSection.style.display = "block";
  if (activeButton) activeButton.classList.add("active");

  const extended = document.getElementById("extendedView");
  if (extended) extended.style.display = "none";
  if (section === "catalog") applyDoubleFilter();
};

window.filterBrand = function (brand) {
  if (brand !== "all" && !brandNames[brand]) return;
  currentBrand = brand;
  document.querySelectorAll(".tab-btn").forEach(button => button.classList.remove("active"));
  const active = document.getElementById(`brand-${brand}`);
  if (active) active.classList.add("active");
  applyDoubleFilter();
};

window.filterClass = function (carClass) {
  if (!["all", "sport", "city"].includes(carClass)) return;
  currentClass = carClass;
  document.querySelectorAll(".sub-btn").forEach(button => button.classList.remove("active"));
  const activeId = { all: "classAll", sport: "classSport", city: "classCity" }[carClass];
  const active = document.getElementById(activeId);
  if (active) active.classList.add("active");
  applyDoubleFilter();
};

function applyDoubleFilter() {
  let filtered = carsDatabase;
  if (currentBrand !== "all") filtered = filtered.filter(car => car.brand === currentBrand);
  if (currentClass === "sport") filtered = filtered.filter(car => parseFloat(car.time) < 5);
  if (currentClass === "city") filtered = filtered.filter(car => parseFloat(car.time) >= 5);
  renderCars(filtered);
}

function renderCars(cars) {
  const grid = document.getElementById("carsGrid");
  if (!grid) return;
  if (!cars.length) {
    grid.innerHTML = '<p class="empty-state">В этой категории пока нет автомобилей.</p>';
    return;
  }

  grid.innerHTML = cars.map(car => `
    <article class="car-card">
      <div class="car-visual" aria-hidden="true">
        <span class="visual-kicker">${brandNames[car.brand]}</span>
        <span class="visual-number">${String(car.id).padStart(2, "0")}</span>
        <div class="car-silhouette"><span></span><i></i><b></b></div>
        <span class="visual-power">${car.hp}</span>
      </div>
      <div class="car-info">
        <p class="car-brand-label">${brandNames[car.brand]} · ${car.speed}</p>
        <h2 class="car-title">${car.title}</h2>
        <p class="car-description">${car.desc}</p>
        <div class="specs-list">
          <div><span>ДВИГАТЕЛЬ</span><strong>${car.engine}</strong></div>
          <div><span>РАЗГОН 0–100</span><strong>${car.time}</strong></div>
          <div><span>СТОИМОСТЬ</span><strong class="price">${car.price}</strong></div>
        </div>
        <button class="details-btn" type="button" onclick="openExtendedView(${car.id})">Открыть характеристики <span aria-hidden="true">→</span></button>
      </div>
    </article>
  `).join("");
}

window.openExtendedView = function (id) {
  const car = carsDatabase.find(item => item.id === Number(id));
  const catalog = document.getElementById("sectionCatalog");
  const extended = document.getElementById("extendedView");
  if (!car || !catalog || !extended) return;

  const quarterTime = (parseFloat(car.time) * 2.4 + 1.1).toFixed(2);
  catalog.style.display = "none";
  extended.innerHTML = `
    <button class="back-btn" type="button" onclick="closeExtendedView()">← Назад в каталог</button>
    <div class="detail-hero">
      <p class="eyebrow">${brandNames[car.brand]} · БОРТОВОЙ КОМПЬЮТЕР</p>
      <h2 class="ext-title">${car.title}</h2>
      <p>${car.desc}</p>
    </div>
    <div class="ext-layout">
      <div class="ext-specs">
        <div class="ext-spec-row"><span>Двигатель</span><strong>${car.engine}</strong></div>
        <div class="ext-spec-row"><span>Мощность</span><strong>${car.hp}</strong></div>
        <div class="ext-spec-row"><span>Максимальная скорость</span><strong>${car.speed}</strong></div>
        <div class="ext-spec-row"><span>Разгон 0–100 км/ч</span><strong>${car.time}</strong></div>
        <div class="ext-spec-row"><span>Цена в ЕС</span><strong class="price">${car.price}</strong></div>
      </div>
      <div class="ext-text">
        <h3>История модели</h3><p>${car.history}</p>
        <div class="drag-box">
          <h3>Тест-драйв · 402 метра</h3>
          <p>Расчетное время заезда: <strong>${quarterTime} сек</strong></p>
          <button id="launchBtn" class="details-btn start-btn" type="button" onclick="runDrag(${quarterTime})">Старт заезда</button>
          <p id="dragResult" class="drag-result" aria-live="polite">Автомобиль готов к старту.</p>
        </div>
      </div>
    </div>`;
  extended.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.closeExtendedView = function () {
  const extended = document.getElementById("extendedView");
  const catalog = document.getElementById("sectionCatalog");
  if (extended) extended.style.display = "none";
  if (catalog) catalog.style.display = "block";
  applyDoubleFilter();
};

window.runDrag = function (time) {
  const button = document.getElementById("launchBtn");
  const result = document.getElementById("dragResult");
  if (!button || !result || button.disabled) return;
  button.disabled = true;
  result.textContent = "Заезд начался… автомобиль набирает скорость.";
  result.classList.add("is-racing");
  clearTimeout(dragTimer);
  dragTimer = window.setTimeout(() => {
    result.textContent = `Заезд завершен. Расчетное время: ${Number(time).toFixed(2)} сек.`;
    result.classList.remove("is-racing");
    button.disabled = false;
  }, 1200);
};

window.calculateEUFormula = function () {
  const carInput = document.getElementById("creditCarInput");
  const salaryInput = document.getElementById("creditSalaryInput");
  const downPaymentInput = document.getElementById("creditDownPaymentInput");
  const result = document.getElementById("creditResult");
  if (!carInput || !salaryInput || !downPaymentInput || !result) return;

  const query = carInput.value.trim().toLocaleLowerCase("ru");
  const salary = Number(salaryInput.value);
  const downPayment = Number(downPaymentInput.value || 0);
  const car = carsDatabase.find(item => item.title.toLocaleLowerCase("ru").includes(query));

  if (!query || !Number.isFinite(salary) || salary <= 0 || !Number.isFinite(downPayment) || downPayment < 0) {
    result.textContent = "Укажите модель, положительный доход и корректный первый взнос.";
    result.className = "result-placeholder result-error";
    return;
  }
  if (!car) {
    result.textContent = "Модель не найдена в каталоге. Выберите вариант из подсказок.";
    result.className = "result-placeholder result-error";
    return;
  }

  const price = Number(car.price.replace(/\D/g, ""));
  if (downPayment >= price) {
    result.textContent = `Первый взнос должен быть меньше стоимости автомобиля (${price.toLocaleString("ru-RU")} €).`;
    result.className = "result-placeholder result-error";
    return;
  }

  const principal = price - downPayment;
  const monthlyRate = 0.06 / 12;
  const months = 60;
  const monthlyPayment = Math.round(principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));
  const incomeLimit = salary * 0.4;
  const status = monthlyPayment <= incomeLimit ? "В пределах ориентировочного лимита" : "Платёж выше ориентировочного лимита";
  result.textContent = `${car.title}: примерно ${monthlyPayment.toLocaleString("ru-RU")} €/мес. на 60 месяцев под 6% годовых. ${status} (40% дохода: ${Math.round(incomeLimit).toLocaleString("ru-RU")} €).`;
  result.className = `result-placeholder ${monthlyPayment <= incomeLimit ? "result-success" : "result-error"}`;
};

window.triggerRandomCar = function () {
  const car = carsDatabase[Math.floor(Math.random() * carsDatabase.length)];
  window.switchSection("catalog");
  window.openExtendedView(car.id);
};

window.closeWelcomeModal = function () {
  const modal = document.getElementById("welcomeModal");
  const container = document.getElementById("mainContainer");
  if (modal) modal.style.display = "none";
  if (container) container.style.display = "block";
  applyDoubleFilter();
  initAutocomplete();
};

function initAutocomplete() {
  const input = document.getElementById("creditCarInput");
  const box = document.getElementById("searchSuggestions");
  if (!input || !box || input.dataset.autocompleteReady) return;
  input.dataset.autocompleteReady = "true";

  input.addEventListener("input", () => {
    const query = input.value.trim().toLocaleLowerCase("ru");
    box.replaceChildren();
    if (query.length < 2) {
      box.style.display = "none";
      return;
    }
    const matches = carsDatabase.filter(car => car.title.toLocaleLowerCase("ru").includes(query)).slice(0, 6);
    if (!matches.length) {
      box.style.display = "none";
      return;
    }
    matches.forEach(car => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "suggestion-option";
      option.textContent = car.title;
      option.addEventListener("click", () => {
        input.value = car.title;
        box.style.display = "none";
      });
      box.appendChild(option);
    });
    box.style.display = "block";
  });

  document.addEventListener("click", event => {
    if (!box.contains(event.target) && event.target !== input) box.style.display = "none";
  });
}

document.addEventListener("pointermove", event => {
  const cursor = document.getElementById("carCursor");
  if (cursor && event.pointerType === "mouse") {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const creditForm = document.getElementById("creditForm");
  const creditCalculateBtn = document.getElementById("creditCalculateBtn");
  if (creditForm) {
    creditForm.noValidate = true;
    creditForm.addEventListener("submit", event => {
      event.preventDefault();
      window.calculateEUFormula();
    });
  }
  if (creditCalculateBtn) {
    creditCalculateBtn.addEventListener("click", () => window.calculateEUFormula());
  }

  applyDoubleFilter();
  initAutocomplete();
  window.switchRatingTable("reliability");
});
function exitSite() {
    alert("Спасибо за визит! Возвращайтесь на наш автопортал за новыми тачками!");
    window.location.href = "about:blank"; 
}

