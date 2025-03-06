// ../../constants/index.ts
import {
  Level,
  Liquid,
  Surface,
  InteractionResult,
  LewisElement,
  MoleculeTemplate,
} from "../types/index";

export const gunlukKimya: Level[] = [
  {
    level: 1,
    timeLimit: 30,
    items: [
      { id: "1", name: "Sabun (Sodyum Stearat)" },
      { id: "2", name: "İyot" },
      { id: "3", name: "Kabartma tozu (Sodyumbikarbonat)" },
      { id: "4", name: "Anti Asit Mide Tableti (Magnezyum Hidroksit)" },
      { id: "5", name: "Lityum" },
    ],
    targets: [
      { id: "t1", name: "Temizlik", correctItemId: "1" },
      { id: "t2", name: "Dezenfektan", correctItemId: "2" },
      { id: "t3", name: "Asit Düzenleyici", correctItemId: "3" },
      { id: "t4", name: "İlaç", correctItemId: "4" },
      { id: "t5", name: "Pil", correctItemId: "5" },
    ],
  },
];
export const piktogram: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", image: "yanici.svg", name: "piktogram" },
      { id: "2", image: "patlayici.svg", name: "piktogram" },
      { id: "3", image: "asindirici.svg", name: "piktogram" },
      { id: "4", image: "tehlike.svg", name: "piktogram" },
      { id: "5", image: "zehirli.svg", name: "piktogram" },
    ],
    targets: [
      { id: "t1", name: "Yanıcı/Alevlenir", correctItemId: "1" },
      { id: "t2", name: "Patlayıcı", correctItemId: "2" },
      { id: "t3", name: "Aşındırıcı", correctItemId: "3" },
      { id: "t4", name: "Çevresel Tehlike", correctItemId: "4" },
      { id: "t5", name: "Zehirli", correctItemId: "5" },
    ],
  },
];
export const polar: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "Su (H₂O)" },
      { id: "2", name: "Azot (N₂)" },
    ],
    targets: [
      { id: "t1", name: "Polar", correctItemId: "1" },
      { id: "t2", name: "Apolar", correctItemId: "2" },
    ],
  },
  {
    level: 2,
    timeLimit: 50,
    items: [
      { id: "3", name: "Amonyak (NH₃)" },
      { id: "4", name: "Karbondioksit (CO₂)" },
    ],
    targets: [
      { id: "t3", name: "Polar", correctItemId: "3" },
      { id: "t4", name: "Apolar", correctItemId: "4" },
    ],
  },
  {
    level: 3,
    timeLimit: 50,
    items: [
      { id: "5", name: "Hidrojen klorür (HCl)" },
      { id: "6", name: "İyot (I₂)" },
    ],
    targets: [
      { id: "t5", name: "Polar", correctItemId: "5" },
      { id: "t6", name: "Apolar", correctItemId: "6" },
    ],
  },
  {
    level: 4,
    timeLimit: 50,
    items: [
      { id: "7", name: "Kükürt dioksit (SO₂)" },
      { id: "8", name: "Oksijen (O₂)" },
    ],
    targets: [
      { id: "t7", name: "Polar", correctItemId: "7" },
      { id: "t8", name: "Apolar", correctItemId: "8" },
    ],
  },
  {
    level: 5,
    timeLimit: 50,
    items: [
      { id: "9", name: "Hidrojen siyanür (HCN)" },
      { id: "10", name: "Metan (CH₄)" },
    ],
    targets: [
      { id: "t9", name: "Polar", correctItemId: "9" },
      { id: "t10", name: "Apolar", correctItemId: "10" },
    ],
  },
];

export const elektron: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "1s² 2s² 2p⁶ 3s¹" },
      { id: "2", name: "1s² 2s² 2p⁶ 3s² 3p²" },
      { id: "3", name: "1s² 2s² 2p⁴" },
      { id: "4", name: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹" },
      { id: "5", name: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹ 4p⁵" },
    ],
    targets: [
      { id: "t1", name: "3. periyot 1A grubu", correctItemId: "1" },
      { id: "t2", name: "3. periyot 4A grubu", correctItemId: "2" },
      { id: "t3", name: "2. periyot 6A grubu", correctItemId: "3" },
      { id: "t4", name: "4. periyot 3B grubu", correctItemId: "4" },
      { id: "t5", name: "4. periyot 7A grubu", correctItemId: "5" },
    ],
  },
];
export const iyon: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "(NH₄)⁺" },
      { id: "2", name: "(PO₄)³⁻" },
      { id: "3", name: "(NO₃)⁻" },
      { id: "4", name: "Fe²⁺" },
      { id: "5", name: "Al³⁺" },
    ],
    targets: [
      { id: "t1", name: "Amonyum", correctItemId: "1" },
      { id: "t2", name: "Fosfat", correctItemId: "2" },
      { id: "t3", name: "Nitrat", correctItemId: "3" },
      { id: "t4", name: "Demir(II)", correctItemId: "4" },
      { id: "t5", name: "Alüminyum", correctItemId: "5" },
    ],
  },
];
export const bilesikler: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "CaCl₂" },
      { id: "2", name: "Fe₂(SO₄)₃" },
      { id: "3", name: "CO₂" },
      { id: "4", name: "N₂O₃" },
      { id: "5", name: "(NH₄)₂SO₄" },
    ],
    targets: [
      { id: "t1", name: "Kalsiyum Klorür", correctItemId: "1" },
      { id: "t2", name: "Demir(III) Sülfat", correctItemId: "2" },
      { id: "t3", name: "CO₂", correctItemId: "3" },
      { id: "t4", name: "N₂O₃", correctItemId: "4" },
      { id: "t5", name: "Amonyum Sülfat", correctItemId: "5" },
    ],
  },
];
export const atomTeorileri: Level[] = [
  {
    level: 1,
    timeLimit: 50,
    items: [
      { id: "1", name: "Demokritos'un Atom Teorisi" },
      { id: "2", name: "Dalton'un Atom Teorisi" },
      { id: "3", name: "Thomson'un Üzümlü Kek Modeli" },
      { id: "4", name: "Rutherford'un Nükleer Modeli" },
      { id: "5", name: "Bohr'un Gezegen Modeli" },
      { id: "6", name: "Kuantum Mekanik Modeli" },
    ],
    targets: [
      { id: "t1", name: "", correctItemId: "1" },
      { id: "t2", name: "", correctItemId: "2" },
      { id: "t3", name: "", correctItemId: "3" },
      { id: "t4", name: "", correctItemId: "4" },
      { id: "t5", name: "", correctItemId: "5" },
      { id: "t6", name: "", correctItemId: "6" },
    ],
  },
];
export const viskoziteData = {
  title: "Viskozite & Akışkanlık",
  description:
    "Viskozite, bir sıvının akmaya karşı direncidir. Sıcaklık arttıkça viskozite azalır ve akışkanlık artar. Bu simülasyonda su, bal ve bitkisel yağın sıcaklığa göre nasıl değiştiğini görebilirsiniz.",
};

