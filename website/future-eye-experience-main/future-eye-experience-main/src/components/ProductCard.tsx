
import { useState } from 'react';
import { ShoppingCart, Heart, Info, Check, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProductProps = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    badge?: string;
    features: string[];
    colors: string[];
    inStock: boolean;
  };
  isInCart: boolean;
  onAddToCart: () => void;
};

const ProductCard = ({ product, isInCart, onAddToCart }: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge if available */}
      {product.badge && (
        <div className="absolute top-4 left-0 z-10">
          <div className="bg-neon-blue text-white text-xs px-3 py-1 rounded-r-md font-medium">
            {product.badge}
          </div>
        </div>
      )}
      
      {/* Product image with hover effect */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900">
        <img 
          src={`${product.image}?w=400&fit=crop`}
          alt={product.name}
          className={cn(
            "w-full h-full object-cover transition-all duration-700 filter",
            isHovered ? "scale-110 brightness-110" : "scale-100 brightness-90"
          )}
        />
        
        {/* Floating info button */}
        <Button
          variant="ghost" 
          size="icon"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 rounded-full bg-black/30 hover:bg-black/50 text-white w-8 h-8 p-0 flex items-center justify-center transition-all duration-300"
        >
          <Info size={16} />
        </Button>
        
        {/* Color options */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 transition-all duration-300">
          {product.colors.map(color => (
            <button
              key={color}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(color);
              }}
              className={cn(
                "w-6 h-6 rounded-full border-2 transition-all",
                selectedColor === color ? "border-white scale-110" : "border-transparent opacity-70 hover:opacity-100"
              )}
              style={{ backgroundColor: color }}
              aria-label={`Select color ${color}`}
            />
          ))}
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className={cn(
              "rounded-full p-0 w-8 h-8 flex items-center justify-center transition-colors",
              isFavorite ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-gray-300"
            )}
          >
            <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
          </Button>
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-2 mb-4">{product.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded-md whitespace-nowrap"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 3 && (
              <span className="text-xs bg-dark-700 text-gray-300 px-2 py-1 rounded-md whitespace-nowrap">
                +{product.features.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">${product.price}</div>
          <Button 
            className={cn(
              "flex items-center gap-2 transition-all",
              isInCart ? "btn-secondary" : "btn-primary"
            )}
            onClick={(e) => {
              e.stopPropagation();
              if (!isInCart && product.inStock) {
                onAddToCart();
              }
            }}
            disabled={!product.inStock}
          >
            {isInCart ? (
              <>
                <Check size={16} />
                In Cart
              </>
            ) : product.inStock ? (
              <>
                <ShoppingCart size={16} />
                Add
              </>
            ) : (
              "Out of Stock"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
