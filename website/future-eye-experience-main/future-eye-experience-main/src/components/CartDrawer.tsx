import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, CreditCard } from 'lucide-react';
import { cn } from "@/lib/utils";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const CartDrawer = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartDrawerProps) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotal(newTotal);
  }, [items]);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg bg-dark-800 border-l border-dark-700">
        <SheetHeader>
          <SheetTitle className="text-2xl font-display text-white">Your Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh] text-gray-400">
            <div className="text-6xl mb-4">🛒</div>
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[65vh] mt-8">
              <div className="space-y-6 pr-4">
                {items.map((item) => (
                  <div key={item.id} className="glass-card p-4 rounded-lg">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-md overflow-hidden bg-dark-700">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{item.name}</h4>
                        <p className="text-sm text-gray-400">${item.price}</p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            >
                              <Minus size={14} />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus size={14} />
                            </Button>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="text-red-500 hover:text-red-600"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Trash2 size={18} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-dark-800 border-t border-dark-700">
              <div className="flex justify-between mb-4">
                <span className="text-gray-400">Total</span>
                <span className="font-bold text-white">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full btn-primary">
                <CreditCard size={18} />
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
