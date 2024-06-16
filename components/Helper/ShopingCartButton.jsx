"use client"
import React from 'react';
import { ShoppingBagIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
// import { RootState } from "@/store/store"; // Doğru tipi RootState olarak aldım
import { Sheet, SheetTrigger, SheetContent } from '../ui/sheet'; // Eksik importlar eklendi
import CartSidebar from './CartSidebar';

const ShopingCartButton = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger>
        <div className='relative'>
          <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full'>
            {totalQuantity}
          </span>
          <ShoppingBagIcon cursor="pointer" size={26} />
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-auto h-full">
        <CartSidebar items={items}/>
      </SheetContent>
    </Sheet>
  );
};

export default ShopingCartButton;