export const fluids = {
  su: {
    name: "Su",
    description: `Su, güçlü hidrojen bağları nedeniyle yüksek kaynama noktasına ve düşük buhar basıncına sahiptir. Sıcaklık arttıkça su molekülleri daha hızlı hareket eder ve buhar basıncı artar. mmHg). Basınç artışı buharlaşmayı zorlaştırır ve buhar basıncını düşürür.`,
    color: "#3b82f6",
    vaporPressureData: [
      { temp: 20, pressure: 2.34, vaporPressure: 17.5 },
      { temp: 40, pressure: 7.38, vaporPressure: 55.3 },
      { temp: 60, pressure: 19.92, vaporPressure: 149.4 },
      { temp: 80, pressure: 47.34, vaporPressure: 355.1 },
      { temp: 100, pressure: 101.33, vaporPressure: 760.0 },
    ],
  },
  alkol: {
    name: "Alkol",
    description:
      "Alkol, suya göre daha zayıf moleküller arası kuvvetlere sahiptir. Bu nedenle, alkolün buhar basıncı suya göre daha yüksektir. Sıcaklık artışı, alkol moleküllerinin buharlaşmasını hızlandırır. Basınç artışı ise buharlaşmayı yavaşlatır.",
    color: "#f59e0b",
    vaporPressureData: [
      { temp: 20, pressure: 5.95, vaporPressure: 44.0 },
      { temp: 40, pressure: 18.04, vaporPressure: 135.3 },
      { temp: 60, pressure: 47.02, vaporPressure: 352.6 },
      { temp: 80, pressure: 107.2, vaporPressure: 803.0 },
      { temp: 100, pressure: 225.0, vaporPressure: 1687.5 },
    ],
  },
  eter: {
    name: "Eter",
    description:
      "Eter, çok zayıf Van der Waals kuvvetlerine sahiptir. Bu nedenle, eterin buhar basıncı oldukça yüksektir. Sıcaklık artışı, eter moleküllerinin hızla buharlaşmasına neden olur. Basınç artışı ise buhar basıncını düşürür.",
    color: "#10b981",
    vaporPressureData: [
      { temp: 20, pressure: 58.9, vaporPressure: 442.0 },
      { temp: 40, pressure: 121.5, vaporPressure: 911.3 },
      { temp: 60, pressure: 233.7, vaporPressure: 1752.8 },
      { temp: 80, pressure: 433.0, vaporPressure: 3247.5 },
      { temp: 100, pressure: 760.0, vaporPressure: 5700.0 },
    ],
  },
};

export const cardData = {
  title: "Buhar Basıncı Simülasyonu",
  description:
    "Bu simülasyon, farklı sıvıların sıcaklık ve basınç değişimlerine göre buhar basıncının nasıl değiştiğini gösterir. Öğrenciler, sıvı seçimi yaparak sıcaklık ve basınç değerlerini değiştirebilir ve moleküller arası etkileşimi gözlemleyebilir.",
};
export const liquids: Liquid[] = [
  {
    name: "Su",
    color: "text-blue-700",
    surfaceTension: 72, // mN/m
    wettability: "Islatır",
    description: "Su, çoğu yüzeyi ıslatan polar bir sıvıdır.",
    behavior: "İçbükey menisküs oluşturur",
  },
  {
    name: "Cıva",
    color: "text-gray-700",
    surfaceTension: 486, // mN/m
    wettability: "Islatmaz",
    description: "Cıva, metal yüzeylerde içbükey menisküs oluşturmaz.",
    behavior: "Dışbükey menisküs oluşturur",
  },
  {
    name: "Zeytinyağı",
    color: "text-green-700",
    surfaceTension: 32, // mN/m
    wettability: "Kısmen Islatır",
    description: "Zeytinyağı, düşük yüzey gerilimli bir sıvıdır.",
    behavior: "Düz yüzey oluşturur",
  },
];

export const surfaces: Surface[] = [
  {
    name: "Cam",
    color: "text-blue-700",
    type: "Hidrofilik",
    description: "Su seven, suyu ıslatan yüzey",
  },
  {
    name: "Plastik",
    color: "text-red-700",
    type: "Hidrofobik",
    description: "Su sevmeyen, suyu iten yüzey",
  },
  {
    name: "Mum Kaplı Cam",
    color: "text-yellow-700",
    type: "Hidrofobik",
    description: "Su damlaları üzerinde toplanır",
  },
];

export const interactionResults: Record<
  string,
  Record<string, InteractionResult>
