import Link from 'next/link'
import Image from 'next/image'

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-beige-100 text-yellow-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-7KJvz3pm1KJm5BrKAYiUCnweHd5PTP.png"
              alt="J-reach logo"
              width={40}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-yellow-700 hover:text-yellow-600">Home</Link></li>
              <li><Link href="/about" className="text-yellow-700 hover:text-yellow-600">About</Link></li>
              <li><Link href="/services" className="text-yellow-700 hover:text-yellow-600">Services</Link></li>
              <li><Link href="/contact" className="text-yellow-700 hover:text-yellow-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-yellow-700">Email: junte@j-reach.com</p>
            <p className="text-sm text-yellow-700">Phone: +1 (833) 470-0525</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-yellow-700 hover:text-yellow-600">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-yellow-700 hover:text-yellow-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-yellow-300 text-center">
          <p className="text-sm text-yellow-700">
            &copy; {new Date().getFullYear()} J-Reach. All rights reserved. | <Link href="/privacy-policy" className="hover:text-yellow-600 ml-2">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-yellow-600 ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}