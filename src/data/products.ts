import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions for all-day listening.',
    price: 249.99,
    compareAtPrice: 299.99,
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'electronics',
    tags: ['headphones', 'wireless', 'audio'],
    featured: true,
    inStock: true,
    stockQuantity: 45,
    rating: 4.8,
    reviews: 236,
    specifications: {
      'Battery Life': '30 hours',
      'Bluetooth Version': '5.2',
      'Weight': '250g',
      'Noise Cancellation': 'Active',
      'Warranty': '2 years'
    },
    createdAt: '2023-09-15T10:30:00Z',
    updatedAt: '2023-11-20T14:45:00Z'
  },
  {
    id: '2',
    name: 'Smart 4K Ultra HD TV',
    description: 'Transform your home entertainment with this stunning 55" 4K Smart TV. Featuring vibrant colors, HDR support, and built-in streaming apps for the ultimate viewing experience.',
    price: 699.99,
    compareAtPrice: 899.99,
    images: [
      'https://images.pexels.com/photos/5721903/pexels-photo-5721903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5490756/pexels-photo-5490756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'electronics',
    tags: ['tv', '4k', 'smart-tv'],
    featured: true,
    inStock: true,
    stockQuantity: 28,
    rating: 4.6,
    reviews: 189,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '3840 x 2160 (4K)',
      'HDR': 'Yes',
      'Smart TV': 'Yes',
      'Connections': 'HDMI x3, USB x2, Ethernet, Wi-Fi',
      'Warranty': '2 years'
    },
    createdAt: '2023-10-05T09:15:00Z',
    updatedAt: '2023-12-01T11:30:00Z'
  },
  {
    id: '3',
    name: 'Professional DSLR Camera',
    description: 'Capture stunning photos and videos with this professional DSLR camera. Featuring a 24.2MP sensor, 4K video recording, and advanced autofocus for perfect shots every time.',
    price: 1299.99,
    compareAtPrice: 1499.99,
    images: [
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1787236/pexels-photo-1787236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'electronics',
    tags: ['camera', 'dslr', 'photography'],
    featured: false,
    inStock: true,
    stockQuantity: 15,
    rating: 4.9,
    reviews: 124,
    specifications: {
      'Sensor': '24.2MP APS-C CMOS',
      'Video': '4K UHD at 30fps',
      'Autofocus': '45-point all cross-type AF',
      'Connectivity': 'Wi-Fi, Bluetooth, NFC',
      'Battery Life': 'Approx. 1,200 shots',
      'Warranty': '2 years'
    },
    createdAt: '2023-08-20T15:45:00Z',
    updatedAt: '2023-11-15T10:20:00Z'
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Work in comfort with this premium ergonomic office chair. Featuring adjustable lumbar support, breathable mesh back, and customizable settings for the perfect sitting position.',
    price: 299.99,
    compareAtPrice: 399.99,
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6899546/pexels-photo-6899546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'furniture',
    tags: ['chair', 'office', 'ergonomic'],
    featured: false,
    inStock: true,
    stockQuantity: 32,
    rating: 4.7,
    reviews: 208,
    specifications: {
      'Material': 'Mesh back, fabric seat',
      'Weight Capacity': '300 lbs',
      'Adjustable Height': 'Yes',
      'Lumbar Support': 'Yes',
      'Armrests': 'Adjustable 3D',
      'Warranty': '5 years'
    },
    createdAt: '2023-09-10T12:30:00Z',
    updatedAt: '2023-12-05T09:45:00Z'
  },
  {
    id: '5',
    name: 'Smartphone 128GB',
    description: 'Stay connected with our latest smartphone. Featuring a stunning 6.5" OLED display, 128GB storage, triple camera system, and all-day battery life in a sleek, premium design.',
    price: 799.99,
    compareAtPrice: 899.99,
    images: [
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'electronics',
    tags: ['smartphone', 'mobile', 'android'],
    featured: true,
    inStock: true,
    stockQuantity: 65,
    rating: 4.8,
    reviews: 342,
    specifications: {
      'Display': '6.5" OLED, 120Hz',
      'Processor': 'Octa-core 2.8GHz',
      'Storage': '128GB',
      'RAM': '8GB',
      'Camera': 'Triple 48MP + 12MP + 8MP',
      'Battery': '4500mAh',
      'OS': 'Android 13',
      'Warranty': '1 year'
    },
    createdAt: '2023-10-10T14:20:00Z',
    updatedAt: '2023-12-10T16:15:00Z'
  },
  {
    id: '6',
    name: 'Stylish Leather Jacket',
    description: 'Make a statement with this premium leather jacket. Crafted from genuine leather with a satin lining, multiple pockets, and a classic design that never goes out of style.',
    price: 199.99,
    compareAtPrice: 249.99,
    images: [
      'https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6770031/pexels-photo-6770031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'fashion',
    tags: ['jacket', 'leather', 'clothing'],
    variants: [
      {
        id: '6-s',
        name: 'Size',
        options: ['S', 'M', 'L', 'XL'],
        stockQuantity: 25
      }
    ],
    featured: false,
    inStock: true,
    stockQuantity: 25,
    rating: 4.7,
    reviews: 168,
    specifications: {
      'Material': 'Genuine leather',
      'Lining': 'Satin',
      'Pockets': '4 (2 outer, 2 inner)',
      'Closure': 'YKK zipper',
      'Care': 'Professional leather cleaning'
    },
    createdAt: '2023-09-25T11:10:00Z',
    updatedAt: '2023-11-28T13:40:00Z'
  },
  {
    id: '7',
    name: 'Ultra-thin Laptop',
    description: 'Experience incredible performance in a sleek package with our ultra-thin laptop. Featuring a stunning display, powerful processor, and all-day battery life in a premium aluminum chassis.',
    price: 1299.99,
    compareAtPrice: 1499.99,
    images: [
      'https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'electronics',
    tags: ['laptop', 'computer', 'ultrabook'],
    featured: true,
    inStock: true,
    stockQuantity: 22,
    rating: 4.9,
    reviews: 215,
    specifications: {
      'Processor': 'Intel Core i7, 12th Gen',
      'RAM': '16GB DDR4',
      'Storage': '512GB SSD',
      'Display': '14" 2.8K OLED, 90Hz',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 15 hours',
      'Weight': '1.3kg',
      'Warranty': '2 years'
    },
    createdAt: '2023-08-15T16:30:00Z',
    updatedAt: '2023-12-02T10:15:00Z'
  },
  {
    id: '8',
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness with this advanced smartwatch. Featuring heart rate monitoring, GPS, sleep tracking, and workout analysis in a stylish, water-resistant design.',
    price: 179.99,
    compareAtPrice: 229.99,
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'electronics',
    tags: ['smartwatch', 'fitness', 'wearable'],
    variants: [
      {
        id: '8-c',
        name: 'Color',
        options: ['Black', 'Silver', 'Rose Gold'],
        stockQuantity: 40
      }
    ],
    featured: false,
    inStock: true,
    stockQuantity: 40,
    rating: 4.6,
    reviews: 275,
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': 'Up to 7 days',
      'Water Resistance': '5 ATM',
      'Sensors': 'Heart rate, GPS, accelerometer, gyroscope',
      'Compatibility': 'iOS 12+, Android 8+',
      'Warranty': '1 year'
    },
    createdAt: '2023-09-05T13:25:00Z',
    updatedAt: '2023-11-25T15:50:00Z'
  }
];