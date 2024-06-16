import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchBox from '../Helper/SearchBox';
import { HeartIcon} from 'lucide-react';
import ShopingCartButton from '../Helper/ShopingCartButton';
import { UserIcon } from 'lucide-react';
import { SignedIn, UserButton, SignedOut, SignInButton} from '@clerk/nextjs';

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
      <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
      <Link href="/">
      <Image src="/images/logo.png" alt='logo' width={140} height={140} />
      </Link>
      <div className='flex items-center space-x-6'>

        {/*SearchBox for */}
        <SearchBox />
        <HeartIcon size={26} cursor={"pointer"} />
        {/*Button for shoppingcart */}
        <ShopingCartButton />
        {/*user button*/}

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <UserIcon size={26} cursor={"pointer"}/>
          </SignInButton>
        </SignedOut>

      </div>
      </div>      
    </div>
  );
};

export default Nav;