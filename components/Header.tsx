import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Header(): JSX.Element {
  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
              alt="J-reach logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="#" className="text-yellow-800 hover:text-yellow-600 font-medium">Home</Link>
            <Link href="#" className="text-yellow-800 hover:text-yellow-600 font-medium">About</Link>
            <Link href="#" className="text-yellow-800 hover:text-yellow-600 font-medium">Services</Link>
            <Link href="#" className="text-yellow-800 hover:text-yellow-600 font-medium">Contact</Link>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}