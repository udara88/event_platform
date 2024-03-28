import { SignedOut,SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
      <nav className='wrapper flex items-center justify-between'>
        <Link
          href="/" className='w-36'>
            <Image
             src="/assets/images/logo.svg"
             width={128}
             height={38}
             alt='evently logo'/>
          </Link>

          <SignedIn>
            <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavItems/>
            </nav>
          </SignedIn>
          <div className='flex w-32 justify-end gap-3'>
            <SignedIn>
              <UserButton afterSignOutUrl='/'/>
              <MobileNav/>
            </SignedIn>
            <SignedOut>
              <Button variant="default" asChild className='rounded-full bg-indigo-500' size="lg">
                <Link
                 href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
      </nav>
    </header>
  )
}

export default Header