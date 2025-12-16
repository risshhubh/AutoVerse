
export const carCategories = [
  { id: 'all', name: 'All Cars', icon: '🚗' },
  { id: 'sedan', name: 'Sedan', icon: '🚙' },
  { id: 'suv', name: 'SUV', icon: '🚐' },
  { id: 'hatchback', name: 'Hatchback', icon: '🚗' },
  { id: 'sports', name: 'Sports', icon: '🏎️' },
  { id: 'electric', name: 'Electric', icon: '⚡' },
  { id: 'luxury', name: 'Luxury', icon: '✨' }
]

export const carBrands = [
  'All Brands',
  'Tata',
  'Mahindra',
  'Maruti Suzuki',
  'Hyundai',
  'Toyota',
  'Honda',
  'BMW',
  'Mercedes-Benz',
  'Audi',
  'Skoda',
  'Volkswagen'
]

export const cars = [
  // --- TATA (5) ---
  {
    id: 101,
    name: 'Nexon',
    brand: 'Tata',
    category: 'suv',
    price: 815000,
    year: 2024,
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/2023_Tata_Nexon_XZA%2B_front_view.jpg',
    specs: { engine: '1.2L Turbo', mpg: '17 kmpl', transmission: 'AMT/DCA', drivetrain: 'FWD' },
    description: 'India\'s safest compact SUV with bold styling and advanced technology.'
  },
  {
    id: 102,
    name: 'Harrier',
    brand: 'Tata',
    category: 'suv',
    price: 1549000,
    year: 2024,
    image: '/car-renders/harrier.png',
    specs: { engine: '2.0L Diesel', mpg: '16.3 kmpl', transmission: 'Auto', drivetrain: 'FWD' },
    description: 'Stunning design based on the OMEGA architecture derived from Land Rover.'
  },
  {
    id: 103,
    name: 'Safari',
    brand: 'Tata',
    category: 'suv',
    price: 1619000,
    year: 2024,
    image: '/car-renders/safari.png',
    specs: { engine: '2.0L Diesel', mpg: '16 kmpl', transmission: 'Auto', drivetrain: 'FWD' },
    description: 'The legendary SUV reclaimed for the modern era with 7-seat luxury.'
  },
  {
    id: 104,
    name: 'Altroz',
    brand: 'Tata',
    category: 'hatchback',
    price: 665000,
    year: 2024,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Tata_Altroz_Genf_2019_1Y7A5778.jpg',
    specs: { engine: '1.5L Diesel', mpg: '25 kmpl', transmission: 'Manual', drivetrain: 'FWD' },
    description: 'Gold standard of safety with premium design and features.'
  },
  {
    id: 105,
    name: 'Punch',
    brand: 'Tata',
    category: 'suv',
    price: 613000,
    year: 2024,
    image: '/car-renders/punch.png',
    specs: { engine: '1.2L Revotron', mpg: '20 kmpl', transmission: 'AMT', drivetrain: 'FWD' },
    description: 'The no-compromise SUV that packs a punch in a compact footprint.'
  },

  // --- MAHINDRA (5) ---
  {
    id: 201,
    name: 'XUV700',
    brand: 'Mahindra',
    category: 'suv',
    price: 1403000,
    year: 2024,
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/2021_Mahindra_XUV700_2.2_AX7_%28India%29_front_view.png',
    specs: { engine: '2.2L mHawk', mpg: '15 kmpl', transmission: 'Auto', drivetrain: 'AWD' },
    description: 'Tech-loaded flagship SUV with ADAS and commanding road presence.'
  },
  {
    id: 202,
    name: 'Thar',
    brand: 'Mahindra',
    category: 'suv',
    price: 1125000,
    year: 2024,
    image: '/car-renders/thar.png',
    specs: { engine: '2.0L Stallion', mpg: '12 kmpl', transmission: 'Auto', drivetrain: '4x4' },
    description: 'The iconic off-roader, reborn for the modern lifestyle.'
  },
  {
    id: 203,
    name: 'Scorpio N',
    brand: 'Mahindra',
    category: 'suv',
    price: 1360000,
    year: 2024,
    image: '/car-renders/scorpio_n.png',
    specs: { engine: '2.2L Diesel', mpg: '14 kmpl', transmission: 'Auto', drivetrain: '4x4' },
    description: 'The Big Daddy of SUVs. Unmatched capability and presence.'
  },
  {
    id: 204,
    name: 'Scorpio Classic',
    brand: 'Mahindra',
    category: 'suv',
    price: 1359000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=2070&auto=format&fit=crop', // Classic boxy SUV look
    specs: { engine: '2.2L mHawk', mpg: '15 kmpl', transmission: 'Manual', drivetrain: 'RWD' },
    description: 'The original legend, refined. Built to last generations.'
  },
  {
    id: 205,
    name: 'XUV300',
    brand: 'Mahindra',
    category: 'suv',
    price: 799000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1593055491718-64b1f69207e9?q=80&w=2070&auto=format&fit=crop', // Compact SUV look
    specs: { engine: '1.2L Turbo', mpg: '17 kmpl', transmission: 'Auto', drivetrain: 'FWD' },
    description: 'Safety and performance in a compact, thrilling package.'
  },

  // --- MARUTI SUZUKI (5) ---
  {
    id: 301,
    name: 'Swift',
    brand: 'Maruti Suzuki',
    category: 'hatchback',
    price: 599000,
    year: 2024,
    image: '/car-renders/swift.png',
    specs: { engine: '1.2L DualJet', mpg: '23 kmpl', transmission: 'AMT', drivetrain: 'FWD' },
    description: 'Sporty design and peppy performance, a favorite of the masses.'
  },
  {
    id: 302,
    name: 'Baleno',
    brand: 'Maruti Suzuki',
    category: 'hatchback',
    price: 666000,
    year: 2024,
    image: '/car-renders/baleno.png',
    specs: { engine: '1.2L K-Series', mpg: '22 kmpl', transmission: 'AGS', drivetrain: 'FWD' },
    description: 'Sophisticated and spacious, perfect for the city family.'
  },
  {
    id: 303,
    name: 'Brezza',
    brand: 'Maruti Suzuki',
    category: 'suv',
    price: 834000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1627454820574-fb400f04db66?q=80&w=2072&auto=format&fit=crop', // Compact SUV
    specs: { engine: '1.5L Smart Hybrid', mpg: '20 kmpl', transmission: 'Auto', drivetrain: 'FWD' },
    description: 'Hot and techy compact SUV for the urban jungle.'
  },
  {
    id: 304,
    name: 'Grand Vitara',
    brand: 'Maruti Suzuki',
    category: 'suv',
    price: 1070000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2070&auto=format&fit=crop', // Premium SUV look
    specs: { engine: '1.5L Hybrid', mpg: '27.9 kmpl', transmission: 'e-CVT', drivetrain: 'AWD' },
    description: 'A new breed of SUVs with intelligent electric hybrid technology.'
  },
  {
    id: 305,
    name: 'Ciaz',
    brand: 'Maruti Suzuki',
    category: 'sedan',
    price: 940000,
    year: 2024,
    image: '/car-renders/ciaz.png',
    specs: { engine: '1.5L Smart Hybrid', mpg: '20.6 kmpl', transmission: 'Auto', drivetrain: 'FWD' },
    description: 'Elegant and spacious, offering the best rear-seat comfort in its class.'
  },

  // --- HYUNDAI (5) ---
  {
    id: 401,
    name: 'Creta',
    brand: 'Hyundai',
    category: 'suv',
    price: 1100000,
    year: 2024,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/21/2024_Hyundai_Creta_1.5_MPi_SX%28O%29_%28India%29_front_view.png',
    specs: { engine: '1.5L Diesel', mpg: '21 kmpl', transmission: 'Auto', drivetrain: 'FWD' },
    description: 'The ultimate SUV for Indian families, refined and feature-rich.'
  },
  {
    id: 402,
    name: 'Verna',
    brand: 'Hyundai',
    category: 'sedan',
    price: 1100000,
    year: 2024,
    image: '/car-renders/verna.png',
    specs: { engine: '1.5L Turbo', mpg: '20 kmpl', transmission: 'DCT', drivetrain: 'FWD' },
    description: 'Futuristic design with segment-leading features and powerful performance.'
  },
  {
    id: 403,
    name: 'i20',
    brand: 'Hyundai',
    category: 'hatchback',
    price: 704000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1605218427339-959c8ad4bf8d?q=80&w=2148&auto=format&fit=crop',
    specs: { engine: '1.2L Kappa', mpg: '20 kmpl', transmission: 'IVT', drivetrain: 'FWD' },
    description: 'The premium hatchback that sets the design benchmarks.'
  },
  {
    id: 404,
    name: 'Venue',
    brand: 'Hyundai',
    category: 'suv',
    price: 794000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=2070&auto=format&fit=crop', // Compact SUV
    specs: { engine: '1.0L Turbo', mpg: '18 kmpl', transmission: 'DCT', drivetrain: 'FWD' },
    description: 'Compact, connected, and perfect for the modern urban explorer.'
  },
  {
    id: 405,
    name: 'Ioniq 5',
    brand: 'Hyundai',
    category: 'electric',
    price: 4605000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: 'Electric', mpg: '631 km Range', transmission: 'Auto', drivetrain: 'RWD' },
    description: 'World Car of the Year, defining the retro-futuristic electric future.'
  },

  // --- TOYOTA (5) ---
  {
    id: 501,
    name: 'Fortuner',
    brand: 'Toyota',
    category: 'suv',
    price: 3343000,
    year: 2024,
    image: '/car-renders/fortuner.png',
    specs: { engine: '2.8L Diesel', mpg: '10 kmpl', transmission: 'Auto', drivetrain: '4x4' },
    description: 'Unquestionable power and durability. The king of the segment.'
  },
  {
    id: 502,
    name: 'Innova Hycross',
    brand: 'Toyota',
    category: 'suv', // MPV classified as SUV often in filtering or we can add Multi-purpose
    price: 1977000,
    year: 2024,
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Toyota_Kijang_Innova_Zenix_HEV_G_%28Indonesia%29_side_view.png',
    specs: { engine: '2.0L Hybrid', mpg: '23.2 kmpl', transmission: 'e-CVT', drivetrain: 'FWD' },
    description: 'Supreme comfort and hybrid efficiency in a versatile MPV package.'
  },
  {
    id: 503,
    name: 'Camry',
    brand: 'Toyota',
    category: 'sedan',
    price: 4617000,
    year: 2024,
    image: '/car-renders/camry.png',
    specs: { engine: '2.5L Hybrid', mpg: '19 kmpl', transmission: 'e-CVT', drivetrain: 'FWD' },
    description: 'Executive luxury with self-charging hybrid technology.'
  },
  {
    id: 504,
    name: 'Glanza',
    brand: 'Toyota',
    category: 'hatchback',
    price: 686000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1616788494672-ec7d22b8296a?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '1.2L Petrol', mpg: '22.3 kmpl', transmission: 'AMT', drivetrain: 'FWD' },
    description: 'Toyota reliability in a sporty premium hatchback package.'
  },
  {
    id: 505,
    name: 'Urban Cruiser Hyryder',
    brand: 'Toyota',
    category: 'suv',
    price: 1114000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2070&auto=format&fit=crop', // Placeholder SUV
    specs: { engine: '1.5L Hybrid', mpg: '27.9 kmpl', transmission: 'e-CVT', drivetrain: 'AWD option' },
    description: 'A robust SUV designed for the sustainable urban lifestyle.'
  },

  // --- HONDA (4) - Adding 1 more generic or variant to make 5 if needed, but 4 is solid for Honda India ---
  // Actually let's split Amaze or add City Hybrid as separate
  {
    id: 601,
    name: 'City',
    brand: 'Honda',
    category: 'sedan',
    price: 1180000,
    year: 2024,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/2023_Honda_City_RS.jpg',
    specs: { engine: '1.5L i-VTEC', mpg: '18 kmpl', transmission: 'CVT', drivetrain: 'FWD' },
    description: 'The benchmark of mid-size sedans in India, offering supreme comfort.'
  },
  {
    id: 602,
    name: 'Elevate',
    brand: 'Honda',
    category: 'suv',
    price: 1150000,
    year: 2024,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/2023_Honda_Elevate_VX_%28India%29_front_view.jpg',
    specs: { engine: '1.5L i-VTEC', mpg: '16.9 kmpl', transmission: 'CVT', drivetrain: 'FWD' },
    description: 'Boldly stylish SUV with best-in-class comfort and visibility.'
  },
  {
    id: 603,
    name: 'Amaze',
    brand: 'Honda',
    category: 'sedan',
    price: 719000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1549524584-118833983272?q=80&w=1974&auto=format&fit=crop', // Compact Sedan
    specs: { engine: '1.2L i-VTEC', mpg: '18.6 kmpl', transmission: 'CVT', drivetrain: 'FWD' },
    description: 'Big on space and comfort, the compact sedan for the family.'
  },
  {
    id: 604,
    name: 'City e:HEV',
    brand: 'Honda',
    category: 'sedan', // Hybrid Sedan
    price: 1889000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop', // Same shape usually
    specs: { engine: '1.5L Hybrid', mpg: '27.1 kmpl', transmission: 'e-CVT', drivetrain: 'FWD' },
    description: 'The ultimate City experience with revolutionary self-charging hybrid power.'
  },
  {
    id: 605,
    name: 'WR-V', // Legacy support or just filler for demo
    brand: 'Honda',
    category: 'suv',
    price: 900000,
    year: 2023,
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '1.2L i-VTEC', mpg: '16.5 kmpl', transmission: 'Manual', drivetrain: 'FWD' },
    description: 'Sporty crossover with spacious interiors and electric sunroof.'
  },

  // --- BMW (5) ---
  {
    id: 701,
    name: '3 Series',
    brand: 'BMW',
    category: 'luxury',
    price: 6200000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1556189250-72ba954e9664?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '2.0L Turbo', mpg: '16 kmpl', transmission: '8-Speed', drivetrain: 'RWD' },
    description: 'The ultimate sports sedan.'
  },
  {
    id: 702,
    name: 'X1',
    brand: 'BMW',
    category: 'luxury',
    price: 4950000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '2.0L Diesel', mpg: '20 kmpl', transmission: '7-Speed DCT', drivetrain: 'FWD' },
    description: 'The entry into the X family, agile and versatile.'
  },
  {
    id: 703,
    name: '5 Series',
    brand: 'BMW',
    category: 'luxury',
    price: 6890000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2127&auto=format&fit=crop',
    specs: { engine: '2.0L Turbo', mpg: '15 kmpl', transmission: '8-Speed', drivetrain: 'RWD' },
    description: 'Business athlete with supreme comfort and dynamics.'
  },
  {
    id: 704,
    name: 'X5',
    brand: 'BMW',
    category: 'luxury',
    price: 9600000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '3.0L Inline-6', mpg: '12 kmpl', transmission: '8-Speed', drivetrain: 'AWD' },
    description: 'The boss. Dominating road presence and luxury.'
  },
  {
    id: 705,
    name: 'M340i',
    brand: 'BMW',
    category: 'sports',
    price: 7290000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '3.0L Inline-6 Turbo', mpg: '13 kmpl', transmission: 'Steptronic', drivetrain: 'AWD' },
    description: 'Pure M Performance for the road.'
  },

  // --- MERCEDES (5) ---
  {
    id: 801,
    name: 'C-Class',
    brand: 'Mercedes-Benz',
    category: 'luxury',
    price: 6185000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '1.5L Turbo', mpg: '16 kmpl', transmission: '9G-TRONIC', drivetrain: 'RWD' },
    description: 'Comfort and technological leadership in its class.'
  },
  {
    id: 802,
    name: 'E-Class',
    brand: 'Mercedes-Benz',
    category: 'luxury',
    price: 7605000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '2.0L Diesel', mpg: '16.1 kmpl', transmission: '9G-TRONIC', drivetrain: 'RWD' },
    description: 'The heart of the brand. Masterpiece of intelligence.'
  },
  {
    id: 803,
    name: 'GLC',
    brand: 'Mercedes-Benz',
    category: 'luxury', // SUV
    price: 7420000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1606152421811-aa9116c9258f?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '2.0L Diesel', mpg: '18 kmpl', transmission: '9G-TRONIC', drivetrain: 'AWD' },
    description: 'Ready for anything. Modern luxury off-road and on.'
  },
  {
    id: 804,
    name: 'S-Class',
    brand: 'Mercedes-Benz',
    category: 'luxury',
    price: 17700000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1622396636133-743231fab300?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '3.0L Inline-6', mpg: '12 kmpl', transmission: '9G-TRONIC', drivetrain: 'AWD' },
    description: 'The best car in the world. Unmatched luxury.'
  },
  {
    id: 805,
    name: 'A-Class Limousine',
    brand: 'Mercedes-Benz',
    category: 'luxury',
    price: 4380000,
    year: 2024,
    image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=2070&auto=format&fit=crop',
    specs: { engine: '1.3L Turbo', mpg: '17 kmpl', transmission: 'DCT', drivetrain: 'FWD' },
    description: 'Entry to modern luxury with sharp design and tech.'
  },

  // --- SPORTS / SUPERCARS (New) ---
  {
    id: 901,
    name: 'Chiron',
    brand: 'Bugatti',
    category: 'sports',
    price: 284000000, // ~28 Cr INR
    year: 2024,
    image: '/car-renders/chiron.png',
    specs: { engine: '8.0L W16', mpg: '4 kmpl', transmission: '7-Speed DSG', drivetrain: 'AWD' },
    description: 'The fastest, most powerful, and exclusive production super sports car in BUGATTI history.'
  },
  {
    id: 902,
    name: 'Aventador',
    brand: 'Lamborghini',
    category: 'sports',
    price: 62500000, // ~6.25 Cr INR
    year: 2023,
    image: '/car-renders/aventador.png',
    specs: { engine: '6.5L V12', mpg: '5 kmpl', transmission: 'ISR', drivetrain: 'AWD' },
    description: 'A revolutionary icon. The V12 engine and carbon-fiber structure create a masterpiece of performance.'
  }
];

export const getCarsByCategory = (cat) => cars.filter(c => c.category === cat);