
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


export default function Header() {


  return (
    <header className="sticky top-0 z-50 flex justify-center w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">ByteReel</span>
          </Link>

        </div>

        {/* small profile */}
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}