> = {
  Su: {
    Cam: {
      meniscusType: "İçbükey",
      capillaryEffect: "Yükselir",
      dropletShape: "Yayılır",
    },
    Plastik: {
      meniscusType: "Düz",
      capillaryEffect: "Az Yükselir",
      dropletShape: "Damla Halinde Durur",
    },
    "Mum Kaplı Cam": {
      meniscusType: "Düz",
      capillaryEffect: "Az Yükselir",
      dropletShape: "Az Yayılır",
    },
  },
  Cıva: {
    Cam: {
      meniscusType: "Dışbükey",
      capillaryEffect: "Yükselmez",
      dropletShape: "Damla Halinde Durur",
    },
    Plastik: {
      meniscusType: "Dışbükey",
      capillaryEffect: "Yükselmez",
      dropletShape: "Damla Halinde Durur",
    },
    "Mum Kaplı Cam": {
      meniscusType: "Dışbükey",
      capillaryEffect: "Yükselmez",
      dropletShape: "Damla Halinde Durur",
    },
  },
  Zeytinyağı: {
    Cam: {
      meniscusType: "Düz",
      capillaryEffect: "Az Yükselir",
      dropletShape: "Az Yayılır",
    },
    Plastik: {
      meniscusType: "Düz",
      capillaryEffect: "Az Yükselir",
      dropletShape: "Damla Halinde Durur",
    },
    "Mum Kaplı Cam": {
      meniscusType: "Düz",
      capillaryEffect: "Az Yükselir",
      dropletShape: "Az Yayılır",
    },
  },
};
export const orbitalsData = [
  {
    id: "s",
    name: "S Orbital",
    shape:
      "Küresel simetrik bir yapıya sahiptir. Elektronlar çekirdek etrafında eşit olasılıkla bulunabilir.",
    energyLevels:
      "Her enerji seviyesinde bir adet s orbitali bulunur (örneğin 1s, 2s, 3s…).",
    electronCapacity: "Her bir s orbitali en fazla 2 elektron barındırabilir.",
    specialties: [
      "Çekirdeğe en yakın orbitaldir (1s).",
      "Elektron yoğunluğu çekirdek etrafında maksimumdur.",
    ],
    image: "/s-orbital.jpeg",
  },
  {
    id: "p",
    name: "P Orbitalleri",
    shape:
      "Çift loblu ve dambıl (halter) şeklindedir. Loblar arasında nodal bir düzlem bulunur (elektronun bulunma ihtimali sıfır olan bölge).",
    energyLevels: "2. enerji seviyesinden itibaren bulunur (2p, 3p, 4p…).",
    electronCapacity:
      "Bir enerji seviyesinde 3 farklı p orbitali (px, py, pz) vardır ve her biri 2 elektron alabilir. Toplamda 6 elektron taşır.",
    specialties: [
      "p orbitalleri x, y ve z eksenlerinde yerleşir.",
      "Şekilleri ve yönelimleri, kimyasal bağ oluşumunda büyük rol oynar (örneğin kovalent bağlarda).",
    ],
    image: "/p-orbitals.jpeg",
  },
  {
    id: "d",
    name: "D Orbitalleri",
    shape:
      "Daha karmaşık bir yapıdadır. Çoğunlukla yonca yaprağına benzer şekiller gösterir. (Bazıları halkalıdır, örn: dz²).",
    energyLevels: "3. enerji seviyesinden itibaren bulunur (3d, 4d, 5d…).",
    electronCapacity:
      "Bir enerji seviyesinde 5 farklı d orbitali bulunur ve her biri 2 elektron alabilir. Toplamda 10 elektron taşır.",
    specialties: [
      "d orbitalleri geçiş metalleri gibi elementlerin kimyasal özelliklerini ve renklerini belirler.",
      "d orbitallerindeki elektronlar genellikle metal komplekslerinde bağ yapımında rol oynar.",
    ],
    image: "/d-orbitals.jpeg",
  },
  {
    id: "f",
    name: "F Orbital",
    shape:
      "Çok daha karmaşık ve simetrik olmayan bir yapıya sahiptir. Şekillerini görselleştirmek zordur.",
    energyLevels: "4. enerji seviyesinden itibaren bulunur (4f, 5f…).",
    electronCapacity:
      "Bir enerji seviyesinde 7 farklı f orbitali bulunur ve her biri 2 elektron alabilir. Toplamda 14 elektron taşır.",
    specialties: [
      "f orbitalleri lantanidler ve aktinitler gibi elementlerde görülür.",
      "Elektronların f orbitallerine yerleşimi, bu elementlerin manyetik ve kimyasal özelliklerini etkiler.",
    ],
    image: "/f-orbitals.jpeg",
  },
];

