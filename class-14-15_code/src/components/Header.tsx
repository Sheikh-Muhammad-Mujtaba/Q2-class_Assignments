'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Home, Compass, PlusSquare, MessageCircle, User, Search, Menu } from 'lucide-react'

export default function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Compass, label: 'Discover', href: '/' },
    { icon: PlusSquare, label: 'Upload', href: '/upload' },
    { icon: MessageCircle, label: 'Messages', href: '/' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    <header className="sticky top-0 z-50 flex justify-center w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">ByteReel</span>
          </Link>
         
        </div>
        {/* search bar */}
        <div className={`flex-1 items-center md:justify-end ${isSearchVisible ? 'flex absolute top-[70px] left-[30%] md:static' : 'hidden md:flex'}`}>
          <Input
            type="search"
            placeholder="Search..."
            className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[400px]"
          />
        </div>
        {/* small screen menu */}
        <div className="flex items-center justify-between w-full md:w-fit">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center">
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className='flex gap-2'>
          <Button size="sm" className="ml-4">
            Upload
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className=" px-4 md:px-0 md:hidden"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Toggle search</span>
          </Button>
          </div>
         
        </div>
      </div>
    </header>
  )
}

