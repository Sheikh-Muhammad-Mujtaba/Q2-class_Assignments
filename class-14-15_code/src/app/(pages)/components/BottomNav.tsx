'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, PlusSquare, MessageCircle, User } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Compass, label: 'Discover', href: '/' , className: 'hidden md:flex'},
  { icon: PlusSquare, label: 'Upload', href: '/upload' },
  { icon: MessageCircle, label: 'Messages', href: '/', className: 'hidden md:flex' },
  { icon: User, label: 'Profile', href: '/profile' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors hover:text-foreground/80 ${
              pathname === item.href ? 'text-foreground' : 'text-foreground/60'
            } ${item.className}`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

