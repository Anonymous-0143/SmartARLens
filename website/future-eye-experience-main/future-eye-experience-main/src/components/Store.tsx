import { useState } from 'react';
import { ShoppingCart, Heart, Eye, Plus, Info, Check } from 'lucide-react';
import ProductCard from './ProductCard';
import CartDrawer from './CartDrawer';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Product data
const products = [
  {
    id: 1,
    name: 'VisionAR Lens X1',
    description: 'Our flagship AR contact lens with all essential features.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    category: 'standard',
    badge: 'Best Seller',
    features: [
      'Basic AR overlay',
      'Health monitoring',
      'Phone notifications',
      '12-hour battery life',
      'Cloud AI processing'
    ],
    colors: ['#1EAEDB', '#2C3E50', '#2ECC71'],
    inStock: true
  },
  {
    id: 2,
    name: 'VisionAR Lens Pro',
    description: 'Enhanced AR experience with premium features for professionals.',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    category: 'professional',
    badge: 'New',
    features: [
      'Advanced AR overlay',
      'Full health suite',
      'Video streaming',
      '24-hour battery life',
      'Edge AI processing',
      'Pro visualization tools',
      'Enterprise security'
    ],
    colors: ['#1EAEDB', '#2C3E50', '#9B59B6'],
    inStock: true
  },
  {
    id: 3,
    name: 'VisionAR Medical Edition',
    description: 'Specialized AR lens designed for healthcare professionals.',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    category: 'medical',
    badge: 'Specialized',
    features: [
      'Medical diagnostics',
      'Vital monitoring',
      'Surgical assistance',
      'Medical records access',
      'HIPAA compliance',
      'Medical imaging overlay',
      'Patient data integration'
    ],
    colors: ['#1EAEDB', '#E74C3C', '#2C3E50'],
    inStock: false
  },
  {
    id: 4,
    name: 'VisionAR Developer Kit',
    description: 'Full featured AR lens with SDK access for developers and creators.',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    category: 'developer',
    badge: 'Developer',
    features: [
      'Full SDK access',
      'API documentation',
      'Developer community',
      'Testing tools',
      'Cloud development environment',
      'Simulated AR testing',
      'Direct API access'
    ],
    colors: ['#1EAEDB', '#F39C12', '#2C3E50'],
    inStock: true
  }
];

const Store = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState<Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'standard', name: 'Standard' },
    { id: 'professional', name: 'Professional' },
    { id: 'medical', name: 'Medical' },
    { id: 'developer', name: 'Developer' }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      }];
    });
  };

  const updateCartItemQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const isInCart = (productId: number) => cartItems.some(item => item.id === productId);

  return (
    <section id="store" className="section-padding bg-dark-800">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="text-neon-blue text-sm uppercase tracking-wider font-medium">Shop</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">AR Lens Store</h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-neon-blue rounded"></div>
        </div>
        
        {/* Categories filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant="ghost"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full border border-transparent px-4 py-2 transition-all",
                activeCategory === category.id 
                  ? "bg-neon-blue/10 border-neon-blue text-neon-blue" 
                  : "hover:bg-dark-700 text-gray-300"
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              isInCart={isInCart(product.id)}
              onAddToCart={() => addToCart(product.id)}
            />
          ))}
        </div>
        
        {/* Cart button with quantity */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-8 right-8 z-40">
            <div className="glass-card p-4 rounded-2xl shadow-neon animate-fade-in">
              <div className="flex items-center gap-4">
                <Button 
                  className="bg-neon-blue rounded-xl p-3"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart size={24} />
                </Button>
                <div>
                  <p className="font-medium">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart</p>
                  <p className="text-sm text-gray-300">Ready for checkout</p>
                </div>
                <Button 
                  className="btn-primary whitespace-nowrap"
                  onClick={() => setIsCartOpen(true)}
                >
                  View Cart
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Cart drawer */}
        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateCartItemQuantity}
          onRemoveItem={removeFromCart}
        />
        
        {/* Product comparison */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold mb-8 text-center">Compare Models</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-dark-700">
                  <th className="py-4 px-6 text-left">Feature</th>
                  {products.slice(0, 3).map(product => (
                    <th key={product.id} className="py-4 px-6 text-center">{product.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-700">
                <tr>
                  <td className="py-4 px-6 font-medium">Price</td>
                  {products.slice(0, 3).map(product => (
                    <td key={product.id} className="py-4 px-6 text-center">
                      ${product.price}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">AR Overlay</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                  <td className="py-4 px-6 text-center">Medical Grade</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Battery Life</td>
                  <td className="py-4 px-6 text-center">12 Hours</td>
                  <td className="py-4 px-6 text-center">24 Hours</td>
                  <td className="py-4 px-6 text-center">20 Hours</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">AI Processing</td>
                  <td className="py-4 px-6 text-center">Cloud</td>
                  <td className="py-4 px-6 text-center">Edge + Cloud</td>
                  <td className="py-4 px-6 text-center">Edge + Cloud</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Special Features</td>
                  <td className="py-4 px-6 text-center">Basic Health Monitoring</td>
                  <td className="py-4 px-6 text-center">Pro Visualization Tools</td>
                  <td className="py-4 px-6 text-center">Medical Diagnostics</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Actions</td>
                  {products.slice(0, 3).map(product => (
                    <td key={product.id} className="py-4 px-6 text-center">
                      <Button 
                        className={cn(
                          "w-full", 
                          isInCart(product.id) ? "btn-secondary" : "btn-primary"
                        )}
                        onClick={() => !isInCart(product.id) && addToCart(product.id)}
                        disabled={!product.inStock}
                      >
                        {isInCart(product.id) ? (
                          <>
                            <Check size={16} className="mr-2" />
                            In Cart
                          </>
                        ) : product.inStock ? (
                          <>
                            <Plus size={16} className="mr-2" />
                            Add to Cart
                          </>
                        ) : (
                          "Out of Stock"
                        )}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
