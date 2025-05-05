import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { products } from '../data/products';
import ProductGrid from '../components/products/ProductGrid';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
];

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  // Get unique categories
  const categories = Array.from(new Set(products.map((product) => product.category)));
  
  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category);
    
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return b.featured ? 1 : -1;
    }
  });
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => 
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  
  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Additional search logic if needed
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setSortBy('featured');
    setPriceRange([0, 2000]);
    setSelectedCategories([]);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="text-muted-foreground">
          Showing {sortedProducts.length} products
        </p>
      </div>
      
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="h-5 w-5 text-muted-foreground" />}
              className="h-12"
            />
          </div>
          <div className="w-64">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="h-12 md:hidden"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </Button>
        </form>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside 
          className={`w-full md:w-64 flex-shrink-0 ${
            filtersOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button
                onClick={resetFilters}
                className="text-sm text-primary hover:underline"
              >
                Reset All
              </button>
            </div>
            
            {/* Categories Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label 
                    key={category} 
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    ${priceRange[0]}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ${priceRange[1]}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={2000}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                  className="w-full"
                />
                <input
                  type="range"
                  min={0}
                  max={2000}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </aside>
        
        {/* Product Grid */}
        <div className="flex-1">
          {sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter options
              </p>
              <Button onClick={resetFilters}>Reset Filters</Button>
            </div>
          ) : (
            <ProductGrid products={sortedProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;