'use client'

import React from 'react'
import Image from 'next/image';
import { Button } from '../ui/button';
import { SheetClose } from '../ui/sheet';
import { useDispatch } from 'react-redux';
import { CartItem, addItem, removeItem } from '@/store/cartSlice';
import Link from 'next/link';


type Props = {
  items: CartItem[];
};


const CartSidebar = ({items}: Props) => {
  const dispatch = useDispatch();
  const addCartHandler = (item: CartItem) => dispatch(addItem(item));
  const removeCartHandler = (id:number)=> dispatch(removeItem({id}));
  return (
    <div className='mt-6 h-full mb-6  overflow-y-auto'>
      <h1 className='text-center font-bold text-lg mb-6'>Your Chart</h1>
      {items.length==0 && (
        <div className="flex items-center w-full h-[80vh] flex-col justify-center">
          <Image src="/images/cart.svg" alt='empty_cart' width={200} height={200} className='object-cover mx-auto' />
          <h1 className='mt-8 text-2xl font-semibold'>Your Cart is empty</h1>        
        </div>
      )}
      {items.length > 0 && (
        <div>
          {items?.map((item) =>{
            return (
              <div key={item.id} className='pb-4 border-b-2 border-gray-300 border-opacity-60 p-4'>
              <div>
              <Image
              src={item?.image}
              alt={item.title}
              width={60}
              height={60}
              className='object' />
              </div>
              <div>
                <h1 className='text-sm w-4/5 font-semibold truncate'>{item?.title}</h1>
                <h1 className='text-base text-blue-950 font-bold'>${(item?.price * item?.quantity).toFixed(2)}</h1>
                <h1 className='text-base font-bold mb-2'>
                  Quantity: {item?.quantity}
                </h1>
                <div className='flex items-center space-x-4'>
                  <Button onClick={()=>{removeCartHandler(item.id)}} size={"sm"} variant={"destructive"}>Remove</Button>
                  <Button onClick={()=>{addCartHandler(item)}} size={"sm"}>Add</Button>
                </div>
          
              </div>
              </div>
            );
          })}
          <Link href="/cart">
          <SheetClose>
          <Button className='w-full mb-6 mt-5 '>View All Cart
          </Button>
          </SheetClose>
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartSidebar