import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-beige-50">
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
              <Link href="/" className="text-yellow-800 hover:text-yellow-600 font-medium">Home</Link>
              <Link href="/about" className="text-yellow-800 hover:text-yellow-600 font-medium">About</Link>
              <Link href="/services" className="text-yellow-800 hover:text-yellow-600 font-medium">Services</Link>
              <Link href="/contact" className="text-yellow-800 hover:text-yellow-600 font-medium">Contact</Link>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24">
        <section className="bg-yellow-100 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-yellow-700 mb-8">
                Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name and contact information</li>
              <li>Company name and job title</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communications you send to us</li>
            </ul>

            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">3. Sharing of Information</h2>
            <p className="mb-6">We may share your information as follows:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
              <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
              <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of J-Reach or others</li>
            </ul>

            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">4. Data Security</h2>
            <p className="mb-6">We take  reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>

            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">5. Your Choices</h2>
            <p className="mb-6">You may update, correct, or delete your account information at any time by logging into your online account or by contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those messages.</p>

            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">6. Changes to this Policy</h2>
            <p className="mb-6">We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.</p>

            <h2 className="text-2xl font-semibold text-yellow-800 mb-6">7. Contact Us</h2>
            <p className="mb-6">If you have any questions about this privacy policy, please contact us at:</p>
            <p className="mb-2">Email: privacy@j-reach.com</p>
            <p>Phone: +1 (833) 470-0525</p>
          </div>
        </section>

        <section className="py-20 bg-yellow-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-yellow-800 mb-6">Have Questions About Our Privacy Policy?</h2>
            <p className="text-xl text-yellow-700 mb-8 max-w-2xl mx-auto">
              We're here to help. Contact our team for any privacy-related inquiries.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>

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
    </div>
  )
}