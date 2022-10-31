const startYear = new Date().getFullYear();
const endYear = 1997;
const years = [];
function generateYears() {
  for (let i = startYear; i >= endYear; i -= 1) {
    years.push(i);
  }
  return years;
}

const userInputs = [
  {
    id: 1,
    name: 'first_name',
    label: 'First Name',
    type: 'text',
    placeholder: 'Jane',
  },
  {
    id: 2,
    name: 'last_name',
    label: 'Last Name',
    type: 'text',
    placeholder: 'Doe',
  },
  {
    id: 3,
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'janedoe@gmail.com',
  },

  {
    id: 4,
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: '+254 797 165 741',
  },
  {
    id: 5,
    name: 'location',
    label: 'Location',
    type: 'text',
    placeholder: 'Nairobi',
  },
  {
    id: 7,
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'password',
  },
  {
    id: 6,
    name: 'role',
    label: 'Role',
    type: 'select',
    isMultiple: false,
    options: ['Admin', 'Mechanic', 'Dealer'],
  },
  {
    id: 8,
    name: 'bio',
    label: 'Bio',
    type: 'textarea',
    placeholder: 'Short bio goes here...',
  },
];

const carInputs = [
  {
    id: 1,
    name: 'vin',
    label: 'VIN',
    type: 'text',
    placeholder: 'BLP28VPPP90G12691',
  },
  {
    id: 2,
    name: 'price',
    label: 'Price',
    type: 'number',
    placeholder: '27000',
  },
  {
    id: 3,
    name: 'kilometrage',
    label: 'Kilometrage',
    type: 'number',
    placeholder: '78865',
  },
  {
    id: 4,
    name: 'model',
    label: 'Model',
    type: 'select',
    isMultiple: false,
    placeholder: 'Select...',
    options: [
      'Station Wagon',
      'Sedan',
      'Hatchback',
      'Van',
      'Convertible',
      'Coupe',
      'Sports Car',
      'SUV',
      'MUV',
      'Jeep',
      'MiniVan',
      'Pickup Truck',
    ],
  },
  {
    id: 5,
    name: 'color',
    label: 'Color',
    type: 'select',
    options: [
      'Black',
      'Blue',
      'Gray',
      'Silver',
      'White',
      'Beige',
      'Brown',
      'Burgandy',
      'Gold',
      'Green',
      'Ivory',
      'Matt Black',
      'Off white ',
      'Orange',
      'Pearl',
      'Pink',
      'Purple',
      'Red',
      'Teal',
      'Yellow',
      'Other',
    ],
    isMultiple: false,
    placeholder: 'Blue',
  },
  {
    id: 6,
    name: 'make',
    label: 'Make',
    type: 'select',
    options: [
      'Toyota',
      'Nissan',
      'Subaru',
      'Mazda',
      'Honda',
      'Alfa Romeo',
      'Audi',
      'BMW',
      'Cadillac',
      'Chevrolet',
      'Citroen',
      'Daihatsu',
      'Ford',
      'Hyundai',
      'Infiniti',
      'Isuzu',
      'Jaguar',
      'Jeep',
      'JMC',
      'Kia',
      'Land Rover',
      'Lexus',
      'Mercedes-Benz',
      'Mini',
      'Mitsubishi',
      'Peugeot',
      'Porsche',
      'Smart',
      'Suzuki',
      'Volkswagen',
      'Volvo',
      'Bentley',
      'Brilliance',
      'Chery',
      'Chrysler',
      'Datsun',
      'Dodge',
      'Fiat',
      'Foton',
      'Great Wall',
      'Hummer',
      'Mahindra',
      'Mobius',
      'Morris',
      'Proton',
      'Renault',
      'Rover',
      'Skoda',
      'SsangYong',
      'Tata',
      'Vauxhall',
      'Other Make',
    ],
    isMultiple: false,
  },
  {
    id: 7,
    name: 'transmission',
    label: 'Transmission',
    type: 'select',
    placeholder: 'Select...',
    options: ['AMT', 'Automatic', 'CVT', 'Manual'],
    isMultiple: false,
  },
  {
    id: 8,
    name: 'engine',
    label: 'Engine Size',
    type: 'select',
    placeholder: 'Select...',
    options: [
      3000, 2500, 2000, 1800, 1500, 700, 660, 600, 5700, 5500, 5000, 4800, 4700,
      4600, 4500, 4400, 4200, 4000, 3800, 3600, 3500, 3400, 3300, 3200, 2800,
      2700, 2400, 2200, 2100, 1600, 1400, 1300, 1200, 1000, 800, 6400, 3900,
      3700, 2900, 2600, 2300, 1900, 1700,
    ],
    isMultiple: true,
  },
  {
    id: 9,
    name: 'fuel_type',
    label: 'Fuel Type',
    type: 'select',
    placeholder: 'Select...',
    options: ['Petrol', 'Hybrid', 'Electric', 'Diesel', 'CNG'],
    isMultiple: false,
  },
  {
    id: 10,
    name: 'condition',
    label: 'Condition',
    type: 'select',
    placeholder: 'Select...',
    options: [
      'Brand New',
      'Foreign Used',
      'Kenyan Used',
      'After crash',
      'First owner',
      'First registration',
      'Other',
    ],
    isMultiple: false,
  },
  {
    id: 11,
    name: 'faults',
    label: 'Faults',
    type: 'select',
    placeholder: 'Select...',
    options: [
      'Gear issue',
      'Need body repair',
      'Worn Brake Pads',
      'Excessive Oil Consumption',
      'Uneven Tire Wear',
      'Radiator Leaks',
      'Cracked Windshield',
      'Emission System',
      'Evaporative Leaks',
      'Malfunctioning Sensors',
      'Transmission',
      'Transmission Fluid Leaks',
      'Clogged Filter',
      'Water Damage',
      'Engine issue',
      'Electrical Problems: Speakers',
      'Lights',
      'Dead Battery',
      'Cosmetic Issues and Other Minor Annoyances',
      'Paint Problems',
      'Faulty Windows',
      'Faulty Starter',
      'Falling Gas Mileage',
      'Other',
    ],
    isMultiple: true,
  },

  {
    id: 12,
    name: 'year',
    label: 'Year',
    type: 'select',
    placeholder: 'Select...',
    options: generateYears(),
    isMultiple: true,
  },
  {
    id: 13,
    name: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Short description goes here...',
  },
];

export default [userInputs, carInputs];