export const elements: LewisElement[] = [
  {
    name: "Hidrojen",
    symbol: "H",
    atomicNumber: 1,
    valenceElectrons: 1,
    period: 1,
    group: 1,
    color: "text-blue-600",
  },
  {
    name: "Oksijen",
    symbol: "O",
    atomicNumber: 8,
    valenceElectrons: 6,
    period: 2,
    group: 16,
    color: "text-red-600",
  },
  {
    name: "Karbon",
    symbol: "C",
    atomicNumber: 6,
    valenceElectrons: 4,
    period: 2,
    group: 14,
    color: "text-gray-800",
  },
  {
    name: "Azot",
    symbol: "N",
    atomicNumber: 7,
    valenceElectrons: 5,
    period: 2,
    group: 15,
    color: "text-green-600",
  },
];

export const moleculeTemplates: MoleculeTemplate[] = [
  {
    name: "Su",
    formula: "H2O",
    requiredElements: ["H", "O"],
    correctStructure: [
      { symbol: "O", count: 1 },
      { symbol: "H", count: 2 },
    ],
    description:
      "Su molekülü, bir oksijen ve iki hidrojen atomundan oluşur. Polar kovalent bağ içerir.",
    lewisStructure: "/h2o.jpeg",
    moleculeGeometry: "V Şekli (Açılı)",
    geometryDetails:
      "İki hidrojen atomu, merkez oksijen atomuna bağlanır. H-O-H açısı yaklaşık 104.5 derecedir.",
  },
  {
    name: "Amonyak",
    formula: "NH3",
    requiredElements: ["N", "H"],
    correctStructure: [
      { symbol: "N", count: 1 },
      { symbol: "H", count: 3 },
    ],
    description:
      "Amonyak molekülü, bir azot ve üç hidrojen atomundan oluşur. Üçgen piramit yapıdadır.",
    lewisStructure: "/nh3.jpeg",
    moleculeGeometry: "Üçgen Piramit",
    geometryDetails:
      "Üç hidrojen atomu, merkez azot atomuna bağlanır. Azot atomunda bir lone çift elektron bulunur.",
  },
  {
    name: "Metan",
    formula: "CH4",
    requiredElements: ["C", "H"],
    correctStructure: [
      { symbol: "C", count: 1 },
      { symbol: "H", count: 4 },
    ],
    description:
      "Metan molekülü, bir karbon ve dört hidrojen atomundan oluşur. Düzgün tetrahedral geometriye sahiptir.",
    lewisStructure: "/ch4.jpeg",
    moleculeGeometry: "Tetrahedral",
    geometryDetails:
      "Dört hidrojen atomu, merkez karbon atomuna eşit uzaklıkta bağlanır. Düzgün geometri sergiler.",
  },
  {
    name: "Karbondioksit",
    formula: "CO2",
    requiredElements: ["C", "O"],
    correctStructure: [
      { symbol: "C", count: 1 },
      { symbol: "O", count: 2 },
    ],
    description:
      "Karbondioksit, bir karbon ve iki oksijen atomundan oluşan doğrusal bir moleküldür. Çift bağ içerir ve apolar bir yapıya sahiptir.",
    lewisStructure: "/co2.jpeg",
    moleculeGeometry: "Doğrusal",
    geometryDetails:
      "Karbon atomu merkezde bulunur ve iki oksijen atomu ile çift bağ yapar. Bağ açısı 180°'dir.",
  },
];
