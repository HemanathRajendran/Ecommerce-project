export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  variants?: ProductVariant[];
  featured: boolean;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviews: number;
  specifications?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  options: string[];
  price?: number;
  stockQuantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  parentId?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  addresses?: Address[];
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  createdAt: string;
  updatedAt: string;
}